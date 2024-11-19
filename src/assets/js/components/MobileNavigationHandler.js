import gsap from "gsap";

export default class MobileNavigationHandler {
    constructor() {
        this.DOM = {
            toggleButton: ".js-toggle-nav",
            mobileNavigation: ".js-mobile-nav",
            menuItem: ".js-menu-item",
        };

        this.toggleButton = document.querySelector(this.DOM.toggleButton);
        this.mobileNavigation = document.querySelector(this.DOM.mobileNavigation);
        this.menuItem = document.querySelectorAll(this.DOM.menuItem);
    }

    init() {
        this.handleButton();
    }

    handleButton() {
        if (this.toggleButton) {
            this.toggleButton.addEventListener("click", () => {
                this.toggleButton.classList.toggle("has-ham-active");

                this.openNavigation();
            });
        }
    }

    openNavigation() {
        if (this.mobileNavigation) {
            if (this.mobileNavigation.classList.contains("hidden")) {
                this.mobileNavigation.classList.remove("hidden");
                gsap.fromTo(
                    this.mobileNavigation,
                    { x: "100%" },
                    {
                        x: "0%",
                        duration: 1,
                        ease: "expo.inOut",
                        onComplete: () => {
                            gsap.to(this.menuItem, {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                                ease: "expo.inOut",
                                stagger: 0.1,
                            });
                        },
                    },
                );
            } else {
                gsap.fromTo(
                    this.mobileNavigation,
                    { x: "0%" },
                    {
                        x: "120%",
                        duration: 1,
                        ease: "expo.inOut",
                        stagger: 0.2,
                        onComplete: () => {
                            this.mobileNavigation.classList.add("hidden");
                        },
                    },
                );
            }
        }
    }
}
