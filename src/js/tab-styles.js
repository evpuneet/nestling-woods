// Tab styling for product slider
document.addEventListener('DOMContentLoaded', function() {
    // Add a style element to the head
    const style = document.createElement('style');
    style.textContent = `
        /* Desktop styles */
        @media (min-width: 768px) {
            /* For non-active tabs, fade out the color */
            .tab {
                opacity: 0.6;
                transition: opacity 0.3s ease, color 0.3s ease;
                color: #787878 !important; /* Faded text color */
            }
            
            /* For active tab, make it fully black */
            .tab.active {
                opacity: 1;
                color: #000000 !important; /* Full black color */
                font-weight: 700 !important; /* Make it bold */
            }
        }

        /* Keep mobile styling independent */
        @media (max-width: 767px) {
            /* Mobile tabs already have appropriate styling in HTML */
            /* This ensures desktop styles don't affect mobile */
        }
    `;
    document.head.appendChild(style);

    // Get all tabs
    const tabs = document.querySelectorAll('.tab');
    
    // Function to update tab styles
    function updateTabStyles(activeIndex) {
        tabs.forEach((tab, i) => {
            if (i === activeIndex) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    // Initialize with the first tab active
    updateTabStyles(0);
    
    // Add click event listeners to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            updateTabStyles(index);
        });
    });
});