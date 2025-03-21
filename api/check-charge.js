
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
    
    console.log("Checking charge status for ID:", chargeId);
    
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
    
    const charge = response.data.data;
    const lastStatus = charge.timeline[charge.timeline.length - 1].status;
    
    console.log("Charge status:", lastStatus);
    
    // Return the charge data with relevant status information
    return res.status(200).json({
      id: charge.id,
      status: lastStatus,
      payments: charge.payments,
      pricing: charge.pricing,
      hosted_url: charge.hosted_url,
      created_at: charge.created_at,
      expires_at: charge.expires_at,
      confirmed_at: charge.confirmed_at
    });
  } catch (error) {
    console.error("Error checking Coinbase Commerce charge:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({ 
      message: "Error checking charge status",
      error: error.response?.data || error.message
    });
  }
};
