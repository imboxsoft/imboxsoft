import ClientAccordionLogic from "@/components/ClientAccordionLogic";

type AccordionProps = {
    id: string;
    title: string | null;
    elements?: any[];
};

export default function Accordion({
    id,
    title = null,
    elements = [],
}: AccordionProps) {
    return (
        <div>
            {title && <h2 className="mb-2">{title}</h2>}

            <div id={id} data-accordion="collapse">
                {elements.map((el, index) => (
                    <div key={index}>
                        <h2 id={`${id}-heading-${index}`}>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-2 font-medium rtl:text-right text-gray-500 border-b border-main-secondary"
                                data-accordion-target={`#${id}-body-${index}`}
                                aria-expanded="true"
                                aria-controls={`${id}-body-${index}`}
                            >
                                <span className="text-main-primary text-base">
                                    {el.title}
                                </span>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`${id}-body-${index}`}
                            className="hidden"
                            aria-labelledby={`${id}-heading-${index}`}
                        >
                            <div className="py-4 border-b border-main-secondary">
                                <p className="text-base mb-2 text-gray-200">
                                    {el.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ClientAccordionLogic />
        </div>
    );
}
