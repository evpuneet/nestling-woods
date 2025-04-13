document.addEventListener("DOMContentLoaded", function () {
    const locationMapBtn = document.getElementById("locationMapBtn");
    const googleMapBtn = document.getElementById("googleMapBtn");

    const locationMapContainer = document.getElementById("locationMapContainer");
    const googleMapContainer = document.getElementById("googleMapContainer");

    function activateMapTab(activeBtn, inactiveBtn, activeContainer, inactiveContainer) {
        // Button style handling
        activeBtn.classList.add('bg-theme', 'text-white');
        activeBtn.classList.remove('bg-white', 'text-theme');
        inactiveBtn.classList.remove('bg-theme', 'text-white');
        inactiveBtn.classList.add('bg-white', 'text-theme');

        // Map display handling
        activeContainer.classList.remove('hidden');
        inactiveContainer.classList.add('hidden');
    }

    locationMapBtn.addEventListener('click', () => {
        activateMapTab(locationMapBtn, googleMapBtn, locationMapContainer, googleMapContainer);
    });

    googleMapBtn.addEventListener('click', () => {
        activateMapTab(googleMapBtn, locationMapBtn, googleMapContainer, locationMapContainer);
    });
});
