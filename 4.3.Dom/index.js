

/* Para extraer html usamos las siguientes formas */

/* 
    document.getElementsByTagName("__tag__")
    document.getElementsByClassName("__class__")
    document.getElementById("__id__")

    NUEVA FORMA

    document.querySelector("") //., tag, #
    document.querySelectorAll("")  //., tag, #
*/

/* EVENTO EN JS */

/* 
    click
    Hover,
    change
*/
const btnLogin = document.querySelector("#btn_login")
let li = document.querySelectorAll(".aguacate li")


btnLogin.addEventListener("click", () => {
    li[0].innerHTML = "Nuevo texto"
    for(let i = 0; i < li.length; i++){
        li[i].classList.add("abc")
    }
    
})
btnLogin.addEventListener("mouseover", () => {
    console.log("Hola")
})
btnLogin.addEventListener("mouseout", () => {
    console.log("salir")
})