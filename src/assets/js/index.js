import '../scss/styles.scss';

import textImage from '../images/text-image.svg';
import recipe1 from '../images/recipe-1.svg';
import recipe2 from "../images/recipe-2.svg";
import recipe3 from "../images/recipe-3.svg";
import graphic1 from '../images/graphic-1.svg';
import graphic2 from "../images/graphic-2.svg";
import graphic3 from "../images/graphic-3.png";
import graphic4 from "../images/graphic-4.svg";
import person1 from "../images/man.jpg";
import person2 from "../images/person-2.svg";


import Slider from "./components/Slider";
import {TextImageSection} from "./components/TextImageSection"

// Dynamically update the `src` of the image in your HTML
const imgElement = document.querySelector('.c-text-image-section img');
imgElement.src = textImage;

const recipe1Img = document.querySelector('.js-image-1')
const recipe2Img = document.querySelector('.js-image-2')
const recipe3Img = document.querySelector('.js-image-3')
const firstGraphic = document.querySelector('.js-graphic-1 ')
const secondGraphic = document.querySelector('.js-graphic-2 ')
const thirdGraphic = document.querySelector('.js-graphic-3 ')
const fourthGraphic = document.querySelector('.js-graphic-4 ')

const personImg1 = document.querySelectorAll(".js-person-1")
const personImg2 = document.querySelector(".js-person-2")

for(let i = 0; i < personImg1.length; i++){
    personImg1[i].src = person1
}

recipe1Img.src = recipe1
recipe2Img.src = recipe2
recipe3Img.src = recipe3
firstGraphic.src = graphic1
secondGraphic.src = graphic2
thirdGraphic.src = graphic3
fourthGraphic.src = graphic4
personImg2.src = person2
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
    const slider = new Slider()
    slider.init()

});