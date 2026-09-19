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


function typingAnimation(){

    const currentText =
        text[textIndex];


    if(!deleting){

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if(charIndex === currentText.length){

            deleting = true;

            setTimeout(
                typingAnimation,
                1600
            );

            return;

        }

    }

    else{

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if(charIndex === 0){

            deleting = false;

            textIndex++;

            if(textIndex >= text.length){

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typingAnimation,
        deleting ? 50 : 90
    );

}


typingAnimation();



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section, header");


const navLinks =
    document.querySelectorAll(".sidebar a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});
