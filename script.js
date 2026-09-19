const text = [
    "Software Developer",
    "AI & ML Enthusiast"
];

let i = 0;
let j = 0;
let deleting = false;


function typing(){

    const typingElement =
        document.getElementById("typing");

    const currentText = text[i];


    if(!deleting){

        typingElement.textContent =
            currentText.slice(0, j + 1);

        j++;


        if(j === currentText.length){

            deleting = true;

            setTimeout(typing, 1500);

            return;
        }

    }
    else{

        typingElement.textContent =
            currentText.slice(0, j - 1);

        j--;


        if(j === 0){

            deleting = false;

            i++;

            if(i === text.length){

                i = 0;

            }

        }

    }


    setTimeout(
        typing,
        deleting ? 50 : 80
    );

}


typing();
