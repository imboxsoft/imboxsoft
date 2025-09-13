import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { DISABLED_PAGES, routing } from "@/i18n/routing";
import { ROUTE_KEYS } from "@/constants/routes";

export default function middleware(request: NextRequest) {
    const mode = process.env.MODE ?? "development";

    let locale = routing.defaultLocale;

    if (mode == "staging" || mode == "production") {
        const hostname = request.headers.get("host") ?? "";
        const urlMappings = process.env.APP_BASE_URLS?.split(",") ?? [];

        for (const entry of urlMappings) {
            const [domain, loc] = entry.trim().split("/");
            if (hostname.includes(domain)) {
                locale = loc as typeof locale;
                break;
            }
        }
    }

    const { pathname } = request.nextUrl;

    const pathWithoutLocale = pathname.replace(/^\/(ro|en)/, "");

    if (DISABLED_PAGES.includes(pathname) || DISABLED_PAGES.includes(pathWithoutLocale)) {
        const url = request.nextUrl.clone();
        url.pathname = ROUTE_KEYS["UNAVAILABLE"];
        return NextResponse.redirect(url, 302);
    }

    const intlMiddleware = createMiddleware({
        ...routing,
        defaultLocale: locale,
        localeDetection: false,
        localePrefix: mode == "production" || mode == "staging" ? "never" : "as-needed",
    });

    return intlMiddleware(request);
}

export const config = {
    matcher: ["/((?!api|_next|_static|favicon.ico|assets|.*\\..*).*)"],
};
