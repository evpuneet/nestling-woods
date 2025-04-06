document.addEventListener('DOMContentLoaded', function() {
    // Get all slides
    const slides = document.querySelectorAll('.gallerySlides');
    let currentSlideIndex = 0;
    const slideCount = slides.length;
    const autoplayInterval = 5000; // 5 seconds between slides
    let autoplayTimer;

    // Add these styles at the top of your file
    const styles = document.createElement('style');
    styles.textContent = `
    .slide-transition {
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .slide-title {
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: left center;
    }
    .slide-content {
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .fade-in {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        visibility: hidden;
    }
    .title-active {
        transform: translateX(0) rotate(0deg);
        opacity: 1;
    }
    .title-inactive {
        transform: translateX(50%) rotate(-90deg);
        opacity: 0.85;
    }
`;
    document.head.appendChild(styles);

    // Function to update slide widths
    function updateSlideWidths(activeIndex) {
        slides.forEach((slide, index) => {
            slide.classList.add('slide-transition');
        
            if (index === activeIndex) {
                slide.style.width = '80%';
                slide.style.opacity = '1';
            } else {
                slide.style.width = '10%';
                slide.style.opacity = '1';
            }
    
            // Update content visibility and styles
            const mainContent = slide.querySelector('p');
            const title = slide.querySelector('h3');
            const wrapperDiv = slide.querySelector('.target-div');

            if (wrapperDiv) {
                wrapperDiv.classList.add('slide-transition');
                wrapperDiv.style.flexDirection = index === activeIndex ? 'column' : 'row';
            }
            
            if (mainContent) {
                mainContent.style.opacity = index === activeIndex ? '1' : '0';
                mainContent.style.visibility = index === activeIndex ? 'visible' : 'hidden';
                mainContent.style.transition = 'opacity 0.5s ease-in-out';
                title.style.textAlign = index === activeIndex ? 'left' : 'right';
            }
    
            if (title) {
                if (index === activeIndex) {
                    // Reset to original active style
                    title.style.writingMode = "horizontal-tb";
                    title.style.transform = "rotate(0deg)";
                    title.style.opacity = "1";
                    title.style.fontSize = "";
                    title.style.lineHeight = "";
                    title.classList.remove("text-[12px]", "-rotate-90");
                    title.classList.add("text-lg", "xs:text-xl", "lg:text-3xl", "3xl:text-4xl", "opacity-100", "duration-500");
                } else {
                    // Apply vertical style for inactive slides
                    title.style.writingMode = "vertical-lr";
                    title.style.transform = "rotate(90deg)";
                    title.style.opacity = "1";
                    title.style.fontSize = "x-large";
                    title.style.lineHeight = "2.5";
                    title.classList.remove("text-lg", "xs:text-xl", "lg:text-3xl", "3xl:text-4xl");
                    title.classList.add("text-[12px]", "opacity-100", "duration-500", "-rotate-90");
                    
                }
            }
        });
    }
    
    
    

    // Function to go to next slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slideCount;
        updateSlideWidths(currentSlideIndex);
    }

    // Function to go to previous slide
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slideCount) % slideCount;
        updateSlideWidths(currentSlideIndex);
    }

    // Set up click handlers for each slide
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentSlideIndex = index;
            updateSlideWidths(currentSlideIndex);
            resetAutoplay();
        });
    });

    // Set up autoplay
    function startAutoplay() {
        clearInterval(autoplayTimer); // Always clear existing interval first
        autoplayTimer = setInterval(nextSlide, autoplayInterval);
    }

    // Reset autoplay timer
    function resetAutoplay() {
        startAutoplay(); // Simplified since startAutoplay now handles clearing
    }

    // Initialize slider
    updateSlideWidths(currentSlideIndex);
    startAutoplay();

    // Add event listeners for mobile navigation arrows
    const prevButton = document.querySelector('.group svg[viewBox="0 0 18 31"]').parentElement;
    const nextButton = document.querySelector('.group svg[viewBox="0 0 17 31"]').parentElement;

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });

    // Pause autoplay on hover
    const sliderContainerGallery = document.querySelector('.flex.flex-col.md\\:flex-row.w-full.h-full.relative');
    if (sliderContainerGallery) {
        sliderContainerGallery.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        sliderContainerGallery.addEventListener('mouseleave', startAutoplay);
    }
});

