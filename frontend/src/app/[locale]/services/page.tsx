import { getRichTranslations } from "@/i18n/utils";

import ServicesCardsSwiper from "@/components/ServicesCardsSwiper";

export default async function Services() {
    const t = await getRichTranslations("services");

    return (
        <div className="observe-navbar-intersect bg-main-opacity-black-75 h-full">
            <div className="max-w-screen-2xl mx-auto pt-36 pb-20 px-4 lg:px-10 gap-16">
                <h1 className="text-4xl md:text-5xl font-semibold mb-10">
                    {t.text("services.title")}
                </h1>
                <div className="mb-12">
                    {t
                        .raw("services.descriptions")
                        .map((p: string, i: number) => (
                            <p key={i} className="mb-4">
                                {p}
                            </p>
                        ))}
                </div>
                <ServicesCardsSwiper
                    customBreakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                />
            </div>
        </div>
    );
}
