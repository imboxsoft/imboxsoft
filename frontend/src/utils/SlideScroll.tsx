import getCssVariableValue from "@/utils/Colors";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export default class SlideScrollManager {
    private onWheel: (e: WheelEvent) => void;
    private onTouchStart: (e: TouchEvent) => void;
    private onTouchMove: (e: TouchEvent) => void;
    private onWindowResize: (e: Event) => void;

    private scrollSection: string = "";
    private currentScroll: string = "";
    private paused: boolean = true;
    private scrolling: boolean = false;
    private lastTouchY: number | null = null;

    private navbar: HTMLDivElement | null = null;
    private navbarObserved: NodeListOf<Element> | null = null;
    private navbarCurrentElement: Element | null = null;
    private navbarCallbackSetter: ((value: string) => void) | null = null;

    private static instance: SlideScrollManager | null = null;

    private constructor(scrollSection: string, currentScroll: string) {
        this.initState(scrollSection, currentScroll);

        this.onWheel = (e: WheelEvent) => {
            this.evaluateNavbarObserver();

            if (!this.scrolling) {
                this.scrolling = true;

                if (!this.paused) {
                    if (e.deltaY > 0) {
                        this.scrollToSection("next");
                    } else {
                        this.scrollToSection("prev");
                    }
                }

                this.timeoutsAfterSmoothScroll();
            }
        };

        this.onTouchStart = (e: TouchEvent) => {
            this.lastTouchY = e.touches[0].clientY;
        };

        this.onTouchMove = (e: TouchEvent) => {
            this.evaluateNavbarObserver();

            if (!this.scrolling) {
                this.scrolling = true;

                if (this.lastTouchY && !this.paused) {
                    e.preventDefault();

                    const currentY = e.touches[0].clientY;

                    this.scrolling = true;

                    if (currentY > this.lastTouchY) {
                        this.scrollToSection("prev");
                    } else if (currentY < this.lastTouchY) {
                        this.scrollToSection("next");
                    }
                }

                this.timeoutsAfterSmoothScroll();
            }
        };

        this.onWindowResize = (e: Event) => {
            this.assess();
        };

        window.addEventListener("wheel", this.onWheel);
        window.addEventListener("touchstart", this.onTouchStart);
        window.addEventListener("touchmove", this.onTouchMove, {
            passive: false,
        });
        window.addEventListener("resize", this.onWindowResize);
    }

    private initState(scrollSection: string, currentScroll: string) {
        this.scrollSection = scrollSection;
        this.currentScroll = currentScroll;

        this.smoothScrollWithCallback(0, () => {
            this.evaluateNavbarObserver();
        });
    }

    private timeoutsAfterSmoothScroll() {
        setTimeout(
            () => {
                this.scrolling = false;
            },
            this.paused ? 1000 : 250
        );
    }

    private scrollToSection(direction: "next" | "prev") {
        const sections = document.querySelectorAll<HTMLElement>(
            `.${this.scrollSection}`
        );
        const currentSection = document.querySelector<HTMLElement>(
            `.${this.scrollSection}.${this.currentScroll}`
        );

        if (!currentSection) return;

        const currentIndex = Array.from(sections).indexOf(currentSection);
        let nextIndex: number | null = null;

        if (direction === "next" && currentIndex < sections.length - 1) {
            nextIndex = currentIndex + 1;
        } else if (direction === "prev" && currentIndex > 0) {
            nextIndex = currentIndex - 1;
        }

        if (nextIndex !== null) {
            currentSection.classList.remove(this.currentScroll);
            const nextSection = sections[nextIndex];
            nextSection.classList.add(this.currentScroll);

            this.smoothScrollWithCallback(nextSection.offsetTop, () => {
                this.evaluateNavbarObserver();
            });
        }
    }

    private smoothScrollWithCallback(top: number, onComplete: () => void) {
        window.scrollTo({
            top: top,
            behavior: "smooth",
        });

        const initialPosition = window.scrollY;
        let lastPosition = window.scrollY;
        let index = 0;

        const checkIfScrollingStopped = () => {
            if (
                initialPosition !== window.scrollY &&
                lastPosition === window.scrollY
            ) {
                if (index === 3) {
                    onComplete();
                } else {
                    index++;
                    requestAnimationFrame(checkIfScrollingStopped);
                }
            } else {
                lastPosition = window.scrollY;
                requestAnimationFrame(checkIfScrollingStopped);
            }
        };

        requestAnimationFrame(checkIfScrollingStopped);
    }

    public static getInstance(scrollSection: string, currentScroll: string) {
        let instance = SlideScrollManager.instance;
        if (!instance) {
            instance = new SlideScrollManager(scrollSection, currentScroll);
            SlideScrollManager.instance = instance;
        } else {
            instance.initState(scrollSection, currentScroll);
        }
        return instance;
    }

    public static getCurrentInstance() {
        return SlideScrollManager.instance;
    }

    public assess() {
        if (window.innerWidth < 1024) {
            this.paused = true;
        } else {
            this.paused = false;
        }
    }

    public activateNavbarObserver(
        navbarRef: HTMLDivElement | null,
        observed: string,
        callback: (value: string) => void
    ) {
        this.navbar = navbarRef;
        this.navbarObserved = document.querySelectorAll(observed);
        this.navbarCallbackSetter = callback;
    }

    public deactivateNavbarObserver() {
        this.navbar = null;
        this.navbarObserved = null;
        this.navbarCallbackSetter = null;
    }

    public isNavbarObserverActive(): boolean {
        if (
            !this.navbar ||
            !this.navbarObserved ||
            !this.navbarCallbackSetter
        ) {
            return false;
        }
        return true;
    }

    private checkIntersection(
        xa: number,
        xb: number,
        ya: number,
        yb: number
    ): boolean {
        return (xa > ya && xa < yb) || (xb > ya && xb < yb);
    }

    private evaluateNavbarObserver() {
        if (
            !this.navbar ||
            !this.navbarObserved ||
            !this.navbarCallbackSetter
        ) {
            return;
        }

        let section: Element | null = null;

        if (window.scrollY != 0) {
            const navbarHeight = this.navbar.offsetHeight;
            const navbarTop = this.navbar.offsetTop + navbarHeight / 2;
            const navbarBottom = navbarTop + navbarHeight - navbarHeight / 2;

            if (this.navbarCurrentElement) {
                const currentBounds =
                    this.navbarCurrentElement.getBoundingClientRect();
                const cst = currentBounds.top;
                const csb = currentBounds.bottom;

                if (this.checkIntersection(navbarTop, navbarBottom, cst, csb)) {
                    return;
                }
            }

            for (const entry of this.navbarObserved) {
                const entryBounds = entry.getBoundingClientRect();
                const est = entryBounds.top;
                const esb = entryBounds.bottom;

                if (
                    this.checkIntersection(navbarTop, navbarBottom, est, esb) &&
                    entry != this.navbarCurrentElement
                ) {
                    section = entry;
                }
            }

            if (section && this.navbarCurrentElement != section) {
                let sectionBg =
                    window.getComputedStyle(section).backgroundColor;
                this.navbarCurrentElement = section;
                if (
                    sectionBg === "transparent" ||
                    sectionBg === "rgba(0, 0, 0, 0)"
                ) {
                    sectionBg = getCssVariableValue(
                        fullConfig.theme?.colors?.main.opacity["black-75"]
                    );
                }

                this.navbarCallbackSetter(sectionBg || "transparent");
            }
        } else {
            this.navbarCurrentElement = null;
            this.navbarCallbackSetter("transparent");
        }
    }

    public pause() {
        this.paused = true;
    }

    public destroy() {
        this.pause();

        window.removeEventListener("wheel", this.onWheel);
        window.removeEventListener("touchstart", this.onTouchStart);
        window.removeEventListener("touchmove", this.onTouchMove);
        window.removeEventListener("resize", this.onWindowResize);

        SlideScrollManager.instance = null;

        console.log("ScrollManager instance destroyed.");
    }
}
