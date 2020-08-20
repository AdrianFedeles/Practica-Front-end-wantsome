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
