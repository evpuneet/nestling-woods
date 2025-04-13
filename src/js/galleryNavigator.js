document.addEventListener("DOMContentLoaded", function () {
    const projectWalkthroughLg = document.getElementById("project-walk-through-lg");
    const sampleFlat = document.getElementById("sample-flat");
    const projectGallery = document.getElementById("project-gallery");
    const constructionUpdates = document.getElementById("construction-updates");

    const tabContents = [
        projectWalkthroughLg,
        sampleFlat,
        projectGallery,
        constructionUpdates
    ];

    const galleryTabsNavigate = document.querySelectorAll(".gallery-tabs-navigate");

    galleryTabsNavigate.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            galleryTabsNavigate.forEach(t => t.classList.remove("active-gallery-tab"));
            tab.classList.add("active-gallery-tab");

            const targetId = tab.getAttribute("data-target");

            tabContents.forEach(content => {
                content.classList.add("hidden");
            });

            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove("hidden");

                // 💡 Add smooth scroll to the section
                targetContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
