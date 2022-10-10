//tipos primitivos

//1-number
4;
0;

//2-string (podemos escribir dentro de cualquier tipo de comillas)
"hola mundo";
'hola mundo';
`hola mundo`;

//booleanos
true; 
false; 

//nulo y undefined
null; //seria el espacio vacio en memoria
undefined; //seria un espacio aun no definido en memoria

/*null, undefined, false, 0 ==> todas son falsy (hace que esta condicion
no se cumpla)*/
if (null) {
    console.log("cumple")
} else {
    console.log("no cumple")
}