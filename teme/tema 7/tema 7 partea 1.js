/* 1. 
Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for */

/*facem cu while*/
var i = 0;
while (i <= 20) {
    if (i % 2 == 0) {
        //i++
        console.log('Numarul ' + i + ' este numar par');
        i++;
    } else {
        //i++
        console.log('Numarul ' + i + ' este numar impar.');
        i++;
    }
}


//facem cu for;

/*facem un for care i este egal cu 0 i este mai mic sau egal cu 20 si i sa creasca exponential*/
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {/*i-ul ce va creste numar cu numar pana la 20 sa se imparta exact cu 2 (sa fie par) si numar intreg*/
        console.log('Numarul ' + i + ' este numar par');/*facem un console.log de i sa vedem daca este par odata cu cresterea exponentiala a lui i*/
    } else {/*daca nu*/
        console.log('Numarul ' + i + ' este numar impar.');/*facem un console.log de i sa vedem daca este impar odata cu cresterea exponentiala a lui i*/
    }
}


/*2. 
Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for*/

/*while*/

var multiplyNumber;/*facem o variabila */
var i = 0;/*o alta variabila i ce ii spunem ca este =  cu 0*/
while (i <= 10) {/*in while ii spunei variabilei i ce este egala cu 0 sa zie si mai mica ca 10*/
    //i++
    multiplyNumber = i * 9;/*variabila multiplyNumber ii atribuim operatia de inmultire a lui i ce este un numar intre 0 si 10 in ordine crescatoare dar inca 
    nu este incrementata cu +1*/
    //i++
    console.log(i + " * 9 = " + multiplyNumber);/*in consola facem concatenarea*/
    i++;/*ii spunem lui i ca na creste de la 0 la 10 in ordine crescatoare cu +1 ce apartine variabilaei var de i apoi apartine lui while ce va creste pana 
    la 10 si in interiorul blocului prin functia multiplyNumber sa faca operatiunea de inmultire in timp ce creste i cu +i si prin variabila multiplayNumber 
    va genera un rezultat care il concatenam mai sus in consola*/
}


/*facem cu for*/

/*facem un for unde i este egal cu 0 de unde sa porneasca, apoi i sa fie mai mic sau egal cu 10 (sa creasca de la 0 la 10 inclusiv) i sa creasca exponential cu 1 */
for (i = 0; i <= 10; i++) {
    var multiplyNumber = i * 9;/*facem variabila multiplyNumber unde face operatiunea de inmultire a lui i ce creste cu exponential cu +1 sa genereze un numar in 
    ordine crescatoare ce se imnulteste cu 9 si ne da un rezultat prin variabila multiplyNumber*/
    console.log(i + " * 9 = " + multiplyNumber)/*in consola concatenam i ce creste cu +1 sa dea un numar unde */
}

/*3. 
Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
 1 * 1 = 1
…
 1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”*/

/*facm un for unde i este egal cu o apoi i este mai mic sau elgal cu 10 adica i este cuprins intre 0si 10 si i creste incremental cu +1*/
for (i = 0; i <= 10; i++) {
    /*mai facel alt for in forul principal de i, facem un for secundar de I unde si el este cuprins intre 0 si 10 si creste incremental cu +1*/
    for (I = 0; I <= 10; I++) {
        /*facem o variabila multiplyNumber  unde ii spumen sa faca operatia de immultire intre i si I*/
        var multiplyNumber = i * I;
        /*in console.log facem concatenarea*/
        console.log(i + "*" + I + "=" + multiplyNumber) + "\n";/*\n nu imi este clar ce face el.*/
    };
};





/*4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
dezvoltate la tema anterioara ! */

//2. Scrieti o functie sub forma function expression care accepta ca argument
// o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. 
//Criteriile sunt urmatoarele:

//- 1-3 = E
//- 3-6 = D
//- 7-8 = B
//- 9 = A
//- 10 = A+


for (i = 1; i <= 10; i++) {
    switch (true) {
        case i <= 3:
            {
                console.log("Pentru nota " + i + " vei avea calificativul E.");
            }
            break;
        case i <= 6:
            {
                console.log("Pentru nota " + i + " vei avea calificativul D.");
            }
            break;
        case i <= 8:
            {
                console.log("Pentru nota " + i + " vei avea calificativul B.");
            }
            break;
        case i <= 9:
            {
                console.log("Pentru nota " + i + " vei avea calificativul A.");
            }
            break;
        case i <= 10:
            {
                console.log("Pentru nota " + i + " vei avea calificativul A+.");
            }
            break;
        default: {
            console.log("Intrudu calificativ");
        };
    };
};