const slides = [
  {
    image: "./public/key-high-mob01.png",
    title: "Assured Rental Income",
    text: "Earn a steady income from your investment with assured rental income of ₹25,000 per month for Studio Apartments and ₹32,000 per month for 1 BHK apartments post-possession. A hassle-free way to generate income from your second home"
  },
  {
    image: "./public/key-high-mob03.png", 
    title: "15 Days Complimentary Stay at Stonewood Hotels",
    text: " As an owner, you get 15 days of complimentary stay every year at any of the Stonewood Hotels properties across India. Enjoy luxury stays at prime destinations, making your investment not just a home, but a getaway too."
  },
  {
    image: "./public/key-high-mob05.png",
    title: "Fully Furnished Luxury Apartments",
    text: "Each unit at Nestling Woods comes fully furnished, providing a ready-to-move-in experience. Designed with comfort and luxury in mind, these apartments are perfect for those seeking a high-end vacation home or second home in the hills"
  },
  {
    image: "./public/key-high-mob04.png",
    title: "Premium Amenities & Clubhouse",
    text: "Enjoy world-class amenities, including a 12,000 sq. ft. clubhouse with a heated swimming pool, gym, spa, meditation center, kids play area, and more. Nestling Woods ensures a lifestyle of luxury and convenience."
  },
  {
    image: "./public/key-high-mob06.png", 
    title: "Exclusive Location with Panoramic Hill Views",
    text: "Nestling Woods is located at 5000 feet above sea level, offering stunning panoramic views of the surrounding hills. Enjoy the serenity and beauty of the Himalayas right from your window or balcony."
  },
  {
    image: "./public/key-high-mob05.png",
    title: "Strong Resale Value - Limited Units",
    text: "Invest in a property with strong resale potential. Limited units & high demand ensure long-term appreciation in Kasauli's exclusive market. Secure your financial future."
  }
];


  // DOM Elements
  const slide2 = document.getElementById("slide2");
  const slider = document.getElementById('slider');
  const sliderImg = document.getElementById('slider-img');
  const sliderTitle = document.getElementById('slider-title');
  const sliderText = document.getElementById('slider-text');
  const progressBar = document.getElementById("progress-bar_keyHigh");
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');


  let currentIndex = 0;
  let nextIndex = 1;
  let autoSlide;
  let isTransitioning = false; // Track if a transition is active
  const slideDuration = 5000;
  
  // DOM Elements and other variables remain the same
  
  function updateProgressBar() {
    let progress = ((currentIndex + 1) / slides.length) * 100;
    progressBar.style.width = `${progress}%`;
  
    // Reset smoothly when last slide completes
    if (currentIndex === slides.length - 1) {
      progressBar.style.transition = "none";
      progressBar.style.width = '0%';
      // Force a reflow to apply the reset without transition
      void progressBar.offsetWidth;
      progressBar.style.transition = "width 5s linear";
    } else {
      progressBar.style.transition = "width 5s linear";
    }
  }
  
  function updateSlider() {
    if (isTransitioning) return;
    isTransitioning = true;
  
    const nextSlide = slides[nextIndex];
    const activeSlide = slider.classList.contains("opacity-100") ? slider : slide2;
    const inactiveSlide = activeSlide === slider ? slide2 : slider;
  
    // Update inactive slide content
    inactiveSlide.querySelector("img").src = nextSlide.image;
    inactiveSlide.querySelector("h3").textContent = nextSlide.title;
    inactiveSlide.querySelector("p").textContent = nextSlide.text;
  
    // Trigger transition
    activeSlide.classList.replace("opacity-100", "opacity-0");
    inactiveSlide.classList.replace("opacity-0", "opacity-100");
  
    currentIndex = nextIndex;
    updateProgressBar();
  
    // Allow transitions after 500ms (match CSS transition duration)
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
  
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      nextIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }, slideDuration);
  }
  
  // Event Listeners
  nextBtn.addEventListener('click', () => {
    nextIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetAutoSlide();
  });
  
  prevBtn.addEventListener('click', () => {
    nextIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetAutoSlide();
  });
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    updateProgressBar();
    resetAutoSlide();
  });