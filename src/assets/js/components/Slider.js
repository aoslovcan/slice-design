import Swiper from "swiper"

export default class Slider {
    constructor() {
        this.DOM = {
            slider: ".js-slider",
            next: ".js-slider-next",
            prev: ".js-slider-prev",
            toggleButton: ".js-toggle-swiper",
        };

        this.slider = document.querySelector(this.DOM.slider);
        this.next = document.querySelector(this.DOM.next);
        this.prev = document.querySelector(this.DOM.prev);
        this.toggleButton = document.querySelector(this.DOM.toggleButton)
        this.swiper = null;
    }

    init() {
        if (this.slider) {
            this.initSwiper()

            if (this.swiper) {
                this.swiper.on("slideChange", () => {
                    console.log(`Active slide index: ${this.swiper.activeIndex}`);
                });


                this.prev.addEventListener("click", (ev) => {
                    this.swiper.slidePrev();
                });

                this.next.addEventListener("click", (ev) => {
                    this.swiper.slideNext();
                });
            }

            this.toggleSlider()

        }
    }

    toggleSlider() {
        if (this.toggleButton) {
            this.toggleButton.addEventListener("click", () => {
                if (this.swiper) {
                    this.swiper.destroy(true, true);
                    this.swiper = null;
                } else {
                    this.initSwiper()
                }
            })
        }
    }

    initSwiper() {
        this.swiper = new Swiper(this.DOM.slider, {
            slidesPerView: "auto",
            spaceBetween: 8,
            loop: false,
            watchSlidesVisibility: true,
            allowTouchMove: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
            },
            slideToClickedSlide: true,
            navigation: {
                nextEl: ".js-slider-next",
                prevEl: ".js-slider-prev",
            },
        });

    }
}