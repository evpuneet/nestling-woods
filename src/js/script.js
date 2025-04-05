// Select elements
const megaMenuToggle = document.getElementById('meagaMenuBtn_lg');
const dropdowns = document.querySelectorAll("nav ul li div > div.hidden");
const navDiv = document.getElementById("navDiv");
const li_list = document.querySelectorAll("nav ul>li");
const excludedItems = document.querySelectorAll(".exclude-from-megamenu");
const burgerImage = megaMenuToggle.querySelector('img'); // Burger icon
const crossSvgContainer = megaMenuToggle.querySelector('div'); // Cross icon
const div2nd = document.querySelector("nav>div");
const div3rd = document.querySelector("nav div > div");
const navUl = document.querySelector("nav div div >ul");

// State tracking
let isMenuOpen = false;
let isProcessing = false;

// Ensure the default state: burger visible, cross hidden
burgerImage.style.display = 'block';
crossSvgContainer.style.display = 'none';

// Updated scroll handler
function updateHeaderBackground() {
    // Black background if either:
    // 1. User has scrolled, OR
    // 2. Mega menu is open
    const shouldBeBlack = window.scrollY > 0 || isMenuOpen;
    navDiv.style.backgroundColor = shouldBeBlack ? '#0B5C2F' : 'transparent';
}

megaMenuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    if (isProcessing) return;
    
    isProcessing = true;
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen || window.scrollY > 80) {
        div3rd.classList.add("bg-[#0B5C2F]", "shadow-lg", "translate-y-0");
      } else {
        div3rd.classList.remove("bg-[#0B5C2F]", "shadow-lg", "translate-y-0");
      }

    // Toggle mega menu dropdowns, etc.
    dropdowns.forEach(dropdown => {
        dropdown.classList.toggle("hidden", !isMenuOpen);
    });
    excludedItems.forEach(item => {
        item.classList.toggle("hidden", isMenuOpen);
    });
    navDiv.style.backgroundColor = isMenuOpen || window.scrollY > 0 ? '#0B5C2F' : 'transparent';

    // Toggle the icons: show cross when open, burger when closed
    if (isMenuOpen) {
        burgerImage.style.display = 'none';
        crossSvgContainer.style.display = 'block';

        div3rd.classList.add("px-5");
        div3rd.classList.add("sm:px-10");
        div3rd.classList.add("md:px-14");
        div3rd.classList.add("lg:px-6");
        div3rd.classList.add("2xl:px-8");
        div3rd.classList.add("3xl:px-4");
        div3rd.classList.add("pt-2");
        div3rd.classList.add("sm:pt-6");
        div3rd.classList.add("lg:py-10");
        div3rd.classList.add("shadow-lg");

        li_list.forEach(li=>{
            li.classList.remove("font-supera400", "xl:font-supera500", "h-full");
            li.classList.add("font-supera500", "xl:font-supera600", "xl:w-1/6", "flex", "justify-center", "h-full");

            // Toggle (remove) old classes
            navUl.classList.remove("items-center");
            navUl.classList.remove("2xl:justify-between");
            navUl.classList.remove("w-[80%]");
            navUl.classList.remove("xl:w-[77%]");
            navUl.classList.remove("2xl:w-[76%]");
            navUl.classList.remove("xl:pl-5");

            // Toggle (add) new classes
            navUl.classList.add("w-full");
            navUl.classList.add("items-start");
            navUl.classList.add("w-[90%]");
            navUl.classList.add("xl:w-[85%]");
            navUl.classList.add("2xl:w-[85%]");
            navUl.classList.add("justify-around");
            navUl.classList.add("2xl:justify-center");
            navUl.classList.add("xl:pl-[10px]");
            navUl.classList.add("2xl:pl-[10px]");

        })
    } else {
        burgerImage.style.display = 'block';
        crossSvgContainer.style.display = 'none';
        li_list.forEach(li=>{
            li.classList.add("font-supera400", "xl:font-supera500", "h-full");
            li.classList.remove("font-supera500", "xl:font-supera600", "xl:w-1/6", "flex", "justify-center", "h-full");
            div3rd.classList.remove("px-5");
            div3rd.classList.remove("sm:px-10");
            div3rd.classList.remove("md:px-14");
            div3rd.classList.remove("lg:px-6");
            div3rd.classList.remove("2xl:px-8");
            div3rd.classList.remove("3xl:px-4");
            div3rd.classList.remove("pt-2");
            div3rd.classList.remove("sm:pt-6");
            div3rd.classList.remove("lg:py-10");
            div3rd.classList.remove("shadow-lg");

            
            navUl.classList.add("2xl:justify-between");
            navUl.classList.add("w-[80%]");
            navUl.classList.add("xl:w-[77%]");
            navUl.classList.add("2xl:w-[76%]");
            navUl.classList.add("xl:pl-5");

            // Toggle (add) new classes
            navUl.classList.remove("w-full");
            navUl.classList.remove("items-start");
            navUl.classList.remove("w-[90%]");
            navUl.classList.remove("xl:w-[85%]");
            navUl.classList.remove("2xl:w-[85%]");
            navUl.classList.remove("justify-around");
            navUl.classList.remove("2xl:justify-center");
            navUl.classList.remove("xl:pl-[10px]");
            navUl.classList.remove("2xl:pl-[10px]");


        }
    )
    }
    
    setTimeout(() => isProcessing = false, 100); // 100ms debounce
});

// Scroll handler
window.addEventListener("scroll", function () {
    if (window.scrollY > 80 || isMenuOpen) {
        // Apply styles when scrolled past 80px OR menu is open
        div2nd.classList.add("fixed");
        div2nd.classList.remove("absolute");
    
        div3rd.classList.add("bg-[#0B5C2F]", "shadow-lg", "translate-y-0");
      } else {
        // Restore initial styles when scrolled back up AND menu is closed
        div2nd.classList.add("absolute");
        div2nd.classList.remove("fixed");
    
        div3rd.classList.remove("bg-[#0B5C2F]", "shadow-lg", "translate-y-0");
      }
  });


  // ✅ Listen for menu toggle event
// document.querySelector("burgerImage").addEventListener("click", function () {
//     isMenuOpen = !isMenuOpen; // Toggle menu state
  
    
//   });

// REMOVED ALL CLICK-OUTSIDE HANDLERS
// No document.click listeners
// No automatic closures

const why404 = document.getElementById("why404");
why404.addEventListener("click", ()=>{console.log("clicked the 404 btn")})