"use client";

import { useLocale } from "next-intl";

import { useRouter, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import { localeMeta, Locale } from "@/i18n/localeMeta";

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="menu-slide-triggerer flex flex-col bg-transparent hover:bg-main-background-dark">
            <button className="ms-[25px] py-1">
                <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 9-7 7-7-7"
                    />
                </svg>
            </button>
            <div className="menu-slide-target overflow-hidden flex flex-col justify-start gap-1 bg-main-background-dark text-white font-semibold text-sm">
                {locales.map((locale: string, index: number) => (
                    <button
                        onClick={() => handleLocaleChange(locale)}
                        key={locale}
                        className="flex flex-row items-center gap-2 w-full hover:bg-main-background-darker px-5 py-3"
                    >
                        <span className="text-lg">
                            {localeMeta[locale as Locale].flag}
                        </span>
                        <span>{localeMeta[locale as Locale].label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
