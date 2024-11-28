gsap.registerPlugin(ScrollTrigger);

//Fade in and out each card as the user scrolls down and up
gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.fromTo(
        card,
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: window.innerWidth <= 768 ? "top 85%" : "top 70%",
                end: "top 70%",
                toggleActions: "play none none reverse",
            },
            delay: index * 0.2,
        }
    );
});


//Grayed-out other cards when hover on one card
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        projectCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.add('grayed-out');
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        projectCards.forEach(otherCard => {
            otherCard.classList.remove('grayed-out');
        });
    });
});