import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
    ...routing,
    localeDetection: false,
    localePrefix: "as-needed",
});

export const config = {
    matcher: ["/((?!api|_next|_static|favicon.ico|assets|.*\\..*).*)"],
};
