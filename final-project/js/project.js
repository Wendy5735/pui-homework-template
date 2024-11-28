gsap.registerPlugin(ScrollTrigger);

//Function that reveals the project title character by character
function revealText() {
    const title = document.querySelector(".project-title");
    const splitText = new SplitType(title, { types: 'chars' });
    gsap.set(splitText.chars, { opacity: 0, y: 20 });

    gsap.to(splitText.chars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05, 
        onComplete: () => {
            splitText.revert();
        }
    });
}

//Function that reveals the current project number
function revealCurrentNum() {
    const currentNum = document.querySelector(".current-num");
    const splitText = new SplitType(currentNum, { types: 'chars' });
    gsap.set(splitText.chars, { opacity: 0, y: -20 });

    gsap.to(splitText.chars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05, 
        onComplete: () => {
            splitText.revert();
        }
    });
}

//Function that reveals the project description
function revealDescription() {
    const description = document.querySelector(".project-description");
    const date = document.querySelector(".date");
    gsap.set(description, { opacity: 0, y: -10 });
    gsap.set(date, { opacity: 0, y: -10 });
    
    gsap.to(date, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.to(description, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    });
}

let currentProject = 1;
let isTransitioning = false

//Function that loads the main project page
function loadProjectContent(projectNumber) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const title = document.querySelector(".project-title");
    const date = document.querySelector(".date");
    const description = document.querySelector(".project-description");
    const projectIMG = document.querySelector(".project-img");
    const currPage = document.querySelector(".current-num")
    const background = document.querySelector(".background");
    const upSection = document.getElementById("up");
    const downSection = document.getElementById("down");
    const leftSection = document.getElementById("left");
    const rightSection = document.getElementById("right");
    const viewButton = document.querySelector(".view-button a");
    const trailImages = document.querySelectorAll(".trail-image");

    const oldImage = projectIMG.cloneNode(true);
    projectIMG.parentNode.insertBefore(oldImage, projectIMG);

    gsap.to(".background", {
        filter: "blur(15px)", 
        duration: 0.5,
        onComplete: () => {
          console.log(projectNumber);
          if (projectNumber > 3) projectNumber = 1;
          if (projectNumber < 1) projectNumber = 3;

          // Update URL
          history.replaceState(null, "", `?project=${projectNumber}`);

          if (projectNumber === 1) {
            title.textContent = "Ripple";
            date.textContent = "Winter 2024 - Spring 2024";
            description.textContent = "The Ripple App, partnering with the \
            YMCA, is a transformative \
            redesign of a previous mobile application project aimed at \
            empowering youth. This iteration enhances functionality and user \
            engagement, creating a comprehensive platform where young \
            individuals can initiate and participate in community projects, \
            effectively connecting them with mentors and like-minded peers.";
            projectIMG.src = "../final-project/Images/ripple.png"; 
            currPage.innerHTML = "01";
            viewButton.href = "detail1.html";

            trailImages[0].src = "../final-project/Trail_Images/p1_1.png";
            trailImages[1].src = "../final-project/Trail_Images/p1_2.png";
            trailImages[2].src = "../final-project/Trail_Images/p1_3.png";

            background.style.background = "linear-gradient(80deg, \
                rgb(182, 201, 222), rgb(208, 211, 214))";
            upSection.style.backgroundImage = "linear-gradient(80deg, \
                rgb(106, 141, 155), rgba(176, 201, 215, 0.5))";
            downSection.style.backgroundImage = "linear-gradient(80deg, \
                rgba(222, 238, 244, 0.8), rgb(112, 122, 166))";
            leftSection.style.backgroundImage = "linear-gradient(80deg, \
                rgb(166, 168, 197), rgba(195, 228, 229, 0.8))";
            rightSection.style.backgroundImage = "linear-gradient(80deg, \
                rgba(165, 201, 226, 0.6), rgba(89, 105, 127, 0.5))";

          } else if (projectNumber === 2) {
            title.textContent = "CMUCal";
            date.textContent = "Spring 2024 - Fall 2024";
            description.textContent = "An innovative calendar management \
            system for CMU students that aims to aggregate educational and \
            career resources into a central platform that acts as an extension \
            of students’ personal calendars.";
            projectIMG.src = "../final-project/Images/CMUCal.png"; 
            currPage.innerHTML = "02";
            viewButton.href = "detail2.html";

            trailImages[0].src = "../final-project/Trail_Images/p2_1.png";
            trailImages[1].src = "../final-project/Trail_Images/p2_2.png";
            trailImages[2].src = "../final-project/Trail_Images/p2_3.png";

            background.style.background = "linear-gradient(80deg, rgb(186, 181,\
                 189), rgb(197, 192, 207))";
            upSection.style.backgroundImage = "linear-gradient(80deg, rgb(147, \
                140, 161), rgba(237, 208, 178, 0.5))";
            downSection.style.backgroundImage = "linear-gradient(80deg, \
                rgba(230, 188, 147, 0.8), rgb(148, 135, 156))";
            leftSection.style.backgroundImage = "linear-gradient(80deg, \
                rgb(208, 214, 219), rgba(177, 196, 199, 0.8))";
            rightSection.style.backgroundImage = "linear-gradient(80deg, \
                rgba(137, 128, 156, 0.6), rgba(177, 172, 189, 0.5))";

          } else if (projectNumber === 3) {
            title.textContent = "Blue Moon";
            date.textContent = "Fall 2023";
            description.textContent = "This project consisted of a series of \
            small graphic forms exploring foundational visual relationships, \
            ultimately leading to a final deliverable that demonstrates my \
            understanding of graphic form language through my given butterfly.";
            projectIMG.src = "../final-project/Images/bluemoon.png"; 
            currPage.innerHTML = "03";
            viewButton.href = "detail3.html";

            trailImages[0].src = "../final-project/Trail_Images/p3_1.png";
            trailImages[1].src = "../final-project/Trail_Images/p3_2.png";
            trailImages[2].src = "../final-project/Trail_Images/p3_3.png";

            background.style.background = "linear-gradient(80deg, \
                rgb(245, 217, 213), rgb(224, 193, 198))";
            upSection.style.backgroundImage = "linear-gradient(80deg, \
                rgb(227, 199, 157), rgba(255, 120, 120, 0.5))";
            downSection.style.backgroundImage = "linear-gradient(80deg, \
                rgba(255, 240, 200, 0.8), rgb(255, 133, 133))";
            leftSection.style.backgroundImage = "linear-gradient(80deg, \
                rgb(255, 133, 102), rgba(255, 183, 210, 0.8))";
            rightSection.style.backgroundImage = "linear-gradient(80deg, \
                rgba(255, 195, 120, 0.6), rgba(255, 105, 180, 0.5))";
          }

          resetAnimation(upSection);
          resetAnimation(downSection);
          resetAnimation(leftSection);
          resetAnimation(rightSection);

          revealText();
          revealCurrentNum();
          revealDescription()

          //Make the thumbnail image fade in and out
          gsap.fromTo(
            projectIMG,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 }
          );

          gsap.to(oldImage, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                oldImage.remove();
            }
          });

          gsap.to(".background", {
            filter: "blur(0px)",
            duration: 0.5,
            onComplete: () => {
                isTransitioning = false;
                currentProject = projectNumber;
            }
          });
        }
    });
}

