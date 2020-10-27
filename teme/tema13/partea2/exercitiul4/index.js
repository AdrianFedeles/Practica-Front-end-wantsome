//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width","100px");
localStorage.setItem("height","100px");
localStorage.setItem("backgroundColor","red");

const width=localStorage.getItem("width");
const height=localStorage.getItem("height");
const backgroundColor=localStorage.getItem("backgroundColor");
const divSquare=document.createElement("div");
divSquare.style.width=width;
divSquare.style.height=height;
divSquare.style.backgroundColor=backgroundColor;
const body=document.getElementById("square").appendChild(divSquare);  