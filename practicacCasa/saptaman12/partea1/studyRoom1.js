function People(firstName, lastName, age, sex, hobbies) {
    this.name = {
        firstName: firstName,
        lastName: lastName
    };
    this.age = age;
    this.sex = sex;
    this.hobbies = hobbies;

    this.presentYourself = () => {
        console.log(`Salut! Sunt ${this.name.firstName}`);
    };
    this.showBiografy = () => {
        console.log(`${this.name.lastName} ${this.name.firstName} in varsta de ${this.age} are hobby-urile: ${this.hobbies}.`);
    }
}


const adrian = new People("Adrian", "Fedeles", 29, "M", ["muzica", "desen"]);

adrian.presentYourself();
adrian.showBiografy();



/*
Clasa de studiu
1.	Profesori
2.	Elevi

Profesorii si elevii sunt OAMENI

Omul:
-	Nume (prenume + nume de familie): string
-	Varsta: numar
-	Sex: string
-	Hobby-uri: array de string
-	Actiune:Salut // “Salut, sunt XXXXX”
-	Actiune:Biografie “XXXX in varsta de YYYY are hobby-urile ZZZZZZ”

Elevi > oameni
-	Teme: array de string
-	Note: lista de numere
-	Actiune:Salut // “Buna ziua, sunt XXXXX”
-	Actiune:Spuna notele // “Notele lui XXX sunt YYYYYY”

Profesori > oameni
-	Materie: string
-	Actiune:Salut // “Buna ziua, sunt domnul/doamna XXXXXX si predau YYYYYY
-	Actiune:Evaluare // Alege un numar random >=1 <=10 si adauga unui elev X nota
*/