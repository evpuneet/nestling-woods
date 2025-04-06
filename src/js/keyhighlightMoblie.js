const slides = [
  {
    image: "./public/key-highlight1.png",
    title: "Assured Rental Income",
    text: "Earn a steady income from your investment with assured rental income of ₹25,000 per month for Studio Apartments and ₹32,000 per month for 1 BHK apartments post-possession. A hassle-free way to generate income from your second home"
  },
  {
    image: "./public/key-highlight2.png", 
    title: "15 Days Complimentary Stay at Stonewood Hotels",
    text: " As an owner, you get 15 days of complimentary stay every year at any of the Stonewood Hotels properties across India. Enjoy luxury stays at prime destinations, making your investment not just a home, but a getaway too."
  },
  {
    image: "./public/key-highlight3.png",
    title: "Fully Furnished Luxury Apartments",
    text: "Each unit at Nestling Woods comes fully furnished, providing a ready-to-move-in experience. Designed with comfort and luxury in mind, these apartments are perfect for those seeking a high-end vacation home or second home in the hills"
  },
  {
    image: "./public/key-highlight4.png",
    title: "Premium Amenities & Clubhouse",
    text: "Each unit at Nestling Woods comes fully furnished, providing a ready-to-move-in experience. Designed with comfort and luxury in mind, these apartments are perfect for those seeking a high-end vacation home or second home in the hills"
  },
  {
    image: "./public/key-highlight5.png", 
    title: "Exclusive Location with Panoramic Hill Views",
    text: "Nestling Woods is located at 5000 feet above sea level, offering stunning panoramic views of the surrounding hills. Enjoy the serenity and beauty of the Himalayas right from your window or balcony."
  },
  {
    image: "./public/key-highlight6.png",
    title: "Strong Resale Value - Limited Units",
    text: "Invest in a property with strong resale potential. Limited units & high demand ensure long-term appreciation in Kasauli's exclusive market. Secure your financial future."
  }
];

let currentIndex = 0;
let nextIndex = 1;
let autoSlide;
const slideDuration = 5000; // 5 seconds

  // DOM Elements
  const slide2 = document.getElementById("slide2");
  const slider = document.getElementById('slider');
  const sliderImg = document.getElementById('slider-img');
  const sliderTitle = document.getElementById('slider-title');
  const sliderText = document.getElementById('slider-text');
  const progressBar = document.getElementById("progress-bar_keyHigh");
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  function updateProgressBar() {
    let progress = ((currentIndex + 1) / slides.length) * 100;
    progressBar.style.width = `${progress}%`;
  
    // Reset smoothly when last slide completes
    if (currentIndex === 0) {
      progressBar.style.transition = "none"; // Remove animation for instant reset
      progressBar.style.width = (1/ slides.length) * 100;; // Initial position
      // setTimeout(() => {
      //   progressBar.style.transition = "all 1s linear"; // Restore animation
      // }, 500); // Small delay to allow CSS transition reset
    }
  }

  // Function to update slider content with a fade effect
  function updateSlider() {
    const nextSlide = slides[nextIndex];
  
    if (slider.classList.contains("opacity-100")) {
      // Update slide 2 content
      slide2.querySelector("img").src = nextSlide.image;
      slide2.querySelector("h3").textContent = nextSlide.title;
      slide2.querySelector("p").textContent = nextSlide.text;
  
      // Crossfade
      slider.classList.replace("opacity-100", "opacity-0");
      slide2.classList.replace("opacity-0", "opacity-100");
    } else {
      // Update slide 1 content
      slider.querySelector("img").src = nextSlide.image;
      slider.querySelector("h3").textContent = nextSlide.title;
      slider.querySelector("p").textContent = nextSlide.text;
  
      // Crossfade
      slide2.classList.replace("opacity-100", "opacity-0");
      slider.classList.replace("opacity-0", "opacity-100");
    }
  
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % slides.length;

    updateProgressBar(); // Update progress bar on every slide change
  }
  
  // Start auto-slide
  function startAutoSlide() {
    autoSlide = setInterval(updateSlider, 5000); // Change every 5 seconds
  }
  
  

  // Event Listeners for buttons
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
    updateProgressBar();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
    updateProgressBar();
  });

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", startAutoSlide);