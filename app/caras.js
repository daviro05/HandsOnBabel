(function () {
    document.addEventListener("DOMContentLoaded", () => {

    let img1 = document.getElementById("respImg1").value;
    console.log(img1);
    let img2 = document.querySelector("#respImg2").value;
    let img3 = document.querySelector("#respImg3").value;
    let img4 = document.querySelector("#respImg4").value;
    let img5 = document.querySelector("#respImg5").value;
    let img6 = document.querySelector("#respImg6").value;

    let res1 = document.querySelector("#solImg1").value;
    let res2 = document.querySelector("#solImg2").value;
    let res3 = document.querySelector("#solImg3").value;
    let res4 = document.querySelector("#solImg4").value;
    let res5 = document.querySelector("#solImg5").value;
    let res6 = document.querySelector("#solImg6").value;

    let caja = document.querySelectorAll("input[type=text]");
    console.log(caja[0]);
    caja[0].addEventListener("keyup",comprobar,false);

    function comprobar(){
        console.log("mia " + img1 + " respuesta " + res1);
        if(img1 == res1){
            caja[0].classList.add("correcto");
        }
        else
            caja[0].classList.add("incorrecto");
    }


    } , false)
})()

    


