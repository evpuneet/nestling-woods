document.addEventListener("DOMContentLoaded", () => {
    // Select only the three required sections
    const sections = document.querySelectorAll("#project-gallery, #sample-flat, #project-gallery, #construction-updates");
    const navItems = document.querySelectorAll(".nav-item-gallery");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                let targetId = entry.target.getAttribute("id");
                let activeNavItem = document.querySelector(`.nav-item-gallery[data-target="${targetId}"]`);

                if (entry.isIntersecting) {
                    // Remove active class from all nav items
                    navItems.forEach((item) => {
                        item.classList.remove("active-plan-header");
                    });

                    // Add active class to the correct nav item
                    if (activeNavItem) {
                        activeNavItem.classList.add("active-plan-header");
                    }
                } 
            });
        },
        { threshold: 0.4 } // Section should be at least 50% visible
    );

    // Observe only required sections
    sections.forEach((section) => observer.observe(section));
});
