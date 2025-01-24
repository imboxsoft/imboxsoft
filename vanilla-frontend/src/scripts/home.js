import "./customers.js";
import "./expertiseCards.js";
import { Particles } from "./particles.js";
import { ImboxScrolling } from "./scroll.js";

export let Home = (function () {
    let particles = null;

    return {
        init: function () {
            const headerHeight = $("header").height();
            $(".scroll-section").css("padding-top", ` ${headerHeight}px`);

            particles = Particles.init(
                "#particles-canvas",
                "#8ebfd1",
                "#8ebfd1",
                144
            );
            Particles.start(particles);

            ImboxScrolling.init(
                ".scroll-hidden",
                "scroll-show",
                "scroll-section",
                "current-scroll"
            );
        },
        cancel: function () {
            if (particles) {
                Particles.cancel(particles);
            }
        },
    };
})();
