import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const ENV = process.env;

export interface IContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    company?: string;
    websiteURL?: string;
    message: string;
    agreeToTerms: boolean;
}

sgMail.setApiKey(ENV.SG_CONTACT_API_KEY as string);

export async function POST(req: Request) {
    try {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            websiteURL,
            message,
            agreeToTerms,
        } = (await req.json()) as IContactForm;

        if (!firstName || !lastName || !email || !message || !agreeToTerms) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const clientName = `${firstName} ${lastName}`;

        const msg = {
            personalizations: [
                {
                    to: [
                        {
                            email: ENV.SG_FROM_EMAIL as string,
                            name: "Imboxsoft Contact",
                        },
                    ],
                    dynamicTemplateData: {
                        clientName: clientName,
                        clientEmail: email,
                        clientPhone: phoneNumber,
                        message: message,
                    },
                },
            ],
            from: {
                email: ENV.SG_FROM_EMAIL as string,
                name: "Imboxsoft Contact",
            },
            replyTo: {
                email: email,
                name: clientName,
            },
            templateId: ENV.SG_CONTACT_TEMPLATE_ID,
        } as sgMail.MailDataRequired;

        await sgMail.send(msg);

        return NextResponse.json({
            message: "Email sent successfully",
        });
    } catch (e: any) {
        console.log("SG error: ", e.response?.body?.errors);
        return NextResponse.json(
            { error: e.response?.body?.errors?.[0]?.message },
            { status: 500 }
        );
    }
}
