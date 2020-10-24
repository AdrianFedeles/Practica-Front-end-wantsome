var Person = function(name,age) {
    this.name=name;
    this.age=age;
};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

function Trainer(name,age){
    Person.call(this,name,age);
}

Trainer.prototype.teach=function(subject){
    return `${this.name} is now teaching ${subject}`}

    const Ioana=new Person("Ioana",28);
    const Adrian= new Trainer("Adrian",29);