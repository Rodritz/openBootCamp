//comparaciones

//igualdad
let a = 5;
console.log(typeof a) //type number
let b = "5";
console.log(typeof b) //type string

// == solo compara el valor
// === compara le valor y el tipo

if (a == b) {
    console.log("a es igual a b - Debil") //a es igual a b - Debil
}

if (a === b){
    console.log('a es igual a b - Fuerte') //al ser de diferente tipo 
}                                          //a no es igual a b - Fuerte

//desigualdad

let c = 4; //type number
let d = '4'; //type string

if (c != d) {
    console.log ('c es diferente a d - Debil')
}

if (c !== d) {
    console.log ('c es diferente a d - Fuerte')
}

//Mayor y menor

let max = 10;
let min = 5;

if (max > min) {
    console.log('max es mayor que min')
}
if(max >= 10) {
    console.log('max es mayor que min')
}

if (min < max) {
    console.log('min es mayor que max')
}
if(min <= 5) {
    console.log('min es mayor que max')
}