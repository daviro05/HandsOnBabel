(function () {
    document.addEventListener("DOMContentLoaded", () => {

    let respuestas = [
        "calimero",
        "morty",
        "naranjito",
        "snoopy",
        "quagmire",
        "troy mcclure"
    ]


    let cajas = document.querySelectorAll("input[type=text]");
    let puntuacion = document.querySelector(".puntos");
    let puntos = 0;

    cajas.forEach(item => {
        item.addEventListener("keyup",comprobar,false);
    })

    function comprobar(oEv){
        console.log("mia " + oEv.target.value + " respuesta " + respuestas[oEv.target.id-1]);
        if(oEv.target.value === respuestas[oEv.target.id-1]){
            oEv.target.classList.add("correcto");
            oEv.target.classList.remove("incorrecto");
            puntos+=10;
            puntuacion.innerHTML = puntos;
            oEv.target.disabled = true;
        }
        else{
            oEv.target.classList.remove("correcto");
            oEv.target.classList.add("incorrecto");
        }
    }


    } , false)
})()

    


