// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const function1 = () => {
    setTimeout(function () {
        console.log('1')
    }, 4)/*4 reprezinta timpul de asteptare pana la afisare in cazul meu de 4 ms poate fi si 4000ms adica 4 secunde */
}

const function2 = () => {
    setTimeout(function () {
        console.log('2')
    }, 3)
}

const function3 = () => {
    setTimeout(function  () {
        console.log('3')
    },1)
    
}

const function4 = () => {
    setTimeout(function () {
        console.log('4')
    }, 5)
}
const function5 = () => {
    setTimeout(function () {
        console.log('5')
    }, 2)
}


function1();
function2();
function3();
function4();
function5();