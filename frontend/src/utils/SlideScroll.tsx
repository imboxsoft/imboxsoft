export default class SlideScrollManager {
    private onWheel: (e: WheelEvent) => void;
    private onTouchStart: (e: TouchEvent) => void;
    private onTouchMove: (e: TouchEvent) => void;

    private scrollSection: string = "";
    private currentScroll: string = "";
    private paused: boolean = true;
    private scrolling: boolean = false;
    private lastTouchY: number | null = null;

    private static instance: SlideScrollManager | null = null;

    private constructor(scrollSection: string, currentScroll: string) {
        this.initState(scrollSection, currentScroll);

        this.onWheel = (e: WheelEvent) => {
            if (!this.scrolling) {
                this.scrolling = true;

                if (!this.paused) {
                    if (e.deltaY > 0) {
                        this.scrollToSection("next");
                    } else {
                        this.scrollToSection("prev");
                    }
                }

                this.resetScrollingState();
            }
        };

        this.onTouchStart = (e: TouchEvent) => {
            this.lastTouchY = e.touches[0].clientY;
        };

        this.onTouchMove = (e: TouchEvent) => {
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

                this.resetScrollingState();
            }
        };

        window.addEventListener("wheel", this.onWheel);
        window.addEventListener("touchstart", this.onTouchStart);
        window.addEventListener("touchmove", this.onTouchMove, {
            passive: false,
        });
    }

    private initState(scrollSection: string, currentScroll: string) {
        this.scrollSection = scrollSection;
        this.currentScroll = currentScroll;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    private resetScrollingState() {
        setTimeout(() => (this.scrolling = false), this.paused ? 1000 : 250);
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

            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: "smooth",
            });
        }
    }

    assess() {
        if (window.innerWidth < 1024) {
            this.paused = true;
        } else {
            this.paused = false;
        }
    }

    pause() {
        this.paused = true;
    }

    destroy() {
        this.pause();

        window.removeEventListener("wheel", this.onWheel);
        window.removeEventListener("touchstart", this.onTouchStart);
        window.removeEventListener("touchmove", this.onTouchMove);

        SlideScrollManager.instance = null;

        console.log("ScrollManager instance destroyed.");
    }
}
