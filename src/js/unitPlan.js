document.addEventListener("DOMContentLoaded", () => {

  // Consolidated data structure
  const slidesData = [
    { 
      // Slide 0
      mainImage: "./public/unit-plan-map1.webp",
      type: "Studio",
      areas: [
        { 
          name: "Standard Unit",
          types: [
            { 
              image: './public/s1a1t1.png',
              heading: 'EXCLUSIVE Studio apartment',
              SuperArea: '706.93',
              CarpetArea: '400.10',
              BalconyArea: "91.7",
              OtherArea: "215.13",
              unit: "Sq.Ft"
            }
          ]
        },
        { 
          name: "Extended Balcony",
          types: [
            { 
              image: './public/s1a2t1.png',
              heading: 'Studio apartment with extended balcony - corner unit',
              SuperArea: '881.24',
              CarpetArea: '400.10',
              BalconyArea: "232.197",
              OtherArea: "248.94",
              unit: "Sq.Ft"
            }
          ]
        }
      ]
    },
    { 
      // Slide 1
      mainImage: "./public/unit-plan-map2.webp",
      type: "1 BHK",
      areas: [
        { 
          name: "Standard Unit",
          types: [
            { 
              image: './public/s2a1t1.png',
              heading: 'EXCLUSIVE 1BHK apartment',
              SuperArea: '922.13',
              CarpetArea: '620',
              BalconyArea: "134.79",
              OtherArea: "166.96",
              unit: "Sq.Ft"
            }
          ]
        },
        { 
          name: "Extended Balcony",
          types: [
            { 
              image: './public/s2a2t1.png',
              heading: 'EXCLUSIVE 1BHK apartment with extended balcony - corner unit',
              SuperArea: '1060.61',
              CarpetArea: '620',
              BalconyArea: "232.197",
              OtherArea: "208.413",
              unit: "Sq.Ft"
            }
          ]
        }
      ]
    }
  ];


  let currentSlide = 0;
  let currentArea = 0;
  let currentType = 0;

  
  // DOM Elements
  const mainImage = document.getElementById('unit-plan-slide-image');
  const heading = document.getElementById('unit-plan-slide-heading');
  const areaBtns = document.querySelectorAll('.area-btn');
  const combinationBtns = document.querySelectorAll('.combination-btn');
  const superArea = document.getElementById("unit-plan-slide-SuperArea");
  const carpetArea = document.getElementById("unit-plan-slide-CarpetArea");
  const balconyArea = document.getElementById("unit-plan-slide-BalconyArea");
  const otherArea = document.getElementById("unit-plan-slide-OtherArea");


// Modified combination button handler
function updateCombinationButtons() {
  combinationBtns.forEach((btn, btnIndex) => {
    const slide = slidesData[currentSlide];
    const area = slide.areas[btnIndex]; // Get corresponding area for this button
    const type = area.types[currentType];

    // Update button data attributes
    btn.dataset.slide = currentSlide;
    btn.dataset.area = btnIndex;
    btn.dataset.type = currentType;

    // Update button content
    const img = btn.querySelector('img');
    const typeElement = btn.querySelector('#unit-plan-mini-type');
    const priceElement = btn.querySelector('#unit-plan-mini-price');
    const areaElement = btn.querySelector('#unit-plan-mini-area'); // Add this element in HTML

    if (img) img.src = type.image;
    if (typeElement) typeElement.textContent = slide.type;
    if (priceElement) priceElement.textContent = `${type.SuperArea} ${type.unit}`;
    if (areaElement) areaElement.textContent = area.name; // Show area name (Standard/Extended)
  });
}


  // Main update function
  function updateAllContent() {
    const currentSlideData = slidesData[currentSlide];
    const currentAreaData = currentSlideData.areas[currentArea];
    const currentTypeData = currentAreaData.types[currentType];

    // Update main image and heading
    mainImage.src = currentTypeData.image;
    heading.innerHTML  = currentTypeData.heading;

    // Update measurements
    superArea.textContent = `${currentTypeData.SuperArea} ${currentTypeData.unit}`;
    carpetArea.textContent = `${currentTypeData.CarpetArea} ${currentTypeData.unit}`;
    balconyArea.textContent = `${currentTypeData.BalconyArea} ${currentTypeData.unit}`;
    otherArea.textContent = `${currentTypeData.OtherArea} ${currentTypeData.unit}`;

    // Update area buttons text and visibility
    function updateAreaButtons() {
      const currentAreas = slidesData[currentSlide].areas;
      areaBtns.forEach((btn, index) => {
        if (index < currentAreas.length) {
          const area = currentAreas[index];
          // Show Super Area from the first type instead of area name
          btn.textContent = `${area.types[0].SuperArea} ${area.types[0].unit}`;
          btn.style.display = 'flex';
        } else {
          btn.style.display = 'none';
        }
      });
    }

    // Update UI states
    updateAreaButtons()
    updateCombinationButtons();
    updateUnitPlanActiveTab();
    updateUnitPlanActiveIndicator();
  }

// Update active indicator animation
function updateUnitPlanActiveIndicator() {
  const indicator = document.getElementById("unit-plan-active-indicator");
  const percentage = 100 / slidesData.length;
  indicator.style.left = `${currentSlide * percentage}%`;
  indicator.style.width = `${percentage}%`;
}

// Update active tab styling
function updateUnitPlanActiveTab() {
  // Top tabs
  document.querySelectorAll(".unit-plan-tabs-top > div").forEach((btn, idx) => {
    btn.classList.toggle("activeUnitTab", idx === currentSlide);
  });

  // Bottom tabs
  document.querySelectorAll(".unit-plan-tabs-bottom > div").forEach((btn, idx) => {
    const isActive = idx === currentSlide;
    btn.classList.toggle("bg-theme", isActive);
    btn.classList.toggle("text-white", isActive);
    btn.querySelector('button').classList.toggle("activeUnitTab", isActive);
  });

  // Area buttons
  areaBtns.forEach((btn, index) => {
    const isActive = index === currentArea;
    btn.classList.toggle('bg-theme', isActive);
    btn.classList.toggle('text-white', isActive);
    btn.classList.toggle('bg-white', !isActive);
    btn.classList.toggle('text-theme', !isActive);
  });

  // Combination buttons
  combinationBtns.forEach(btn => {
    const isActive = parseInt(btn.dataset.area) === currentArea;
    btn.classList.toggle('bg-theme', isActive);
    btn.classList.toggle('bg-white', !isActive);
  });
}

// Event Listeners
document.querySelectorAll(".unit-plan-tabs-top > div").forEach((div) => {
  div.addEventListener("click", () => {
    currentSlide = parseInt(div.dataset.index);
    currentArea = 0;
    currentType = 0;
    updateAllContent(currentSlide);
  });
});

document.querySelectorAll(".unit-plan-tabs-bottom > div").forEach((div) => {
  div.addEventListener("click", () => {
    currentSlide = parseInt(div.dataset.index);
    currentArea = 0;
    currentType = 0;
    updateAllContent(currentSlide);
  });
});

areaBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentArea = parseInt(btn.dataset.area);
    currentType = 0;
    updateAllContent(currentSlide);
  });
});

combinationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentArea = parseInt(btn.dataset.area);
    currentType = parseInt(btn.dataset.type);
    updateAllContent(currentSlide);
  });
});

document.querySelectorAll(".unit-plan-prev").forEach(prev => {
  prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    currentArea = 0;
    currentType = 0;
    updateAllContent(currentSlide);
  });
});

document.querySelectorAll(".unit-plan-next").forEach(next => {
  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slidesData.length;
    currentArea = 0;
    currentType = 0;
    updateAllContent(currentSlide);
  });
});

// Initial setup
updateAllContent(0);
});