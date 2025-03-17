import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const formData = await req.json();
    const newContact = {
      name: formData.name,
      email: formData.email
    };
    // Send confirmation email
    await sendContactEmail(formData.email, formData.name);
    return NextResponse.json(
      { success: true, message: "Contact saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: error.toString() },
      { status: 500 }
    );
  }
}
// Function to send contact email
async function sendContactEmail(userEmail, userName) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "universeboss78@gmail.com", // Replace with your Gmail
        pass: "uegp hpqv dncf jmsg", // Replace with your Gmail App Password
      },
    });
    const mailOptions = {
      from: "universeboss78@gmail.com",
      to: userEmail,
      subject: "Thank You for Contacting Us - Pelagic Bird Watching",
      html: `
                <h2>Hello ${userName},</h2>
                <p>Thank you for reaching out to us! We have received your message and will get back to you soon.</p>
                <br/>
                <p>Best Regards,<br/>Bird watchers</p>
            `,
    };
    await transporter.sendMail(mailOptions);
    console.log("Contact confirmation email sent to:", userEmail);
  } catch (error) {
    console.error("Email sending error:", error);
  }
}
