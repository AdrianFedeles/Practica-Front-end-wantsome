/*exercitiu1*/

// var person1= {
//     name:"Gheorghe",
//     age:17,
// }
// console.log(`Numele meu este: ${person1.name} si am ${person1.age} ani.`)
// var person2 = {
//     name:"viorel",
//     age:77,
// }
// console.log(`Numele meu este: ${person2.name} si am ${person2.age} ani.`)

// function person(name, age) {
//     let obj ={};
//     obj.name = name;
//     obj.age=age;
//     obj.sayHello = ()=>{
//         console.log(`Numele meu este: ${name} si am ${age} ani.`)

//     }
//     return obj;
// }

// person1 = person("Gheorghe,17");
// person2 = person("viorel", 77);

// person1.sayHello();
// person2.sayHello();

// function Person(name, age) {
//     this.name = name;
//     this.age=age;
//     this.sayHello = ()=>{
//         console.log(`Numele meu este: ${name} si am ${age} ani.`)
//     }
// }


// var person1 = new Person("Gheorghe,17");
// var person2 = new Person("viorel", 77);

// person1.sayHello();
// person2.sayHello();


function Person(name, age, sex="") {
    this.name = name;
    this.personeAge=age;
    this.personeSex = sex;
    this.sayHello = ()=>{
        let msg =(`Numele meu este: ${this.name} si am ${ this.personeAge} ani.`)
        if (this.personeSex !== "") {
            msg = msg.concat(`Sexul meu este :${this.personeSex}`);
        }
        console.log(msg);
    }
    this.getOld = () =>{
        this.personeAge +=1;
    }
}


var person1 = new Person("Gheorghe,17");
var person2 = new Person("viorel", 77);

person1.sayHello();
person2.sayHello();

var  person3 = new Person ("rares",15);
person3.sayHello();
person3.getOld();
person3.sayHello();

var perosn4 = new Person("claudia",25,"Feminin")
perosn4.sayHello();

var perosn5 = new Person("Mihai",33,"masculin")
perosn5.sayHello();
perosn5.getOld();
perosn5.sayHello();