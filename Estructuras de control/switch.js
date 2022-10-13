//sentencias Switch suplanta al if else + if else

let nota = 4;
switch(nota){
    case 5:
        console.log('bien, tienes un sobresaliente');
        break; // siempre poner un break en cada evaluacion para cortar la secuencia
    case 4:
        console.log('buen trabajo, pero podrias haberlo hecho mejor');
        break;   
    case 3:
        console.log('has obtenido un suficiente');
        break;
    case 2:
        console.log('no has aprobado');
        break;
    case 1:
        console.log('no has estudiado'); 
        break;
    default: //es conveniente siempre poner un break por si no se ingresan datos validos para evaluar
        console.log('error')
        break;           
    }