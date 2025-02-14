"use client";

import React from "react";

const NewsletterForm = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!confirm("Are you sure you want to subsribe to our newsletter?")) {
            e.preventDefault();
            return;
        }
    };

    return (
        <form
            action="/api/newsletter/subscribe"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-center"
        >
            <div className="flex-1 w-full sm:w-fit">
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full shadow-sm bg-transparent text-sm rounded-lg block p-3 text-white border border-main-secondary focus:ring-main-secondary placeholder-gray-300 focus:border-main-secondary"
                    placeholder="email@company.tld"
                    required
                />
            </div>
            <button
                type="submit"
                className="py-3 px-5 text-sm font-semibold text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
                Join the Club
            </button>
        </form>
    );
};

export default NewsletterForm;
