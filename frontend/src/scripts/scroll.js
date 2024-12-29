export let ImboxScrolling = (function () {
    let scrollSection;
    let currentScroll;

    function initIntersectionObserver(actionDo, actionUndo) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    actionDo(entry);
                } else {
                    actionUndo(entry);
                }
            });
        });
        return observer;
    }

    function scrollToSection(direction) {
        var currentSection = $(`.${scrollSection}.${currentScroll}`);
        var nextSection = null;
        var currentIndex = $(`.${scrollSection}`).index(currentSection);

        if (
            direction === "next" &&
            currentIndex < $(`.${scrollSection}`).length
        ) {
            nextSection = $(`.${scrollSection}`).eq(currentIndex + 1);
        } else if (currentIndex > 0) {
            nextSection = $(`.${scrollSection}`).eq(currentIndex - 1);
        }

        if (nextSection && nextSection.length > 0) {
            currentSection.removeClass(currentScroll);
            nextSection.addClass(currentScroll);
            $("body, html").animate(
                { scrollTop: nextSection.offset().top },
                800
            );
        }
    }

    class ImboxScrolling {
        #observer;

        constructor(toObserve, scrollShowClass) {
            this.#observer = initIntersectionObserver(
                function (entry) {
                    entry.target.classList.add(scrollShowClass);
                },
                function (entry) {
                    entry.target.classList.remove(scrollShowClass);
                }
            );
            const ref = this;
            $(toObserve).each(function (index, el) {
                ref.#observer.observe(el);
            });

            let scrolling = false;
            let startY;

            $("body").on("wheel touchstart", function (e) {
                if (!scrolling) {
                    if (e.type === "wheel") {
                        scrolling = true;

                        if (e.originalEvent.deltaY >= 0) {
                            scrollToSection("next");
                        } else {
                            scrollToSection("prev");
                        }

                        setTimeout(function () {
                            scrolling = false;
                        }, 800);
                    } else if (e.type === "touchstart") {
                        startY = e.originalEvent.touches[0].clientY;
                    }
                }
            });

            $("body").on("touchmove", function (e) {
                e.preventDefault();

                if (!scrolling) {
                    const currentY = e.originalEvent.touches[0].clientY;

                    scrolling = true;

                    if (currentY > startY) {
                        scrollToSection("prev");
                    } else if (currentY < startY) {
                        scrollToSection("next");
                    }

                    setTimeout(function () {
                        scrolling = false;
                    }, 800);
                }
            });

            $("body, html").animate({ scrollTop: 0 }, 800);
        }
    }

    return {
        init: function (
            toObserve,
            scrollShowClass,
            _scrollSection,
            _currentScroll
        ) {
            scrollSection = _scrollSection;
            currentScroll = _currentScroll;
            let imboxScrolling = new ImboxScrolling(toObserve, scrollShowClass);
        },
    };
})();
