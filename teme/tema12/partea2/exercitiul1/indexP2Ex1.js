//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva


/*1*/
class Person{
    constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    }
/*2*/
displayPersonName(){return `Ma numesc ${this.firstName}, ${this.lastName}. MULTAM!`};
}
/*3*/
const Adrian=new Person("Fedeles","Adrian");
console.log(Adrian.displayPersonName());
const Mihai=new Person("Mihai","Gargui");