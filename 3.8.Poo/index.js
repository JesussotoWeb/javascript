    /*Para empezar, daremos una descripción simple y de alto nivel acerca de lo que es la Programación Orientada a Objetos (POO). Decimos simple, porque la POO puede volverse complicada rápidamente, y darte un tratamiento completo ahora, probablemente podría confundirte más que ayudar. La idea básica de la POO es que usamos objetos para modelar cosas del mundo real que queremos representar en nuestros programas, y/o proveemos una simple manera para acceder a la funcionalidad que, de otra manera, sería difícil o imposible de usar.

    Los objetos pueden contener información y código relacionados, los cuales representan información acerca de lo que estás tratando de modelar, y la funcionalidad o comportamiento que deseas que tenga.  Los datos de un Objeto (y frecuentemente, también las funciones) se pueden almacenar ordenadamente (la palabra oficial es encapsular) dentro del paquete de un objeto (al que se puede asignar un nombre específico, llamado a veces espacio de nombres), haciéndolo fácil de estructurar y acceder; los objetos también se usan comúnmente como almacenes de datos que se pueden enviar fácilmente a través de la red.


    - Ejemplos
    - Instanciacion

    Conceptos basicos de POO
    - Clase

    Vamos a considerar un sencillo programa que muestra información sobre estudiantes y profesores en una escuela. Aquí daremos un vistazo a la POO (Programación Orientada a Objetos) en general, no en el contexto de algún lenguaje de programación específico.

    Para empezar, podríamos volver a ver al objeto Persona de nuestro artículo de primeros objetos, que define los datos generales y funcionalidades de una persona. Hay muchas cosas que podrías saber acerca de una persona (su dirección, estatura, tamaño de calzado, perfil de ADN, número de pasaporte, rasgos significativos de su personalidad...), pero, en este caso, solo estamos interesados en mostrar su nombre, edad, género e intereses, además de una pequeña introducción sobre este individuo basada en los datos anteriores. También queremos que sea capaz de saludar.

    Esto es conocido como abstracción —  crear un modelo simple de algo complejo que represente sus aspectos más importantes y que sea fácil de manipular para el propósito de nuestro programa.


    - Objetos
    Partiendo de nuestra clase, podemos crear instancias de objetos — objetos que contienen los datos y funcionalidades definidas en la clase original. Teniendo a nuestra clase Persona, ahora podemos crear gente con características más específicas:

    Cuando una instancia del objeto es creada a partir de una clase, se ejecuta la función constructora (constructor en inglés) de la clase para crearla. El proceso de crear una instancia del objeto desde una clase se llama instanciación.

    - Atributo
    - Constructor

    */
import Calculadora from "./modules/Calculadora.js";

    /* Molde */
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

    }

    saludar(){
        console.log("Hola")
    }
}

/* Instaciacion */

const Ipo = new Persona("Ipo", "Garlipo");
const Jesus = new Persona("Jesus", "Soto");

console.log(`Mi nombre es ${Ipo.nombre} ${Ipo.apellido}`)
Ipo.saludar();

console.log(`Mi nombre es ${Jesus.nombre} ${Jesus.apellido}`)
Jesus.saludar();

console.log("\n\n\n")

const Operacione = new Calculadora();

console.log(Operacione.sumar(10, 10))
console.log(Operacione.restar(10, 5))

