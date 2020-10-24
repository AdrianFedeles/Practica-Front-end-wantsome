//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal.

/*1*/
class Animal {
    constructor(name, weight) {
/*2*/
        this.name = name;
        this.weight = weight;
    }
    eatFood() {
        return `${this.name} is eating`;
    }
    sleep() {
        return `${this.name} is sleeping`;
    }
    weakingUp() {
        return `${this.name} is weaking up`;
    }
}
/*3*/
class Mouse extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }
/*4*/
    walking() {
        return `${this.nume} is walking`;
    }
    rage() {
        return `${this.nume} is rageing`;
    }
    ShowBehavior() {
        return [this.eatFood(), this.rage()];
    }
    dailyRoutine() {
        return [this.weakingUp(), this.rage(), this.eatFood(), this.sleep()];
    }
}
/*5*/
const mouse = new Mouse("Marian", 22);
/*6*/
console.log(mouse.walking());
console.log(mouse.rage());
console.log(mouse.ShowBehavior());
console.log(mouse.dailyRoutine());