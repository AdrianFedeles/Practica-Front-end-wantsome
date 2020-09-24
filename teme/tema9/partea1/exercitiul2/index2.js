//1
function myMap(array, callback) {/*aici in loc de costonMap am pus ca si in console.log myMap*/
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}

//am facut la fel ca Stefan nu e nimic diferit doar denumiri, altfel nu stiu.
const increment = (Increment) => {
    return Increment + 1;
};
const double = (Double) => {
    return Double * 2;
};
const square = (Square) => {
    return Square * Square;
};

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myMap(randomArray, increment)); // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double)); // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square)); // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

//

// 2


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.


var filter = function (arrayFilter, callback) {
    var filteredArray = [];
    for (var i = 0; i < arrayFilter.length; i++) {
        var arrayEl = arrayFilter[i];
        if (callback(arrayEl)) {
            filteredArray.push(arrayEl);
        }
    }
    return filteredArray;
};


// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

const divisibleWith3 = (number3) => {
    if (number3 % 3 === 0)
        return number3
}

const divisibleWith2 = (number2) => {
    if (number2 % 2 === 0) {
        return number2;
    }
}

const oddWith3 = (number1) => {
    if (number1 % 3 !== 0) {
        return number1;
    }
}

const oddWith4 = (number4) => {
    if (number4 % 4 !== 0) {
        return number4;
    }
}



arrayFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 110, 120, 200, 250, 290, 303, 333, 498, 512, 888, 999, 1000];
console.log(filter(arrayFilter, oddWith3));
console.log(filter(arrayFilter, oddWith4));
console.log(filter(arrayFilter, divisibleWith3));
console.log(filter(arrayFilter, divisibleWith2));



/*
//3
Write a function named multipleCallbacks that accepts 3 arguments:
    - an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

