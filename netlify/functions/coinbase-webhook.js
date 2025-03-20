
// Netlify serverless function to handle Coinbase Commerce webhooks
const crypto = require('crypto');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" })
    };
  }
  
  // Get the webhook secret from environment variables
  const webhookSecret = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("COINBASE_COMMERCE_WEBHOOK_SECRET environment variable is not set");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error" })
    };
  }

  try {
    // Verify the webhook signature
    const signature = event.headers['x-cc-webhook-signature'];
    const payload = event.body;
    
    if (!signature) {
      console.error("No webhook signature found in the request headers");
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized request" })
      };
    }
    
    // Compute HMAC signature
    const hmac = crypto.createHmac('sha256', webhookSecret);
    hmac.update(payload);
    const computedSignature = hmac.digest('hex');
    
    // Compare signatures
    if (computedSignature !== signature) {
      console.error("Webhook signature verification failed");
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Invalid signature" })
      };
    }
    
    // Parse the webhook payload
    const webhookData = JSON.parse(payload);
    console.log("Received valid webhook from Coinbase Commerce:", webhookData);
    
    // Process the webhook based on event type
    const event = webhookData.event;
    
    // Handle different event types
    switch (event.type) {
      case 'charge:confirmed':
        // Payment confirmed - update user's account, etc.
        console.log(`Payment confirmed for charge ${event.data.id}`);
        // Here you would update your database or take other actions
        break;
        
      case 'charge:failed':
        // Payment failed
        console.log(`Payment failed for charge ${event.data.id}`);
        // Handle the failure
        break;
        
      case 'charge:pending':
        // Payment pending
        console.log(`Payment pending for charge ${event.data.id}`);
        break;
        
      case 'charge:created':
        // New charge created
        console.log(`New charge created: ${event.data.id}`);
        break;
        
      default:
        console.log(`Received webhook event of type: ${event.type}`);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Webhook processed successfully" })
    };
  } catch (error) {
    console.error("Error processing webhook:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error processing webhook" })
    };
  }
};
