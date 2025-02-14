import Image from "next/image";
import Link from "next/link";
import routes from "@/constants/routes";

export default function AboutUs() {
    return (
        <div>
            <section className="observe-navbar-intersect pt-32 w-full bg-main-background-lighter-lighter">
                <div className="relative max-w-screen-xl mx-auto px-4 xs:px-10 py-20">
                    <div className="md:w-2/3">
                        <h5 className="text-main-primary text-sm mb-8">
                            ABOUT US
                        </h5>
                        <h1 className="text-3xl font-bold mb-4">
                            Find out more about who we are and how we started
                        </h1>
                        <h3 className="text-2xl">
                            Progress is what drives our business initiative
                            forward. Let's embark onto new ships of technology
                            innovation and build a more efficient world.
                        </h3>
                    </div>
                    <div className="absolute right-0 bottom-0 translate-y-20">
                        <Image
                            src="/images/man.png"
                            alt="Imboxsoft Logo"
                            layout="intrinsic"
                            width={300}
                            height={50}
                        />
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-32 pb-20">
                    <div className="flex flex-row gap-32">
                        <div className="flex-1">
                            <h5 className="text-main-primary mb-6 font-semibold">
                                Making a difference
                            </h5>
                            <h2 className="text-4xl font-bold mb-10">
                                Our story
                            </h2>
                            <div>
                                <div className="mb-8">
                                    <p className="mb-4">
                                        The company’s two founders used to work
                                        independently as Full Stack Software
                                        Developers at reputable IT companies
                                        which gave start to the initiative of
                                        starting their own business in the
                                        software industry.
                                    </p>
                                    <p className="mb-4">
                                        Thus, in 2022, Imboxsoft was founded
                                        gaining a considerable start-up fund of
                                        €40.000 that propelled the company into
                                        securing considerable long-term
                                        relations and projects in the very first
                                        year of activity.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h5 className="text-2xl font-semibold mb-4">
                                        Who do we help?
                                    </h5>
                                    <p>
                                        Any business that relies on technology
                                        for growth. Our clients see us as a
                                        long-term strategic partner and trusted
                                        adviser for product design, development,
                                        DevOps, and more.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-2xl font-semibold mb-4">
                                        Our philosophy
                                    </h5>
                                    <p>
                                        Do good and the good will come to you.
                                        We treat each software project as our
                                        own because our client’s success fuels
                                        ours many times over.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Image
                                src="/images/blog_news.webp"
                                alt="Imboxsoft Logo"
                                layout="intrinsic"
                                width={300}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background">
                <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-32 pb-32">
                    <h5 className="text-main-primary mb-6 font-semibold text-center">
                        Meet the partners
                    </h5>
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        Co-Founders
                    </h2>
                    <div className="flex flex-row flex-wrap gap-20">
                        <div className="relative flex-1 flex justify-center">
                            <div className="flex flex-col gap-6">
                                <div className="relative h-64 min-w-52">
                                    <Image
                                        src="/images/team/bojan.jpg"
                                        alt="Picture of CEO & Co-Founder Bojan Alex-Narcis"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">
                                        Bojan Alex-Narcis
                                    </h3>
                                    <p>CEO & Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex-1 flex justify-center">
                            <div className="flex flex-col gap-6">
                                <div className="relative h-64 min-w-52">
                                    <Image
                                        src="/images/team/imbre.jpeg"
                                        alt="Picture of CTO & Co-Founder Imbre Jozsef-Jafet"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">
                                        Imbre Jozsef-Jafet
                                    </h3>
                                    <p>CTO & Co-Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 sm:py-24 lg:py-0 flex items-center bg-main-opacity-black-75">
                <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="text-center mb-8 md:mb-16">
                        <h3 className="text-3xl md:text-5xl font-medium px-4 py-2">
                            Let’s work together! Contact us today.
                        </h3>
                    </div>
                    <div className="flex flex-col gap-16 items-center">
                        <Link
                            href={routes.CONTACT}
                            className="bg-main-secondary px-6 py-4 font-semibold rounded-md"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
