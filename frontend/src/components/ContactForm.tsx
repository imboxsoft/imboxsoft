"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    company: string;
    websiteURL: string;
    message: string;
    agreeToTerms: boolean;
}

const initialFormData: ContactForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    websiteURL: "",
    message: "",
    agreeToTerms: false,
};

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactForm>(initialFormData);
    const [errors, setErrors] = useState<Partial<ContactForm>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (errors[id as keyof ContactForm]) {
            setErrors({ ...errors, [id]: "" });
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactForm> = {};

        if (!formData.firstName.trim())
            newErrors.firstName = "First name is missing.";
        if (!formData.lastName.trim())
            newErrors.lastName = "Last name is missing.";

        if (!formData.email.trim()) {
            newErrors.email = "Email is missing.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!formData.message.trim()) newErrors.message = "Message is missing.";

        if (!formData.agreeToTerms)
            newErrors.message =
                "Please give your acceptance towards our privacy policy.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!confirm("Are you sure you want to submit the form?")) {
            return;
        }

        if (validateForm()) {
            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error || "Failed to send message.");
                }

                setFormData(initialFormData);
                setErrors({});
                alert("Message sent successfully!");
            } catch (error) {
                console.error(error);
                alert("Failed to send message.");
            }
        } else {
            alert("Please correct the errors before submitting.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full grid grid-cols-2 gap-6 sm:gap-8">
                <div className="col-span-2 xs:col-span-1">
                    <label
                        htmlFor="first_name"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        First name
                        <span className="text-main-secondary">*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="first_name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter your first name"
                        required
                    />
                    <span className="mt-1 text-red-400 text-base">
                        {errors.firstName}
                    </span>
                </div>
                <div className="col-span-2 xs:col-span-1">
                    <label
                        htmlFor="last_name"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        Last name
                        <span className="text-main-secondary">*</span>
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="last_name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter your last name"
                        required
                    />
                    <span className="mt-1 text-red-400 text-base">
                        {errors.lastName}
                    </span>
                </div>
                <div className="col-span-2 xs:col-span-1">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        Work email
                        <span className="text-main-secondary">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="email@company.tld"
                        required
                    />
                    <span className="mt-1 text-red-400 text-base">
                        {errors.email}
                    </span>
                </div>
                <div className="col-span-2 xs:col-span-1">
                    <label
                        htmlFor="phone_number"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        Phone number
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phone_number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter your phone number"
                    />
                    <span className="mt-1 text-red-400 text-base">
                        {errors.phoneNumber}
                    </span>
                </div>
                <div className="col-span-2 xs:col-span-1">
                    <label
                        htmlFor="company"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter your company"
                    />
                    <span className="mt-1 text-red-400 text-base">
                        {errors.company}
                    </span>
                </div>
                <div className="col-span-2 xs:col-span-1">
                    <label
                        htmlFor="website_url"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        Website URL
                    </label>
                    <input
                        type="text"
                        id="websiteURL"
                        name="website_url"
                        value={formData.websiteURL}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter your website"
                    />
                    <span className="mt-1 text-red-400 text-base">
                        {errors.websiteURL}
                    </span>
                </div>
                <div className="col-span-2">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                        Message
                        <span className="text-main-secondary">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="How can we help you?"
                        required
                    ></textarea>
                    <span className="mt-1 text-red-400 text-base">
                        {errors.message}
                    </span>
                </div>
            </div>
            <div className="flex items-start my-5">
                <div className="flex items-center h-5">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agree_terms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                    />
                </div>
                <label
                    htmlFor="agree_terms"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    I have read the{" "}
                    <Link href="#" className="text-main-secondary">
                        Privacy Policy
                    </Link>{" "}
                    and understand that my personal data will be processed for
                    the purpose of providing the necessary information and
                    assistance.
                </label>
                <span className="mt-1 text-red-400 text-base">
                    {errors.agreeToTerms}
                </span>
            </div>
            <div className="col-span-2 flex justify-end">
                <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
