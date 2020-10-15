// const doNotShow (

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("done"), 1000);
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });


// promise.then(
//     (result) => alert(result),
//     (error) => alert(error),
// );

// console.log(promise);


// //es6



// const promis2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("es6 is the  new way"), 1000);
//     setTimeout(() => reject(new Error("ES6 Whoops!!")), 1000);
// }).then(
//     (result) => alert(result),
//     (error) => alert(error),
// );

// const promis3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("another way of doning it"), 1000);
//     setTimeout(() => reject(new Error("The beste error catcher")), 1000);
// }).then(result => alert(result))
//     .finally(() => stop ('the promise is done'))
//     .catch(error => (error));
// );






/*exercitii*/



/*ex1*/

const compareNumbers = (numbers) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve, reject(numbers > 10), 1000);
    }).then(result => alert(result))
        .catch(error => alert(error));

// compareNumbers(1);


/*ex2*/

const checkString = (value) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(value.includes('promise')), 1000)
    }).then((result) => alert(result))
        .catch((error) => alert(error));


// checkString('this is my promise');
// checkString('thes is someting alese');
// checkString(12);


/*ex 3*/


const validateType = (value) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === "string") {
                resolve(value.toLocaleUpperCase())
            } else {
                reject(value);
            }
        }, 500)
    }).then(result => alert(result))
        .catch(error => alert(error));

        // validateType('ploaie E MARE');
        // validateType(23)



*/


// const myChainedPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve(2),500)
// }).then(result =>{
//     alert (result);//2
//     return result *2;
// }).then(result => {
//     alert(result);//4
//     return result * 2;
// }).then(result => {
//     alert(result);//8
//     return result * 2;
// }).then(result => {
//     alert(result);
//     return result * 2;
// }).then(result => {
//     alert(result);
// }).catch(error => error);

//exer

const anotherChain = new Promise ((resolve, reject)=>{
    setTimeout (()=> resolve('Ana'),100);
}).then(result =>{
    alert(result);
    return `${result} are`;
}).then (result =>{
    alert (result);
    return `${result} merge`;
}).then (result => alert(result));





















/*tema pertea 1


4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

5. Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (
cel putin 3 )
