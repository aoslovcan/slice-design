import "../scss/styles.scss";
import Slider from "./components/Slider";
import { TextImageSection } from "./components/TextImageSection";
import NavigationHandler from "./components/NavigationHandler";
import MobileNavigationHandler from "./components/MobileNavigationHandler";
import CursorController from "./components/CursorController";

import textImage from "../images/text-image.svg";
import recipe1 from "../images/recipe-1.svg";
import recipe2 from "../images/recipe-2.svg";
import recipe3 from "../images/recipe-3.svg";
import graphic1 from "../images/graphic-1.jpg";
import graphic2 from "../images/graphic-2.svg";
import graphic3 from "../images/graphic-3.png";
import graphic4 from "../images/graphic-4.svg";
import person1 from "../images/man.jpg";
import person2 from "../images/person-2.svg";

const ready = (callback) => {
    if (document.readyState !== "loading") {
        /**
         * Document is already ready, call the callback directly
         */
        callback();
    } else if (document.addEventListener) {
        /**
         * All modern browsers to register DOMContentLoaded
         */
        document.addEventListener("DOMContentLoaded", callback);
    } else {
        /**
         * Old IE browsers
         */
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "complete") {
                callback();
            }
        });
    }

    /**
     * Document ready callback
     */
};

ready(() => {
    const cursorController = new CursorController();
    cursorController.init();

    const slider = new Slider();
    slider.init();

    const navigationHandler = new NavigationHandler();
    navigationHandler.init();

    const mobileNavigationHandler = new MobileNavigationHandler();
    mobileNavigationHandler.init();
});
