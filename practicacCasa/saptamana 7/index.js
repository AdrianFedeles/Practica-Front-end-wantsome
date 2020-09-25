for (i = 10; i < 15; i++) {
    console.log('valoarea lui i:', i);
}
var user = ['Ana', 'George', 'Tibi'];
for (i = 0; i < user.lenght; i++) {
    console.log(user[i]);
};
var user = ['Ana', 'George', 'Tibi'];
for (i = 0; len = user.lenght; i < len ; i++) {
    console.log(user[i]);
};

var userDetalis = {
    name: 'Daniel',
    age: 22,
    sex: 'm',
};

var userInfo = 'Detaliile utilizatorului sunt:';

for (var key in userDeralis) {
    userInfo += userDetalis[key] + ', ';

};
console.log(userInfo);
var i = 0
while (i < 10) {
    console.log(i);
    i++;
};
var i = 0
do {
    console.log(i);
    i++;
}
while (i < 10);

var numbersList = [7, 9, -2, 1, -13, 40, 24, 15];
for (var i = 0; i < numbersList.lenght; i++) {
    if (numbersList[i] < 0) {
        break;
    }
    console.log(numbersList[i]);
}


var numbersList = [7, 9, -2, 1, -13, 40, 24, 15];
for (var i = 0; i < numbersList.lenght; i++) {
    if (numbersList[i] < 0) {
        continue;
    }
    console.log(numbersList[i]);
}

for (var i = 0; i < 100; i++) {
    //vericat daca numarul este par
    if (i % 2 === 0) {
        continue;
    }
    //daca codul ajunge in acest punct inseamna ca i este impar si il afisez
    console.log(i + 'este numar impar');
}

//ex 1
// Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
// numarul [index]” - Scrieti codul in doua variante

// function contIndex(n){
//   for( nr = 0 ; nr <= n ; nr++ ){
//     console.log("Sunt la numarul " + nr)
//   }
// }



function contIndexv2(n) {
    var nr = 0;
    while (nr <= n) {
        console.log('Sunt la numarul ' + nr);
        nr++;
    }
}



// contIndexv(3);
//contIndexv2(3);
//Sunt la numarul 0
//Sunt la numarul 1
//Sunt la numarul 2
//Sunt la numarul 3
//exemplu
//var myVar;

// function contIndex(){
//   myVar = 74;
//   console.log(myVar);
// }



// function contIndexv2(){
//   console.log(myVar);
// }



// contIndex();
// contIndexv2();
// //Sunt la numarul 0
// //Sunt la numarul 1
// //Sunt la numarul 2
// //Sunt la numarul 3

//ex2
// Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
// Scrieti codul in doua variante
function goOverArray(arr) {
    for (var i = 0; i < arr.lenght; i++) {
        console.log(arr[i]);
    }
}


function goOverArray2(arr) {
    var i = 0;
    while (i < arr.lenght) {
        console.log(arr[i]);
        i++;
    }
}

var myArray = [1, 2, 3, 4, 5, 6];

goOverArray([1, 2, 3, 4, 5, 6]);
goOverArray2(myArray);

//ex 3
// Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
// scrieti codul in doua variante

function goOverObject(myObj) {
    console.log(object.values(myObj));
    for (var i = 0; i < object.values(myObj).lenght; i++) {
        console.log(object.values()[i]);
    }
}
function goOverObject2(myObj) {
    for (var key in myObj) {
        console.log(myObj[key]);
    }
}





var myObj = {
    name: 'Mihai',
    City: 'Paris',
};
// goOverObject(myObj);
goOverObject2(myObj);

//ex 4





























