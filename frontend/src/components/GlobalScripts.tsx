import Script from "next/script";

export default function GlobalScripts() {
    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
                strategy="lazyOnload"
            ></Script>
        </>
    );
}
