//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *
const body = document.querySelector("body");
const url = "./exemplu.json";
fetch(url)
    .then((response) => response.json())
    .then((response) => localStorage.setItem("user", JSON.stringify(response)));
let listOfObjects = JSON.parse(localStorage.getItem("user"));
listOfObjects.forEach((something) => {
    let div = document.createElement("div");
    let title = document.createElement("h1");
    let author = document.createElement("p");
    let video = document.createElement("video");
    author.innerText = something.author;
    title.innerText = something.title;
    video.setAttribute("src", something.youtubeVideo + "&html5=true");
    video.setAttribute("type", "video.mp4");
    body.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(video);
    let rating = document.createElement("p");
    let stars = "********";
    rating.innerText = stars.slice(0, something.rating);
    div.appendChild(rating);
});