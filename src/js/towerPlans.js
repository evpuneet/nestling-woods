// Example slide data for Unit Plan Slider
const towerPlanSlides = [
    {
      image: "./public/unit-plan-map1.webp",
    },
    {
      image: "./public/unit-plan-map2.webp",
    },
    {
        image: "./public/unit-plan-map2.webp",
      },
  ];

  document.addEventListener("DOMContentLoaded", () => {
let towerPlanCurrentSlide = 0;

// Function to update slide content
function updateTowerPlanSlide(index) {
  towerPlanCurrentSlide = index;
  const slide = towerPlanSlides[index];
  console.log("click under tower plans")
  
  // Update the image
  document.getElementById("tower-plans-slide-image-lg").src = slide.image; 
  document.getElementById("tower-plans-slide-image-mob").src = slide.image; 

  updateTowerPlanActiveTab();
}

// Update active tab styling
function updateTowerPlanActiveTab() {
  // Top tabs (left)
  document.querySelectorAll(".tower-plans-tabs > li").forEach((btn, idx) => {
    btn.classList.toggle("activeUnitTab", idx === towerPlanCurrentSlide);
  });
}

  // Tab click events
  document.querySelectorAll(".tower-plans-tabs > li").forEach((div) => {
    div.addEventListener("click", () => {
      const index = parseInt(div.getAttribute("data-index"), 10);
      updateTowerPlanSlide(index);
    });
  });


// Initialize the slider on load
updateTowerPlanSlide(0);
  })