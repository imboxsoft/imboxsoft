import Accordion from "@/components/Accordion";

export type FAQItem = {
    q: string;
    a: string;
};

type FAQProps = {
    id: string;
    title?: string;
    faqs?: FAQItem[];
};

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
