import type { VercelRequest, VercelResponse } from '@vercel/node';

const WEBHOOK_URL_PROD =
  'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';
const WEBHOOK_URL_TEST =
  'https://n8n.srv783609.hstgr.cloud/webhook-test/5e52c71e-b113-4b3c-8c7d-91c78496ea91';

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
    // Forward request to N8N (Both Prod and Test)
    // Send ONLY the body content, stripping headers/metadata which N8N adds anyway
    const payload = JSON.stringify(req.body);
    const headers = { 'Content-Type': 'application/json' };

    const sendToWebhook = async (url: string, label: string) => {
      try {
        const response = await fetch(url, { method: 'POST', headers, body: payload });
        const text = await response.text();
        if (!response.ok) {
          console.error(`Webhook ${label} failed:`, response.status, text);
          return { success: false, label, status: response.status, error: text };
        }
        return { success: true, label, status: response.status, response: text };
      } catch (err) {
        console.error(`Webhook ${label} error:`, err);
        return { success: false, label, error: err instanceof Error ? err.message : String(err) };
      }
    };

    // Run both requests in parallel
    const results = await Promise.all([
      sendToWebhook(WEBHOOK_URL_PROD, 'PROD'),
      sendToWebhook(WEBHOOK_URL_TEST, 'TEST'),
    ]);

    // Check if at least one succeeded (preferably PROD, but for reliability we accept any success)
    const prodResult = results[0];
    const testResult = results[1];

    console.log('Webhook results:', results);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');

    // If PROD failed, we consider it an error generally, unless we want to be lenient
    // For now, if BOTH fail, return 500. If one succeeds, return 200 but log warning.
    if (!prodResult.success && !testResult.success) {
      return res.status(502).json({
        error: 'All webhooks failed',
        details: results,
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Submission received',
      results: results,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
