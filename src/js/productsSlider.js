const apartments = [
    { name: "fully Furnished", price: "706.93 ", image: "url('./public/product1.png')", para: "" },
    { name: "Fully Furnished", price: "922.13", image: "url('./public/product2.png')", para: "" },
    // { name: "Semi Furnished", price: "2500", image: "url('./public/keyHighlight_mobli2.webp')" },
    // { name: "Fully Furnished", price: "2300", image: "url('./public/keyHighlight_mobli3.webp')" },
];

let currentSlide = 0;
let autoplayTimer = null;
const AUTOPLAY_DELAY = 5000;

// DOM Elements
const sliderContainer = document.getElementById("slider-container");
const slidepara = document.getElementById("productSlideMd");
const sliderContainerMobile = document.getElementById("slider-container-res");
const slideNumber = document.getElementById("slide-number");
const apartmentName = document.getElementById("apartment-name");
const apartmentPrice = document.getElementById("apartment-price");
const apartmentNameMobile = document.getElementById("apartment-name-res");
const apartmentPriceMobile = document.getElementById("apartment-price-res");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const prevButtonMobile = document.getElementById("prev-slide-res");
const nextButtonMobile = document.getElementById("next-slide-res");
const tabs = document.querySelectorAll(".tab");
const tabIndicator = document.getElementById("tab-indicator");

function updateUI(index) {
    // Update desktop view
    if (sliderContainer) {
        sliderContainer.style.backgroundImage = apartments[index].image;
        apartmentName.textContent = apartments[index].name;
        apartmentPrice.textContent = apartments[index].price;
        slideNumber.textContent = `${String(index + 1).padStart(2, '0')}/${String(apartments.length).padStart(2, '0')}`;
    }

    // Update mobile view
    if (sliderContainerMobile) {
        sliderContainerMobile.style.backgroundImage = apartments[index].image;
        apartmentNameMobile.textContent = apartments[index].name;
        apartmentPriceMobile.textContent = apartments[index].price;
    }

    // Update tab indicator
    if (tabIndicator && tabs[index]) {
        const activeTab = tabs[index];
        tabIndicator.style.width = `${activeTab.offsetWidth}px`;
        tabIndicator.style.left = `${activeTab.offsetLeft}px`;
    }

    // Update active state of tabs
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateUI(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % apartments.length;
    updateUI(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + apartments.length) % apartments.length;
    updateUI(currentSlide);
}

function startAutoplay() {
    stopAutoplay(); // Clear any existing timer
    autoplayTimer = setInterval(() => {
        nextSlide();
    }, AUTOPLAY_DELAY);
}

function stopAutoplay() {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}

// Event Listeners
function initializeEventListeners() {
    // Desktop navigation
    if (prevButton) {
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            startAutoplay(); // Reset timer
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            startAutoplay(); // Reset timer
        });
    }

    // Mobile navigation
    if (prevButtonMobile) {
        prevButtonMobile.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            startAutoplay(); // Reset timer
        });
    }

    if (nextButtonMobile) {
        nextButtonMobile.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            startAutoplay(); // Reset timer
        });
    }

    // Tab navigation
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            goToSlide(index);
            startAutoplay(); // Reset timer
        });
    });

    // Pause autoplay on hover
    [sliderContainer, sliderContainerMobile].forEach(container => {
        if (container) {
            container.addEventListener('mouseenter', stopAutoplay);
            container.addEventListener('mouseleave', startAutoplay);
        }
    });
}

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    updateUI(currentSlide); // Set initial state
    initializeEventListeners();
    startAutoplay();
});