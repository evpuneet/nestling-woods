const closeMainImmAssisst = document.getElementById("closeMainImmAssisst");
const MainImmAssisstDiv = document.getElementById("MainImmAssisstDiv");
const closeMegaMainBtnImmAssisst = document.getElementById("closeMegaMainBtnImmAssisst");
const miniMainImm = document.getElementById("miniMainImm");
const megaMainImmAssisst = document.getElementById("megaMainImmAssisst");
const h6MainImmAssisst = document.getElementById("h6MainImmAssisst");
const AssisstantNameDiv = document.getElementById("AssisstantNameDiv");

// When clicking closeMainImmAssisst:
// - Toggle `hidden` on itself, h6MainImmAssisst, and AssisstantNameDiv
// - Toggle `flex` on closeMainImmAssisst
closeMainImmAssisst.addEventListener("click", () => {
    closeMainImmAssisst.classList.toggle("hidden");
    h6MainImmAssisst.classList.toggle("hidden");
    AssisstantNameDiv.classList.toggle("hidden");
    closeMainImmAssisst.classList.toggle("flex");
    miniMainImm.classList.toggle("hidden");
    MainImmAssisstDiv.classList.toggle("hidden");
    
});

// When clicking MainImmAssisstDiv:
// - Toggle classes for width & opacity on megaMainImmAssisst
MainImmAssisstDiv.addEventListener("click", () => {
    megaMainImmAssisst.classList.toggle("opacity-0");
    megaMainImmAssisst.classList.toggle("w-[0px]");
    megaMainImmAssisst.classList.toggle("md:w-[0px]");

    MainImmAssisstDiv.classList.toggle("hidden");
    closeMainImmAssisst.classList.toggle("hidden");
    AssisstantNameDiv.classList.toggle("hidden");
    h6MainImmAssisst.classList.toggle("hidden");
    
    megaMainImmAssisst.classList.toggle("opacity-100");
    megaMainImmAssisst.classList.toggle("w-[300px]");
    megaMainImmAssisst.classList.toggle("md:w-[353px]");
});

// When clicking closeMegaMainBtnImmAssisst:
// - Hide megaMainImmAssisst
// - Show MainImmAssisstDiv
closeMegaMainBtnImmAssisst.addEventListener("click", () => {
    megaMainImmAssisst.classList.toggle("w-[0px]");
    megaMainImmAssisst.classList.toggle("md:w-[0px]");
    megaMainImmAssisst.classList.toggle("opacity-0");
    
    megaMainImmAssisst.classList.toggle("opacity-100");
    megaMainImmAssisst.classList.toggle("w-[300px]");
    megaMainImmAssisst.classList.toggle("md:w-[353px]");
    
    MainImmAssisstDiv.classList.toggle("hidden");
    closeMainImmAssisst.classList.toggle("hidden");
    AssisstantNameDiv.classList.toggle("hidden");
    h6MainImmAssisst.classList.toggle("hidden");
});

// When clicking miniMainImm:
// - Toggle `hidden` on closeMainImmAssisst, h6MainImmAssisst, and AssisstantNameDiv
miniMainImm.addEventListener("click", () => {
    closeMainImmAssisst.classList.toggle("hidden");
    h6MainImmAssisst.classList.toggle("hidden");
    AssisstantNameDiv.classList.toggle("hidden");
    MainImmAssisstDiv.classList.toggle("hidden");
    miniMainImm.classList.toggle("hidden");

});
