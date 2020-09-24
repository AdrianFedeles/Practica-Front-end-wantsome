// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra


const Body = () => {
    let bodyEl = document.body;
    bodyEl.style.fontFamily = "Arial, sans-serif";
    bodyEl.style.color = "#00ff00";
    bodyEl.style.backgroundColor = "green";
    bodyEl.style.fontSize = "50px";
}

const Span = () => {
    let spanElements = document.getElementsByTagName("span");
    spanElements[0].innerText = "Adrian";
    spanElements[1].innerText = "Fedeles";
    spanElements[2].innerText = "Cola";
    spanElements[3].innerText = "Harlau";
    spanElements[4].innerText = "Iasi";
}
const Iteration = () => {
    let liEl = document.getElementsByTagName("li")
    for (let i = 0; i < liEl.length; i++) {
        liEl[i].classList.add("listitem");
    }
}
const Iteration1 = () => {
    let liEl1 = document.getElementsByTagName("p")
    for (let i = 0; i < liEl1.length; i++) {
        liEl1[i].classList.add("paragraf");
    }
}
const Iteration2 = () => {
    let liEl2 = document.getElementsByTagName("title")
    for (let i = 0; i < liEl2.length; i++) {
        liEl2[i].classList.add(".titleOne");
    }
}

const image = () => {
    let imgEl = document.createElement("img");
    let bodyAppend = document.querySelector("body");
    bodyAppend.appendChild(imgEl);
    imgEl.setAttribute("src", "./LogoTransparent.webp");
}



Body();
Span();
Iteration();
Iteration1();
Iteration2();
image();