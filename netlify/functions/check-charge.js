
// Netlify serverless function to check the status of a Coinbase Commerce charge
const axios = require('axios');

exports.handler = async function(event, context) {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
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
    // Get charge ID from the query parameters
    const chargeId = event.queryStringParameters.id;
    if (!chargeId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Charge ID is required" })
      };
    }
    
    // Check charge status with Coinbase Commerce API
    const response = await axios.get(
      `https://api.commerce.coinbase.com/charges/${chargeId}`,
      {
        headers: {
          'X-CC-Api-Key': apiKey,
          'X-CC-Version': '2018-03-22',
          'Content-Type': 'application/json'
        }
      }
    );
    
    // Return the charge data with relevant status information
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: response.data.data.id,
        status: response.data.data.timeline[response.data.data.timeline.length - 1].status,
        payments: response.data.data.payments
      })
    };
  } catch (error) {
    console.error("Error checking Coinbase Commerce charge:", error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: "Error checking charge status",
        error: error.response?.data || error.message
      })
    };
  }
};
