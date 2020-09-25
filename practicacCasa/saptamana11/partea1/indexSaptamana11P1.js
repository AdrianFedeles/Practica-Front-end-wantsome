console.log(Math.random());
console.log(Math.min(1, 2));
console.log(Math.min(3, 12));

// const  add2 (x){
//     return x + 2 
// }

// const y = 2
// y = 12;


// const  adder  =(x) => {
//     return x + y
// }
// console.log(adder(4))


let y = 2;
y = 12;


const adder = (x) => {
    return x + y
}
console.log(adder(4))

/*function compozition*/

const add2 = (x) => x + 2;
const times2 = (y) => y * 2;

console.log(add2(times2(2)));
console.log(times2(add2(2)));

console.log(add2(times2(4)));
console.log(times2(add2(4)));


/*imutability*/

const person = {
    name: "Mike",
    age: 22,
};

console.log({ person });
// console.log(person);

person.name = "Jane";

console.log({ person });
// console.log(person);


const newPerson = {
    ...person,
    name: "John",
    gender: "Male",
}
console.log({ newPerson });

const spread = {
    ...newPerson,
    car: "Mazda",
}

console.log({ spread });

const unspread = {
    newPerson,
}

console.log(unspread)

const spreadede = {
    ...newPerson,
}

console.log(spreadede)


const array1 = [1, 2.3,];
const array2 = [4, 5, 6,];

const sum1 = [array1, array2];

console.log(sum1)

const array3 = [1, 2.3,];
const array4 = [4, 5, 6,];

const sum2 = [...array3, ...array4];

console.log(sum2)


/*Object.freeze()*/



const obj = Object.freeze({
    name: "Marius",
    age: 32,
    gender: "Male",
})

obj.name = "Emilia",
    console.log(obj);


//MAP Exercitii

// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// const capitalizeNames = (array) =>
//     array.map(name => name.chartAt(0).toUpperCase() + name.slice(1).toLowerCase());

// console.log(capitalizeNames(arr));

// ["John", "Jacob", "Jingleheimer", "Schmidt"]

/*ex 2*/

const numbers = [2, '5', 100, '100', 'blalblala']

const doubleEachNumber = () =>{
    const doubled = numbers.map(element => {
        if(Number.isInteger(element)) {
            return element *2;
        }
        else {
            return element;
        }
    })
    return doubled;
}

console.log(doubleEachNumber(numbers));




/*TEMA partea 1 https://codepen.io/oviduzz/pen/pmeBmO?editors=1010     2 https://codepen.io/oviduzz/pen/QRpRqz?editors=0010 3  https://codepen.io/oviduzz/pen/joBjBP?editors=0010*/