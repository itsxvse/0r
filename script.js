console.log("0RVSE SYSTEM ONLINE");

const cards = document.querySelectorAll(".skill-card, .project");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {
        card.style.transition = "0.15s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transition = "0.35s";
    });

});
