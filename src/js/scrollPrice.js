document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#price, #payment-structure, #current-offer");
    const navItems = document.querySelectorAll(".nav-item-price");

    const setActiveNavItem = (targetId) => {
        navItems.forEach((item) => {
            const isActive = item.dataset.target === targetId;
            item.classList.toggle("active-plan-header", isActive);
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            let activeEntry = null;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!activeEntry || entry.intersectionRatio > activeEntry.intersectionRatio) {
                        activeEntry = entry;
                    }
                }
            });

            if (activeEntry) {
                setActiveNavItem(activeEntry.target.id);
            }
        },
        { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    // ✅ Fix for mobile: if scroll is at the very top, manually highlight #price
    window.addEventListener("scroll", () => {
        if (window.scrollY === 20 || window.scrollY === 0) {
            setActiveNavItem("price");
        }

        console.log(window.scrollY)
    });
});
