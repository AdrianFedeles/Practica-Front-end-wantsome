//Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
//corespunzatoare considerand urmatoarele criterii:
//- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
//- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
//- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
//Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”


function taxe(salar) {
    var salarAnual = salar;
    if (salarAnual < 30.000) {
        var venitTaxe = salarAnual * 0 / 100;
        return 'Pentru un venit anual de $' + salarAnual + ' vei platesti o taxa de $' + venitTaxe;
    }
    else if (50.000 < salarAnual && salarAnual < 99.999) {
        venitTaxe = salarAnual * 35 / 100;
        return "Pentru un venit anual de $" + salarAnual + ' vei platesti o taxa de $' + venitTaxe;
    }
    else if (salarAnual > 100.000) {
        venitTaxe = salarAnual * 40 / 100;
        return 'Pentru un venit anual de $' + salarAnual + ' vei plati o taxa de $' + venitTaxe;
    }
    else {
        return 'Nu se poate calcula taxa dumneavoastra!';
    }
}
console.log(taxe(76.569));


//exeritiul 5
function codifyPoints(points) {
    if (points < 30 || points == 30) {
        return 'FF';
    }
    else if
        ((30 < points && points < 40) || points == 40) {
        return "DD";
    }
    else if
        (40 < points && points < 50 || points == 50) {
        return 'CD';
    }
    else if
        (50 < points && points < 60 || points == 60) {
        return 'CC';
    }
    else if
        (60 < points && points < 70 || points == 70) {
        return 'BC';
    }
    else if
        (70 < points && points < 80 || points == 80) {
        return 'BB';
    }
    else if
        (80 < points && points < 90 || points == 90) {
        return 'AB';
    }
    else {
        return 'AA';
    };
};
console.log(codifyPoints(20));


// alta modalitate 

function point(forPoints) {
    switch (true) {
        case forPoints <= 30:
            {
                return "FF";
            }
        case forPoints <= 40:
            {
                return "DD";
            }
        case forPoints <= 50:
            {
                return "CD";
            }
        case forPoints <= 60:
            {
                return "CC";
            }
        case forPoints <= 70:
            {
                return "BC";
            }
        case forPoints <= 80:
            {
                return "BB";
            }
        case forPoints <= 90:
            {
                return "AB";
            }
        case forPoints > 90:
            {
                return "AA";
            }
    }
}

console.log(point(30))


//exercitiul 6

//Nu stiu sa il fac.

//Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));


