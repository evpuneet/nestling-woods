document.addEventListener("DOMContentLoaded", () => {
    // Select only our specific tab buttons by their IDs
    const buttons = document.querySelectorAll('#sample-flat-mob-btn, #project-gallery-mob-btn, #construction-updates-mob-btn');

    // Set default active button and content
    const defaultBtn = document.getElementById("sample-flat-mob-btn");
    const defaultContent = document.getElementById("sample-flat-mob");

    if (defaultBtn && defaultContent) {
        defaultBtn.classList.add("bg-gallery-mob");
        defaultContent.classList.remove("hidden");
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetDiv = document.getElementById(targetId);

            // Hide only our specific content sections
            const allSections = document.querySelectorAll('#sample-flat-mob, #project-gallery-mob, #construction-updates-mob');
            allSections.forEach(div => {
                div.classList.add("hidden");
            });

            // Remove active class from all our buttons
            buttons.forEach(btn => {
                btn.classList.remove("bg-gallery-mob");
                btn.classList.add("bg-gallery-mob-black");
            });

            // Show the selected content
            if (targetDiv) {
                targetDiv.classList.remove("hidden");
            }

            // Update clicked button style
            this.classList.add("bg-gallery-mob");
            this.classList.remove("bg-gallery-mob-black");
        });
    });
});

// buttons
// id="sample-flat-mob-btn" data-target="sample-flat-mob" 
// id="project-gallery-mob-btn" data-target="project-gallery-mob"
// id="construction-updates-mob-btn" data-target="construction-updates-mob"

// sections
// id="construction-updates-mob"
// id="project-gallery-mob"
// id="sample-flat-mob">
