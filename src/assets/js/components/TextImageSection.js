class TextImageSection extends HTMLElement {
    constructor() {
        super();

        // DOM elements for the section and button
        this.DOM = {
            element: ".js-observe", // This should target the <custom-section> element
            section: ".js-hidden-section", // This should target the section you want to toggle visibility on
            toggleButton: ".js-toggle", // The toggle button for showing/hiding content
        };

        // Select the elements
        this.section = this.querySelector(this.DOM.section);
        this.button = this.querySelector(this.DOM.toggleButton);
        this.observerSection = this.querySelector(this.DOM.element);

        // Bind the toggle method to this class instance
        this.toggleContent = this.toggleContent.bind(this);

        // Initialize the Intersection Observer
        this.initIntersectionObserver();
    }

    connectedCallback() {
        // Ensure section exists before adding event listener
        if (this.section && this.button) {
            this.button.addEventListener("click", this.toggleContent);
        }

        // Start observing the section for visibility
        if (this.observerSection) {
            this.initIntersectionObserver();
        }
    }

    toggleContent() {
        this.section.classList.toggle("is-active"); // Toggle active state for the section
        this.button.classList.toggle("hidden")
    }

    initIntersectionObserver() {
        const observerOptions = {
            root: null,
            threshold: 0.1
        };

        // Initialize the IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-active");
                } else {
                    entry.target.classList.remove("is-active");
                }
            });
        }, observerOptions);

        // Observe the section that should be made visible once in view
        if (this.observerSection) {
            observer.observe(this.observerSection); // Start observing
        }
    }
}

// Define the custom element 'custom-section'
customElements.define("text-image-section", TextImageSection);
