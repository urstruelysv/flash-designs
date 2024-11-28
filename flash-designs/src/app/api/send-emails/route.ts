import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Create email content from form data
    const emailContent = `
      New Design Order

      Design Type: ${formData.get("designType")}
      Venue: ${formData.get("venue")}
      Date: ${formData.get("date")}
      Time: ${formData.get("time")}
      Host Name: ${formData.get("name")}
      Event Details: ${formData.get("eventDetails")}
      Design Preferences: ${formData.get("instructions")}
      Additional Information: ${formData.get("additional")}
      
      Contact Information:
      Phone: ${formData.get("phone")}
      Email: ${formData.get("email")}
    `;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "saivamshig404@gmail.com",
      subject: "New Design Order - ₹60 Express Design",
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to submit order" },
      { status: 500 }
    );
  }
}
