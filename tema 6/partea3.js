
//1. Scrieti o functie sub forma named function care accepta ca argument un CNP 
//si verifica sexul unei persoane. In urma apelului acestei functii, se va returna
// un text de forma "Persoana verificata este de sexul M/F".

//2. Scrieti o functie sub forma function expression care accepta ca argument
// o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. 
//Criteriile sunt urmatoarele:

//- 1-3 = E
//- 3-6 = D
//- 7-8 = B
//- 9 = A
//- 10 = A+

function gradation(qualifying) {
    //facem o variabila noua in care ii spunem ca valoarea functiei noastre gradation adica qualifying va fi mereu de type number
    var qualifyingNumber = Number(qualifying);
    //facem o conditia: qualifyingNumber sa fie cuprins intre 1 si 10 adica  1 <= qualifyingNumber && qualifying <=10;
    if (1 <= qualifyingNumber && qualifyingNumber <= 10) {
        switch (true) {//facem un switch si ii atribuim intre paranteze boleanul True; pentru a vedea daca este adevarat sau fals pentru a ne alege calificativul in functie de punctaj;
            case qualifyingNumber <= 3:
                {//daca punctajul este mai mic de 3 vom avea mesajl cu calificativul E
                    return "Pentru nota " + qualifyingNumber + " vei avea calificativul E.";
                }
            case qualifyingNumber <= 6:
                {//daca punctajul este mai mic de 6 vom avea mesajl cu calificativul D
                    return "Pentru nota " + qualifyingNumber + " vei avea calificativul D.";
                }
            case qualifyingNumber <= 8:
                {//daca punctajul este mai mic de 8 vom avea mesajl cu calificativul B
                    return "Pentru nota " + qualifyingNumber + " vei avea calificativul B.";
                }
            case qualifyingNumber <= 9:
                {//daca punctajul este mai mic de 9 vom avea mesajl cu calificativul A
                    return "Pentru nota " + qualifyingNumber + " vei avea calificativul A.";
                }
            case qualifyingNumber <= 10:
                {//daca punctajul este mai mic de 10 vom avea mesajl cu calificativul A+
                    return "Pentru nota " + qualifyingNumber + " vei avea calificativul A+.";
                }
        }
    }
    else {//cazul in care calificativul introdus este cu -40 sau 60 sa ne afiseze mesajul nu exista acest pinctaj
        return "Acest punctaj nu exista in scoala din Romania, incearca in Franta!";
    }
}
console.log(gradation(9.5));





//exercitiul 3


//Object

function country1(mark) {
    var masini = {//facem un obiect
        "toyota": "Japonia",
        "hiunday": "China",
        "hummer h3": "America",
        "tata": "India",
        "pagani huayra": "Italia",
        "koenigsegg regera": "Suedia",
        "pontiac": "America",
        "aston martin": "Marea Britamie",
        "ssc tuatara": "America",
        "buick": "America",
    }
    //facem o variabila pentru a putea transfosrma propietatile ce le are country1 in lowerCase
    var markLowerCase = mark.toLowerCase();
    //facem o returnare pentru concatenarea dintre stringuri si apelarea obiectelor din obirctul "masini"
    return "Automobilul cu marca " + markLowerCase + " se produce in " + masini[markLowerCase] + ".";
}
console.log(country1("toyota"));
console.log(country1("hiunday"));
console.log(country1("hummer H3"));
console.log(country1("tata"));
console.log(country1("pagani huayra"));
console.log(country1("koenigsegg regera"));
console.log(country1("pontiac"));
console.log(country1("aston martin"));
console.log(country1("ssc tuatara"));
console.log(country1("buick"));


//switch

function country2(mark) {//facem 2 variabile, si un swithc cu case-uri
    var carMarkLowerCase = mark.toLowerCase();//variabila va transforma tot ce primim in console.log de conuntry2 de o marca
    //pentru a o transforma lowerCase
    var countryProvign;//variabila va fi apelata in case-uri si va purta vaorile (tari de provenienta a marcii corespunzatoare)
    switch (carMarkLowerCase) {//facem switchi-ul pentru a primi valori de diferite caractere (stringuri) si sa ple transforme in toLowerCase
        case "toyota": {//cazul 1, in total sunt 10 cazuri + un default
            countryProvign = "Japonia";//variabilei carMarkLowerCase ii atribuim valoarea Japonia adica: tari de provenienta a marii de masini din lista noastra.
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";//facem un return ce ne returneaza concatenarea intre stringuri si variabilele.
        }
        case "hiunday": {
            countryProvign = "China";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "hummer h3": {
            countryProvign = "America";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "tata": {
            countryProvign = "India";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "pagani huayra": {
            countryProvign = "Italia";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "koenigsegg regera": {
            countryProvign = "Suedia";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "pontiac": {
            countryProvign = "America";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "aston martin": {
            countryProvign = "Marea Britanie";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "ssc tuatara": {
            countryProvign = "North America";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        case "buick": {
            countryProvign = "America";
            return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
        }
        default: {//facem un caz default pentru alte marci ne specificate in lista noastra (Swithci).
            return "Automobilul cu marca " + carMarkLowerCase + " nu a fost gasita!";
        }
    }
}

console.log(country2("toyota"));
console.log(country2("hiunday"));
console.log(country2("hummer h3"));
console.log(country2("tata"));
console.log(country2("pagani huayra"));
console.log(country2("koenigsegg regera"));
console.log(country2("pontiac"));
console.log(country2("aston martin"));
console.log(country2("ssc tuatara"));
console.log(country2("buick"));
//default
console.log(country2("lykan HyperSport"));


//if | else if | else

function country3(mark) {
    var carMarkLowerCase = mark.toLowerCase();
    var countryProvign;
    if (carMarkLowerCase == "toyota") {
        countryProvign = "Japonia";
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "hiunday") {
        countryProvign = "China"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "hummer h3") {
        countryProvign = "America"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "tata") {
        countryProvign = "India"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "pagani huayra") {
        countryProvign = "Italia"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "koenigsegg regera") {
        countryProvign = "Suedia"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "pontiac") {
        countryProvign = "America"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "aston martin") {
        countryProvign = "Marea Britanie"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "ssc tuatara") {
        countryProvign = "North America "
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else if (carMarkLowerCase == "buick") {
        countryProvign = "America"
        return "Automobilul cu marca " + carMarkLowerCase + " se produce in " + countryProvign + ".";
    }
    else {
        return "Automobilul cu marca " + carMarkLowerCase + " nu a fost gasita!";
    }

}

console.log(country3("toyota"));
console.log(country3("hiunday"));
console.log(country3("hummer H3"));
console.log(country3("tata"));
console.log(country3("pagani huayra"));
console.log(country3("koenigsegg regera"));
console.log(country3("pontiac"));
console.log(country3("aston martin"));
console.log(country3("ssc tuatara"));
console.log(country3("buick"));
//default
console.log(country3("lykan HyperSport"));