import { HeroSection } from "@/components/HeroSection";
import ServicesCardsSwiper from "@/components/ServicesCardsSwiper";
import Image from "next/image";
import routes from "@/constants/routes";
import Link from "next/link";
import { ScrollManagerEvaluator } from "@/components/ScrollManager";

export default async function Home() {
    const skills: string[] = [
        "Next.js",
        "Angular",
        "Alpinejs",
        "Tailwind",
        "Django",
        "Nodejs",
        "Laravel",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "GIT",
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Shopify",
        "Bigcommerce",
        "Stripe",
        "Paypal",
        "API Integration",
        "Photoshop",
        "Illustrator",
        "Figma",
    ];

    return (
        <div className="gap-16 font-[family-name:var(--font-geist-sans)]">
            <section className="sm:pt-24 scroll-section current-scroll sm:pb-10 max-w-screen-2xl mx-auto sm:px-4 lg:px-10 lg:min-h-screen lg:max-h-screen flex-1 flex flex-col">
                <HeroSection />
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-24 lg:py-0 flex items-center bg-main-background">
                <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="z-10">
                        <div className="scroll-hidden text-center md:text-right mb-10 md:mb-16">
                            <h1 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                                Welcome to
                                <span className="text-main-primary">
                                    {" "}
                                    Imboxsoft
                                </span>
                            </h1>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight">
                                <span className="leading-normal border-b-4 border-main-secondary">
                                    Your trusted partner in cutting-edge
                                    technology
                                </span>
                            </h2>
                        </div>

                        <div className="scroll-hidden text-justify">
                            <p className="mb-4">
                                Our company specializes in delivering tailored
                                software development solutions and comprehensive
                                IT consulting services. We are dedicated to
                                empowering our clients with the tools they need
                                to succeed in today&apos;s dynamic digital
                                landscape.
                            </p>

                            <p className="mb-4">
                                Partner with us today and we will harness
                                together the power of technology and propel your
                                business forward.
                            </p>

                            <p>
                                Navigate through our{" "}
                                <Link
                                    href="/services"
                                    className="text-main-secondary"
                                >
                                    Services page
                                </Link>{" "}
                                and find out how we can be of help to you.
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block absolute -top-[75px] left-[10px] z-0 max-w-48">
                        <Image
                            src="/images/home/megaphone.svg"
                            width={500}
                            height={500}
                            alt="Welcome to Imboxsoft"
                        />
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-24 lg:py-0 flex items-center bg-main-background-lighter">
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="text-center mb-8 md:mb-16">
                        <div className="scroll-hidden inline-flex items-center justify-center w-full mb-4">
                            <hr className="w-56 xs:w-64 md:w-72 h-[4px] my-8 bg-main-secondary-lighter border-0" />
                            <h3 className="text-2xl md:text-3xl font-bold absolute px-4 py-2 -translate-x-1/2 left-1/2 bg-main-background-dark text-center">
                                Our Expertise
                            </h3>
                        </div>
                        <h4 className="font-semibold text-2xl">
                            Comprehensive IT Services Tailored for Your Business
                        </h4>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20 w-full">
                        <div className="flex-1">
                            <p className="scroll-hidden mb-8 text-justify">
                                Imboxsoft specializes in a diverse array of
                                skills and systems, ensuring that we stay at the
                                forefront of innovation to meet the evolving
                                needs of our clients.
                            </p>
                            <p className="scroll-hidden mb-4 text-justify font-semibold">
                                Our core competencies include:
                            </p>
                            <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                                {skills.map((el, index) => (
                                    <li key={index}>
                                        <span className="block bg-main-secondary text-base font-semibold px-4 py-2 rounded-md">
                                            {el}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:max-w-[350px]">
                            <ServicesCardsSwiper
                                customBreakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 1,
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-24 lg:py-0 flex items-center bg-main-background">
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="relative flex flex-col md:flex-row gap-20 items-center">
                        <div className="flex-1 text-shadow z-10">
                            <div className="mb-16">
                                <h3 className="text-3xl md:text-5xl font-medium">
                                    Why Choose Us?
                                </h3>
                            </div>
                            <ul className="flex flex-col gap-10 drop-shadow-xl">
                                <li>
                                    <p>
                                        ✅ Years of experience in IT & software.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ✅ Full-stack expertise, from coding to
                                        branding.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ✅ Results-driven approach with
                                        cutting-edge solutions.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ✅ We stay up-to-date with the latest
                                        trends in IT.
                                    </p>
                                </li>
                                <li>
                                    <p>✅ Long career in Graphic Design.</p>
                                </li>
                                <li>
                                    <p>✅ We are available Monday to Sunday.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="absolute top-0 right-0 md:relative z-0 max-w-64 lg:max-w-96">
                            <Image
                                src="/images/home/why-us.avif"
                                width={1000}
                                height={1000}
                                alt="Why Imboxsoft?"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-24 lg:py-0 flex items-center bg-main-opacity-black-75">
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="text-center mt-20 mb-8 md:mb-16">
                        <h3 className="text-3xl md:text-5xl font-medium px-4 py-2">
                            Ready to start your digital transformation?
                        </h3>
                    </div>
                    <div className="flex flex-col gap-16 items-center">
                        <Link
                            href={routes.CONTACT}
                            className="bg-main-secondary px-6 py-4 font-semibold rounded-md"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            </section>

            <ScrollManagerEvaluator />
        </div>
    );
}
