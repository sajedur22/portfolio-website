"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
});

export async function sendEmail(data) {
    // Validate input
    const parsedData = contactFormSchema.safeParse(data);
    if (!parsedData.success) {
        return {
            success: false,
            message: "Invalid form data",
            errors: parsedData.error.flatten().fieldErrors, // Optional: field-specific errors
        };
    }

    const { name, email, subject, message } = parsedData.data;

    // Check environment variable
    const envEmail = process.env.CONTACT_EMAIL;
    if (!envEmail) {
        console.error("CONTACT_EMAIL environment variable is missing");
        return {
            success: false,
            message: "Server misconfiguration. Contact admin.",
        };
    }

    try {
        const { data: emailData, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: envEmail,
            replyTo: email, // allow reply to user
            subject: subject,
            html: `
        <h2>New message via Munna H. Leon</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend API error:", error);
            return {
                success: false,
                message: "Failed to send email. Please try again later.",
            };
        }

        console.log("Email sent successfully:", emailData);
        return {
            success: true,
            message: "Email sent successfully!",
        };
    } catch (err) {
        console.error("Unexpected server error:", err);
        return {
            success: false,
            message: "Unexpected error occurred. Please try again later.",
        };
    }
}
