// Select elements
const megaMenuToggle = document.getElementById('meagaMenuBtn_lg');
const dropdowns = document.querySelectorAll("nav ul li div > div.hidden");
const li_list = document.querySelectorAll("nav ul>li");
const navDiv = document.getElementById("navDiv");
const excludedItems = document.querySelectorAll(".exclude-from-megamenu");
const burgerImage = megaMenuToggle.querySelector('img'); // Burger icon
const crossSvgContainer = megaMenuToggle.querySelector('div'); // Cross icon
const div3rd = document.querySelector("nav div > div");
const navUl = document.querySelector("nav div div >ul");

// State tracking
let isMenuOpen = false;
let isProcessing = false;

// Ensure the default state: burger visible, cross hidden
burgerImage.style.display = 'block';
crossSvgContainer.style.display = 'none';

megaMenuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    if (isProcessing) return;
    
    isProcessing = true;
    isMenuOpen = !isMenuOpen;

    // Toggle mega menu dropdowns, etc.
    dropdowns.forEach(dropdown => {
        dropdown.classList.toggle("hidden", !isMenuOpen);
    });
    excludedItems.forEach(item => {
        item.classList.toggle("hidden", isMenuOpen);
    });
    // navDiv.style.backgroundColor = isMenuOpen || window.scrollY > 0 ? '#000' : 'transparent';

    // Toggle the icons: show cross when open, burger when closed
    if (isMenuOpen) {
        burgerImage.style.display = 'none';
        crossSvgContainer.style.display = 'block';

        


        div3rd.classList.toggle("px-5");
        div3rd.classList.toggle("sm:px-10");
        div3rd.classList.toggle("md:px-14");
        div3rd.classList.toggle("lg:px-6");
        div3rd.classList.toggle("2xl:px-8");
        div3rd.classList.toggle("3xl:px-4");
        div3rd.classList.toggle("pt-2");
        div3rd.classList.toggle("sm:pt-6");
        div3rd.classList.toggle("lg:py-10");
        div3rd.classList.toggle("shadow-lg");

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
            // div3rd.classList.toggle("px-5");
            div3rd.classList.toggle("sm:px-10");
            div3rd.classList.toggle("md:px-14");
            div3rd.classList.toggle("lg:px-6");
            div3rd.classList.toggle("2xl:px-8");
            div3rd.classList.toggle("3xl:px-4");
            div3rd.classList.toggle("pt-2");
            div3rd.classList.toggle("sm:pt-6");
            div3rd.classList.toggle("lg:py-10");
            div3rd.classList.toggle("shadow-lg");

            
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

// REMOVED ALL CLICK-OUTSIDE HANDLERS
// No document.click listeners
// No automatic closures

let lastScrollY = window.scrollY; // Store the last scroll position
let scrollUpDistance = 0; // Track how much user scrolled up 

window.addEventListener("scroll", function () {
    let currentScrollY = window.scrollY;
  
    if (currentScrollY > lastScrollY) {
      // Scrolling Down
      div3rd.classList.add("-translate-y-full");
      div3rd.classList.remove("translate-y-0");
  
      // Reset scroll-up distance
      scrollUpDistance = 0;
    } else {
      // Scrolling Up
      scrollUpDistance += lastScrollY - currentScrollY;
  
      if (scrollUpDistance > 80) {
        // If user scrolled up by 80px, show div3rd again
        div3rd.classList.add("translate-y-0");
        div3rd.classList.remove("-translate-y-full");
  
        // Reset scroll-up distance
        scrollUpDistance = 0;
      }
    }
  
    lastScrollY = currentScrollY; // Update last scroll position
  });