import '../scss/styles.scss';

import textImage from '../images/text-image.svg';

// Dynamically update the `src` of the image in your HTML
const imgElement = document.querySelector('.c-text-image-section img');
imgElement.src = textImage;