export default function Home() {
    const technologies: string[] = [
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "Alpinejs",
        "Jquery",
        "Django",
        "Nodejs",
        "Laravel",
        ".NET",
        "SQL",
        "Tailwind",
        "MongoDB",
        "Linux/Windows/Macos Systems",
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Shopify",
        "Bigcommerce",
        "Stripe",
        "Paypal",
    ];
    return (
        <div className="text-lg max-w-[1500px] mx-auto min-h-screen p-4 sm:p-16 lg:p-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <section className="scroll-section min-h-screen flex items-center">
                <div className="w-full max-w-screen-xl m-auto">
                    <div className="scroll-hidden text-right">
                        <div className="flex flex-row justify-end mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
                            <h1>
                                Welcome to
                                <span className="text-main-blue">
                                    {" "}
                                    Imboxsoft
                                </span>
                            </h1>
                        </div>
                        <h2 className="mb-24 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight">
                            <span className="underline underline-offset-3 decoration-8 decoration-main-light">
                                Pioneering Innovation in Technology
                            </span>
                        </h2>
                    </div>

                    <div className="scroll-hidden">
                        <p className="mb-6">
                            Your trusted partner in cutting-edge technology
                            solutions. With a relentless passion for innovation,
                            we specialize in delivering tailored software
                            development solutions and comprehensive IT
                            consulting services. Our team of distinguished
                            experts transforms ideas into reality, crafting
                            intuitive software applications that drive
                            efficiency and growth for businesses of all sizes.
                            From custom software development to strategic IT
                            consulting, we are dedicated to empowering our
                            clients with the tools they need to succeed in
                            today&apos;s dynamic digital landscape. Partner with
                            us to harness the power of technology and propel
                            your business forward.
                        </p>

                        <p className="mb-6">
                            At Imboxsoft, we are committed to pushing the
                            boundaries of technology. Our team of dedicated
                            professionals strives to deliver cutting-edge
                            solutions that redefine industry standards. With a
                            focus on creativity, innovation, and excellence, we
                            aim to leave a lasting impact on the tech landscape.
                        </p>

                        <p>
                            Welcome to Imboxsoft – where innovation meets
                            opportunity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="scroll-section min-h-screen flex items-center">
                <div className="w-full max-w-screen-xl m-auto">
                    <div className="scroll-hidden inline-flex items-center justify-center w-full mb-10">
                        <hr className="w-80 h-[2px] my-8 bg-main-blue border-0" />
                        <h3 className="text-4xl font-bold absolute px-4 py-2 -translate-x-1/2 left-1/2 bg-gray-900 text-center">
                            Expertise
                        </h3>
                    </div>

                    <div className="flex flex-row flex-wrap gap-10 mb-10 justify-between">
                        <p className="scroll-hidden w-1/2">
                            Imboxsoft specializes in a diverse array of
                            technologies and systems, ensuring that we stay at
                            the forefront of innovation to meet the evolving
                            needs of our clients. Our core competencies include:
                        </p>

                        <div className="scroll-hidden flex-1 h-60 flex justify-end">
                            <div
                                id="expertise-cards-container"
                                className="relative w-48 [&>*]:bg-slate-50 [&>*]:w-48 [&>*]:h-60 [&>*]:shadow [&>*]:p-6 [&>*]:absolute"
                            >
                                <div className="cursor-pointer expertise-card duration-300 z-10">
                                    <span>Graphic Design</span>
                                </div>
                                <div className="cursor-pointer expertise-card duration-300 z-10">
                                    <span>IT Consulting</span>
                                </div>
                                <div className="cursor-pointer expertise-card duration-300 z-10">
                                    <span>Web development</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-hidden">
                        <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                            {technologies.map((el, index) => (
                                <li key={index}>
                                    <span className="block bg-gray-700 text-xs font-medium px-4 py-2 rounded-md">
                                        {el}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
