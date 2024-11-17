import '../scss/styles.scss';

import textImage from '../images/text-image.svg';
import {TextImageSection} from "./components/TextImageSection"

// Dynamically update the `src` of the image in your HTML
const imgElement = document.querySelector('.c-text-image-section img');
imgElement.src = textImage;


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

});