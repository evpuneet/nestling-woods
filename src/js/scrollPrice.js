document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#price, #payment-structure, #current-offer");
    const navItems = document.querySelectorAll(".nav-item-price");

    const observer = new IntersectionObserver(
        (entries) => {
            let activeEntry = null;

            entries.forEach((entry) => {
                // Track the entry with the highest intersection ratio
                if (entry.isIntersecting) {
                    if (!activeEntry || entry.intersectionRatio > activeEntry.intersectionRatio) {
                        activeEntry = entry;
                    }
                }
            });

            if (activeEntry) {
                const targetId = activeEntry.target.id;
                navItems.forEach((item) => {
                    const isActive = item.dataset.target === targetId;
                    item.classList.toggle("active-plan-header", isActive);
                });
            }
        },
        { 
            threshold: 0.25 // Lower threshold to 25% visibility
        }
    );

    sections.forEach((section) => observer.observe(section));
});