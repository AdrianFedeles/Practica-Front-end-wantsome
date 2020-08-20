// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name


var car = {
    name: 'Tesla',
    weeles: 4,
}
console.log(car);

car.name = 'Mercedes';

console.log(car);

delete car.name;
console.log(car);


var car = {};

car.name = 'Tesla';
car.weels = 4;

console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"


var song = {
    title: 'Hit em up',
    artist: '2Pac',
    year: 1995,
    lable: 'Death Row',
};

var myKeys = Object.keys(song);
console.log(myKeys);

var myBigKeys = myKeys.join(', ').toUpperCase();
console.log(myBigKeys);


var myValues = Object.values(song);
console.log(myValues);

var myLowerValues = myValues.join().toLowerCase();
console.log(myLowerValues);


var fraza = 'Piesa ' + song.title + ' este interpretata de ' + song.artist + ' si a fost lansata in anul ' + song.year + ' produsa de ' + song.lable + ".";

console.log(fraza);



//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.


var animal = {
    name: 'Rex',
    age: 6,
    describePet:function(){
        console.log('El este ' + animal.name + " si are " + animal.age + ' ani.')
    }
}

animal.describePet()
console.log(animal.name, animal.age);


















