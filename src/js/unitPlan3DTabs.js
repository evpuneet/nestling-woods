// Example slide data for Unit Plan3d Slider
const unitPlanSlides3d = [
  {
    image: "./public/LivingRoom.png",
    heading: "Living Room",
    sub1: "Sunlit Serenity",
    para1: "Generous windows welcome streams of natural light, bathing the room in warmth and comfort.",
    sub2: "Naturally Illuminated",
    para2: "Abundant sunlight pours through wide windows, offering a tranquil and uplifting environment.",
    // sub3: "Entertainment Ready",
    // para3: "Equipped with audio-visual setup for movie nights and gatherings.",
  },
  {
    image: "./public/Balcony.png",
    heading: "Balcony",
    sub1: "Scenic Greenery",
    para1: "Thoughtfully curated landscaping with vibrant plants and peaceful garden views.",
    sub2: "Outdoor Culinary Space",
    para2: "Integrated BBQ setup ideal for cookouts, casual meals, and flavorful gatherings.",
    // sub3: "Beautiful Landscaping",
    // para3: "Lush greenery and well-maintained gardens for a serene setting.",
  },
  {
    image: "./public/kitchen.png",
    heading: "Modern Kitchen",
    sub1: "Stylish Aesthetic",
    para1: "Clean lines, modern finishes, and smart design for a polished, functional space.",
    sub2: "Premium Appliances",
    para2: "Equipped with the latest high-performance tools to elevate everyday cooking.",
    // sub3: "Contemporary Design",
    // para3: "Sleek cabinetry and fixtures that blend style and functionality.",
  },
  {
    image: "./public/Bathroom.png",
    heading: "Master Bathroom",
    sub1: "Elegant King Bed",
    para1: "Relax in a roomy, plush bed dressed with premium linens for restful nights.",
    sub2: "Expansive Walk-In Closet",
    para2: "Ample space to organize wardrobe essentials with ease and style.",
    // sub3: "En-Suite Bathroom",
    // para3: "Modern fixtures and a relaxing atmosphere for privacy.",
  },
  {
    image: "./public/dining.png",
    heading: "Dining",
    sub1: "Generous Table Setting",
    para1: "Perfectly sized to host memorable meals and meaningful conversations.",
    sub2: "Warm, Stylish Lighting",
    para2: "Modern fixtures cast a cozy glow, enhancing every dining experience.",
    // sub3: "Access to Outdoor Space",
    // para3: "Sliding doors leading to the terrace or backyard.",
  },
  // {
  //   image: "./public/unit-plan-map1.webp",
  //   heading: "Kids Bedroom",
  //   sub1: "Fun and Playful Design",
  //   para1: "Bright colors and themed decor for a cheerful atmosphere.",
  //   sub2: "Ample Storage",
  //   para2: "Built-in closets and shelving for toys and books.",
  //   sub3: "Safe Environment",
  //   para3: "Child-friendly materials and furnishings for peace of mind.",
  // },
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
