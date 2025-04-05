document.addEventListener("DOMContentLoaded", function () {
   // Get content sections by their IDs
   const projectWalkthroughLg = document.getElementById("project-walk-through-lg");
   const sampleFlat = document.getElementById("sample-flat");
   const projectGallery = document.getElementById("project-gallery");
   const constructionUpdates = document.getElementById("construction-updates");

    // active-gallery-tab to use for active tabs
    // I want to create a functionality in which I will be adding and removing the hidden class from the following sections of my html
    // projectwalkthroughlg, sampleflat, projectgallery, constructionupdates This is the first thing that I want to do
    // Second Think what I want is that there should be a background image like I have already prepared a active class for the tabs and the tabs are from header and each one has given this class gallerytabsnavigate And whatever tab is active like of course the user will click and then he will navigate I have the proper data target attached to it

    // Array of all tab content sections
    const tabContents = [
        projectWalkthroughLg,
        sampleFlat,
        projectGallery,
        constructionUpdates
    ];

    // Get all tab navigation elements
    const galleryTabsNavigate = document.querySelectorAll(".gallery-tabs-navigate");

    // Loop through each tab and add a click event listener
    galleryTabsNavigate.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove the active class from all tabs
            galleryTabsNavigate.forEach(t => t.classList.remove("active-gallery-tab"));
            // Add the active class to the clicked tab
            tab.classList.add("active-gallery-tab");

            // Get the target id from the data-target attribute of the clicked tab
            const targetId = tab.getAttribute("data-target");

            // Hide all sections by adding the 'hidden' class
            tabContents.forEach(content => {
                content.classList.add("hidden");
            });

            // Show the target section by removing the 'hidden' class
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove("hidden");
            }
        });
    });

    // moblie section starts








  });
