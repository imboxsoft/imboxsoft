export default function Home() {
    return (
        <div className="relative max-w-[1500px] mx-auto min-h-screen p-4 sm:p-16 lg:p-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-6 md:gap-10">
                <div className="row-span-2 lg:row-span-2 col-span-2 lg:col-span-3 rounded-2xl bg-gray-800 bg-opacity-40 px-10 md:px-14 pt-14 md:pt-20 pb-20 md:pb-32">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
                        IT Services and Consulting
                    </h1>
                    <h3 className="font-medium text-xl mb-8">
                        Empowering businesses through tech innovation with
                        software solutions & strategic IT consulting.
                    </h3>
                </div>
                <div className="rounded-2xl bg-gray-800 bg-opacity-40 p-10 row-span-1 lg:row-span-1"></div>
                <div className="rounded-2xl bg-gray-800 bg-opacity-40 p-10 row-span-1 lg:row-span-1"></div>
                <div className="col-span-2 lg:col-span-4 rounded-2xl bg-gray-800 bg-opacity-40 p-10"></div>
            </div>
        </div>
    );
}
