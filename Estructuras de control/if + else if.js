//bifurcacion if + else if (sirve para anidar if... else)

let nota = 3;
if (nota === 5) {
    console.log('bien, tienes un sobresaliente');
} else if (nota === 4) {
    console.log('buen trabajo, pero podrias haberlo hecho mejor');
} else if (nota === 3) {
    console.log('has obtenido un suficiente');
} else if (nota === 2) {
    console.log('no has aprobado');
} else if (nota === 1) {
    console.log('no has estudiado');
} else {
    console.log('error, introduce una note entre el 1 y el 5');
} 