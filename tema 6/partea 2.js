//exercitiul 4
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
    } else if (40 < points && points < 50 || points == 50) {
        return 'CD';
    } else if (50 < points && points < 60 || points == 60) {
        return 'CC';
    } else if (60 < points && points < 70 || points == 70) {
        return 'BC';
    } else if (70 < points && points < 80 || points == 80) {
        return 'BB';
    } else if (80 < points && points < 90 || points == 90) {
        return 'AB';
    } else {
        return 'AA';
    };
};
console.log(codifyPoints(20));


// alta modalitate

function points(codifyPoints) {
    switch (true) {
        case codifyPoints <= 30: {
            return "DD";
        }
        case codifyPoints <= 40: {
            return "FF";
        }
        case codifyPoints <= 50: {
            return "EE";
        }
        case codifyPoints <= 60: {
            return "FF";
        }
        case codifyPoints <= 70: {
            return "DD";
        }
        case codifyPoints <= 80: {
            return "HH";
        }
        case codifyPoints <= 90: {
            return "JJ";
        }
        case point > 90: {
            return "AA";
        }
    }
}

console.log(points(30))


//exercitiul 6

function is_weekend(date) {
    switch (true) {
        case date = 'Nov 13,2020': {
            return 'nu e weekend';
        }
        case date = 'Nov 14,2020': {
            return 'e weekend';
        }
        case date = 'Nov 15,2020': {
            return 'e weekend';
        }
        case date = 'Nov 16,2020': {
            return 'nu e weekend'
        }
        case date = 'Nov 17,2020': {
            return 'nu e weekend';
        }
        case date = 'Nov 18,2020': {
            return 'nu e weekend';
        }
        case date = 'Nov 19,2020': {
            return 'nu e weekend';
        }
    }
}
console.log(is_weekend('Nov 15, 2014'));

function is_weekend(date) {
    switch (true) {
        case 1:
            date == 'Nov 13,2020';
            return 'nu e weekend';
            break;
        case 2:
            date == 'Nov 14,2020';
            return 'e weekend';
            break;
        case 3:
            date == 'Nov 15,2020';
            return 'e weekend';
            break;
        case 4:
            date == 'Nov 16,2020';
            return 'nu e weekend';
            break;
        case 5:
            date == 'Nov 17,2020';
            return 'nu e weekend';
            break;
        case 6:
            date == 'Nov 18,2020';
            return 'nu e weekend';
            break;
        case 7:
            date == 'Nov 19,2020';
            return 'nu e weekend';

    }
}
console.log(is_weekend('Nov 15, 2014'));





