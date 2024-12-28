import './customers.js';
import { Particles } from './particles.js';
import { ImboxScrolling } from './scroll.js';

$(function() {
    Particles.init("#particles-canvas", "#8ebfd1", "#8ebfd1", 144);
    Particles.start();

    ImboxScrolling.init(".scroll-hidden", "scroll-show", "scroll-section", "current-scroll");
});