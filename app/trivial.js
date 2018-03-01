(function () {
    document.addEventListener("DOMContentLoaded", () => {

        localStorage.getItem('puntuacion') ? localStorage.getItem('puntuacion') : null;

        let preguntas = [
            "¿Cuándo acabó la II Guerra Mundial?",
            "¿Cuál es el océano más grande?",
            "¿Cuál es el disco más vendido de la historia?",
            "¿Qué deporte practicaba Michael Jordan?",
            "Si 50 es el 100%, ¿cuánto es el 90%?",
            "¿Cuál es tercer planeta en el sistema solar?"


        
        ];
        let respuestas = [
        ["1939", "1944", "1936","1945"],
        ["Atlántico","Índico","Pacífico","Antártico"],
        ["Back in Black", "The Bodyguard","Thriller", "The Dark Side of the Moon"],
        ["Baloncesto","Fútbol","Natación","Esgrima"],
        ["25","45","40","35"],
        ["Mercurio","Marte","Venus","La Tierra"]
        ];

        let soluciones = [3,2,2,0,1,3];
        
        var puntos = 0;
        var indice = 0;
        var correcta="";
        var carga_resp ="";
        jugar();

        document.querySelector('#comprobar').addEventListener('click', comprobar, false);
    
        function jugar(){
            carga_resp ="";
            document.querySelector("#pregunta").innerHTML = "<p>"+preguntas[indice]+"</p>";
            var num = 0;
            respuestas[indice].forEach(element => {
                carga_resp += '<span><input type="radio" name="res" id="respuesta'+num+'" value="'+
                num+'"><label for="respuesta'+num+'">'+element+'</label></span>';
                num++;                
            });
            correcta = soluciones[indice];
            document.querySelector("#respuestas").innerHTML = "<div class='resp'>"+carga_resp+"</div>";
        }

        function comprobar(){
            var respuesta = document.querySelector("input[type=radio]:checked").value;
            var puntuacion = document.querySelector(".puntos");
        
                if(respuesta == correcta){
                    puntos+=10;
                    puntuacion.innerHTML = puntos;
                }else{
                    puntos-=10;
                    puntuacion.innerHTML = puntos;
                }
       
            indice++;
            console.log(indice +" "+ preguntas.length);
            if(indice < preguntas.length)
                jugar();
            else
                finalizar();
        }

        function finalizar(){
            
            document.querySelector('#btn_comprobar').style.display = 'none';
            document.querySelector('#record').style.display = 'block';

            if(localStorage.getItem('puntuacion') < puntos){
                localStorage.setItem('puntuacion',puntos);
                document.querySelector('#record'). innerHTML = " Has superado tu récord";
            }
            else
                document.querySelector('#record'). innerHTML = " Vaya...no has superado tu récord";

        }
        
    } , false)
})()