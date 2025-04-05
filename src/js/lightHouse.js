// Get all elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lb-canvas img');
const zoomInBtn = document.querySelector('.zoomin');
const zoomOutBtn = document.querySelector('.zoomout');
const rotateLeftBtn = document.querySelector('.rotatel');
const rotateRightBtn = document.querySelector('.rotater');
const closeBtn = document.querySelector('.close');
const resetBtn = document.querySelector('.lb-button[title="Reset"]'); // Add this button in your HTML
const resetBtnMob = document.querySelector('#resetMob'); // Add this button in your HTML
const downloadBtn = document.querySelector('.download-btn');


// Initial transform values
let currentScale = 1;
let currentRotation = 0;
const minScale = 0.5;
const maxScale = 3;

// Event listeners for images
document.querySelectorAll('.open-lightbox').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        document.documentElement.style.overflow = 'hidden'; // Prevent scrolling
        lightbox.classList.remove('hidden');
        resetTransform();
    });
});

// Zoom functionality
zoomInBtn.addEventListener('click', () => {
    currentScale = Math.min(maxScale, currentScale + 0.2);
    updateTransform();
});

zoomOutBtn.addEventListener('click', () => {
    currentScale = Math.max(minScale, currentScale - 0.2);
    updateTransform();
});

// Rotation functionality
rotateLeftBtn.addEventListener('click', () => {
    currentRotation -= 90;
    updateTransform();
});

rotateRightBtn.addEventListener('click', () => {
    currentRotation += 90;
    updateTransform();
});

// Reset functionality
resetBtn.addEventListener('click', resetTransform);

// Reset functionality
resetBtnMob.addEventListener('click', resetTransform);

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.documentElement.style.overflow = '';
});

// Close when clicking outside
document.querySelector('.lb-canvas').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        lightbox.classList.add('hidden');
        document.documentElement.style.overflow = '';

    }
});

function updateTransform() {
    lightboxImg.style.transform = 
        `translate3d(0px, 0px, 0px) 
         scale(${currentScale}) 
         rotate(${currentRotation}deg)`;

    // Show/hide reset button
    if (currentScale !== 1 || currentRotation !== 0) {
        resetBtn.classList.remove('hidden');
    } else {
        resetBtn.classList.add('hidden');
    }

    // Toggle zoom out button state
    zoomOutBtn.classList.toggle('lb-disabled', currentScale === minScale);
}

function resetTransform() {
    currentScale = 1;
    currentRotation = 0;
    lightboxImg.style.transform = 
        'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)';
    resetBtn.classList.add('hidden');
}

// Download functionality
downloadBtn.addEventListener('click', () => {
    // Create temporary anchor element
    const link = document.createElement('a');
    link.href = lightboxImg.src;
    
    // Extract filename from URL
    const filename = lightboxImg.src.split('/').pop().split('?')[0];
    link.download = filename || 'downloaded-image';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});