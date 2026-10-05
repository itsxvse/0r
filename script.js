/* =================================
   0RVSE // SYSTEM
================================= */
console.log("0RVSE // SYSTEM ONLINE");
/* =================================
   SCROLL REVEAL
================================= */
const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-box, .contact-section"
);
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);
revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
/* =================================
   MOUSE GLOW
================================= */
document.addEventListener("mousemove", (event) => {
    document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
    );
    document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
    );
});
/* =================================
   TERMINAL TYPING
================================= */
const terminal =
    document.querySelector(".terminal-content");
if (terminal) {
    const cursor =
        terminal.querySelector("p:last-child");
    let blink = true;
    setInterval(() => {
        if (cursor) {
            blink = !blink;
            cursor.style.opacity =
                blink ? "1" : "0.35";
        }
    }, 500);
}
/* =================================
   CARD TILT
================================= */
const cards = document.querySelectorAll(
    ".skill-card, .project-card"
);
cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect =
            card.getBoundingClientRect();
        const x =
            event.clientX - rect.left;
        const y =
            event.clientY - rect.top;
        const rotateX =
            ((y / rect.height) - 0.5) * -5;
        const rotateY =
            ((x / rect.width) - 0.5) * 5;
        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});
/* =================================
   ACTIVE NAVIGATION
================================= */
const sections =
    document.querySelectorAll("section[id]");
const navLinks =
    document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop =
            section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});
/* =================================
   SMOOTH BUTTON FEEDBACK
================================= */
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.97)";
        setTimeout(() => {
            link.style.transform = "";
        }, 120);
    });
});
