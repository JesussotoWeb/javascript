/* var nombre = "Yeisler",
apellido = "Garlipo",
edad = 17,
direccion = 'Juan german rocio, hugo chavez';

const cedula = 30954927;

 */

/* console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(cedula);
console.log(direccion); */


/* Vaores internos Null nan*/


let xxx = null;
let num1 = "2";
let num2 = "20";

/* console.log(xxx);
console.log(num1 * num2); */



/* Formas de imprimir*/
/* 
console.log("manito");
alert("ipa");
let resultado = prompt("Hola");
console.log(resultado);

document.write("hola ipo") */


/* Operadores de asignacion*/

/* 
    = // asignacion igualdad
    += // asignacion adicion
    -= // asignacion resta

*/

/* Operadores arismeticos */
/* let n1 = 5, n2 = 10, n3 = 15, n4 = 20, n5 = 25; */

/* console.log(n1 + n2)
console.log(n2 - n3)
console.log(n3 * n4)
console.log(n4 / n5)
console.log(12 % 5) */

/* console.log(++n1) */

/* Concatenacion */

let saludo = "hola"; 
let nombre = "Ipo"; 

let edad = 17;

/* Primera forma */
console.log(saludo + " mi nombre es " + nombre + " y tengo " + edad + " anos")

/* Segunda forma */


let mensaje = saludo.concat(saludo)
console.log(mensaje)

console.log("\n\n\n\n\n")


/* Segunda forma */
console.log(`${saludo} mi nombre es ${nombre} y tengo ${edad} anos`) 
/* Hola mi nombre es ipo y tengo 17 anos */


/* Operadores de comparacion */

/* 
    a == b // igualdad
    b != c // Desigualdad
    c === d // identico o igualdad estricta

*/
let a = 5, b = '5';

/* console.log(a === b) */


/* Operadores logicos */

/* 
    < // menor que
    > // mayor que
    <= // menor o igual que
    >= // mayor o igual que

*/

let nn1 = 5;

/* console.log(10 <= 10) */

/* Operadores relacionales */

/* 
    && // and, esto se refiere que ambas condiciones se deben cumplir
    || // or, esto se refiere que cualquiera de las dos condiciones se deben cumplir
    !  // not, esto comvierte el valor en contrario
*/
let n1 = 442;
let n2 = 2342;
let n3 = 2234;
let n4 = 123;
let n5 = 555;

console.log(((n1 <= n2) && (n5 > n2) || n4 < n5) && n1 >= n5)


/* 
((n1 <= n2) && (n5 > n2) || n4 < n5) && n1 >= n5
(true && (n5 > n2) || n4 < n5) && n1 >= n5
(true && false || n4 < n5) && n1 >= n5
(true && false || true) && n1 >= n5
(false || true) && n1 >= n5
true && n1 >= n5
true && false
false





*/