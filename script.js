/* ==============================
   LOADING SCREEN
============================== */

let percent = 0;

const percentText =
    document.querySelector(".loader-percent");

const loader =
    document.getElementById("loader");

const counter = setInterval(() => {

    percent++;

    if (percentText) {
        percentText.textContent = percent + "%";
    }

    if (percent >= 100) {

        clearInterval(counter);

        setTimeout(() => {
            loader.classList.add("hide");
        }, 300);

    }

}, 20);
// 0RVSE SYSTEM
console.log("0RVSE // SYSTEM ONLINE");


// ==============================
// SCROLL REVEAL
// ==============================

const elements = document.querySelectorAll(
    ".section, .card, .project"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    observer.observe(element);
});


// ==============================
// MOUSE GLOW
// ==============================

document.addEventListener("mousemove", (event) => {

    document.body.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
    );

    document.body.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
    );

});
