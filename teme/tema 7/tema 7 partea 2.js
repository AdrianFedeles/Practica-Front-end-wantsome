/*1. Scrieti o functie care sa protejeze emailul unui user
de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
*/

function protectEmailUser(mail) {/*afcem o fuctie (protectEmailUser) ce are ca parametru o valoare (Mail)*/

    var from = mail.search('@');/*facem o variabila (from) ii spuneam sa ce gasesca cuvandtl specificat, in cazul nostru un simbol
    in care ne va returna o valoare de unde a gasit acel caracter si 
    cate caractere mai sunt dupa el pana la sfarsitul stringului in cazul nostru de la (@) pana la sfarsitul stringului. */

    var partOne = mail.slice(0, 6);/*facem o variabila (partOne) care face slice intre 0 si 6 adica ne va afisa doar 
    ce este intre 0 caracter si 6 caractere*/

    var partTwoo = mail.slice(from);/*facem o varoabila (partTwoo) ce ne afiseaza doar ce se afla dupa caracterul (@) si 
    altceva nu.*/

    /*console.log(partOne + '...' + partTwoo);*//*facem un console.log sa concateneze rezultatele variabilelor 
    (partOne) si (partTwoo) in variabila (partOne) sa inlocuiaca cu (...) in urma resultatului variabilei (partOne) adica 
    dupa caracterul 6 sa afiseze (...)*/

    return partOne + '...' + partTwoo;/*sau facem un return sa concateneze rezultatele variabilelor 
    (partOne) si (partTwoo) in variabila (partOne) sa inlocuiaca cu (...) in urma resultatului variabilei (partOne) adica 
    dupa caracterul 6 sa afiseze (...)*/
}
/*protectEmailUser('ovidiu.grigoras@test.com')*//*va finctiona daca lasam console.logdin interiorul functiei altfel ne va 
afisa rezultatil dorit si un undefined*/

console.log(protectEmailUser('ovidiu.grigoras@test.com'));/*va functiona daca lasam return in interiorul functiei si console.log() inafara functiei.*/



/*3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
*/

/*4. Scrieti o functie care sa concateneze un string de cate ori ii zicem
de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"*/

function multiWord(string, number) {/*facem o functie cu numele (multiWord) si ii dam 2 argumente (string) si (number) */

    var concatenatingWordsAndNumber = '';/*facem o variabila (concatenatingWordsAndNumber) pentru a concatena */

    for (i = 0; i < number; i++) { /*ii spumen for-ului ca (i) este egal cu 0 dar mai mic ca si argumentul (number si sa cfeasca 
        exponentia pana ce ajunge la valoarea mazima a argumentului (number) */
        concatenatingWordsAndNumber = concatenatingWordsAndNumber + string/*ii spune variabilei declarate mai sus 
        (concatenatingWordsAndNumber) ca este egala cu ea insasi si cu argumentul (string) */
    }
    return concatenatingWordsAndNumber/*sa ne returneze valorile variabilei (concatenatingWordsAndNumber) */
}
console.log(multiWord("Hello", 3));


/*6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
returneaza un array care contine ca si elemente cele mai mari numere din fiecare array*/

function myArray(array) {

    var arrayConcat = [];/*facem o variabila care va fi concatenarea array-ului*/

    for (i = 0; i < array.length; i++) {/*facem un for care (i) este intre 0 si nu mai mare de cat atirbutul (array) ca lungime
        si i cfeste exponential */

        var separator = array[i];/*facem o variabila unde ii spumen ca sa faca array-urile primite in array-uri mai marunte */
        var largestNumber = separator[0];/*facem o variabila de cel mai mai mare numar*/
        for (j = 0; j < separator.length; j++) {/*facem un for cu (j) unde j este egal cu 0 si nu mai mare decat (separattor) ca 
            lungime  adica sa afuseze cel mai mare numar din variabila (separator)  */
            if (largestNumber < separator[j]) {/*comparam numerele din fiecare array dat*/
                largestNumber = separator[j];
            }
        }
        arrayConcat = arrayConcat.concat(largestNumber);/*introducem valoarea cea mai mare intr-un array final*/
    }
    return arrayConcat;/*returneaza valorile cele mai mari ale array-urilor */
}
console.log(myArray([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25],
[26, 27, 28, 29, 30], [31, 32, 33, 34, 35], [36, 37, 38, 39, 40], [41, 42, 43, 44, 45], [46, 47, 48, 49, 50]]));