function resetAnimation(element) {
    element.style.animation = 'none'; 
    element.offsetHeight;
    element.style.animation = ''; 
}

//Detect swiping
function onSwipe(event) {
    if (isTransitioning) return;
    if (event.deltaY > 20) {  // Swipe up or scroll up
        loadProjectContent(currentProject + 1);
    } else if (event.deltaY < -20) {  // Swipe down or scroll down
        loadProjectContent(currentProject - 1);
    }
}

window.addEventListener("wheel", onSwipe);

//Respond to keyboard inputs
document.addEventListener('keydown', (event) => {
    if (isTransitioning) return;
    switch (event.key) {
        case 'ArrowRight': 
            loadProjectContent(currentProject + 1);
            break;
        case 'ArrowLeft': 
            loadProjectContent(currentProject - 1);
            break;
        case 'ArrowUp': 
            loadProjectContent(currentProject - 1);
            break;
        case 'ArrowDown':
            loadProjectContent(currentProject + 1);
            break;
    }
});

//Detect scroll on mobile devices
let touchStartY = 0;
window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
});
    
window.addEventListener("touchend", (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) {
        loadProjectContent(currentProject + 1); // Swipe up
    } else if (touchEndY - touchStartY < 50) {
        loadProjectContent(currentProject - 1); // Swipe down
    }
});

//Detect clicking on arrows
document.querySelector(".leftArrow").addEventListener("click", () => {
    if (!isTransitioning) {
        console.log('clicked on left arrow');
        loadProjectContent(currentProject - 1);
    }
});

document.querySelector(".rightArrow").addEventListener("click", () => {
    if (!isTransitioning) {
        console.log('clicked on right arrow');
        loadProjectContent(currentProject + 1);
    }
});

loadProjectContent(currentProject);