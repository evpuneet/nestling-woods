document.addEventListener("DOMContentLoaded", function () {
    // Get content sections by their IDs
    const projectWalkthroughLg = document.getElementById("project-walk-through-mob");
    const sampleFlat = document.getElementById("sample-flat-mob");
    const projectGallery = document.getElementById("project-gallery-mob");
    const constructionUpdates = document.getElementById("construction-updates-mob");
 
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
   });