
// Vercel serverless function for handling Coinbase Commerce webhooks
const crypto = require('crypto');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  try {
    // Get the webhook secret from environment variables
    const webhookSecret = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("COINBASE_COMMERCE_WEBHOOK_SECRET environment variable is not set");
      return res.status(500).json({ message: "Server configuration error" });
    }
    
    // Get the signature from headers
    const signature = req.headers['x-cc-webhook-signature'];
    if (!signature) {
      return res.status(400).json({ message: "No signature found in headers" });
    }
    
    // Verify the signature
    const rawBody = JSON.stringify(req.body);
    const hmac = crypto.createHmac('sha256', webhookSecret);
    hmac.update(rawBody);
    const computedSignature = hmac.digest('hex');
    
    if (computedSignature !== signature) {
      return res.status(401).json({ message: "Invalid signature" });
    }
    
    // Process the webhook event
    const event = req.body;
    console.log("Received webhook event:", event.type);
    
    // Handle different event types (example)
    switch (event.type) {
      case 'charge:confirmed':
        // Handle confirmed charge
        console.log("Charge confirmed:", event.data.id);
        // Add your logic here for when a payment is confirmed
        break;
      case 'charge:failed':
        // Handle failed charge
        console.log("Charge failed:", event.data.id);
        // Add your logic here for when a payment fails
        break;
      // Add more cases as needed
    }
    
    return res.status(200).json({ message: "Webhook received" });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return res.status(500).json({ message: "Error processing webhook", error: error.message });
  }
};
