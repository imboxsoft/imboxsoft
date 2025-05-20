import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

import { routing } from "./routing";

const namespaces = ["home", "services", "company", "contact", "common", "meta"];

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages: Record<string, any> = {};

    for (const ns of namespaces) {
        try {
            const message = (
                await import(`../../messages/${locale}/${ns}.json`)
            ).default;

            messages[ns] = message;
        } catch (e) {
            console.log(e);
        }
    }

    return {
        locale,
        messages: messages,
    };
});
