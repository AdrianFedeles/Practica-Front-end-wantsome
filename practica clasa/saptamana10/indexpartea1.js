// const uoInputChange = ()=>{
//     const userWelcomeEl = document.getElementById("userWelcome");
//     const userNameEl = document.querySelector('#userName');
//     userWelcomeEl.textContent  = 'Welcome $(userNameEl.value)';
// }

// console.log(document.getElementById("userWelcome"));

// // const onLogOut = () => {
// //     const userWelcomeEl = getElementById('userWelcome');

// // }

// const logOutBtnLi = document.getElementById('logOutBtn')
// logOutBtnLi.addEventListener('click',onLogOut());

// const allDivs = document.querySelectorAll('div');

// onDivClick = (event) =>{
//     console.log(event.currentTarget.classList);
//     event.stopPropagation();
// }

// allDivs.forEach(div => div.addEventListener('click',omDivClick));

const thirdDivEl = document.querySelectorAll('thirdDiv');
const firstDivEl = document.querySelectorAll('firstDiv');
const allDivs = [thirdDivEl,firstDivEl];

onDivClick = (event) =>{
    console.log(event.currentTarget.classList);
    //event.stopPropagation();
}

allDivs.forEach(div => div.addEventListener('click',omDivClick));


// refacerea exercitiilor de pe partea 1 si ultimul exercitiu de la sobsolul paginii

/* TEMA 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/

/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/

/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/
//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click
