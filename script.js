/* =====================================================
   TYPING ANIMATION
===================================================== */

const texts = [
    "Software Developer",
    "AI & ML Enthusiast",
    "Backend Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement =
    document.getElementById("typing");


function typeEffect() {

    const currentText =
        texts[textIndex];


    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );

}


typeEffect();



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("show");


        const icon =
            menuBtn.querySelector("i");


        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }
);



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("show");


                const icon =
                    menuBtn.querySelector("i");


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }
        );

    });



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 140;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(
        function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =====================================================
   CLOSE MENU WHEN RESIZING
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 700) {

            navLinks.classList.remove("show");


            const icon =
                menuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }
);
