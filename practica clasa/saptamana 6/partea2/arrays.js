//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur

var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var array3 = array1.concat(array2);
console.log(array3)

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()

var fructe = ['clementine', 'ananas'];
var name = 'Maria';

console.log(Array.isArray(fructe));
console.log(Array.isArray(name));


//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];

var numbersAnd = numbers.join(' and ');
console.log(numbersAnd);









