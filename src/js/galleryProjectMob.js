
document.addEventListener("DOMContentLoaded", function () {
    const projectWalk = document.getElementById("project-walk2-mob");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        const currentScrollY = window.scrollY;
        
        // When scrolling down and we've passed 400px, show the element.
        if (currentScrollY > 400 && currentScrollY > lastScrollY) {
            projectWalk.style.opacity = "1";
        } else {
            // When scrolling up (or if we're below the threshold), hide it.
            projectWalk.style.opacity = "0";
        }
        
        // Update the last scroll position
        lastScrollY = currentScrollY;
    });

     // Select the <h2> element inside the project-walk-through div.
    const h2Tag = document.querySelector("#project-walk-through h2");

    // Save the original text.
    // const originalText = h2Tag.textContent;
    
    // Define the text for mobile screens.
    const mobileText = "gallery";

    // Function to update the text based on window width.
    function updateText() {
        if (window.matchMedia("(max-width: 768px)").matches) {
        h2Tag.textContent = mobileText;
        } else {
        h2Tag.textContent = originalText;
        }
    }

    // Run the function on load.
    updateText();

    // Listen for window resize events to update the text dynamically.
    window.addEventListener("resize", updateText);
});