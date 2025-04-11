const button = document.getElementById('toggleButtonProjectStatus');
        const parentDiv = document.getElementById('parentDivProjectStatus');
        const hiddenDivs = parentDiv.querySelectorAll('[data-index]:nth-child(n+12)');
        
        let isExpanded = false;

        button.addEventListener('click', () => {
            isExpanded = !isExpanded;

            hiddenDivs.forEach(div => {
                if (isExpanded) {
                    div.classList.remove('hidden');  // Show the div
                    div.classList.add('flex');       // Restore flex
                    parentDiv.classList.add('h-[550px]');       // Restore flex
                    parentDiv.classList.remove('h-[300px]');       // Restore flex
                   
                } else {
                    div.classList.remove('flex');    // Remove flex first
                    div.classList.add('hidden');     // Then hide
                    parentDiv.classList.add('h-[300px]');       // Restore flex
                    parentDiv.classList.remove('h-[550px]');       // Restore flex

                }
            });

            button.textContent = isExpanded ? "Show Less" : "Show More";
        });