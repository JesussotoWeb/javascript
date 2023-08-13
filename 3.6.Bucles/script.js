
/* Sentencia While */

let colores = ["rojo", "verde", "azul"]

let i = 0;

while(i < colores.length){
    console.log(colores[i])
    i++;

}
console.log("\n\n\n")

/* Sentencia For */

let dias = ["Lunes", "Martes", "Miecoles", "Jueves", "Viernes"]


for(let j = 0; j < dias.length; j++){
    console.log(dias[j])
}
console.log("\n\n\n")

/* Sentencia Do while */

let count = 6;
do{
    console.log("Esto siempre se ejecutara al menos una vez")
    count++;
}while(count < dias.length);
console.log("\n\n\n")

/* ------------------------------------------- */

/* Break - Podemos parar el bucle y salir sin necesidad de ejecutar lo demas */
const cdStudents = [
    "255565123",
    "231234352",
    "566464453",
    "345353654",
    "435346457",
]

for(let j = 0; j < cdStudents.length; j++){

    if(cdStudents[j] === "435346457"){
        console.log("*Resultado* " + cdStudents[j]);
        break;
        console.log("Eres potente");
    }
}

console.log("\n\n\n")

/* For in es extraer los indices del array*/
const animales = [
    "leon",
    "gato",
    "perro",
    "vaca",
    "raton",
]
for(index in animales){
    console.log("Sus indices son: "+index)

    console.log("Nombre del animal: "+animales[index])
}
console.log("\n\n\n")

/* For of es extraer los valores del array*/

for(animal of animales){
    console.log(animal)
}
