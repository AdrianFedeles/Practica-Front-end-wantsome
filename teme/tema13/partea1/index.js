// Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain).
//  Prima functie,capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

let filter = (arr) =>
    new Promise(function (resolve, reject) {
        arr.map((value) => {
            if (typeof value === 'string') {
            } else {
                reject(value);
            }
        });
        resolve(arr);
    })

        .then((result) => capitalizeWords(result))
        .then((result) => {
            console.log(sortWords(result));
        });

const capitalizeWords = (arr) => {
    let capitalize = [];
    arr.map((value) => {
        capitalize.push(value.toUpperCase());
    });
    return capitalize;
};

const sortWords = (sortArr) => sortArr.sort();

filter(["a fost", "odata", "ca ", "nici", "odata", "ca", "de", "nu", "ar", "fi", "nu", "s-ar", "mai", "povesti"]);
filter([1, 2,3,4,5,6,7,8,10 , "unu", "doi", "trei", "patru", "cinci", "sase", "sapte", "opt", "noua", "zece"]);

/*5
Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (cel putin 3 )*/
let json = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status == 200) {
            let pack = JSON.parse(xhr.response);
            filter(pack);
        }
    };
    xhr.send();
};
json(`./index.json`);