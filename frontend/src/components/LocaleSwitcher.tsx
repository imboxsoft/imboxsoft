"use client";

import { useLocale } from "next-intl";

import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, defaultLocale } from "@/i18n/routing";

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <select
            value={currentLocale}
            onChange={(e) => handleLocaleChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {locales.map((locale) => (
                <option key={locale} value={locale}>
                    {locale.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
