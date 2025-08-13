import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP configuration
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address
      to: 'info@hurumaglobalsupportinitiative.org', // recipient
      replyTo: email, // reply to the original sender
      subject: `Contact Form: ${subject} - From ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #16a34a, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 5px;">
              <h2 style="color: #16a34a; margin: 0 0 10px 0; font-size: 18px;">Contact Information</h2>
              <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 15px; font-size: 16px;">Message:</h3>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: #eff6ff; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Reply directly to this email to respond to ${name}</strong>
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This message was sent from the Huruma Global Support Initiative contact form</p>
              <p>Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kampala' })} EAT</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        From: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This message was sent from the Huruma Global Support Initiative contact form
        Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kampala' })} EAT
        
        Reply directly to this email to respond to the sender.
      `
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', info.messageId);
    
    return NextResponse.json(
      { 
        success: true, 
        messageId: info.messageId,
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Email sending failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
