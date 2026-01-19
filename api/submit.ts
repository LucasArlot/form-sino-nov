import type { VercelRequest, VercelResponse } from '@vercel/node';

const N8N_WEBHOOK_URL =
  'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Forward request to N8N
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const responseText = await response.text();

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (!response.ok) {
      console.error('N8N webhook failed:', response.status, responseText);
      return res.status(response.status).json({
        error: 'Webhook failed',
        status: response.status,
        details: responseText,
      });
    }

    // Try to parse as JSON, otherwise return as text
    try {
      const jsonResponse = JSON.parse(responseText);
      return res.status(200).json(jsonResponse);
    } catch {
      return res.status(200).json({ success: true, message: responseText || 'OK' });
    }
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
