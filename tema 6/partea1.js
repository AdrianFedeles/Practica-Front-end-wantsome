//partea 1 din tema 1
// 5
var cars = ['Tesla', 'Dacia'];
cars.push("Tico", "Aro");
console.log(cars);
// 6
cars.pop();
console.log(cars);
// 7
cars.unshift("Dodge");
console.log(cars);
// 8
cars.reverse();
console.log(cars);
// 9
cars.splice(2, 2, "Daf", "Kamaz");
console.log(cars);
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

// 11
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort();
console.log(fruitsArray);
// sau
function sort(sortFunction) {
    sortFunction.sort();
    return sortFunction;
}
console.log(sort(fruitsArray));


//partea 2 din tema 1
//Exercitiul 4

var agentie = {
    angajati: 3,
    anunturi: 20,
    zone: "copou",
    sefAgentie: "Mihai",
};
//Copiere obiect
var copieAgentie = Object.assign(agentie);
console.log(copieAgentie);
//adaugare
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
//6
myObject = {
    name: "John",
    surname: "Applegate",
}
var sortNume = Object.values(myObject).sort();
console.log(sortNume);
//7
//functia constructor
function person(name, prename, id, acces) {
    this.name = name;
    this.prename = prename;
    this.id = id;
    this.acces = acces;
};
//3 valori diferite
var newPerson1 = new person("Mihai", "Berbeceanu", 226, "total");
var newPerson2 = new person("Marius", "Mihailescu", 333, "partial");
var newPerson3 = new person("Nicolaie", "Fantu", 102, "partial");
console.log(newPerson1, newPerson2, newPerson3);
//Uppercase





























