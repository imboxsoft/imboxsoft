import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { DISABLED_PAGES, routing } from "@/i18n/routing";
import { ROUTE_KEYS } from "@/constants/routes";

function localeFromHost(hostnameRaw: string): "en" | "ro" | undefined {
    const hostname = (hostnameRaw || "").split(":")[0].toLowerCase();
    if (hostname.endsWith("imboxsoft.com")) return "en";
    if (hostname.endsWith("imboxsoft.ro")) return "ro";
    return undefined;
}

export default function middleware(request: NextRequest) {
    const mode = process.env.MODE ?? "development";

    let locale = routing.defaultLocale as "en" | "ro";

    if (mode === "staging" || mode === "production") {
    const host = request.headers.get("host") ?? "";
        locale = localeFromHost(host) ?? locale;
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
