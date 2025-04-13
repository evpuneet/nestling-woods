document.addEventListener("DOMContentLoaded", function () {
    const satelliteBtn = document.getElementById("satelliteBtn-mob");
    const googleBtn = document.getElementById("googleBtn-mob");
    const satelliteBtnLg = document.getElementById("satelliteBtn-lg");
    const googleBtnLg = document.getElementById("googleBtn-lg");
    const mapParent = document.querySelector('.mapParent');//same class added for lg amd mob screen , because there are 2 different ui of map
    const mapParentLg = document.querySelector('.mapParent-lg');
    const [satelliteContainer, googleContainer] = mapParent.children;
    const [satelliteContainerLg, googleContainerLg] = mapParentLg.children;

    function activateTab(activeBtnMob, inactiveBtnMob, activeBtnLg, inactiveBtnLg, activeFrame, inactiveFrame, activeFrameLg, inactiveFrameLg) {
        // Update button styles for mobile
        activeBtnMob.classList.add('bg-theme', 'text-white');
        activeBtnMob.classList.remove('bg-white', 'text-theme');
        inactiveBtnMob.classList.remove('bg-theme', 'text-white');
        inactiveBtnMob.classList.add('bg-white', 'text-theme');

        // Update button styles for large screen
        activeBtnLg.classList.add('bg-theme', 'text-white');
        activeBtnLg.classList.remove('bg-white', 'text-theme');
        inactiveBtnLg.classList.remove('bg-theme', 'text-white');
        inactiveBtnLg.classList.add('bg-white', 'text-theme');

        // Update map visibility (Mobile)
        activeFrame.classList.remove('hidden');
        inactiveFrame.classList.add('hidden');

        // Update map visibility (Large Screen)
        activeFrameLg.classList.remove('hidden');
        inactiveFrameLg.classList.add('hidden');
    }

    [satelliteBtn, satelliteBtnLg].forEach(btn => {
        btn?.addEventListener('click', () => {
            activateTab(satelliteBtn, googleBtn, satelliteBtnLg, googleBtnLg, satelliteContainer, googleContainer, satelliteContainerLg, googleContainerLg);
        });
    });

    [googleBtn, googleBtnLg].forEach(btn => {
        btn?.addEventListener('click', () => {
            activateTab(googleBtn, satelliteBtn, googleBtnLg, satelliteBtnLg, googleContainer, satelliteContainer, googleContainerLg, satelliteContainerLg);
        });
    });
    
});