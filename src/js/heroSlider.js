// Initialize Swiper
const swiper = new Swiper('.heroSwiper', {
    // Enable fade effect
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    // Only one slide per view
    slidesPerView: 1,
    spaceBetween: 0,
    
    // Enable loop
    loop: true,
    
    // Auto play settings
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Enable keyboard control
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    
    // Smooth transition
    speed: 1000,
});