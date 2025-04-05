document.addEventListener("DOMContentLoaded", function () {
    function toggleContent(paragraphId, buttonId) {
      const paragraph = document.getElementById(paragraphId);
      const button = document.getElementById(buttonId);
      const icon = button.querySelector("img"); // Select the image inside the button
      const btnText = button.querySelector("button"); // Select the text inside the button
  
      button.addEventListener("click", function () {
        paragraph.classList.toggle("text-clap-6"); // Toggle the clipping class
        icon.classList.toggle("rotate-180"); // Rotate the arrow
        btnText.textContent = paragraph.classList.contains("text-clap-6") ? "Read More" : "Read Less"; // Change text
      });
    }
  
    toggleContent("location-p1", "location-p1-btn");
    toggleContent("location-p2", "location-p2-btn");
    toggleContent("location-p3", "location-p3-btn");
    toggleContent("location-p4", "location-p4-btn");
  });
  