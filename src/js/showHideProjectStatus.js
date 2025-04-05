const button = document.getElementById('toggleButtonProjectStatus');
        const parentDiv = document.getElementById('parentDivProjectStatus');
        const hiddenDivs = parentDiv.querySelectorAll('[data-index]:nth-child(n+13)');
        
        let isExpanded = false;

        button.addEventListener('click', () => {
            isExpanded = !isExpanded;

            hiddenDivs.forEach(div => {
                if (isExpanded) {
                    div.classList.remove('hidden');  // Show the div
                    div.classList.add('flex');       // Restore flex
                } else {
                    div.classList.remove('flex');    // Remove flex first
                    div.classList.add('hidden');     // Then hide
                }
            });

            button.textContent = isExpanded ? "Show Less" : "Show More";
        });