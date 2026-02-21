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

  const { name, email, company, role } = body;
  if (!name || !email || !company) {
    return { statusCode: 400, body: 'Missing required fields' };
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL is not set');
    return { statusCode: 500, body: 'Server configuration error' };
  }

  const slackPayload = JSON.stringify({
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '🧬 New Drug Discovery Lead', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name:*\n${name}` },
          { type: 'mrkdwn', text: `*Email:*\n${email}` },
          { type: 'mrkdwn', text: `*Company:*\n${company}` },
          { type: 'mrkdwn', text: `*Role:*\n${role || '—'}` },
        ],
      },
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: 'Source: /drug-discovery capabilities brief' },
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
