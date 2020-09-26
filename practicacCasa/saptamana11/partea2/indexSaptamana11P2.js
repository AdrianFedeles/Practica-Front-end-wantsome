/*ex 3*/

// const arrNames = [
//     {
//         name: "Angelina",
//         surname: 'Jolie',
//         age: 80
//     },
//     {
//         name: "Eric",
//         surname: 'Jones',
//         age: 27
//     },

// ]


// const getPersonsNames = (arr) =>
//     arr.map((person) => `${person.name} ${person.surname}`);


// console.log(getPersonsNames(arrNames));


// /*ex 4*/


// // const students = [
// //     {
// //         name: "Angelina",
// //         surname: 'Jolie',
// //         grade: 7,
// //     },
// //     {
// //         name: "Eric",
// //         surname: 'Jones',
// //         grade: 3,
// //     },

// // ]


// // const computeExamPass = (students) => {
// //     const results = students.map(student => {
// //         if (student.grade > 3) {
// //             return `${person.name} ${student.surname} Has pass the exam`;
// //         }
// //         return `${person.name} ${student.surname} Has not pass the exam`;

// //     });
// //     return results;
// // }
// // console.log(computeExamPass(students));

// /*exeplu */


// const products = [
//     {
//         prodactName: "Pasta de dinti",
//         Price: 11,
//         description: "bla bla",
//         image: 'http://url.com',
//     },
//     {
//         prodactName: "Gel de dus",
//         Price: 13,
//         description: "la la la",
//         image: 'http://url.com/gel-de-dus',
//     },
//     {
//         prodactName: "Sapun lichid",
//         Price: 5,
//         description: "BAU Bau",
//         image: 'http://url.com/sapun-lichid',
//     },

// ]

// const showProduct = (products) => products.map(product => product);
// console.log(showProduct(products))



// /*exercitiu5*/


// const arrNames2 = [
//     {
//         name: "Angelina",
//         surname: 'Jolie',
//         age: 80,
//     },
//     {
//         name: "Eric",
//         surname: 'Jones',
//         age: 27,
//     },

// ];





// /*build a array with html elements*/
// const getPersonsDomElements = (arrNames2) => {
//     const DomElements = arrNames2.map(element => {
//         return `<h1>${element.name} ${element.surname}</h1><h2>${element.age}</h2>`;
//         // const donEl = `<h3>${element.prodactName}</h3><p>${element.Price}</p><p>${element.description}</p><a href=${element.image}>Image</a> `;
//         return donEl
//     })
//     return DomElements;
// }

// console.log(getPersonsDomElements(arrNames2));

// const newDomElements = getPersonsDomElements(arrNames2);

// /*display html elements from the array in pege*/
// const showItemsInPage = (ietms) => {
//     ietms.map(item =>{
//         const div = document.createElement('div');
//         div.innerHTML = item;
//         document.body.appendChild(div);
//     })
// }

// showItemsInPage(newDomElements);



// /*object destructuring exemple*/
// const point = {
//     x:200,
//     xy:450,
// }
// // console.log(point.x)
// // console.log(point.y)
// const {x,xy} = point;
// console.log(x);
// console.log(xy);

/*reduce exercites*/

//Ex.1

const pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
]

const totalYears = pilots.reduce((acc, curr) => acc + curr.years, 0);


console.log(totalYears)


/*ex 2*/
/*Loop through the Array and remove all non - active users from the initial Array */


const myData = [
    {
        name: 'Iggy Turskis',
        active: false
    },
    {
        name: 'Geoff Newell',
        active: true
    },
    {
        name: 'Peter Newnham',
        active: true
    },
    {
        name: 'James Walker',
        active: false
    },
];

// const isNew = true;
// const isItRecallNew = isNew ? true : false;

// if (isNew){
//     return true;
// }else {
//     return false;
// }


const activeData = myData.reduce((acc, current) => (current.active ? [...acc, current] : acc), []);
console.log(activeData);

const activeData2 = myData.reduce((acc, current) => {
    if (current.active) {
        return [
            ...acc,
            current,
        ]
    } else {
        return acc;
    }
}, []);

console.log(activeData2)


/*Ex 3
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]


/*Convertiti toate distantele in mile - 0.621371 * distance - folosind map*/

const miles = distances.map(({ distance }) => distance * 0.621371);
console.log(miles);


/*Returnati toate itemele cu distanta mai mica de 10000  - folosind filter*/


//with destructuring
const filtered = distances.filter(({ distance }) => distance < 1000);

// const filterActive = myData.filter(({ active }) => active);
const filterActive = myData.filter(({ active }) => !active);

//slassic
//const filtered = distances.filter(({ item}) => item < 1000);


console.log(filtered);
console.log(filterActive);



/*Returnati distanta totala - folosind reduce*/

const totalDistance = distances.reduce((acc, current) => (acc + current.distance), 0);
console.log(totalDistance);


/*exercitiul 4*/


// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const tinyReleases = releases.reduce((acc, { id, title }) => [...acc, { id, title, }], []);
//const tinyReleases = releases.reduce((acc, { id, title }) => [...acc, { id, title, [title]: 'title'}], []);

console.log(tinyReleases);


const tinyMapReleases = releases.map(({ id, title, rating }) => ({ id, title, rating }));
console.log(tinyMapReleases);



/*exercitiul 5*/

// Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        ookmark: []
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
    }
];

const bigRating = newReleases.filter(element => element.rating === 5.0);
// const bigRating = newReleases.filter(({ rating }) => rating === 5.0);

console.log(bigRating);


//exercitiul 6

// Vreau la final sa am o lista de video ids

const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                id: 70111470,
                title: "Die Hard",
                boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: []
            },
            {
                id: 654356453,
                title: "Bad Boys",
                boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                id: 65432445,
                title: "The Chamber",
                boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 4.0,
                bookmark: []
            },
            {
                id: 675465,
                title: "Fracture",
                boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                uri: "http://api.netflix.com/catalog/titles/movies/70111470",
                rating: 5.0,
                bookmark: [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const movieIds = movieLists.map(({ videos }) => videos.map(({ id }) => id));
console.log(movieIds);



/*TEMA partea 1  1 https://codepen.io/oviduzz/pen/pmeBmO?editors=1010 2 https://codepen.io/oviduzz/pen/QRpRqz?editors=0010 3 https://codepen.io/oviduzz/pen/joBjBP?editors=0010*/

/*TEMA partea 2  1 https://codepen.io/oviduzz/pen/eadGeR?editors=1010 2 https://codepen.io/oviduzz/pen/pmeBmO?editors=1010 3 https://codepen.io/oviduzz/pen/QRpRqz?editors=0010 4 https://codepen.io/oviduzz/pen/joBjBP?editors=0010*/



















