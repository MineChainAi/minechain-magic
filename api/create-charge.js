
// Vercel serverless function to create a Coinbase Commerce charge
const axios = require('axios');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  // Get the API key from environment variables
  const apiKey = process.env.COINBASE_COMMERCE_API_KEY;
  if (!apiKey) {
    console.error("COINBASE_COMMERCE_API_KEY environment variable is not set");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    // Parse the request body
    const data = req.body;
    console.log("Creating new charge with data:", {
      name: data.name,
      description: data.description,
      pricing_type: data.pricing_type,
      local_price: data.local_price,
      preferred_currency: data.preferred_currency || 'USDC'
    });
    
    // Create charge request object
    const chargeRequest = {
      name: data.name,
      description: data.description,
      pricing_type: data.pricing_type,
      local_price: data.local_price,
      redirect_url: data.redirect_url,
      cancel_url: data.cancel_url,
      metadata: {
        customer_id: data.customer_id || 'anonymous',
        app_id: 'minechain-app',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'production',
        preferred_currency: data.preferred_currency || 'USDC'
      }
    };
    
    // If a preferred currency is specified, add it to the request
    if (data.preferred_currency) {
      chargeRequest.preferred_currency = data.preferred_currency;
    }
    
    // Create a charge with Coinbase Commerce API
    const response = await axios.post(
      'https://api.commerce.coinbase.com/charges',
      chargeRequest,
      {
        headers: {
          'X-CC-Api-Key': apiKey,
          'X-CC-Version': '2018-03-22',
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log("Charge created successfully with ID:", response.data.data.id);
    return res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error creating Coinbase Commerce charge:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({ 
      message: "Error creating charge",
      error: error.response?.data || error.message
    });
  }
};
