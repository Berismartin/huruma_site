import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP configuration
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send notification email to your team
    const notificationEmail = {
      from: `"Newsletter Subscription" <${process.env.SMTP_USER}>`,
      to: 'info@hurumaglobalsupportinitiative.org',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #16a34a, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Newsletter Subscription</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 5px;">
              <h2 style="color: #16a34a; margin: 0 0 10px 0; font-size: 18px;">Subscription Details</h2>
              <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Date:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kampala' })} EAT</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Source:</strong> Website Footer</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px; text-center;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Action Required:</strong> Add this email to your newsletter mailing list
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This notification was generated automatically from the Huruma Global Support Initiative website</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Newsletter Subscription
        
        Email: ${email}
        Date: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kampala' })} EAT
        Source: Website Footer
        
        Action Required: Add this email to your newsletter mailing list
        
        ---
        This notification was generated automatically from the Huruma Global Support Initiative website
      `
    };

    // Send welcome email to subscriber
    const welcomeEmail = {
      from: `"Huruma Global Support Initiative" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to Huruma Global Support Initiative Newsletter! 🌟',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #16a34a, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Our Newsletter! 🎉</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #374151; margin-bottom: 15px;">Thank You for Subscribing!</h2>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">
                We're thrilled to have you join our community of changemakers. You'll now receive regular updates about our impact, stories from the communities we serve, and opportunities to get involved.
              </p>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #16a34a; margin-top: 0;">What to Expect:</h3>
              <ul style="color: #374151; line-height: 1.8;">
                <li>📊 Monthly impact reports and success stories</li>
                <li>📅 Updates on new programs and initiatives</li>
                <li>🤝 Volunteer and partnership opportunities</li>
                <li>💡 Ways you can make a difference in Uganda</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://hurumaglobalsupportinitiative.org/about" style="background: linear-gradient(135deg, #16a34a, #059669); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Learn More About Our Work
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; color: #6b7280; font-size: 14px;">
              <p><strong>Contact Information:</strong></p>
              <p>📧 Email: info@hurumaglobalsupportinitiative.org</p>
              <p>📞 Phone: +256 748 020 214</p>
              <p>📍 Address: P.O. Box 180486, Kampala - Uganda</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
              <p>You received this email because you subscribed to our newsletter at hurumaglobalsupportinitiative.org</p>
              <p>If you no longer wish to receive these emails, please contact us to unsubscribe.</p>
            </div>
          </div>
        </div>
      `,
      text: `
        Welcome to Huruma Global Support Initiative Newsletter!
        
        Thank you for subscribing! We're thrilled to have you join our community of changemakers.
        
        What to expect:
        - Monthly impact reports and success stories
        - Updates on new programs and initiatives  
        - Volunteer and partnership opportunities
        - Ways you can make a difference in Uganda
        
        Contact Information:
        Email: info@hurumaglobalsupportinitiative.org
        Phone: +256 748 020 214
        Address: P.O. Box 180486, Kampala - Uganda
        
        Learn more about our work: https://hurumaglobalsupportinitiative.org/about
        
        ---
        You received this email because you subscribed to our newsletter.
        If you no longer wish to receive these emails, please contact us to unsubscribe.
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(welcomeEmail)
    ]);
    
    console.log('✅ Newsletter subscription processed successfully for:', email);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Newsletter subscription failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to subscribe to newsletter',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
