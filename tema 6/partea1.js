//partea 1 din tema 6

//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var arrLenght = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 2.5];
console.log(arrLenght.length);

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos

var cars = ['Tesla', 'Dacia'];
cars.push("Tico", "Aro");
console.log(cars);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

cars.pop();
console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift("Dodge");
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

cars.splice(2, 2, "Daf", "Kamaz");
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
// 10-a mic-mare
var arrayNumbers = [1, 5, 20, 30, 100];
arrayNumbers.sort()
console.log(arrayNumbers)
// sau mic-mare
arrayNumbers.sort(function (a, b) {
    return a - b;
})
console.log(arrayNumbers);
// 10-b mare -mic
arrayNumbers.sort(function (a, b) {
    return b - a;
});
console.log(arrayNumbers);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat

var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort();
console.log(fruitsArray);
// sau
function sort(sortFunction) {
    sortFunction.sort();
    return sortFunction;
}
console.log(sort(fruitsArray));


//partea 2 din tema 6
////Ex4 
// Creati un obiect cu cateva proprietati

var agentie = {
    angajati: 3,
    anunturi: 20,
    zone: "copou",
    sefAgentie: "Mihai",
};

//Copiere obiect

var copieAgentie = Object.assign(agentie);
console.log(copieAgentie);

//adaugare proprietati

copieAgentie.varsteMax = 30;
copieAgentie.masa = "calda";
console.log(agentie)

//obircte noi

myHouse = {
    rooms: 3,
    zone: "Bucium",
    animals: 1
}
var copieMergeAgentie = Object.assign(copieAgentie, myHouse);
console.log(copieMergeAgentie);

//5
//Creat obiect
var combinaMuzicala = {
    nume: "Sony Alpin",
    producator: "Sony",
    numarCasete: 2,
    picap: 1,
    audio: {
        boxe: 4,
        microfon: 'Audio-Tehnica',
    },
    transport: "da"
}
console.log(combinaMuzicala);

//Key-variabila separata

var objKeys = Object.keys(combinaMuzicala.audio);
console.log(objKeys);

//arrayul intr-un singur string 

var strKey = objKeys.join(", ");
console.log(strKey);
console.log(strKey.slice(0, 3) + " si " + strKey.slice(6, strKey.lenght) + " apartin obiectului x");

//Ex6
// Avem obiectul :

myObject = {
    name: "John",
    surname: "Applegate",
}

//adaugat metoda

var sortNume = Object.values(myObject).sort();
console.log(sortNume);

//Ex7 
//functia constructor

function person(name, prename, id, acces) {
    this.name = name;
    this.prename = prename;
    this.id = id;
    this.acces = acces;
};

//3 valori diferite

var newPerson1 = new person("Mihai", "Berbeceanu", 2262, "total");
var newPerson2 = new person("Marius", "Mihailescu", 3337, "partial");
var newPerson3 = new person("Nicolaie", "Fantu", 1021, "partial");
console.log(newPerson1, newPerson2, newPerson3);

//Uppercase

function person(name, prename, id, acces) {
    this.name = name.toUpperCase();
    this.prename = prename.toUpperCase();
    this.id = id;
    this.acces = acces.toUpperCase();
}
console.log(newPerson1, newPerson2, newPerson3);




























