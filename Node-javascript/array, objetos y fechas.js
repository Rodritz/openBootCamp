//Listas, array, vector o arreglo
const lista = [1, "hola", true, undefined, null];

const lista2 = new Array(2, "hola", true, undefined, null);

const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
lista3[2] = 3;
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil = {
    altura: 10,//los atributos de los abjetos se separan por comas,
    anchura: 5,
    marca: 'xiaomi',
    isWhite: false,
    contactos: ['raul', 'martin', 'pedro'],//pueden tener arrays
    tarjeta:{
        marca: 'sandisk',//puede haber atributos dentro de atributos
        almacenamiento: '32gb',
    },
    'altura-tarjeta': 4, //podemos definir un atributo de 2 palabras entre comillas
}
movil.año = 2019;//podemos agregar un nuevo atributo al objeto
movil.marca = 'samsung';//podemos modificar un atributo del objeto

//podemos acceder a los diferentes atributos del objeto
console.log(movil.tarjeta.almacenamiento)
console.log(movil.contactos)
console.log(movil.marca)

// Fechas
//librerias de apoyo Moment.js

const ahora = new Date();//esto crea la fecha en que se definio la variable
console.log(ahora);

const fecha_milis = new Date(10) //utilizando milisegundos desde la fecha 0 que es 1/1/70
console.log(fecha_milis)

const fecha_cadena = new Date('october 10 2022');
console.log(fecha_cadena)

const fecha_valores = new Date(2022,9,10); //en este caso toma la posicion del mes segun el vector, donde enero arranca en el 0
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1 //recordar que segun el vector enero es el mes 0, por eso el +1
const año = ahora.getFullYear()
console.log(ahora)
console.log(dia, mes, año)