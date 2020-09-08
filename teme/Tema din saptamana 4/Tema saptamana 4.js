
//Exercitiul 1
function is_string(myVariable) {
    return typeof myVariable == "string"
}
console.log(is_string());
console.log(is_string('abc'));


//Exercitiul 2
function is_Blank(myVariable2) {
    return myVariable2 == ""
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));


//Exercitiul 3
function string_to_array(myVariable3) {
    return myVariable3.split(" ")
}
console.log(string_to_array("Robin Singh"));


//Exercitiul 4
function abbrev_name(myVariable4) {
    var var_split = myVariable4.split(" ");
    return var_split[0] + " " + var_split[1].charAt(0) + ".";
}
console.log(abbrev_name("Robin Singh"));


//Exercitiul 5
function capitalize(myVariable5) {
    return myVariable5[0].toUpperCase() + myVariable5.slice(1)
}
console.log(capitalize('js string exercises'));


//Exercitiul 6
function truncate_string(myVariable6, myVariable7) {
    return myVariable6.slice(0, myVariable7)
}
console.log(truncate_string("Robin Singh", 4));


//Exercitiul 7
function isUpperCaseAt(myVariable8, myVariable9) {
    return myVariable8 == myVariable8.toUpperCase(myVariable9)
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));


//Exercitiul 8
function insert(myVariable10, myVariable11, myVariable12) {
    return myVariable10.slice(0, myVariable12) + myVariable11 + myVariable10.slice(myVariable12)
}
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));


//Exercitiul 9
function remove_first_occurrence(myVariable13, myVariable14) {
    return myVariable13.replace(myVariable14,)
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


//Exercitiul 10-a
function compare_strings(myVariable15, myVariable16) {
    return myVariable15 !== myVariable16
}
console.log(compare_strings('abcd', 'AbcD'));


//Exercitiul 10-b
function compare_strings(myVariable15, myVariable16) {
    return myVariable15.ignoreCase == myVariable16.ignorease
}
console.log(compare_strings('abcd', 'AbcD'));


//Exercitiul 11
function Uncapitalize(myVariable17) {
    return myVariable17.toLowerCase(0);
}
console.log(Uncapitalize('Js string exercises'));




































