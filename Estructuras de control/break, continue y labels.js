//break , continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < lista.length; i++){
    if(lista[i]===3){
        continue /*el continue lo que hace es 
                indicar que vuelva al recorrido del array, 
                y esta saltando el valor*/
    }

    console.log(lista[i]);
    if(lista[i] > 5){
        break; /*el break corta la ejecucion del codigo*/
    }
}

//labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`el numero actual es:${decenas}${unidades}`)
        unidades++
        if(unidades === 10){
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 2){
            break bucleDecenas
        }  
    }    
    decenas++     
}