import ScrollToLink from "@/components/ScrollToLink";
import Image from "next/image";
import Link from "next/link";

export default function SEO() {
    const whatWeCanDo = [
        {
            id: "1",
            shortTitle: "Get Started",
            title: "Fill out contact form",
            description:
                "The process starts when you fill out our contact form on this page. Please share your company URL along with the URLs of 3-5 competitors in your space, as well as the ‘Dream Keywords’ you would like to rank for. You’ll then be led a calendar invite where you will be able to schedule a video meeting.",
            thumbnail: {
                src: "/images/our-work/design.png",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "2",
            shortTitle: "Discovery",
            title: "Discovery Meeting",
            description:
                "Before our discovery meeting, we will prepare our comprehensive audit, which will include the current SEO standing of your business, along with a comprehensive keyword analysis of your top competitors. We’ll then evaluate if SEO is a viable option for your business, and if it is, we will walk you through our unique approach to SEO, which is totally different from what you’ve probably heard",
            thumbnail: {
                src: "/images/our-work/custom_apps.png",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "3",
            shortTitle: "SEO Audit",
            title: "Receive Your Free SEO Audit",
            description:
                "After the meeting, we’ll email you the Free SEO Audit. This is NO auto-generated report. The truth is proper SEO is as much Art as it is Science, and it takes a thoughtful human being a few hours to research competitors and really discover the correct keywords to go after. The keyword list alone is very valuable, as it will give you the exact path and strategy you need to start ranking your business on Google. It’s yours Free with no strings attached.",
            thumbnail: {
                src: "/images/our-work/ecommerce.png",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "4",
            shortTitle: "Pricing",
            title: "SEO Pricing & Disclaimer",
            description:
                "Our pricing for SEO services starts at $500/month for Local SEO and $1,500/month for National SEO. If your budget doesn’t allow for that, then it won’t make sense for us to do a meeting together or prepare an audit. The Free SEO Audit is reserved for companies that have the budget to move forward with SEO services. We reserve the right to refuse the Free SEO Audit to any project we feel we are not a fit with.",
            thumbnail: {
                src: "/images/our-work/api.webp",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-main-opacity-black-75">
            <section className="observe-navbar-intersect pt-24 lg:pt-32 w-full">
                <div className="relative max-w-screen-2xl mx-auto px-4 xs:px-10 pb-20 lg:py-32">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="flex-1 text-center lg:text-start">
                            <h5 className="text-main-primary text-sm mb-8">
                                SERVICES
                            </h5>
                            <h1 className="text-5xl font-bold mb-4">
                                Free SEO Audit
                            </h1>
                            <h3 className="text-2xl">
                                Get the exact keywords your competitors are
                                ranking with.
                            </h3>
                            <h3 className="text-2xl">
                                No Cost or Future Obligation. Guaranteed!
                            </h3>
                            <div className="flex mt-6 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="p-4 text-2xl bg-main-secondary rounded-2xl"
                                >
                                    <b>Let&apos;s go!</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:sticky z-10 top-[88px] lg:top-24 bg-main-secondary py-6">
                <div className="relative max-w-screen-2xl mx-auto">
                    <ul className="services-ul flex flex-wrap lg:flex-nowrap flex-row gap-y-6 gap-x-24 text-white px-4 xs:px-10 justify-center">
                        {whatWeCanDo.map((item, index) => (
                            <li key={index}>
                                <ScrollToLink id={item.id}>
                                    {item.svgIcon}
                                    <span className="line-clamp-2 text-center">
                                        {item.shortTitle}
                                    </span>
                                </ScrollToLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div>
                <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                    <div className="max-w-screen-2xl mx-auto px-6 sm:px-20 py-20 md:py-32">
                        <div className="flex flex-col md:flex-row gap-20 items-center">
                            <div className="flex-1">
                                <h2 className="text-4xl lg:text-6xl">
                                    Are SEO Services right for you?
                                </h2>
                            </div>
                            <div className="flex-1">
                                <ul className="flex flex-col gap-6">
                                    <li>
                                        <span>
                                            The truth is SEO services don&apos;t
                                            make sense for every business.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Are they right for your business?
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Let&apos;s find out together!
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            We&apos;ll put together a Free SEO
                                            Audit of your website and will also
                                            analyze up to 5 of your top
                                            competitors
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Together, we&apos;ll review the
                                            exact keywords you could be ranking
                                            for and determine if SEO makes sense
                                            as a strategy for your business
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Whether you choose to work with us
                                            or not, we will send you our
                                            comprehensive audit, and you will
                                            have valuable insight into desirable
                                            keywords your company can and should
                                            be ranking for.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Here is exactly how it works
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="lg:[&>*:nth-child(even)>*>*]:flex-row-reverse [&>*:nth-child(even)]:bg-main-background-darker">
                    <section
                        id="1"
                        className="observe-navbar-intersect w-full bg-main-background-dark"
                    >
                        <div className="max-w-screen-2xl mx-auto px-6 sm:px-20 py-10 md:py-20 lg:py-32">
                            <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
                                <div className="relative w-full md:w-[500px] min-h-[350px] md:min-h-[250px]">
                                    <Image
                                        src={whatWeCanDo[0].thumbnail.src}
                                        fill
                                        className="object-cover rounded-md"
                                        alt={
                                            whatWeCanDo[0].thumbnail
                                                .alternativeText
                                        }
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="mb-6">
                                        <h3 className="text-4xl mb-6">
                                            {whatWeCanDo[0].title}
                                        </h3>
                                        <p>{whatWeCanDo[0].description}</p>
                                    </div>
                                    <div className="flex">
                                        <Link
                                            href="/contact"
                                            className="px-5 py-2.5 text-2xl bg-main-secondary rounded-2xl"
                                        >
                                            Fill in!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {whatWeCanDo.map(
                        (item, index) =>
                            index != 0 && (
                                <section
                                    id={item.id}
                                    className="observe-navbar-intersect w-full bg-main-background-dark"
                                    key={index}
                                >
                                    <div className="max-w-screen-2xl mx-auto px-6 sm:px-20 py-10 md:py-20 lg:py-32">
                                        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
                                            <div className="relative w-full md:w-[500px] min-h-[350px] md:min-h-[250px]">
                                                <Image
                                                    src={item.thumbnail.src}
                                                    fill
                                                    className="object-cover rounded-md"
                                                    alt={
                                                        item.thumbnail
                                                            .alternativeText
                                                    }
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-4xl mb-6">
                                                    {item.title}
                                                </h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
