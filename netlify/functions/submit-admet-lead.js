import https from 'https';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { email } = body;
  if (!email) {
    return { statusCode: 400, body: 'Missing email' };
  }

  const webhookUrl = process.env.SLACK_ADMET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_ADMET_WEBHOOK_URL is not set');
    return { statusCode: 500, body: 'Server configuration error' };
  }

  const slackPayload = JSON.stringify({
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: 'New ADMET White Paper Download', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Email:*\n${email}` },
        ],
      },
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: 'Source: /deep-learning-molecule-generation' },
        ],
      },
    ],
  });

  await new Promise((resolve, reject) => {
    const url = new URL(webhookUrl);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(slackPayload),
      },
    };

    const req = https.request(options, (res) => {
      res.resume();
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(new Error(`Slack responded with ${res.statusCode}`));
      }
    });

    req.on('error', reject);
    req.write(slackPayload);
    req.end();
  });

  return { statusCode: 200, body: 'ok' };
};
