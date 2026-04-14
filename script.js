const text=[
"Software Developer",
"AI & ML Enthusiast"
];

let i=0;
let j=0;

(function typing(){

if(i===text.length){
i=0;
}

let current=text[i];
let letter=current.slice(0,++j);

document.getElementById("typing").textContent=letter;

if(letter.length===current.length){

i++;
j=0;
setTimeout(typing,1500);

}
else{

setTimeout(typing,80);

}

})();