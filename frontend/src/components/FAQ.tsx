import Image from "next/image";

import Accordion from "@/components/Accordion";
import ScrollableWrapper from "@/components/ScrollableWrapper";

export type FAQItem = {
    q: string;
    a: string;
};

type FAQProps = {
    id: string;
    title?: string;
    faqs?: FAQItem[];
};

export function ResponsiveFAQ({ id, title = "FAQ", faqs = [] }: FAQProps) {
    const elements = faqs.map((el: FAQItem) => {
        return {
            title: el.q,
            description: el.a,
        };
    });

    return (
        <div className="relative w-64 md:w-full max-w-full h-fit">
            <div className="absolute w-full h-full overflow-hidden px-1 md:ps-[9%] md:pe-[5%] md:pb-[5%] lg:ps-[10%] lg:pe-[10%] lg:pb-[4%]">
                <div className="relative w-full h-full bg-main-background-dark rounded-[50px] md:rounded-lg lg:rounded-3xl">
                    <div className="absolute w-full h-full pt-[9%] lg:pt-[2%] pb-4 px-4 z-[9]">
                        <ScrollableWrapper className="w-full h-full overflow-y-auto scroll-smooth beautiful-scrollbar">
                            <FAQ id={id} faqs={faqs}></FAQ>
                        </ScrollableWrapper>
                    </div>
                </div>
            </div>

            <div>
                <Image
                    className="relative block md:hidden w-full h-auto z-0"
                    src="/images/home/cta-phone.png"
                    width={500}
                    height={500}
                    alt="Welcome to Imboxsoft"
                />
                <Image
                    className="relative hidden md:block lg:hidden w-full h-auto z-0"
                    src="/images/home/cta-tablet.png"
                    width={500}
                    height={500}
                    alt="Welcome to Imboxsoft"
                />
                <Image
                    className="relative hidden lg:block w-full h-auto z-0"
                    src="/images/home/cta-desktop.png"
                    width={500}
                    height={500}
                    alt="Welcome to Imboxsoft"
                />
            </div>
        </div>
    );
}

export function FAQ({ id, title = "FAQ", faqs = [] }: FAQProps) {
    const elements = faqs.map((el: FAQItem) => {
        return {
            title: el.q,
            description: el.a,
        };
    });

    return (
        <>
            <Accordion id={id} title={title} elements={elements} />
            <FAQSeo items={faqs} />
        </>
    );
}

export function FAQSeo({ items }: { items: FAQItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: it.a,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            // Important: stringify ca text, fără JSX objects
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