/*7. Implementati o functie care face reverse la un string*/

function reversingTheText(text) {
    var concatReversingTheText = [];/*facem o variabila care va fi concatenarea array-ului*/
    var textToArray; /*facem o variabila ca apoi sa o folosim in a desface textului*/
    for (i = 0; i < text.length; i++) {
        textToArray = text.split('');/*in variabila declarata mai sus desfacem textul in array-uri separate*/
        concatReversingTheText.unshift(textToArray[i]);/*variabila declarata mai sus facem concatenarea inversa a array-ului*/
    }
    return concatReversingTheText.join('');/*retturneaza valorile din (concatReversingTheText) adica si o transforma in stringul inversat  */
}
console.log(reversingTheText('Sunt cu capul in nori dupa exercitiul asta! Nu mai stiu nimic!...'))


/*8. Implementati o functie care calculeaza factorialul unui numar*/

/*9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma*/

function myString(string1, sting2) {/*facem o functie care primeste 2 argumente.*/

    var lengthString2 = sting2.length;/*facem o variabila care citeste lungimea stringului*/

    var compare = string1.length - lengthString2;/*facem o functie care compara lungimile stringurilor si 
    le scade intre ele si aflam deosebirile.*/

    if (string1.slice(compare) == sting2) {/*compara argumentele intre ele (string1) si (string2). */

        return 'Propozitia contine "' + sting2 + '" si incepe de la caracterul al ' + lengthString2 + ' lea.';
    }
    else {
        return 'Promozitia nu contine' + sting2 + 'nicaieri.';
    }
}
console.log(myString("me and myself", "myself"));
console.log(myString("nobody loves me", "me"));

/*10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
element din array care trece testul specificat*/

function textTrue(array, argument) {

    for (i = 0; i < array.length; i++) {/*facem un contor si ii spunem ca (i) este egal cu 0 si poate creste 
        exponential pana la valloarea lungimii argumentului (array) */

        if (array[i] === argument) {/*facem un if si ii spunem ca argumentul (array) este un array si detine valoarea lui (i) 
            este strict egal cu argumentul (argument) */
            return 'In string-ul ' + array + ' am argumentul ' + argument + ' este adevarat exista argumentul ' + array[i] + '.';
            /*facem return de argument (array) si ne va returna un array ce verifica ca argumentul este in array*/
        }
    }
    return 'In string-ul ' + array + ' nu detin argumentul ' + argument + '.';/*faca afirmatia este falsa sa ne returneze 
    ca nu exista argumentul in array*/
}
console.log(textTrue(['Alin', 'Maria', 'Sorin'], 'Marius'))/*Ne va returna FALSE*/
console.log(textTrue(['Cirese', 'Struguri', 'Gutuie'], 'Struguri'))/*Ne va returna STRIGURI*/
console.log(textTrue(['Vapor', 'Avion', 'Masina'], 'Masina'))/*Ne va returna MASINI*/
console.log(textTrue(['Mercedes', 'Daimler', 'Benz'], 'Mercedes'))/*Ne va returna MERCEDES*/

/*12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
element al array-ului pana cand intalneste elementul cu valoarea specificata*/



/*13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN*/



/*14. Scrieti o functie care repeta un string de n ori specificate*/

function myFunction1(repeatText, numberOfTime) {
    
    var repeatTextNumberOfTime = '';/*facem o variabial pentru a contoriza */
    
    for (i = 0; i < numberOfTime; i++) {/*facem contuar */
        
        repeatTextNumberOfTime = repeatTextNumberOfTime.concat(repeatText + " ");/*variabila mai sus mentionata 
        ii returneaza un string la fiecare contorizare afisata*/
    }
    
    return [repeatTextNumberOfTime, numberOfTime];/*returneaza de cate ori sa concateneze si sa afiseze in 
    functie de numarul dat in cazul nostru de (10) ori se repeta textul */
}
console.log(myFunction1('Ola amigo, como esta?', 10))