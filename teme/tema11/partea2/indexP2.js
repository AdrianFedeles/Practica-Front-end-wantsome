// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];


const Animals = (element) => {
    if (element.species === 'cat') {
        return true
    };
};



//let allCats
let allCats = arr.filter(Animals);
console.log(allCats);
const Humans = (element) => {
    if (element.species === 'human') {
        return true;
    };
};



// let allHumans
let allHumans = arr.filter(Humans);
console.log(allHumans);
const Females = (element) => {
    if (element.sex === 'f') {
        return true
    };
};



//let allFemales
let allFemales = arr.filter(Females);
console.log(allFemales);



//let totalOfAllAges
let Age = 0;
let Ages = (element) => {
    if (element.age > 0) {
        Age += element.age;
    };
    return Age;
};
let totalOfAllAges = arr.map(Ages);
console.log(totalOfAllAges[totalOfAllAges.length - 1]);



//let averageAgeOfCats
catAge = 0;
const CatAge = (element) => {
    catAge += element.age;
    return catAge;
};
let averageAgeOfCats = allCats.map(CatAge);
console.log(averageAgeOfCats[averageAgeOfCats.length - 1] / averageAgeOfCats.length);





//let averageAgeOfHumans
let averageAgeOfHumans = allHumans.map(element => HumanAges = + element.age)
console.log(averageAgeOfHumans[averageAgeOfHumans.length - 1] / averageAgeOfHumans.length);



//let avgLengthOfNames
let LengthNames = 0;
let avgLengthOfNames = arr.map(element => LengthNames += element.name.length);
console.log(avgLengthOfNames[avgLengthOfNames.length - 1] / avgLengthOfNames.length);