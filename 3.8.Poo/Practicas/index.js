import Calculadora from "./modules/Calculadora.js";
import Heroe from "./modules/Heroe.js";


let poderes = {
    gritoDragon: 300,
    lanzaDorada: 800,
    reGeneracion: 100
}
const Arkantos = new Heroe("Arkantos", poderes, 500);

console.log(Arkantos.atacar());
console.log(Arkantos.curar());


const Gargarensis = new Heroe("Gargarensis", poderes, 500);


const nuevaOperacion = new Calculadora();

const suma = nuevaOperacion.sumar(10,10);
const restar = nuevaOperacion.restar(10,10);
const mult = nuevaOperacion.multiplicar(10,10);
const dividir = nuevaOperacion.dividir(10,10);



console.log(dividir)