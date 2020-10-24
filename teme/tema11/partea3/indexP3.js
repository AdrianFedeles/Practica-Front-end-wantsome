//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const composedValue = (argument1, argument2, value) =>
    argument1(argument2(value));
const square = (Square) => Square * Square;
const double = (Double) => Double+ Double;
console.log(composedValue(square, double, 5));

//ex.2
//Faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (Argument1, Argument2) => (Value) => Argument1(Argument2(Value));
const myFunction = compose(square, double);
console.log(myFunction(5));
console.log(myFunction(10));

//ex.3
//Faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

