//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function multiNumb(a, b) {/*facem 2 let-uri pentru a,b apoi facem let de suma ca sa le adunam*/
    let num1 = a;
    let num2 = b;
    let suma = a + b;
    /*compara numerele sa vedem daca sunt egale*/
    if (a === b) {
        suma *= 5;
    }
    return suma;
}
console.log(multiNumb(10, 10));


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true
//testFunction(15,15) - true
//testFunction(10, 15) - false

function myFunction(a, b) {
    /*facem un let de suma si adunam a+b */
    let suma = a + b;
    /*facem un if unde comparam cifrele si sumele mor cu 30*/
    if (a === 30 && b === 30) {
        return true;
    } else if (suma === 30) {
        return false;
    } else {
        return true;
    }
}
console.log(myFunction(30, 30));


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function js(string) {
    /*facem un let de comparare prin metoda slice sa retina JS*/
    let compasion = string.slice(0, 2);
    const compasionValue = "JS";/*facem o constanta ce terine stringul JS*/
    if (compasion.toUpperCase() == compasionValue) {/*facem un if care compara strigul dat in console.log cu valoarea let-ului compasionValue (js)*/
        return string;/*returneze un string*/
    } else {
        return compasionValue.concat(string);/*daca nu sa concateneze valoarea lut-ului compasionValue (JS) cu valoarile date in console.log*/
    }
}
console.log(js("JSisAwsome"));


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function longStr(str) {
    /*desfacem sirul de caractere pentru a compara pe fiecare litera in parte*/
    let searchStr = str.split(" ");
    /*facem un let pentru a incepe compararea*/
    let lenghtStr = searchStr[0];
    /*facem un for in care ii spumen ca i este care o valoare intre 0 si lungimea let-ului lenghtStr(searchStr[0])*/
    for (let i = 0; i < searchStr.length; i++) {
        /*facem un if in care facem compararea propriuzisa lungimea let-ului lenghtStr  care esre <= cu lungimea sitului de caractere*/
        if (lenghtStr.length <= searchStr[i].length) {
            /*let-ul  lenghtStr ia valoarea let-ului searchStr */
            lenghtStr = searchStr[i];
        }
    }
    return lenghtStr;
}
console.log(longStr("Wantsome is Awsomeeee today"));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *
// * *
// * * *
// * * * *
// * * * * *

function bot(steluta) {
    /*facem un let care ii atribuim caracterul "*"*/
    let point = "*";
    /*facem un let initial care ii atrinuim "" fara spatiu*/
    let dots = "";
    /*facem un for in care i este o valoare cuprinsa intre 0 si valoarea steluta data in console.log*/
    for (i = 1; i < steluta; i++) {
        dots += point;/*facem operatiunea de immultire a stelutelor dupa numarul dar in console.log*/
        console.log(dots);/*afiseaza*/
    }
    return (dots += point);
}
console.log(bot(100));


//ex7


function extractNegativeNumbers(numbers) {
    const negativeNumbers = [];
    for (i = 0; i <= numbers.length; i++) {
        if (numbers <= 0) {

        }
    }

}
extractNegativeNumbers([1, 2, -5, 4, -6])


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const myConst = function myConst(a, b, c) {
    switch (c) {
        case 'add': {
            return a + b;
        }
        case 'substract': {
            return a - b;
        }
        case 'multiply': {
            return a * b;
        }
        case 'divide': {
            return a / b;
        }
    }
}
console.log(calculate(2, 5, "add"));

console.log(calculate(10, 8, "substract"));


//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7



