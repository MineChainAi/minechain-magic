
// supabase/functions/hello/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name } = await req.json().catch(() => ({ name: "anonymous" }));
    
    console.log(`Hello function called with name: ${name}`);
    
    return new Response(
      JSON.stringify({
        message: `Hello ${name}! Edge function is working correctly.`,
        timestamp: new Date().toISOString(),
        environment: Deno.env.get("ENVIRONMENT") || "development"
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in hello function:", error);
    
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
