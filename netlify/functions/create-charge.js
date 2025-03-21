
// Netlify serverless function to create a Coinbase Commerce charge
const axios = require('axios');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" })
    };
  }
  
  // Get the API key from environment variables
  const apiKey = process.env.COINBASE_COMMERCE_API_KEY;
  if (!apiKey) {
    console.error("COINBASE_COMMERCE_API_KEY environment variable is not set");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error" })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    
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
          customer_id: context.clientContext?.user?.sub || 'anonymous',
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
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.data)
    };
  } catch (error) {
    console.error("Error creating Coinbase Commerce charge:", error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: "Error creating charge",
        error: error.response?.data || error.message
      })
    };
  }
};
