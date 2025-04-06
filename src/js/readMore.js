const heroSec2para = document.getElementById("heroSec2para");
const readMoreHS2P = document.getElementById("readMoreHS2P");

readMoreHS2P.addEventListener("click", toggleReadMore);

function toggleReadMore() {
    // Toggle the class that controls visibility/truncation
    heroSec2para.classList.toggle("text-clap-3");

    readMoreHS2P.textContent = heroSec2para.classList.contains("text-clap-3") ? "Read More" : "Read Less"; // Change text
}
