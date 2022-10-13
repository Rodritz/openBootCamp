// Bucles For

/*la estructura es la sig
for(inicializacion; condicion; actualizacion) {
    Esto es el bucle
}
*/
//i = i + 1;
//i += 1;
//i++; //las 3 significan lo mismo

for (let i = 0; i < 10; i++) {
    console.log(i);
}
let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for(let i = 0; i< lista.length; i++) {
    console.log(lista[i])
}

//estructura for ...of
for (let valor of lista){
    console.log(valor)
}

//estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

//estructura for....in
let persona = {
    nombre: 'gorka',
    apellido: 'villar',
    edad: 34,
    isDeveloper: true
}
console.log(persona.nombre) //especifico que prop del objeto y me muestra "gorka"

let prop = 'edad'; //a una nueva variable le asignamos una prop del objeto
console.log(persona[prop]) // con los corchetes accedo directamente al valor de la propiedad. en este caso "34"

for(let propiedad in persona) {
    console.log(propiedad); //nombre, apellido, edad, isDeveloper
    console.log(persona[propiedad]) // Gorka, Villar, 34, true
}
//en un "for...in", utilizando los corchetes dentro de la propiedad accedemos a los valores de la misma