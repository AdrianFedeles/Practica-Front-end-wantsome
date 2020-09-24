//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

const colorBlue = () => {
    let blue1 = document.getElementById("test");
    let blue2 = document.getElementById("test-query");
    blue1.style.backgroundColor = "blue";
    blue2.style.backgroundColor = "#3399ff";
}

const colorRed = () => {
    let red1 = document.getElementsByClassName("test");
    for (let i = 0; i < red1.length; i++) {
        red1[i].style.backgroundColor = "red";
        let red2 = document.getElementsByClassName("test-query-all");
        for (let j = 0; j < red2.length; j++) {
            red2[j].style.backgroundColor = "#ff6600";
        }
    }
}

const colorGreen = () => {
    let green1 = document.getElementsByTagName("section");
    let green2 = document.getElementsByTagName("h1");
    for (let i = 0; i < green1.length; i++) {
        green1[i].style.backgroundColor = "green";
    }
    green2[0].style.backgroundColor = "#66ff66";
}


colorBlue();
colorRed();
colorGreen();