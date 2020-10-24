// Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain).
//  Prima functie,capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

let filter = (array) =>
    new Promise(function (resolve, reject) {
        array.map((value) => {
            if (typeof value === "string") {
            } else {
                reject(value);
            }
        });
        resolve(array);
    })

        .then((result) => capitalizeWords(result))
        .then((result) => {
            console.log(sortWords(result));
        });

const capitalizeWords = (array) => {
    let capitalized = [];
    array.map((value) => {
        capitalized.push(value.toUpperCase());
    });
    return capitalized;
};

const sortWords = (arrayToSort) => arrayToSort.sort();

filter(["assjuasgh", "afasdfgsa", "afgdfsrgr", "mihai", "safgseg", "uhr"]);
filter([1, "afa,", 2]);

//////////EXERCITIUL 5////////////////
let getJSON = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status == 200) {
            let x = JSON.parse(xhr.response);
            filter(x);
        }
    };
    xhr.send();
};
getJSON(`./exemplu.json`);