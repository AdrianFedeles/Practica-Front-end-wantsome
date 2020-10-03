// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// function People(firstName, LastName, age, sex, hobbies) {
//     this.name = {
//         firstName: firstName,
//         LastName: LastName,
//     };
//     this.age = age;
//     this.sex = sex;
//     this.hobbies = hobbies;
// }

// People.prototype.presentYourself = function () {
//     console.log(`Salut sunt ${this.name.firstName}`);
// }
// People.prototype.showBiography = function () {
//     console.log(`${this.name.LastName} ${this.name.firstName} in varsta de ${this.age} are  hobby-urile: ${this.hobbies}`);
// };


// function Student(firstName, LastName, age, sex, homework, grades) {
//     People.call(this, firstName, LastName, age, sex, hobbies);
//     this.homework = homework;
//     this.grades = grades;
// };
// Student.prototype = Object.create(People.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.presentYourself = function () {
//     console.log(`Buna ziua, sunt ${this.name.firstName}`);
// };
// Student.prototype.showGrades = function () {
//     console.log(`Notele lui ${this.name.firstName} ${this.name.LastName} sunt ${this.grades}`);
//     console.log(`Ultima nota a fost ${this.grades[this.grades.lenght - 1]}`)
// };



// function Teatcher(firstName, LastName, age, sex, hobbies, className,) {
//     People.call(this, firstName, LastName, age, sex, hobbies);
//     this.className = className;
// }
// Teatcher.prototype = Object.create(People.prototype);
// Teatcher.prototype.constructor = Teatcher;
// Teatcher.prototype.presentYourself = function () {
//     let noun = "";
//     if (this.sex === "M") {
//         noun = "domnul";
//     }
//     else {
//         noun = "doamna";
//     }
//     console.log(`Buna ziua, sunt ${noun} ${this.name.LastName} si predau ${this.className}`);
// }
// Teatcher.prototype.evaluate = function (student) {
//     let grades = getRndInteger(1, 10);
//     student.grades.push(grades);
//     console.log(`Felicitari ${student.name.LastName} ${student.name.firstName}, ai luat nota ${grades}`);
// }


/*utility*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*clasa*/

class People {
    constructor(firstName, LastName, age, sex, hobbies) {
        this.name = {
            firstName: firstName,
            LastName: LastName,
        };
        this.age = age;
        this.sex = sex;
        this.hobbies = hobbies;
    }
    
    presentYourself = () => {
        console.log(`Salut sunt ${this.name.firstName}`);
    }

}





People.prototype.showBiography = function () {
    console.log(`${this.name.LastName} ${this.name.firstName} in varsta de ${this.age} are  hobby-urile: ${this.hobbies}`);
};


var student1 = new Student("Radu", "Vasile", 18, "M", ["Filme", "calatorii"], ["informatica"], [10, 9]);
var student2 = new Student("Marius", "Ionescu", 17, "M", ["calatorii"], ["engleza"], [5, 9]);
var student3 = new Student("Maria", "Popescu", 16, "F", ["Filme"], ["informatica"], [10, 10]);
var student4 = new Student("Ioana", "Grigore", 17, "F", ["Muzica", "calatorii"], ["informatica"], [10, 10]);

student1.presentYourself();
student1.showGrades();

student1.showBiography()

var teatcher1 = new Teatcher("Ana", "Popescu", 55, "F", ["citit"], "Engleza");
var teatcher2 = new Teatcher("Andrei", "Vasilescu", 30, "M", ["Footbal"], "Sport");

teatcher1.presentYourself();
teatcher1.evaluate(student1);




