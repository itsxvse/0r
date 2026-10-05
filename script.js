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
/* ==============================
   INTERACTIVE TERMINAL
============================== */

const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");

if (terminalInput) {

    terminalInput.addEventListener("keydown", function(event) {

        if (event.key !== "Enter") return;

        const command =
            terminalInput.value
                .trim()
                .toLowerCase();

        terminalInput.value = "";

        let response = "";

        if (command === "help") {

            response =
                "Available commands: whoami, skills, projects, status, clear";

        }

        else if (command === "whoami") {

            response =
                "0RVSE — Cybersecurity enthusiast & developer.";

        }

        else if (command === "skills") {

            response =
                "HTML • CSS • JavaScript • Python • Git • Linux";

        }

        else if (command === "projects") {

            response =
                "Portfolio • Cyber Tools • Web Projects • Automation";

        }

        else if (command === "status") {

            response =
                "SYSTEM ONLINE ✓";

        }

        else if (command === "clear") {

            terminalOutput.innerHTML = "";
            return;

        }

        else if (command === "") {

            return;

        }

        else {

            response =
                `Command not found: ${command}. Type "help".`;

        }

        terminalOutput.innerHTML +=
            `<div>
                <span class="terminal-user">0rvse@system</span>
                <span class="terminal-symbol">:~$</span>
                ${command}
            </div>
            <div class="terminal-output">
                ${response}
            </div>`;

    });

}
