import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { name, email, subject, message }: ContactRequest = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Store message in database
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to store message" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to the sender
    const confirmationEmailResponse = await resend.emails.send({
      from: "Natnael Dejene <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #00bcd4, #8b5cf6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; border-left: 4px solid #00bcd4;">
            <h2 style="color: #333; margin-top: 0;">Your message has been received</h2>
            <p style="color: #666; line-height: 1.6; font-size: 16px;">
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e0e0e0;">
              <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
              <p style="color: #666; margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="color: #666; margin: 15px 0; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to check out my projects and connect with me on social media.
            </p>
            
            <div style="text-align: center; margin: 25px 0;">
              <a href="https://github.com/natnaeldejenekebede" style="display: inline-block; margin: 0 10px; padding: 12px 24px; background: #00bcd4; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">GitHub</a>
              <a href="https://www.linkedin.com/in/natnael-dejene-53466326a" style="display: inline-block; margin: 0 10px; padding: 12px 24px; background: #8b5cf6; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">LinkedIn</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; color: #999; font-size: 14px;">
            <p>Best regards,<br><strong style="color: #333;">Natnael Dejene</strong></p>
            <p>Full Stack Developer | Tech Innovator</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      `,
    });

    // Send notification email to me
    const notificationEmailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["natnaeldejene19@gmail.com"],
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #00bcd4, #8b5cf6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Message</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; border-left: 4px solid #00bcd4;">
            <h2 style="color: #333; margin-top: 0;">Message Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e0e0e0;">
              <p style="color: #666; margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="color: #666; margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="color: #666; margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
              <div style="margin: 15px 0;">
                <strong style="color: #333;">Message:</strong>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-top: 10px; line-height: 1.6;">
                  ${message}
                </div>
              </div>
            </div>
            
            <div style="text-align: center; margin: 25px 0;">
              <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; padding: 12px 24px; background: #00bcd4; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmailResponse);
    console.log("Notification email sent:", notificationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully",
        emailSent: true
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);