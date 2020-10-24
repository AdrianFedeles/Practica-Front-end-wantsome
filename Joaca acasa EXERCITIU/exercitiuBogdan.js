const numere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dublare = (accumulator, currentValue) => {
    accumulator.push(currentValue * 2);
    return accumulator;
}

console.log(numere.reduce(dublare,[]))

// const dublare = numere

// const dublare =  numere.forEach(element => {
//     return numere
// } console.log(element*2))

// const dublare = numere.forEach(element => console.log(element*2))
