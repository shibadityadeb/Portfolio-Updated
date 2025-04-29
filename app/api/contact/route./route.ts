import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs" // Ensure Node.js runtime for nodemailer support

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Validate environment variables
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASSWORD
    if (!user || !pass) {
      console.error("Missing EMAIL_USER or EMAIL_PASSWORD in environment variables.")
      return NextResponse.json({ success: false, message: "Email service not configured properly" }, { status: 500 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    })

    const mailOptions = {
      from: user,
      to: "shibadityaadeb.official@gmail.com",
      subject: subject || "New message from portfolio",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #8b5cf6;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Server error: failed to send email" }, { status: 500 })
  }
}
