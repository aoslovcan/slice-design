import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
export default class NavigationHandler{
    constructor() {
        this.DOM = {
            navigationLink: ".js-nav-link",
        };

        this.navigationLinks = document.querySelectorAll(this.DOM.navigationLink)
    }

    init() {
        this.toggleActive()
    }

    toggleActive(){
        if(this.navigationLinks.length){
            for(let i=0; i < this.navigationLinks.length; i++){
                this.navigationLinks[i].addEventListener("click", (e) => {

                    e.preventDefault();
                    this.navigationLinks.forEach(link => {
                        link.classList.remove("active");
                    });

                    const targetAnchor = this.getAnchor(this.navigationLinks[i]);

                    if (targetAnchor) {
                        this.scrollToSection(targetAnchor);
                    }

                    this.navigationLinks[i].classList.add("active");
                })
            }
        }
    }

    scrollToSection(section, e){
        if (!section) return;

        const elem = document.querySelector(section);

        if (elem) {
            gsap.to(window, {
                scrollTo: elem,
                duration: 1,
                ease: "power2.out",
            });
        } else {
            return null;
        }
    }

    getAnchor (link) {
        if (
            link.protocol !== window.location.protocol ||
            link.host !== window.location.host ||
            link.pathname !== window.location.pathname ||
            link.search !== window.location.search
        ) {
            return false;
        }

        return link.hash;
    }
}