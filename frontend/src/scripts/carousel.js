export let Carousel = (function () {
    class Carousel {
        #container;
        #inner;
        #items;
        #prev;
        #next;
        #currentIndex = 0;
        #numberOfSlides;
        #itemsPerSlide = 3;

        constructor(containerId, innerClass, itemClass, prevClass, nextClass) {
            this.#container = $(containerId);
            this.#inner =  this.#container.find(innerClass);
            this.#items =  this.#container.find(itemClass);
            this.#prev =  this.#container.find(prevClass);
            this.#next =  this.#container.find(nextClass);

            this.#numberOfSlides = Math.ceil(this.#items.length / this.#itemsPerSlide);

            this.prevSlide = this.prevSlide.bind(this);
            this.nextSlide = this.nextSlide.bind(this);

            this.#prev.on("click", this.prevSlide);
            this.#next.on("click", this.nextSlide);
        }

        moveSlide(direction) {
            let index = this.#currentIndex;
            index += direction;

            if(index < 0 || index > this.#numberOfSlides - 1) {
                return;
            }

            this.#inner.css("transform", `translate(${-index * this.#container.outerWidth(true)}px)`);
            this.#currentIndex = index;
        }

        prevSlide(e) {
            e.preventDefault();
            this.moveSlide(-1);
        }

        nextSlide(e) {
            e.preventDefault();
            this.moveSlide(1);
        }
    }

    return {
        init: function (containerId, innerClass, itemClass, prevClass, nextClass) {
            let carousel = new Carousel(containerId, innerClass, itemClass, prevClass, nextClass);
        },
    };
})();