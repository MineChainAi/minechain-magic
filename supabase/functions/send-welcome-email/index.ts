
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: EmailRequest = await req.json();

    if (!email) {
      throw new Error("Email is required");
    }

    console.log(`Sending welcome email to: ${email}`);

    const { data, error } = await resend.emails.send({
      from: "MineChain Newsletter <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the MineChain Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #3b82f6; margin-bottom: 20px;">Welcome to MineChain!</h1>
          <p>Thank you for subscribing to our newsletter. You'll now receive the latest updates on:</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #3b82f6;">✓</span> AI Mining Innovations
            </li>
            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #3b82f6;">✓</span> Exclusive Rewards
            </li>
            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #3b82f6;">✓</span> Mining Insights
            </li>
            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #3b82f6;">✓</span> Special Announcements
            </li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>If you didn't subscribe to this newsletter, you can safely ignore this email or <a href="[unsubscribe_link]" style="color: #3b82f6; text-decoration: none;">unsubscribe here</a>.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(error.message);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
