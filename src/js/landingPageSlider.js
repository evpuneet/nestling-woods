var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // Responsive breakpoints
    breakpoints: {
        // Mobile (default)
        320: {
            slidesPerView: 1,
            effect: 'slide'
        },
        // Tablets (640px and up)
        640: {
            slidesPerView: 1,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }
        },
        // Desktop (1024px and up)
        1024: {
            slidesPerView: 1,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: -50,
                depth: 150,
                modifier: 1.5,
                slideShadows: false
            }
        }
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });