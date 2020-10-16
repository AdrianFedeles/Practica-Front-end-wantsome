const buttonToGen = document.getElementById("xhr");
const paragraphQuoted = document.getElementById("quote");
const quotesGenerator = () => {
    const quotesGen = new XMLHttpRequest();
    let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    quotesGen.open("GET", url);
    quotesGen.onreadystatechange = () => {
        paragraphQuoted.innerText = quotesGen.response.slice(1, quotesGen.response.length - 1);
    }
    quotesGen.send();
}


buttonToGen.addEventListener("click", quotesGenerator);