/* ================= TYPING ANIMATION ================= */

const text = [
    "Software Developer",
    "AI & ML Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");


function typeText() {

    const currentText = text[textIndex];


    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeText, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= text.length) {
                textIndex = 0;
            }

        }

    }


    setTimeout(
        typeText,
        deleting ? 50 : 90
    );
}


typeText();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section, .hero");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});
