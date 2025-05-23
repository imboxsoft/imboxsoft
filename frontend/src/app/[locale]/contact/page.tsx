import { getTranslations } from "next-intl/server";

import { ScrollManagerEvaluator } from "@/components/ScrollManager";
import GoogleMapComponent from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";

export default async function Contact() {
    const t = await getTranslations("contact");

    const apiKey = process.env.GOOGLE_MAPS_API_KEY || "";

    return (
        <div className="observe-navbar-intersect w-full h-full bg-main-opacity-black-50">
            <div className="xl:pt-32 custom-container">
                <div>
                    <section>
                        <div className="pt-32 xl:pt-16 pb-16">
                            <div className="max-w-[750px] mx-auto mb-16 lg:mb-20">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                                    {t("title")}
                                </h2>
                                <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                    {t("description")}
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-y-10 gap-x-20">
                                <div className="w-full flex flex-row flex-wrap gap-16 order-2 lg:order-1">
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                                            {t("contacs")}
                                        </h3>
                                        <div className="flex-1 w-full flex flex-col gap-6 justify-start">
                                            <div className="w-full flex flex-col sm:flex-row flex-wrap gap-6">
                                                <div className="flex-1 p-4 bg-main-opacity-white-20 rounded-2xl">
                                                    <h4 className="font-semibold text-xl mb-1">
                                                        {t("email")}
                                                    </h4>
                                                    <p>office@imboxsoft.com</p>
                                                </div>
                                                <div className="flex-1 p-4 bg-main-opacity-white-20 rounded-2xl">
                                                    <h4 className="font-semibold text-xl mb-1">
                                                        {t("phone")}
                                                    </h4>
                                                    <p>+40 722 370 944</p>
                                                </div>
                                            </div>
                                            <div className="flex-1 w-full flex flex-row flex-wrap gap-6">
                                                <div className="flex-1 p-4 bg-main-opacity-white-20 rounded-2xl max-h-[200px]">
                                                    <h4 className="font-semibold text-xl mb-1">
                                                        România
                                                    </h4>
                                                    <p>
                                                        Piața Republicii, Nr. 38
                                                        B, Târgu Mureș, Mureș,
                                                        540100
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-center w-full lg:min-w-[400px] lg:max-w-[600px] order-1 lg:order-2">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section>
                <div className="relative w-full min-h-[550px]">
                    <GoogleMapComponent apiKey={apiKey} />
                </div>
            </section>

            <ScrollManagerEvaluator />
        </div>
    );
}
