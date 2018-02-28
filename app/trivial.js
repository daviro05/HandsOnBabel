(function () {
    document.addEventListener("DOMContentLoaded", () => {

        let preguntas = [
            "¿Cuándo acabó la II Guerra Mundial?",
            "¿Cuál es el océano más grande?",
            "¿Cuál es el disco más vendido de la historia?"
        
        ];
        let respuestas = [
        ["1945", "1939", "1944", "1936"],
        ["Pacífico", "Atlántico", "Índico", "Antártico"],
        ["Thriller", "Back in Black", "The Bodyguard", "The Dark Side of the Moon"]
        
        ];
        
        var correcta;
        var puntos = 0;
        jugar();
        document.querySelector('#comprobar').addEventListener('click', comprobar, false);
    
        function jugar(){
        
            var aleatorio = Math.floor(Math.random()*preguntas.length);
            var respuestas_posibles = respuestas[aleatorio];
            
            
            var posiciones = [0,1,2,3];
            var respuestas_reordenadas = [];
            
            var leida = false;
            for(i in respuestas_posibles){
                var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
                if(posicion_aleatoria==0 && leida == false){
                    correcta = i;
                    leida = true;
                }
                respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
                posiciones.splice(posicion_aleatoria, 1);
            }
            
            var txt_respuestas="";
            var num = 0;
            for(i in respuestas_reordenadas){
                txt_respuestas += '<span><input type="radio" name="res" id="respuesta'+num+'" value="'+i+'"><label for="respuesta'+num+'">'+respuestas_reordenadas[i]+'</label></span>';
                num++;
            }
            
            document.querySelector("#respuestas").innerHTML = "<div class='resp'>"+txt_respuestas+"</div>";
            document.querySelector("#pregunta").innerHTML = "<p>"+preguntas[aleatorio]+"</p>";
            
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
                jugar();
            }


    } , false)
})()

    


