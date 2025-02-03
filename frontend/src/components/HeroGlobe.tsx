import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function HeroGlobe() {
    const globeContainerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(500);

    useEffect(() => {
        const handleResize = () => {
            if (globeContainerRef.current) {
                setContainerHeight(globeContainerRef.current.clientHeight);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            ref={globeContainerRef}
            className="absolute w-full h-full top-0 left-0"
        >
            <div className="rounded-2xl overflow-hidden">
                <Globe
                    width={containerHeight}
                    height={containerHeight}
                    backgroundColor="rgba(0,0,0,0)"
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    pointsData={[
                        { lat: 46.5386, lng: 24.5514, size: 5 },
                        { lat: 45.4685, lng: 9.1824, size: 5 },
                        { lat: 32.3182, lng: -86.9023, size: 5 },
                    ]}
                />
            </div>
        </div>
    );
}
