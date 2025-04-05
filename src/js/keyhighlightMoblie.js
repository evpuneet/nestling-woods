const slides = [
  {
    image: "./public/keyHighlight_mobli.png",
    title: " Prime location",
    text: "Situated on the sector-dividing road of Sector 67, The Pinnacle provides easy access to Chandigarh International Airport, IT City, and prominent educational institutions."
  },
  {
    image: "./public/keyHighlight_mobli2.webp", 
    title: "Spacious Residences",
    text: "The project features meticulously designed 3+1 and 4+1 BHK apartments, ranging from 2,950 to 3,900 sq. ft., ensuring ample living space."
  },
  {
    image: "./public/keyHighlight_mobli3.webp",
    title: "Extensive Amenities",
    text: "Residents can enjoy a clubhouse, gymnasium, swimming pool, spa, indoor games, and dedicated areas for tennis, basketball, and volleyball."
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