
/*  Las funciones son uno de los bloques de construcción fundamentales en JavaScript.Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla. */


/* function Saludar(){
    console.log("Hola como estas?")
}
Saludar();

let Atacar = function(){
    console.log("Te ataco pajuo")

} */
/* Atacar() */
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
/* console.log('la suma es: ' + resulSuma)
console.log(restarr(20, 10))
console.log(multiplicar(3, 8))
console.log(dividir(100, 5)) */



const sumar2 = (a, b) => a + b;

/* console.log(sumar2(10, 40)) */


let n1 = 5;
let n2 = 15;
let n3 = 25;
let n4 = 35;
let n5 = 45;
console.log(n1 <= n2 && (n3 >= n5 && (n3 == n1 || n2 < n5) || n1 < n4) || n3 >n4 && n4 < n5 )


/* 
    0) n1 <= n2 && (n3 >= n5 && (n3 == n1 || n2 < n5) || n1 < n4) || n3 >n4 && n4 < n5 
    1) n1 <= n2 && (n3 >= n5 && (false || true) || n1 < n4) || n3 >n4 && n4 < n5
    2) n1 <= n2 && (n3 >= n5 && true || n1 < n4) || n3 >n4 && n4 < n5 
    3) n1 <= n2 && (false && true || true) || n3 >n4 && n4 < n5
    4) n1 <= n2 && (false || true) || n3 >n4 && n4 < n5 
    5) n1 <= n2 && true || n3 > n4 && n4 < n5 
    6) true && true || n3 > n4 && n4 < n5 
    7) true || n3 > n4 && n4 < n5 
    8) true || false && n4 < n5 
    9) true || false && true 
    10) true && true 
    11) true

*/