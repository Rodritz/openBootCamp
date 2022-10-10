var variable; //var ya no se utiliza
let variableLet_;

const constante = "hola soy una constante";

var a = 1;
console.log(a);

a= 4;
console.log(a);

console.log(constante)
// constante = "adios"; //no se puede reasignar un valor a una constante

let b = 3;
console.log(b);

b = 5;
console.log(b);

/*las variable VAR afectan a todo el codigo por lo cual si asigno un
VAR al principio del codigo y luego modifico al final del mismo me va a tomar el 
ultimo cambio para todo el codigo*/
var variable = "hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "soy la segunda variable VAR"
}
console.log(variable);//me va mostrar "soy la segunda variable VAR"

/*las variable LET solo afectan una parte del codigo por lo cual si asigno un
LET al principio del codigo y lo modifico al final del mismo no va a afectar el 
el LET del principio del codigo*/
let variableLet = "hola soy una variable LET"
for (let i = 0; i < 3; i++) {
    let variableLet = "soy la segunda variable LET"
}
console.log(variableLet); //me va a mostrar "hola soy una variable LET"

//el console.log(tipeof ) me muestra de que tipo es la variable 
let num = 4;
console.log(tipeof num); //me va a mostrar "number" 

num = "hola soy num";
console.log(tipeof num); //me va a mostrar "string" 