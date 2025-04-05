// Example slide data for Unit Plan3d Slider
const unitPlanSlides3d = [
  {
    image: "./public/unit-plan-map2.webp",
    heading: "Living Room",
    sub1: "State-of-the-Art Appliances",
    para1: "Large windows for natural light and a warm ambiance.",
    sub2: "Stylish Furnishings",
    para2: "Modern furniture that combines comfort and elegance.",
    sub3: "Entertainment Ready",
    para3: "Equipped with audio-visual setup for movie nights and gatherings.",
  },
  {
    image: "./public/unit-plan-map1.webp",
    heading: "Outdoor Living",
    sub1: "Inviting Outdoor Seating",
    para1: "Comfortable lounge area for relaxing and entertaining.",
    sub2: "Built-in BBQ Area",
    para2: "Perfect for grilling and outdoor cooking experiences.",
    sub3: "Beautiful Landscaping",
    para3: "Lush greenery and well-maintained gardens for a serene setting.",
  },
  {
    image: "./public/amenities-img3.webp",
    heading: "Kitchen",
    sub1: "State-of-the-Art Appliances",
    para1: "High-efficiency appliances for modern cooking needs.",
    sub2: "Spacious Countertops",
    para2: "Ample space for meal prep and entertaining.",
    sub3: "Contemporary Design",
    para3: "Sleek cabinetry and fixtures that blend style and functionality.",
  },
  {
    image: "./public/unit-plan-map1.webp",
    heading: "Master Bedroom",
    sub1: "Luxurious King-Size Bed",
    para1: "Spacious bed with high-quality linens for ultimate comfort.",
    sub2: "Walk-In Closet",
    para2: "Generous storage space for clothing and accessories.",
    sub3: "En-Suite Bathroom",
    para3: "Modern fixtures and a relaxing atmosphere for privacy.",
  },
  {
    image: "./public/unit-plan-map2.webp",
    heading: "Dining",
    sub1: "Elegant Dining Table",
    para1: "Spacious table accommodating family gatherings and dinners.",
    sub2: "Ambient Lighting",
    para2: "Chic chandelier and warm lights for an inviting atmosphere.",
    sub3: "Access to Outdoor Space",
    para3: "Sliding doors leading to the terrace or backyard.",
  },
  {
    image: "./public/unit-plan-map1.webp",
    heading: "Kids Bedroom",
    sub1: "Fun and Playful Design",
    para1: "Bright colors and themed decor for a cheerful atmosphere.",
    sub2: "Ample Storage",
    para2: "Built-in closets and shelving for toys and books.",
    sub3: "Safe Environment",
    para3: "Child-friendly materials and furnishings for peace of mind.",
  },
];

let unitPlanCurrentSlide3d = 0;

// Function to update slide content
function updateUnitPlanSlide3d(index) {
  unitPlanCurrentSlide3d = index;
  const slide = unitPlanSlides3d[index];

  // Update the image
  document.getElementById("unit-plan-3d-image").src = slide.image; //done725

  // Update all headings with the class "unit-plan-3d-heading"
  document.getElementById("unit-plan-3d-heading").textContent = slide.heading; //done772

  document.getElementById("unit-plan-3d-sub1").textContent =slide.sub1;
  document.getElementById("unit-plan-3d-para1").textContent = slide.para1;
  document.getElementById("unit-plan-3d-sub2").textContent =slide.sub2;
  document.getElementById("unit-plan-3d-para2").textContent = slide.para2;
  document.getElementById("unit-plan-3d-sub3").textContent =slide.sub3;
  document.getElementById("unit-plan-3d-para3").textContent = slide.para3;

  updateUnitPlanActiveTab();
}

// Update active tab styling
function updateUnitPlanActiveTab() {
  //tabs for larger screens
  document.querySelectorAll(".unit-plan-3d-tabs-lg").forEach((tab, idx) => {
    tab.classList.toggle("active-unit-plan-3d-tabs", idx === unitPlanCurrentSlide3d);
  });

//   tabs for moblies devies
  document.querySelectorAll(".unit-plan-3d-tabs-lg>div>svg").forEach((tab, idx) => {
    tab.classList.toggle("stroke-[#fff]", idx === unitPlanCurrentSlide3d);
  });

  document.querySelectorAll(".unit-plan-3d-tabs").forEach((tab, idx) => {
    tab.classList.toggle("active-unit-plan-3d-tabs", idx === unitPlanCurrentSlide3d);
  });

//   tabs for moblies devies
  document.querySelectorAll(".unit-plan-3d-tabs>div>svg").forEach((tab, idx) => {
    tab.classList.toggle("stroke-[#fff]", idx === unitPlanCurrentSlide3d);
  });
}

// Tab click events
document.querySelectorAll(".unit-plan-3d-tabs-lg").forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = parseInt(tab.getAttribute("data-index"), 10);
    updateUnitPlanSlide3d(index);
    console.log("Tab clicked, index:", index);  // Debug log
  });
});

// Tab click events
document.querySelectorAll(".unit-plan-3d-tabs").forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = parseInt(tab.getAttribute("data-index"), 10);
      updateUnitPlanSlide3d(index);
      console.log("Tab clicked, index:", index);  // Debug log
    });
  });

// Initialize the slider on load
updateUnitPlanSlide3d(0);
