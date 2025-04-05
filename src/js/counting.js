document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('h4');
    const animationDuration = 1500; // 2.5 seconds for smoother animation

    // Easing function for smooth animation
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    const animateCount = (el, start, end, decimalPlaces = 0) => {
        let startTime = null;
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            
            // Apply easing function for smooth animation
            const easedProgress = easeOutCubic(progress);
            const current = start + (end - start) * easedProgress;
            
            // Format number based on decimal places
            if (decimalPlaces === 0) {
                el.textContent = Math.floor(current).toLocaleString();
            } else {
                el.textContent = current.toFixed(decimalPlaces);
            }
            
            // Continue animation if not complete
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    };

    // Intersection Observer with options
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -10% 0px' // Starts animation slightly before element is fully visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent.trim();
                const originalNumber = parseFloat(text.replace(/,/g, ''));
                const decimalPlaces = text.includes('.') ? 1 : 0;
                
                // Add CSS transition for smooth font updates
                target.style.transition = 'all 0.1s ease-out';
                
                animateCount(target, 0, originalNumber, decimalPlaces);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // Observe all counter elements
    counters.forEach(counter => {
        if (!isNaN(parseFloat(counter.textContent))) {
            observer.observe(counter);
        }
    });
});