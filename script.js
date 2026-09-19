/* =====================================================
                    TYPING ANIMATION
===================================================== */

const text = [
    "Software Developer",
    "AI & ML Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement =
    document.getElementById("typing");


function typeText() {

    const currentText =
        text[textIndex];


    /* ---------------- TYPING ---------------- */

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typeText,
                1500
            );

            return;
        }

    }


    /* ---------------- DELETING ---------------- */

    else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex++;


            if (
                textIndex >=
                text.length
            ) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typeText,
        deleting ? 50 : 90
    );

}


/* Start typing animation */

typeText();



/* =====================================================
                    ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                    &&
                    window.scrollY <
                    sectionTop +
                    sectionHeight
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);
