// Select all trail images
const images = document.querySelectorAll('.trail-image');
const pagination = document.querySelector('.pagination');
const header = document.querySelector('header');

let cursorX = 0;
let cursorY = 0;
let initialized = false; 

//Check if the cursor is in restricted areas
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
