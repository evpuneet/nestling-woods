document.addEventListener("DOMContentLoaded", () => {
    const main2d = document.getElementById("main2dskeleton");
    const main3d = document.getElementById("main3dskeleton");
    const switchTo3D = document.getElementById("switchto3d");
    const switchTo2D = document.getElementById("switchto2d");
    const tabs2d = document.getElementById("tabs2d")

    const next2dbtn = document.getElementById("next2dbtn")
    const prev2dbtn = document.getElementById("prev2dbtn")
    const footer2d = document.getElementById("footer2d")
    const switch2d3d = document.getElementById("switch2d3d")
    const switchBg = document.getElementById("switchBg");

  
    let is3DMode = false; // Start in 2D mode
  
    function switchTo3DView() {
      if (is3DMode) return; // Already in 3D mode, do nothing
  
      is3DMode = true;
      console.log("Switching to 3D mode");
  
      main3d.classList.add("opacity-100", "z-[10]", "block");
      main3d.classList.remove("opacity-0", "z-[-1]", "hidden");
      
      main2d.classList.add("opacity-0", "z-[-1]", "h65");
      main2d.classList.remove("opacity-100", "z-[10]");

      tabs2d.classList.add("opacity-0", "z-[-1]", "hidden");
      tabs2d.classList.remove("opacity-100", "z-[10]", "block");

      next2dbtn.classList.add("opacity-0", "z-[-1]", "md:hidden");
      next2dbtn.classList.remove("opacity-100", "z-[10]", "md:block");

      prev2dbtn.classList.add("opacity-0", "z-[-1]", "md:hidden");
      prev2dbtn.classList.remove("opacity-100", "z-[10]", "md:block");

      footer2d.classList.add("opacity-0", "z-[-1]", "hidden");
      footer2d.classList.remove("opacity-100", "z-[10]", "block");

      switchBg.classList.add("left-[50%]");
            switchBg.classList.remove("left-0");
            switchTo2D.classList.remove("text-[#fff]");
            switchTo2D.classList.add("text-theme");
            switchTo3D.classList.remove("text-theme");
            switchTo3D.classList.add("text-[#fff]");
    }
  
    function switchTo2DView() {
      if (!is3DMode) return; // Already in 2D mode, do nothing
  
      is3DMode = false;
      console.log("Switching to 2D mode");
  
      main3d.classList.add("opacity-0", "z-[-1]", "hidden");
      main3d.classList.remove("opacity-100", "z-[10]", "block");
  
      main2d.classList.add("opacity-100", "z-[10]", "flex");
      main2d.classList.remove("opacity-0", "z-[-1]", "hidden", "h65");

      next2dbtn.classList.add("opacity-100", "z-[10]", "md:block");
      next2dbtn.classList.remove("opacity-0", "z-[-1]", "md:hidden");

      prev2dbtn.classList.add("opacity-100", "z-[10]", "md:block");
      prev2dbtn.classList.remove("opacity-0", "z-[-1]", "md:hidden");

      tabs2d.classList.add("opacity-100", "z-[10]", "block");
      tabs2d.classList.remove("opacity-0", "z-[-1]", "hidden");

      footer2d.classList.add("opacity-100", "z-[10]", "block");
      footer2d.classList.remove("opacity-0", "z-[-1]", "hidden");

      switchBg.classList.add("left-0");
      switchBg.classList.remove("left-[50%]");
      switchTo2D.classList.add("text-[#fff]");
      switchTo2D.classList.remove("text-theme");
      switchTo3D.classList.add("text-theme");
      switchTo3D.classList.remove("text-[#fff]");
    }
  
    switchTo3D.addEventListener("click", switchTo3DView);
    switchTo2D.addEventListener("click", switchTo2DView);
  });
  