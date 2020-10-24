//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width","100px");
localStorage.setItem("height","100px");
localStorage.setItem("backgroundColor","green");

const width=localStorage.getItem("width");
const height=localStorage.getItem("height");
const BgColor=localStorage.getItem("backgroundColor");
const square=document.createElement("div");
square.style.width=width;
square.style.height=height;
square.style.backgroundColor=BgColor;
const body=document.getElementById("square").appendChild(square);  