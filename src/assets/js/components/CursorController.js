import { gsap } from "gsap";

export default class CursorController {
    constructor() {
        this.DOM = {
            cursorSmall: ".js-cursor-small",
            cursorLarge: ".js-cursor-large",
            cursorScale: ".js-cursor-scale",
        };

        this.cursorSmall = document.querySelector(this.DOM.cursorSmall);
        this.cursorLarge = document.querySelector(this.DOM.cursorLarge);
        this.cursorScale = document.querySelectorAll(this.DOM.cursorScale); // Use querySelectorAll for multiple elements

        this.mouseX = 0;
        this.mouseY = 0;
    }

    init() {
        this.onMouseMove();
        this.onHoverScale();
        this.movementAnimation();
    }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }

    onHoverScale() {
        if (this.cursorScale.length) {
            this.cursorScale.forEach((link) => {
                link.addEventListener("mouseenter", () => {
                    this.cursorLarge.classList.add("grow");
                    if (link.classList.contains("small")) {
                        this.cursorLarge.classList.remove("grow");
                        this.cursorLarge.classList.add("grow-small");
                    }
                });

                link.addEventListener("mouseleave", () => {
                    this.cursorLarge.classList.remove("grow");
                    this.cursorLarge.classList.remove("grow-small");
                });
            });
        }
    }

    movementAnimation() {
        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: () => {
                gsap.set(this.cursorLarge, {
                    css: {
                        left: this.mouseX,
                        top: this.mouseY,
                    },
                });
                gsap.set(this.cursorSmall, {
                    css: {
                        left: this.mouseX,
                        top: this.mouseY,
                    },
                });
            },
        });
    }
}
