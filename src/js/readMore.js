const heroSec2para = document.getElementById("heroSec2para");
const readMoreHS2P = document.getElementById("readMoreHS2P")

readMoreHS2P.addEventListener("click", toggleReadMore)

function toggleReadMore(){
    heroSec2para.classList.toggle("text-clap-3")
}