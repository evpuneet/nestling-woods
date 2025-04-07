// Example slide data for Unit Plan Slider
const unitPlanSlides = [
    {
      image: "./public/unit-plan-map1.webp",
      heading: "EXCLUSIVE Studio apartment ",
      price: "706.93", //its area dont confuse
      ReraCarpetArea: "1823.61 Sq.Ft",
      BalconyArea: "383.61 sq.ft.",
      type:"3+1 BHK",
    },
    {
      image: "./public/unit-plan-map2.webp",
      heading: "EXCLUSIVE 1 bhk Apartment",
      price: "922.13", //its area dont confuse
      ReraCarpetArea: "1823.61 sq.ft.",
      BalconyArea: "383.61 sq.ft.",
      type:"4+1 BHK",
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
let unitPlanCurrentSlide = 0;

// Function to update slide content
function updateUnitPlanSlide(index) {
  unitPlanCurrentSlide = index;
  const slide = unitPlanSlides[index];
  console.log(unitPlanCurrentSlide)
  
  // Update the image
  document.getElementById("unit-plan-slide-image").src = slide.image; //done725
  // Update all headings with the class "unit-plan-slide-heading"
  document.getElementById("unit-plan-slide-heading").textContent = slide.heading; //done772
  document.getElementById("unit-plan-slide-ReraCarpetArea").textContent = slide.ReraCarpetArea; //done772
  document.getElementById("unit-plan-slide-BalconyArea").textContent = slide.BalconyArea; //done772
  
  // Update all price tags with the class "unit-plan-slide-price"
  document.querySelectorAll(".unit-plan-slide-price").forEach((element) => { //done 767, 774
    element.textContent = slide.price + " Sq.Ft";
  });
  
  // --- Update Mini Data Display ---
  // Update the mini image
  document.getElementById("unit-plan-mini-image").src = slide.image;
  // Update the mini heading
  document.getElementById("unit-plan-mini-type").textContent = slide.type;
  // Update the mini price
  document.getElementById("unit-plan-mini-price").textContent = slide.price + " Sq.Ft";

  updateUnitPlanActiveTab();
  updateUnitPlanActiveIndicator();
}

function updateUnitPlanActiveIndicator() {
    // Assuming two tabs: indicator should move 0% or 50%
    const indicator = document.getElementById("unit-plan-active-indicator");
    if (indicator) {
      // Calculate left position. With 2 tabs, each tab takes 50%.
      const leftPercent = unitPlanCurrentSlide * 50;
      indicator.style.left = leftPercent + "%";
    }
  }

// Update active tab styling
function updateUnitPlanActiveTab() {
  // Top tabs (left)
  document.querySelectorAll(".unit-plan-tabs-top > div").forEach((btn, idx) => {
    btn.classList.toggle("activeUnitTab", idx === unitPlanCurrentSlide);
  });
  
  // Bottom tabs background update
  document.querySelectorAll(".unit-plan-tabs-bottom > div").forEach((btn, idx) => {
    btn.classList.toggle("bg-theme", idx === unitPlanCurrentSlide);
    btn.classList.toggle("text-[#fff]", idx === unitPlanCurrentSlide);
  });
  
  // Bottom tabs button text update
  document.querySelectorAll(".unit-plan-tabs-bottom > div > button").forEach((btn, idx) => {
    btn.classList.toggle("text-[#fff]", idx === unitPlanCurrentSlide);
    btn.classList.toggle("bg-theme", idx === unitPlanCurrentSlide);
  });
}

  // Tab click events
  document.querySelectorAll(".unit-plan-tabs-top>div").forEach((div) => {
    div.addEventListener("click", () => {
      const index = parseInt(div.getAttribute("data-index"), 10);
      updateUnitPlanSlide(index);
    });
  });

  // Tab click events
  document.querySelectorAll(".unit-plan-tabs-bottom>div").forEach((div) => {
      div.addEventListener("click", () => {
        const index = parseInt(div.getAttribute("data-index"), 10);
        updateUnitPlanSlide(index);
        
      });
    });

  // Navigation buttons
  document.querySelectorAll(".unit-plan-prev").forEach((prev)=>{
      prev.addEventListener("click", () => { //there are two prev btn 1 for lg and one for moblie
      const newIndex = (unitPlanCurrentSlide - 1 + unitPlanSlides.length) % unitPlanSlides.length;
      updateUnitPlanSlide(newIndex);
  })});

  document.querySelectorAll(".unit-plan-next").forEach((next)=>{
      next.addEventListener("click", () => { //there are two next btn 1 for lg and one for moblie
      const newIndex = (unitPlanCurrentSlide + 1) % unitPlanSlides.length;
      updateUnitPlanSlide(newIndex);
  })});



// Initialize the slider on load
updateUnitPlanSlide(0);
  })