/*exercitiul1*/
/*metoda de get */
const url = "https://jsonplaceholder.typicode.com/users"
const fatchUsers = async (url) => {
    const users = await fetch(url)
        .then(respone => respone.json())
        .then(respone => respone.filter(({ id }) => id > 5))
        // .then(respone => respone.map(({name, address: { city } }) => ({name, city})));/*cu distructuring*/
        .then(respone => respone.map((user, index) => {
            return {
                name: user.name,
                city: user.address.city,
                //worksAt: aici sa avem numele companiei
                worksAt: user.company.name,
                //location:
                location: {
                    latitude: user.address.geo.lat,
                    longitude: user.address.geo.lng,
                },
                userKey: `${index} - ${user.name}`,
                motto: `${user.name}'s motto in life is ${user.company.catchPhrase}`,
            };
        })
        );/*fara distructuring*/
    console.log(users);

    /*motto : nume user`s motto in life is cathphrase*/
};

fatchUsers(url);

/*exer 2 */
/*metoda de post*/



const sendUrl = 'https://jsonplaceholder.typicode.com/posts';
const sendDataToServer = (url) => {
    const myPost = {
        title: 'Javascript Post is awesome',
        body: 'lorem ipsum etc',
        userId: 1,
    };
    const options = {
        method: "POST",
        body: JSON.stringify(myPost),
        headers: { 'Content-type': 'application/json' },
    };
    fetch(url, { ...options })
        .then(respone => respone.json())
        .then(respone => console.log(respone));

};

sendDataToServer(sendUrl);


const saveToLocalStorage = (Key, value) => {
    localStorage.setItem(Key, value);
}

saveToLocalStorage('username', 'Andrei');
saveToLocalStorage('email', 'adrian.fedeles@gmail.com');
saveToLocalStorage('username', 'Matt');


const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    console.log(value)
}

getFromLocalStorage('username');
//remove one specific item from local storage
// localStorage.removeItem('email');

//remove all iteme from local stogarge
// satTimeout(() => localStorage.clear(),3000);


const saveToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value);
}

// saveToSessionStorage('today','Sambata');
// saveToSessionStorage('tomorrow','Duminica');


const setCookie = () => {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 1000);

    console.log({ date })

    document.cookie = `myUsername = TheOne, expires = ${date}`;
    const cook = document.cookie;
    console.log(cook)
}

const number = 5;
const isGreater = number > 10 ? 'is greater' : (number > 6 ? 'greater then 6' : 'less then 6');
console.log(isGreater)

setCookie();


















/*tema partea 2

exercitiul 1 din tema

https://codepen.io/oviduzz/pen/VOQygz?editors=0010

// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
url = 'https://www.googleapis.com/books/v1/volumes?q=horror';


//EX2

//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()


exer 3

https://codepen.io/oviduzz/pen/WByZBm?editors=0011

//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log


//Ex 4

https://codepen.io/oviduzz/pen/eaKyVK?editors=0010

//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

exercitiul 5

https://codepen.io/oviduzz/pen/MdXXmx?editors=0010

//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *

[
    {"youtubeVideo": "https://www.youtube.com/watch?v=CBwKJfrm5-U",
    "title": "Bali Travel Guide - How to travel Bali",
    "author": "Allan Su",
    "rating": 4
    },
    {"youtubeVideo": "https://www.youtube.com/watch?v=oSexfR0Ubzw",
    "title": "Rome in 4k",
    "author": "Around The World 4k",
    "rating": 5
    },
    {"youtubeVideo": "https://www.youtube.com/watch?v=k7ZqiSKIB9g",
    "title": "Glasgow Vacation Travel Guid",
    "author": "Expedia",
    "rating": 3
    },
    {"youtubeVideo": "https://www.youtube.com/watch?v=xl3QM22kWV0",
    "title": "Around Malaysia",
    "author": "Drone Around The world",
    "rating": 2
    }
]


exercitul 6
https://codepen.io/oviduzz/pen/wbXyWp?editors=1010









*/














































































