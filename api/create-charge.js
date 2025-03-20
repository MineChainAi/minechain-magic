
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
    
    // Create a charge with Coinbase Commerce API
    const response = await axios.post(
      'https://api.commerce.coinbase.com/charges',
      {
        name: data.name,
        description: data.description,
        pricing_type: data.pricing_type,
        local_price: data.local_price,
        redirect_url: data.redirect_url,
        cancel_url: data.cancel_url,
        metadata: {
          customer_id: 'anonymous',
          app_id: 'minechain-app'
        }
      },
      {
        headers: {
          'X-CC-Api-Key': apiKey,
          'X-CC-Version': '2018-03-22',
          'Content-Type': 'application/json'
        }
      }
    );
    
    return res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error creating Coinbase Commerce charge:", error.response?.data || error.message);
    return res.status(500).json({ 
      message: "Error creating charge",
      error: error.response?.data || error.message
    });
  }
};
