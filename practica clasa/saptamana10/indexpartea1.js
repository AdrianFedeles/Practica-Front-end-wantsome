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

const allDivs = document.querySelectorAll('div');

onDivClick = (event) =>{
    console.log(event.currentTarget.classList);
    event.stopPropagation();
}

allDivs.forEach(div => div.addEventListener('click',omDivClick));