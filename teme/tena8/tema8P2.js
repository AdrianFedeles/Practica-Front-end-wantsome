//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumConst = (Constnumber) => {
    const count = Number(Constnumber);
    return function () {
        let sum = 0;
        for (let i = 1; i <= count; i++) {
            sum += i;
        }
        return sum;
    }
}
console.log(sumConst(500)());

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
// const longStrring = (string) => {
//     let searchString = string.split(" ");
//     let lenghtString = searchString[0];
//     return function () {
//         for (let i = 0; i < searchString.length; i++) {
//             if (searchString[i].length < searchString[i + 1].length) {
//                 lenghtString = searchString[i + 1];
//             }
//         }
//         return lenghtString;
//     }
// }
// console.log(longStrring("Wantsome is Awsomeeee today")());



/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

const reverseWord = (word) => {
    let arrayToWord = word.split("");
    let reverseTheWord = "";
    return function () {
        for (let i = arrayToWord.length - 1; i >= 0; i--) {
            reverseTheWord = reverseTheWord.concat(arrayToWord[i]);
        }
        return reverseTheWord;
    }
}
console.log(reverseWord("I'm afraid of JavaScript.")());

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const converTime = function (numberToConvert) {
    let convertNumberToTime = Number(numberToConvert);
    return function () {
        let convertNumberToHour = convertNumberToTime / 60;
        let convertNumberToMinutes = convertNumberToTime % 60;
        return (convertNumberToHour.toFixed(0) + ":" + convertNumberToMinutes);
    }
}
console.log(converTime(64)());
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const searchEverything = function (searcherForString) {
    const arraySearcher = searcherForString.split("");
    return function () {
        for (let i = 0; i < arraySearcher.length; i++) {
            if (i % 2 === 0 && arraySearcher[i] !== "+") {
                return false;
            }
            else if (arraySearcher[arraySearcher.length - 1] !== "+") {
                return false;
            }
        }
        return true;
    }
}
console.log(searchEverything("+a+b+c+")());
console.log(searchEverything("+ab+c+d+")());


function myMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}
const increment = (varToIncrement) => {
    return varToIncrement + 1;
};
const double = (varToDouble) => {
    
    return varToDouble * 2;
};
const square = (varToSquare) => {
    return varToSquare * varToSquare;
};
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,100];

console.log(myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]