export const SlideScrolling = (function () {
    let scrollSection: string;
    let currentScroll: string;
    let scrollInstance: SlideScroll | null = null;

    function initIntersectionObserver(
        actionDo: (entry: IntersectionObserverEntry) => void,
        actionUndo: (entry: IntersectionObserverEntry) => void
    ): IntersectionObserver {
        return new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    actionDo(entry);
                } else {
                    actionUndo(entry);
                }
            });
        });
    }

    function scrollToSection(direction: "next" | "prev") {
        const sections = document.querySelectorAll<HTMLElement>(
            `.${scrollSection}`
        );
        const currentSection = document.querySelector<HTMLElement>(
            `.${scrollSection}.${currentScroll}`
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
            currentSection.classList.remove(currentScroll);
            const nextSection = sections[nextIndex];
            nextSection.classList.add(currentScroll);

            console.log(nextSection.offsetTop);

            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: "smooth",
            });
        }
    }

    class SlideScroll {
        private observer: IntersectionObserver;

        constructor(toObserve: string, scrollShowClass: string) {
            // this.observer = initIntersectionObserver(
            //     (entry) => entry.target.classList.add(scrollShowClass),
            //     (entry) => entry.target.classList.remove(scrollShowClass)
            // );

            // const elements = document.querySelectorAll(`.${toObserve}`);
            // elements.forEach((el) => this.observer.observe(el));

            let scrolling = false;
            let startY: number | null = null;

            const onWheel = (e: WheelEvent) => {
                if (!scrolling) {
                    scrolling = true;

                    if (e.deltaY > 0) {
                        scrollToSection("next");
                    } else {
                        scrollToSection("prev");
                    }

                    setTimeout(() => (scrolling = false), 250);
                }
            };

            const onTouchStart = (e: TouchEvent) => {
                if (!scrolling) {
                    startY = e.touches[0].clientY;

                    setTimeout(() => (scrolling = false), 250);
                }
            };

            const onTouchMove = (e: TouchEvent) => {
                e.preventDefault();
                if (!scrolling && startY !== null) {
                    const currentY = e.touches[0].clientY;
                    scrolling = true;

                    if (currentY > startY) {
                        scrollToSection("prev");
                    } else if (currentY < startY) {
                        scrollToSection("next");
                    }

                    setTimeout(() => (scrolling = false), 250);
                }
            };

            window.addEventListener("wheel", onWheel);
            window.addEventListener("touchstart", onTouchStart);
            window.addEventListener("touchmove", onTouchMove, {
                passive: false,
            });

            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return {
        init: function (
            toObserve: string,
            scrollShowClass: string,
            _scrollSection: string,
            _currentScroll: string
        ) {
            scrollSection = _scrollSection;
            currentScroll = _currentScroll;

            if (!scrollInstance) {
                scrollInstance = new SlideScroll(toObserve, scrollShowClass);
            }
        },
    };
})();
