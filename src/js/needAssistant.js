document.addEventListener("DOMContentLoaded", () => {
  // Element references
  const trigger = document.getElementById('menuTrigger');
  const menu = document.getElementById('radialMenu');
  const menuItems = menu ? menu.querySelectorAll('a') : [];
  const floatingBar = document.getElementById("floatingBar");

  // Animation properties for menu items
  const animationProps = {
    duration: 400,
    delayIncrement: 75,
    scaleFrom: 0.5,
    translateYFrom: '100px'
  };

  // Toggle the radial menu
  const toggleMenu = () => {
    const isOpening = !menu.classList.contains('active');

    // Block page scroll when menu is open
    document.body.style.overflow = isOpening ? 'hidden' : '';

    // Update the trigger and menu states
    trigger.classList.toggle('active', isOpening);
    menu.classList.toggle('active', isOpening);
    menu.style.pointerEvents = isOpening ? 'auto' : 'none';

    // Animate each menu item
    menuItems.forEach((item, index) => {
      const delay = index * animationProps.delayIncrement;
      item.style.transition = `all ${animationProps.duration}ms ${isOpening 
        ? "cubic-bezier(0.34, 1.56, 0.64, 1)" 
        : "cubic-bezier(0.36, 0, 0.66, -0.56)"} ${delay}ms`;
      item.style.transform = isOpening
        ? "scale(1) translateY(0)"
        : `scale(${animationProps.scaleFrom}) translateY(${animationProps.translateYFrom})`;
      item.style.opacity = isOpening ? "1" : "0";
    });
  };

  // Set up radial menu event listeners if trigger and menu exist
  if (trigger && menu) {
    // Improve accessibility by setting aria attributes
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'radialMenu');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
      trigger.setAttribute('aria-expanded', menu.classList.contains('active'));
    });

    // Close menu when clicking outside the menu
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('active') && !e.target.closest('#radialMenu')) {
        toggleMenu();
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Floating bar logic
  if (floatingBar) {
    let timeout;
    // Track the menu's state to pause floating bar hiding
    let isMenuActive = menu ? menu.classList.contains("active") : false;

    const hideFloatingBar = () => {
      if (!isMenuActive) {
        floatingBar.style.transform = "translateY(200%)";
      }
    };

    const showFloatingBar = () => {
      floatingBar.style.transform = "translateY(0%)";
      clearTimeout(timeout);
      if (!isMenuActive) {
        timeout = setTimeout(hideFloatingBar, 4000);
      }
    };

    // If the radial menu exists, observe its state for changes
    let observer;
    if (menu) {
      observer = new MutationObserver(() => {
        isMenuActive = menu.classList.contains("active");
        // When the menu is active, cancel any hiding of the floating bar
        if (isMenuActive) clearTimeout(timeout);
        else showFloatingBar();
      });
      observer.observe(menu, { attributes: true, attributeFilter: ["class"] });
    }

    // Show the floating bar on user interaction
    ["scroll", "touchstart", "mousemove"].forEach(event =>
      window.addEventListener(event, showFloatingBar)
    );

    // Initialize the floating bar hide timeout
    timeout = setTimeout(hideFloatingBar, 4000);

    // Clean-up observer on page unload to prevent memory leaks
    window.addEventListener("beforeunload", () => {
      if (observer) observer.disconnect();
    });
  }

  // Smooth scrolling behavior for menu items linking to anchors on the same page
  if (menuItems.length) {
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        // Only act if the pathname matches and there is a non-empty hash
        if (window.location.pathname === this.pathname && this.hash.trim()) {
          e.preventDefault();
          const target = document.querySelector(this.hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Optionally close the menu after navigation
            if (menu && menu.classList.contains('active')) {
              toggleMenu();
              if (trigger) trigger.setAttribute('aria-expanded', 'false');
            }
          }
        }
      });
    });
  }
});
