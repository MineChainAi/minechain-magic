
// Vercel serverless function to check the status of a Coinbase Commerce charge
const axios = require('axios');

module.exports = async (req, res) => {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  // Get the API key from environment variables
  const apiKey = process.env.COINBASE_COMMERCE_API_KEY;
  if (!apiKey) {
    console.error("COINBASE_COMMERCE_API_KEY environment variable is not set");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    // Get charge ID from the query parameters
    const chargeId = req.query.id;
    if (!chargeId) {
      return res.status(400).json({ message: "Charge ID is required" });
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
    return res.status(200).json({
      id: response.data.data.id,
      status: response.data.data.timeline[response.data.data.timeline.length - 1].status,
      payments: response.data.data.payments
    });
  } catch (error) {
    console.error("Error checking Coinbase Commerce charge:", error.response?.data || error.message);
    return res.status(500).json({ 
      message: "Error checking charge status",
      error: error.response?.data || error.message
    });
  }
};
