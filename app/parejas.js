(function(){
    document.addEventListener("DOMContentLoaded", () => {

        let parejas = {
            "homer": "../assets/p1.jpg",
            "bart": "../assets/p2.jpg",
            "lisa": "../assets/p3.jpg",
            "maggie": "../assets/p4.jpg",
            "marge": "../assets/p5.jpg",
            "apu": "../assets/p6.jpg",
            "flanders": "../assets/p7.jpg",
            "babel": "../assets/p8.jpg",
        }

        let parejasGrid = {
            "homer": 0,
            "bart": 0,
            "lisa": 0,
            "maggie": 0,
            "marge": 0,
            "apu": 0,
            "flanders": 0,
            "babel": 0,
        }

        let grid = [[ ],[ ],[ ],[ ]]
    
    
        let cartas = document.querySelectorAll("button");
        let puntuacion = document.querySelector(".puntos");
        let puntos = 0;
    
        cartas.forEach(item => {
            item.addEventListener("click",comprobar,false);
        })

        function rellenar(){
            let i,j;
            for(i=0; i<4; i++){
                for(j=0; j<4;j++){
                    let sprite = Math.floor(Math.random()*8); 
                }
            }
        }
    
        function comprobar(oEv){
            console.log(oEv.target);
            let row = oEv.target.dataset.row;
            let col = oEv.target.dataset.col;
            console.log(row + " " + col);
        }
    
    
        } , false)
})();