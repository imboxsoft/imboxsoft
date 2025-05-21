"use client";

import React, { useState } from "react";

import { useTranslations } from "next-intl";

const NewsletterForm = () => {
    const t = useTranslations("blog.blog");

    const [email, setEmail] = useState<string>("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!confirm("Are you sure you want to subsribe to our newsletter?")) {
            return;
        }

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setEmail("");
            alert("Subscribed successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-center"
        >
            <div className="flex-1 w-full sm:w-fit">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full shadow-sm bg-transparent text-sm rounded-lg block p-3 text-white border border-main-secondary focus:ring-main-secondary placeholder-gray-300 focus:border-main-secondary"
                    placeholder="email@company.tld"
                    required
                />
            </div>
            <button
                type="submit"
                className="py-3 px-5 text-sm font-semibold text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
                {t("join")}
            </button>
        </form>
    );
};

export default NewsletterForm;
