import { ScrollManagerEvaluator } from "@/components/ScrollManager";
import GoogleMapComponent from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY || "";

    return (
        <div className="observe-navbar-intersect w-full h-full bg-main-opacity-black-50 ">
            <div className="xl:pt-32 max-w-screen-2xl mx-auto">
                <section className="xl:rounded-xl">
                    <div className="pt-32 xl:pt-16 pb-16 px-12">
                        <div className="max-w-[750px] mx-auto mb-20">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                                Contact Us
                            </h2>
                            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                Need help with a technical issue? Want to
                                partner up or are you interested in how we can
                                be of service to you, let us know through the
                                contact form below.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="w-full flex flex-row flex-wrap gap-16 order-2 lg:order-1">
                                <div className="w-full">
                                    <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                                        Locations
                                    </h3>
                                    <div className="w-full flex flex-row justify-center lg:justify-start">
                                        <div className="w-full max-w-[500px] flex flex-col sm:flex-row bg-main-opacity-white-20 rounded-2xl overflow-hidden">
                                            <div className="flex-1 order-2 sm:order-1">
                                                <div className="py-6 px-6">
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
                                            <div className="relative flex-1 order-1 sm:order-2 max-h-[250px]">
                                                <GoogleMapComponent
                                                    apiKey={apiKey}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                                        Contacts
                                    </h3>
                                    <div className="w-full flex flex-row justify-center lg:justify-start">
                                        <div className="flex flex-row flex-wrap gap-6">
                                            <div className="p-4 bg-main-opacity-white-20 rounded-2xl">
                                                <h4 className="font-semibold text-xl mb-1">
                                                    E-mail
                                                </h4>
                                                <p>office@imboxsoft.com</p>
                                            </div>
                                            <div className="p-4 bg-main-opacity-white-20 rounded-2xl">
                                                <h4 className="font-semibold text-xl mb-1">
                                                    Phone
                                                </h4>
                                                <p>+40 722 370 944</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-center w-full lg:min-w-[400px] max-w-[600px] order-1 lg:order-2">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ScrollManagerEvaluator />
        </div>
    );
}
