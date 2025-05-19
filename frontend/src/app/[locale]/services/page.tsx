import ServicesCardsSwiper from "@/components/ServicesCardsSwiper";

export default function Services() {
    return (
        <div className="max-w-screen-2xl mx-auto pt-32 pb-20 px-4 lg:px-10 gap-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-10">
                Our Services
            </h1>
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
    );
}
