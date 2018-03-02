(function () {
    document.addEventListener("DOMContentLoaded", () => {

        let encendido = false;
        document.querySelector('.sonido').addEventListener('click',activarsonido,false);
        

        function activarsonido(){
            if(!encendido){
                document.querySelector('#sonidofondo').play();
                encendido = true;
            }
            else{
                document.querySelector('#sonidofondo').pause();
                encendido = false;
            }
        }


    } , false)
})()

    


