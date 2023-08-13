
/*  Las funciones son uno de los bloques de construcción fundamentales en JavaScript.Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla. */


function Saludar(){
    console.log("Hola como estas?")
}
Saludar();

let Atacar = function(){
    console.log("Te ataco pajuo")

}
Atacar()
/* 
let opc1 = Number(prompt("Ingrese el primer valor para la suma"));
let opc2 = Number(prompt("Ingrese el segundo valor para la suma")); */

const calcularSuma = function(x, c){
   /*  alert(x + c) */
}

const restar = (A, B) => {
   /*  alert(A - B) */

}

/* calcularSuma(opc1, opc2)
restar(opc1, opc2) */



/* Calculadora */


const sumar = (a,b) => {
    let resultado = a + b;

    return resultado;
}
const restarr = (a,b) => {
    let resultado = a - b;

    return resultado;
}
const multiplicar = (a,b) => {
    let resultado = a * b;

    return resultado;
}
const dividir = (a,b) => {
    let resultado = a / b;

    return resultado;
}
let resulSuma = sumar(5, 10);
console.log('la suma es: ' + resulSuma)
console.log(restarr(20, 10))
console.log(multiplicar(3, 8))
console.log(dividir(100, 5))



const sumar2 = (a, b) => a + b;

console.log(sumar2(10, 40))

