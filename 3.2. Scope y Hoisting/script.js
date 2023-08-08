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













/* Camel case */
    /*
es un estilo de escritura que se aplica a frases o palabras compuestas. El nombre se debe a que las mayúsculas a lo largo de una palabra en CamelCase se asemejan a las jorobas de un camello. El nombre CamelCase se podría traducir como Mayúsculas/Minúsculas Camello. El término case se traduce como "caja tipográfica", que a su vez implica si una letra es mayúscula o minúscula y tiene su origen en la disposición de los tipos móviles en casilleros o cajas.
Existen dos tipos de CamelCase:

EJEMPLO:
    UpperCamelCase(más conocido como PascalCase), cuando la primera letra de cada una de las palabras es mayúscula.
        Ejemplo: EjemploDeUpperCamelCase.

    lowerCamelCase(o simplemente CamelCase), igual que la anterior con la excepción de que la primera letra es minúscula.
        Ejemplo: ejemploDeLowerCamelCase.
*/


let names = 'ipo';
let lastName = "garlipo";
let edad2 = 17;
let region = "costa carles";


/* Condicionales */

/* if else - if else if */

/* if(edad2 > 17){
    console.log("mi edad es " + edad2)

}else{
    console.log("Eres menor de edad, no puedes entrar a este burdel")
} */

if(names == 'ipo' && edad2 >= 17 && lastName == 'garlipo'){
    console.log("Tu nombre es " + names)


}else if(names == 'jesus'){
        console.log("Tu nombre es " + names)

}else if(names == 'manito'){
        console.log("Tu nombre es " + names)

}else if(names == 'yessi'){
        console.log("Tu nombre es " + names)

}else{
    console.log("Eres menor de edad, no puedes entrar a este burdel")
}