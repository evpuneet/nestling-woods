document.addEventListener("DOMContentLoaded", () => {


// Example slide data for Unit Plan Slider
const slidesData = [
  { // Slide 1
      areas: [
          { // Area 1
              types: [
                  { image: './public/unit-plan-map1.webp', heading: 'Slide 1 Area 1 Type 1', },
                  { image: './public/unit-plan-map2.webp', heading: 'Slide 1 Area 1 Type 2' }
              ]
          },
          { // Area 2
              types: [
                  { image: './public/sm5.webp', heading: 'Slide 1 Area 2 Type 1' },
                  { image: './public/sm6.webp', heading: 'Slide 1 Area 2 Type 2' }
              ]
          }
      ]
  },
  { // Slide 2
      areas: [
          { // Area 1
              types: [
                  { image: './public/sm1.webp', heading: 'Slide 2 Area 1 Type 1' },
                  { image: './public/sm2.webp', heading: 'Slide 2 Area 1 Type 2' }
              ]
          },
          { // Area 2
              types: [
                  { image: './public/sm3.webp', heading: 'Slide 2 Area 2 Type 1' },
                  { image: './public/sm4.webp', heading: 'Slide 2 Area 2 Type 2' }
              ]
          }
      ]
  }
];

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




let unitPlanCurrentSlide = 0;
let currentArea = 0;
let currentType = 0;

const areaBtns = document.querySelectorAll('.area-btn');
const typeBtns = document.querySelectorAll('.type-btn');
const mainImage = document.getElementById('unit-plan-slide-image');
const heading = document.getElementById('unit-plan-slide-heading');
const combinationBtns = document.querySelectorAll('.combination-btn');

// Function to update slide content
function updateUnitPlanSlide(index) {
  unitPlanCurrentSlide = index;
  const slide = unitPlanSlides[index];

  
  // Update the image
  mainImage.src = slide.image; //done725
  // Update all headings with the class "unit-plan-slide-heading"
  heading.textContent = slide.heading; //done772
  document.getElementById("unit-plan-slide-ReraCarpetArea").textContent = slide.ReraCarpetArea; //done772
  document.getElementById("unit-plan-slide-BalconyArea").textContent = slide.BalconyArea; //done772
  
  // Update all price tags with the class "unit-plan-slide-price"
  document.querySelectorAll(".unit-plan-slide-price").forEach((element) => { //done 767, 774
    element.textContent = slide.price + " Sq.Ft";
  });
  

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

  // Update area buttons
  areaBtns.forEach((btn, index) => {
    btn.classList.toggle('bg-theme', index === currentArea);
    btn.classList.toggle('text-white', index === currentArea);
    btn.classList.toggle('bg-white', index !== currentArea);
    btn.classList.toggle('text-theme', index !== currentArea);
  });

  // Update type buttons
  typeBtns.forEach((btn, index) => {
      btn.classList.toggle('bg-theme', index === currentType);
      btn.classList.toggle('text-white', index === currentType);
      btn.classList.toggle('bg-white', index !== currentType);
      btn.classList.toggle('text-theme', index !== currentType);
  });

  // Update combination buttons
  combinationBtns.forEach(btn => {
    const isActive = parseInt(btn.dataset.slide) === unitPlanCurrentSlide &&
                 parseInt(btn.dataset.area) === currentArea &&
                 parseInt(btn.dataset.type) === currentType;
    btn.classList.toggle('bg-amber-800', isActive);
    btn.classList.toggle('bg-amber-600', !isActive);
    });

  // Update content
  const currentData = slidesData[unitPlanCurrentSlide].areas[currentArea].types[currentType];
  mainImage.src = currentData.image;
  heading.textContent = currentData.heading;
}






  // Tab click events
  document.querySelectorAll(".unit-plan-tabs-top>div").forEach((div) => {
    div.addEventListener("click", () => {
      const index = parseInt(div.getAttribute("data-index"), 10);
      currentArea = 0;
      currentType = 0;
      updateUnitPlanSlide(index);
    });
  });

  areaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentArea = parseInt(btn.dataset.area);
        currentType = 0;
        updateUnitPlanActiveTab();
    });
  });

  typeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          currentType = parseInt(btn.dataset.type);
          updateUnitPlanActiveTab();
      });
  });

  // Add event listeners for combination buttons
  combinationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        unitPlanCurrentSlide = parseInt(btn.dataset.slide);
        const index = parseInt(btn.dataset.index);
        currentArea = parseInt(btn.dataset.area);
        currentType = parseInt(btn.dataset.type);
        updateUnitPlanActiveTab(index);
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

