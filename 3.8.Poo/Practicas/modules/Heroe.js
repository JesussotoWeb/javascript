class Heroe{
    constructor(nombre, poderes, vida, mana){
        this.nombre = nombre;
        this.poderes = poderes;
        this.vida = vida;
        this.mana = mana;
        this.danio = 10;
    }
    atacar(){
        console.log("Atacando...")
        setTimeout(() => {
            console.log("ataque ejecutado: " + this.danio)
        }, 1000)
    }
    curar(){
        console.log("Curando...")
        setTimeout(() => {
            console.log("Curado, vida: " + (this.vida = 10))
        }, 1000)
    }
    dormir(){
        console.log("Durmiendo...")
        setTimeout(() => {
            console.log("Ya descanse")
        }, 1000)
    }
    transformarse(){
        console.log("Transformacion...")

        setTimeout(() => {
            this.vida = 100;
            this.danio = 600;
            this.mana = 1600;
            console.log("Ya transformado")
            console.log(this.vida)
            console.log(this.danio)
            console.log(this.mana)


        }, 1000)
    }
}
export default Heroe;