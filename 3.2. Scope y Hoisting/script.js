/* 
    El scope puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. Existen dos tipos de scope, el scope global y el scope local. A continuación te mostraré un par de ejemplos explicando en qué consiste cada uno de ellos.
*/

/* Scope global */
//var 


if(true){
    var edad = 25;

}
console.log("mi edad es " + edad)

/* Scope local */
// let
let edad1 = 20;

if(true){

}
console.log("mi edad es " + edad1)





/* El hoisting */
 /* En la mayoría de los lenguajes de programación, el ámbito / alcance de una variable está en el bloque donde fue definida(block - level scope), por ejemplo, dentro de un bloque de instrucciones if, for, while.En JavaScript(ECMAScript 5.1) esto no es así, puesto que el alcance de una variable es el de la función en la cual fue declarada(function- level scope).

    El motor V8 de javascript consta de dos procesos Heap y Stack, cuando arranca la ejecucion de javascript el heap hace un barrido por todo nuestro codigo mientras que el stack es el encargado de ejecutarlo.
    En la etapa de Heap extiste algo que se llama efecto hoisting o “elevación” es una de las particularidades de JavaScript y se da cuando definimos una variable en el interior de una función(en el scope), entonces el intérprete interno pasa a declararla al comienzo de su contexto(la eleva) */
