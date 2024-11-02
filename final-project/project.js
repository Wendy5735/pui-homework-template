gsap.registerPlugin(ScrollTrigger);

let currentProject = 1;

function loadProjectContent(projectNumber) {
    const title = document.querySelector(".project-title");
    const description = document.querySelector(".project-description");
    const projectIMG = document.querySelector(".project-img");

    gsap.to(".background", {
        filter: "blur(15px)", 
        duration: 0.5,
        onComplete: () => {
          if (projectNumber === 1) {
            title.textContent = "Project One";
            description.textContent = "This is a description of Project One. It started in Fall 2023 and finished in May 2024.";
            projectIMG.src = "/final-project/Images/ripple.png"; // Change image source
          } else if (projectNumber === 2) {
            title.textContent = "Project Two";
            description.textContent = "This is a description of Project Two. It started in Spring 2024 and was completed in August 2024.";
            projectIMG.src = "/final-project/Images/CMUCal.png"; // Change image source
          }
    
          gsap.to(".background", {
            filter: "blur(0px)",
            duration: 0.5
          });
        }
    });
    currentProject = projectNumber;
}
    
//Detect swiping
function onSwipe(event) {
    if (event.deltaY > 0 && currentProject < 2) {  // Swipe up or scroll up
        loadProjectContent(currentProject + 1);
    } else if (event.deltaY < 0 && currentProject > 1) {  // Swipe down or scroll down
        loadProjectContent(currentProject - 1);
    }
}
      
window.addEventListener("wheel", onSwipe);

//Detect scroll on mobile devices
let touchStartY = 0;
window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
});
    
window.addEventListener("touchend", (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50 && currentProject < 2) {
        loadProjectContent(currentProject + 1); // Swipe up
    } else if (touchEndY - touchStartY < 50 && currentProject > 1) {
        loadProjectContent(currentProject - 1); // Swipe down
    }
});
