const buttonForGenerate = document.getElementById('xhr');
const paragraphGenerator = document.getElementById('quote');
const quoteGenerator = () => {
    const quote = new XMLHttpRequest();
    let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    quote.open('GET', url);
    quote.onreadystatechange = () => {
        paragraphGenerator.innerText = quote.response.slice(1, quote.response.length - 1);
    }
    quote.send();
}


buttonForGenerate.addEventListener('click', quoteGenerator);


