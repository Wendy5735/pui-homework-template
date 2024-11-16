// Select all trail images
const images = document.querySelectorAll('.trail-image');
const pagination = document.querySelector('.pagination');
const header = document.querySelector('header');

let cursorX = 0;
let cursorY = 0;
let initialized = false; 

function isInRestrictedArea(x, y) {
    const paginationRect = pagination.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    
    const inPagination = (
      x >= paginationRect.left -20 &&
      x <= paginationRect.right +20 &&
      y >= paginationRect.top -50 &&
      y <= paginationRect.bottom +50
    );
  
    const inHeader = (
      x >= headerRect.left &&
      x <= headerRect.right &&
      y >= headerRect.top &&
      y <= headerRect.bottom -20
    );
  
    return inPagination || inHeader;
}

// Function to handle mouse movement
document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;

  if (isInRestrictedArea(e.clientX, e.clientY)) return;

  images.forEach((img, index) => {
    if (!initialized) {
        // On the first movement, position the images at the cursor
        gsap.set(img, {
          x: cursorX - img.offsetWidth / 2, 
          y: cursorY - img.offsetHeight / 2 -630, 
        });
      }

    gsap.to(img, {
      x: cursorX - img.offsetWidth / 2, 
      y: cursorY - img.offsetHeight / 2 -630, 
      delay: index * 0.5, 
      duration: 1,
      ease: "power2.out",
    });

    // Fade-in and fade-out effects
    gsap.to(img, {
      opacity: 1, // Fade in
      duration: 0.4,
      delay: index * 0.5, 
      ease: "power2.out",
    });

    gsap.to(img, {
      opacity: 0, // Fade out
      duration: 0.4,
      delay: 0.5 + index * 0.4, 
      ease: "power2.out",
    });
  });
  initialized = true;
});


// // Select all trail images
// const images = document.querySelectorAll('.trail-image');
// const pagination = document.querySelector('.pagination');

// // Variables to track cursor position, speed, and initialization
// let lastX = 0;
// let lastY = 0;
// let lastTime = 0;
// const speedThreshold = 0.2; // Adjust this threshold as needed
// let initialized = false; // Track if the first movement has occurred

// function isInPaginationArea(x, y) {
//     const rect = pagination.getBoundingClientRect();
//     return (
//       x >= rect.left &&
//       x <= rect.right &&
//       y >= rect.top &&
//       y <= rect.bottom
//     );
//   }


// // Function to handle mouse movement
// document.addEventListener('mousemove', (e) => {
//   const now = Date.now();
//   const deltaTime = now - lastTime;

//   // Calculate cursor speed
//   const deltaX = e.clientX - lastX;
//   const deltaY = e.clientY - lastY;
//   const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
//   const speed = distance / deltaTime;

//   if (isInPaginationArea(e.clientX, e.clientY)) return;

//   images.forEach((img, index) => {
//     if (!initialized) {
//       // On the first movement, position the images directly at the cursor
//       gsap.set(img, {
//         x: e.clientX - img.offsetWidth / 2, // Center horizontally
//         y: e.clientY - img.offsetHeight / 2 - 630, // Center vertically with offset
//       });
//     }

//     if (speed > speedThreshold) {
//       // Apply trailing effect only if the speed exceeds the threshold
//       gsap.to(img, {
//         x: e.clientX - img.offsetWidth / 2,
//         y: e.clientY - img.offsetHeight / 2 - 630, // Adjust as needed
//         delay: index * 0.5,
//         duration: 1,
//         ease: "power2.out",
//       });

//       // Fade-in and fade-out effects
//       gsap.to(img, {
//         opacity: 1,
//         duration: 0.4,
//         delay: index * 0.5,
//         ease: "power2.out",
//       });

//       gsap.to(img, {
//         opacity: 0,
//         duration: 0.4,
//         delay: 0.5 + index * 0.4,
//         ease: "power2.out",
//       });
//     }
//   });

//   // Mark as initialized after the first movement
//   initialized = true;

//   // Update last positions and time for the next movement calculation
//   lastX = e.clientX;
//   lastY = e.clientY;
//   lastTime = now;
// });