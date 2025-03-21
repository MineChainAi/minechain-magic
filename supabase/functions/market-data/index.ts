
// supabase/functions/market-data/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simulated market data
const generateMarketData = () => {
  const coins = ['BTC', 'ETH', 'USDC', 'SOL', 'DOT'];
  
  return coins.map(coin => {
    // Generate realistic but random price data
    const basePrice = coin === 'BTC' ? 50000 : coin === 'ETH' ? 3000 : coin === 'SOL' ? 100 : coin === 'DOT' ? 20 : 1;
    const volatility = coin === 'USDC' ? 0.001 : 0.05; // USDC is stable
    
    const currentPrice = basePrice * (1 + (Math.random() * volatility * 2 - volatility));
    const priceChange24h = Math.random() * volatility * 2 - volatility;
    
    return {
      symbol: coin,
      name: coin === 'BTC' ? 'Bitcoin' : 
            coin === 'ETH' ? 'Ethereum' : 
            coin === 'USDC' ? 'USD Coin' : 
            coin === 'SOL' ? 'Solana' : 'Polkadot',
      currentPrice: parseFloat(currentPrice.toFixed(2)),
      priceChange24h: parseFloat((priceChange24h * 100).toFixed(2)),
      marketCap: parseFloat((currentPrice * (coin === 'BTC' ? 19000000 : 
                                             coin === 'ETH' ? 120000000 : 
                                             coin === 'USDC' ? 25000000000 : 
                                             coin === 'SOL' ? 350000000 : 1000000000)).toFixed(0)),
      volume24h: parseFloat((currentPrice * (coin === 'BTC' ? 30000000000 : 
                                            coin === 'ETH' ? 15000000000 : 
                                            coin === 'USDC' ? 80000000000 : 
                                            coin === 'SOL' ? 2000000000 : 500000000) * 
                                            (0.8 + Math.random() * 0.4)).toFixed(0)),
      lastUpdated: new Date().toISOString()
    };
  });
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Market data function called");
    
    // Get parameters from the request
    const url = new URL(req.url);
    const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 5;
    
    // Generate market data
    const marketData = generateMarketData().slice(0, limit);
    
    return new Response(
      JSON.stringify({
        data: marketData,
        timestamp: new Date().toISOString(),
        source: "MineChain Simulation"
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in market-data function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
