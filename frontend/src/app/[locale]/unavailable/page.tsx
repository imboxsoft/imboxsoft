import { Link } from "@/i18n/navigation";
import { ROUTE_KEYS as routes } from "@/constants/routes";
import { getRichTranslations } from "@/i18n/utils";

export default async function UnavailablePage() {
    const tc = await getRichTranslations("common");

    return (
        <div className="text-center pt-52 pb-20">
            <h1 className="text-4xl font-bold mb-4">
                {tc.text("common.pageIsUnavailable.title")}
            </h1>
            <p className="text-lg text-gray-500 mb-6">
                {tc.text("common.pageIsUnavailable.description")}
            </p>
            <Link
                href={routes.HOME}
                className="px-5 sm:px-3 py-3 sm:py-2 bg-main-secondary rounded-lg text-lg sm:text-base font-bold sm:font-semibold"
            >
                {tc.text("common.pageIsUnavailable.button")}
            </Link>
        </div>
    );
}
