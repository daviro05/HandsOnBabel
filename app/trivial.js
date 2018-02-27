let preguntas = [
    " ",
    " ",
    " "

];
let respuestas = [
[" ", " ", " ", " "],
[" ", " ", " ", " "],
[" ", " ", " ", " "]

];

var correcta;

function jugar(){
var aleatorio = Math.floor(Math.random()*preguntas.length);
var respuestas_posibles = respuestas[aleatorio];


var posiciones = [0,1,2,3];
var respuestas_reordenadas = [];

var leida = false;
for(i in respuestas_posibles){
    var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
    if(posicion_aleatoria==0 && leida == false){
        correcta =i;
        leida = true;
    }
    respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
    posiciones.splice(posicion_aleatoria, 1);
}

var txt_respuestas="";
for(i in respuestas_reordenadas){
    txt_respuestas += '<input type="radio" name="pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label><br>';
}

document.getElementById("respuestas").innerHTML = txt_respuestas;
document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];

}

function comprobar(){
	var respuesta = $("input[type=radio]:checked").val();

	if(respuesta == correcta){
		alert("Correcto");
	}else{
		alert("Incorrecto");
	}
	jugar();
}