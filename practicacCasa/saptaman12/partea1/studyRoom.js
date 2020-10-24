// function People(firstName, LastName, age, sex, hobbies){
//     this.name={
//         firstName:firstName,
//         LastName:LastName,
//     };
//     this.age=age;
//     this.sex=sex;
//     this.hobbies=hobbies;
//     this.presentYourself = () =>{
//         console.log(`Salut sunt ${this.name.firstName} ${this.name.LastName}`);
//     };
//     this.showBiography = () =>{
//         console.log(`${this.name.LastName} ${this.name.firstName} in varsta de ${this.age} are  hobby-urile: ${this.hobbies}`)
//     };
// }


// const adrian = new People("Adrian" , "Fedeles", 29,"M",["Muzica","Desen"]);
// adrian.presentYourself();
// adrian.showBiography()


let numberIsOdd = false;
function isOdd(number) {
  if (number % 2 !== 0)
    numberIsOdd = true;
  return numberIsOdd;
}


console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(2));