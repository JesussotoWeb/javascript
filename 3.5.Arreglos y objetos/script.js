

/*ARRAYS es una variable que dentro tiene otra varias vairables */



let dias = ['lunes', "martes", 'miercoles', 'sabado', 'domingo']


console.log(dias);
dias.unshift("jueves") //Insertar element de primero en el array
dias.push("viernes") //Insertar element de ultimo en el array
dias.shift() //Eliminamos el primer element del array
dias.pop() //Eliminamos el ultimo element del array

let indice = dias.indexOf('miercoles') //sacamos el indice encontrado del array


dias.splice(1,2) //Eliminamos element desde un indice a otro
console.log(dias);
console.log(indice);
console.log('-\n-\n');

/* ARRAYS MATRIZ */
let matriz = [
    'hola como estas?',
    [
        'amarillo',
        'verde',
        [12, 23, 56]
    ],
    45
]
console.log(matriz)

console.log(matriz[1][2][1])
console.log('-\n-\n');

/* ARRAYS ASOCIATIVOS "Objetos literales" */

let yeisler = {
    cd: 22332,
    nombre: 'ipo',
    edad: 17,
    apellido: 'garlipo',
    colorPelo: 'negro',
    colorPiel: 'morenito',
    lentes: true,
    zapatos: true,
    vientre: false,
    emociones: [
        'soy bueno',
        'soy sincero',
        'soy fiel',
        'soy aguacate'
    ],
    direccionesDondeVivido: {
        caracas: 'san martin',
        sanJuan: 'Centro',
        altagracia: 'sadasdas sds'
    }
}
console.log(yeisler);
console.log(yeisler.direccionesDondeVivido.caracas);

