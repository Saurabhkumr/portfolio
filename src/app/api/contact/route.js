const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,      
    pass: process.env.PASS,       
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received data:", body);

    if (!body.name || !body.email || !body.msg) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await transporter.sendMail({
      from: process.env.EMAIL,                            // Sender's address
      to: process.env.EMAIL,                        // Receiver's address
      subject: "Message from Portfolio",            // Subject line
      text: body.msg,                               // Plain text body
      html: `<div>${body.email}<br><b>${body.msg}</b></div>`,                   // HTML body using template literals
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully", data: body }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error while sending email:", error.message);
    return new Response(
      JSON.stringify({ error: "Error while sending" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
