gsap.registerPlugin(ScrollTrigger);

// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

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

let currentProject = 1;
let isTransitioning = false

// const projectFromURL = parseInt(getQueryParam('project'), 10);
// if (projectFromURL && projectFromURL >= 1 && projectFromURL <= 3) {
//     currentProject = projectFromURL; // Use the project number from the URL
// }

function loadProjectContent(projectNumber) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const title = document.querySelector(".project-title");
    const description = document.querySelector(".project-description");
    const projectIMG = document.querySelector(".project-img");
    const currPage = document.querySelector(".current-num")
    const background = document.querySelector(".background");
    const upSection = document.getElementById("up");
    const downSection = document.getElementById("down");
    const leftSection = document.getElementById("left");
    const rightSection = document.getElementById("right");
    const viewButton = document.querySelector(".view-button a"); // Select the view button link

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
            description.textContent = "The Ripple App, partnering with the \
            YMCA, is a transformative \
            redesign of a previous mobile application project aimed at \
            empowering youth. This iteration enhances functionality and user \
            engagement, creating a comprehensive platform where young \
            individuals can initiate and participate in community projects, \
            effectively connecting them with mentors and like-minded peers, \
            thus fostering a network of proactive changemakers.";
            projectIMG.src = "/final-project/Images/ripple.png"; 
            currPage.innerHTML = "01<span class='total-num'>/03</span>";
            viewButton.href = "detail1.html";

            background.style.background = "linear-gradient(80deg, rgb(121, 150, 184), rgb(208, 211, 214))";
            upSection.style.backgroundImage = "linear-gradient(80deg, rgb(106, 141, 155), rgba(82, 94, 101, 0.5))";
            downSection.style.backgroundImage = "linear-gradient(80deg, rgba(222, 238, 244, 0.8), rgb(90, 99, 140))";
            leftSection.style.backgroundImage = "linear-gradient(80deg, rgb(139, 142, 172), rgba(195, 228, 229, 0.8))";
            rightSection.style.backgroundImage = "linear-gradient(80deg, rgba(165, 201, 226, 0.6), rgba(89, 105, 127, 0.5))";

          } else if (projectNumber === 2) {
            title.textContent = "CMUCal";
            description.textContent = "An innovative calendar management system \
            for CMU students that aims to aggregate educational and career \
            resources into a central platform that acts as an extension of \
            students’ personal calendars.";
            projectIMG.src = "/final-project/Images/CMUCal.png"; 
            currPage.innerHTML = "02<span class='total-num'>/03</span>";
            viewButton.href = "detail2.html";

            background.style.background = "linear-gradient(80deg, rgb(186, 181, 189), rgb(197, 192, 207))";
            upSection.style.backgroundImage = "linear-gradient(80deg, rgb(147, 140, 161), rgba(237, 208, 178, 0.5))";
            downSection.style.backgroundImage = "linear-gradient(80deg, rgba(230, 188, 147, 0.8), rgb(148, 135, 156))";
            leftSection.style.backgroundImage = "linear-gradient(80deg, rgb(208, 214, 219), rgba(177, 196, 199, 0.8))";
            rightSection.style.backgroundImage = "linear-gradient(80deg, rgba(137, 128, 156, 0.6), rgba(177, 172, 189, 0.5))";

          } else if (projectNumber === 3) {
            title.textContent = "Blue Moon Butterfly";
            description.textContent = "This project consisted of a series of \
            small graphic forms exploring foundational visual relationships, \
            ultimately leading to a final deliverable that demonstrates my \
            understanding of graphic form language through my given butterfly.";
            projectIMG.src = "/final-project/Images/bluemoon.png"; 
            currPage.innerHTML = "03<span class='total-num'>/03</span>";
            viewButton.href = "detail3.html";

            background.style.background = "linear-gradient(80deg, rgb(219, 180, 175), rgb(224, 193, 198))";
            upSection.style.backgroundImage = "linear-gradient(80deg, rgb(227, 199, 157), rgba(255, 120, 120, 0.5))";
            downSection.style.backgroundImage = "linear-gradient(80deg, rgba(255, 240, 200, 0.8), rgb(255, 133, 133))";
            leftSection.style.backgroundImage = "linear-gradient(80deg, rgb(255, 133, 102), rgba(255, 183, 210, 0.8))";
            rightSection.style.backgroundImage = "linear-gradient(80deg, rgba(255, 195, 120, 0.6), rgba(255, 105, 180, 0.5))";
          }

          resetAnimation(upSection);
          resetAnimation(downSection);
          resetAnimation(leftSection);
          resetAnimation(rightSection);

          revealText();

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
        loadProjectContent(currentProject - 1);
    }
});

document.querySelector(".rightArrow").addEventListener("click", () => {
    if (!isTransitioning) {
        loadProjectContent(currentProject + 1);
    }
});

loadProjectContent(currentProject);