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
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const res = await fetch(
            "https://api.sendgrid.com/v3/marketing/contacts",
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${ENV.SG_NEWSLETTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    list_ids: [ENV.SG_NEWSLETTER_GROUP],
                    contacts: [
                        {
                            email: email,
                        },
                    ],
                }),
            }
        );

        const result = await res.json();

        if (!res.ok) {
            throw new Error(
                result.errors?.[0]?.message || "Failed to subscribe user"
            );
        }

        return NextResponse.json({
            message: "Successfully subscribed!",
        });
    } catch (e: any) {
        console.log("SG error: ", e.response.body.errors);
        return NextResponse.json(
            { error: e.response?.body?.errors?.[0]?.message },
            { status: 500 }
        );
    }
}
