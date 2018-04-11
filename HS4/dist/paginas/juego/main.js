//Objetos importates de canvas

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//Crear objeto de la nave con JSON
var nave = {
	x: canvas.width / 2 - 70,
	y: canvas.height - 90, //Para que se situe abajo de nuestro cuadro canvas
	width: 70,
	height: 70,
	contador: 0
}

//Variable para empezar el juego
var empieza = false;

//Variable para pruebas
var modo_pruebas = false;

// Objeto juego, estado actual: esperando, iniciando, jugando, perdido, finalizado.

var juego = {
	estado: 'esperando'
};

//Objeto para el texto

var textoRespuesta = {
	contador: -1,
	titulo: '',
	subtitulo: ''
}

//Definimos eventos de teclado

var teclado = {}

//Array para armamento

var disparos = [];
var disparosEnemigos = [];

//Array para los enemigos

var enemigos = [];
var num_enemigos = 16;

//Variable para el personaje y sus disntintos modos
var personaje = 'p1';

var puntos_totales = 0;
var puntos_salvados = 0;
var muertes = 0;
//Definir vars para las imagenes

var fondo, avatar, imgEnemigo, imgEnemigoMuerto, imgDisparo, imgDisparoE;
var preloader;
var img_avatar = "../../assets/juego/avatares/1.png";

//Variable que indica el nivel actual
var nivel = 1;
var ultimo_nivel = 5;
var cambio = 0;
var contador_jefe = 0;

//Definicion de funciones

function loadMedia() {
	fondo = new Image();
	fondo.src = "../../assets/juego/fondo.jpg";

	fondo.onload = function () {
		//leerPuntuacion();
		var intervalo = window.setInterval(frameLoop, 1000 / 55);
	}
}

function agregarEventosTeclado() {
	agregarEvento(document, "keydown", function (e) {
		//Codigo que identifica la tecla que se ha presionado.
		//Se pone en true la tecla presionada.
		teclado[e.keyCode] = true;
		//console.log(e.keyCode);
	});

	agregarEvento(document, "keyup", function (e) {
		//Codigo que identifica la tecla que se ha presionado.
		//Se pone en false la tecla presionada.
		teclado[e.keyCode] = false;
	});

	function agregarEvento(elemento, nombreEvento, funcion) {
		if (elemento.addEventListener) {
			//navegadores tipo firefox, chrome.
			elemento.addEventListener(nombreEvento, funcion, false);
		} else if (elemento.attachEvent) {
			//Navegador iexplorer
			elemento.attachEvent(nombreEvento, funcion);
		}
	}
}

function fuego(direccion) {

	// atributos de disparo.
	disparos.push({
		x: nave.x + 35,
		y: nave.y + 40,
		width: 15,
		height: 25,
		direccion: direccion
	});
}

//Funcion para logica de colisiones.

function hit(a, b) {
	var hit = false;
	if (b.x + b.width >= a.x && b.x < a.x + a.width) {
		if (b.y + b.height >= a.y && b.y < a.y + a.height) {
			hit = true;
		}
	}
	if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
		if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
			hit = true;
		}
	}
	if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
		if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
			hit = true;
		}
	}

	return hit;
}

// Funcion que actualiza los enemigos

function actualizaEnemigos() {
	if (!modo_pruebas) {
		function agregarDisparos(enemigo, posicion_x, posicion_y) {

			return {
				x: posicion_x,
				y: posicion_y,
				width: 5,
				height: 20,
				contador: 0
			}
		}
	}

	if (juego.estado == 'iniciando') {

		for (var i = 0; i < num_enemigos; i++) {
			enemigos.push({
				x: 10 + (i * 50),
				y: 10,
				height: 40,
				width: 40,
				estado: 'vivo',
				contador: 0,
				direccion: 'abajo'
			});
		}
		juego.estado = 'jugando';
	}
	//Mover los enemigos
	for (var i in enemigos) {
		var enemigo = enemigos[i];
		if (!enemigo) continue;
		if (enemigo && enemigo.estado == 'vivo') {
			enemigo.contador++;

			//Condiciones para los diferentes niveles

			if (enemigos.length == 1 && nivel != ultimo_nivel)
				enemigo.x += Math.sin(enemigo.contador * Math.PI / 90) * 2;
			else {
				if (aleatorio(0, enemigos.length * 20) == 4) {
					disparosEnemigos.push(agregarDisparos(enemigo, enemigo.x, enemigo.y));
				}
			}
		}
		if (enemigo && enemigo.estado == 'golpeado') {
			enemigo.contador++;
			if (enemigo.contador >= 20) {
				enemigo.estado = 'muerto';
				puntos_totales += 100;
				enemigo.contador = 0;
			}
		}
		if ((enemigo.y > canvas.height - 10)) {
			juego.estado = 'perdido';
			nave.estado = 'golpeado';
		}
		//console.log(enemigo.y + " " + enemigo.x+ " nave: "+ nave.y + " "+nave.x);
		if (enemigo.y >= nave.y) {

			juego.estado = 'perdido';
			nave.estado = 'golpeado';
		}

	}
	enemigos = enemigos.filter(function (enemigo) {
		if (enemigo && enemigo.estado != 'muerto') return true;
		return false;
	});

}

function verificarContacto() {
	for (var i in disparos) {
		var disparo = disparos[i];
		for (var j in enemigos) {
			var enemigo = enemigos[j];
			if (nivel == 5) {
				if (hit(disparo, enemigo)) {
					contador_jefe++;
					enemigo.estado = 'golpeado';
					enemigo.estado = 'vivo';
					puntos_totales += 1;
					//console.log(contador_jefe);
				}
				if (contador_jefe >= 10000) {
					enemigo.estado = 'golpeado';
					disparos = disparos.filter(function (disparo) {
						return false;
					});
					disparosEnemigos = disparosEnemigos.filter(function (disparo) {
						return false;
					});
					enemigo.contador = 0;
					contador_jefe = 10000;
				}
			} else {
				if (hit(disparo, enemigo)) {
					enemigo.estado = 'golpeado';
					enemigo.contador = 0;
				}
			}
		}
	}
	if (nave.estado == 'golpeado' || nave.estado == 'muerto') return;
	for (var i in disparosEnemigos) {
		var disparo = disparosEnemigos[i];
		if (hit(disparo, nave)) {
			nave.estado = 'golpeado';
			muertes++;
			//console.log("Muertes: " + muertes);
		}
	}


}


function actualizarEstadoJuego() {
	console.log(juego.estado);

	if (juego.estado == 'esperando') {
		textoRespuesta.titulo = 'BABEL Attack';
		textoRespuesta.subtitulo = 'FLECHAS: Moverse. W: Disparar. ENTER: Empezar';
		textoRespuesta.contador = 0;
		juego.estado = 'finalizado';
	}
	console.log(enemigos.length);

	if (juego.estado == 'jugando' && enemigos.length == 0) {
		juego.estado = 'victoria';
		textoRespuesta.titulo = 'Nivel completado';
		textoRespuesta.subtitulo = 'No esta mal babeliano...';
		textoRespuesta.contador = 0;
		// Limpiamos los disparos al completar el nivel.
		disparosEnemigos = disparosEnemigos.filter(function (disparo) {
			return false;
		});
		disparos = disparos.filter(function (disparo) {
			return false;
		});
	}
	if (textoRespuesta.contador >= 0) {
		textoRespuesta.contador++;
	}
	//Condicion para reiniciar el juego. Enter
	if ((juego.estado == 'perdido' || juego.estado == 'victoria') && teclado[13]) {

		nave.x = canvas.width / 2 - 70;
		nave.y = canvas.height - 100;
		puntos_totales = puntos_salvados;
		juego.estado = 'iniciando';
		nave.estado = 'vivo';
		textoRespuesta.contador = -1;
		contador_jefe = 0;
		//nivel = 1;
	}

	if (juego.estado == 'victoria') {

		if (muertes == 0)
			puntos_totales += 1000;
		textoRespuesta.titulo = 'Bien hecho babeliano!';
		textoRespuesta.subtitulo = 'Pulsa ENTER para empezar de nuevo';
		textoRespuesta.contador = 0;
		disparosEnemigos = disparosEnemigos.filter(function (disparo) {
			return false;
		});
		juego.estado = 'finalizado';
	}

	if (juego.estado == 'finalizado' && teclado[13]) {
		nave.x = canvas.width / 2 - 70;
		nave.y = canvas.height - 100;
		puntos_totales = 0;
		juego.estado = 'iniciando';
		nave.estado = 'vivo';
		textoRespuesta.contador = -1;
		contador_jefe = 0;
		nivel = 1;
	}

}


function nivelActual() {
	return nivel;
}

function obtenerPuntos() {
	return puntos_totales;
}

function muertesTotales() {
	return muertes;
}

function aleatorio(inferior, superior) {
	var posibilidades = superior - inferior;
	var a = Math.random() * posibilidades;
	a = Math.floor(a);
	return parseInt(inferior) + a;
}

function moverNave() {
	var limite_ancho = canvas.width - nave.width;
	var limite_alto = canvas.height - nave.height;
	var velocidad_mov = 20;

	if (teclado[37]) {
		//Movimiento a la izquierda del objeto
		nave.x -= velocidad_mov;
		if (nave.x < 0)
			nave.x = 0;
	}

	if (teclado[38]) {
		//Movimiento hacia arriba del objeto
		nave.y -= velocidad_mov;
		if (nave.y < 0)
			nave.y = 0;
	}

	if (teclado[39]) {
		//Movimiento a la derecha del objeto
		nave.x += velocidad_mov;
		if (nave.x > limite_ancho)
			nave.x = limite_ancho;
	}

	if (teclado[40]) {
		//Movimiento hacia abajo del objeto
		nave.y += velocidad_mov;
		if (nave.y > limite_alto)
			nave.y = limite_alto;
	}

	//Tecla de disparo hacia arriba
	if (teclado[87]) {
		if (!disparando && personaje == 'p1') {
			fuego("arriba");
			disparando = true;
		}
		console.log(personaje);
	} else
		disparando = false;


	if (nave.estado == 'golpeado') {
		nave.contador++;
		if (nave.contador >= 20) {
			nave.contador = 0;
			nave.estado = 'muerto';
			juego.estado = 'perdido';
			textoRespuesta.titulo = 'Has perdido';
			textoRespuesta.subtitulo = 'Pulsa ENTER para reiniciar...';
			textoRespuesta.contador = 0;
			//nivel = 1;
		}
	}
}

// Funcion para mover los disparos dependiendo de la 
// direccion desde la que se lanzan
function moverDisparos() {

	for (var i in disparos) {
		var disparo = disparos[i];
		if (disparo.direccion == "abajo") {
			disparo.y += 2;
		} else if (disparo.direccion == "izquierda") {
			disparo.x -= 2;
		} else if (disparo.direccion == "derecha") {
			disparo.x += 2;
		} else if (disparo.direccion == "arriba_iz") {
			disparo.y -= 2;
			disparo.x--;

		} else if (disparo.direccion == "arriba_dr") {
			disparo.y -= 2;
			disparo.x++;
		} else
			disparo.y -= 2;
	}

	// Funciones para limpiar los disparos cuando se acercan al limite
	// del canvas.
	disparos = disparos.filter(function (disparo) {
		return disparo.y > 0;
	});

	disparos = disparos.filter(function (disparo) {
		return disparo.x > 0;
	});

	disparos = disparos.filter(function (disparo) {
		return disparo.y < canvas.height - 10;
	});

	disparos = disparos.filter(function (disparo) {
		return disparo.x < canvas.width - 10;
	});

	if (juego.estado == 'perdido') {
		disparos = disparos.filter(function (disparo) {
			return false;
		});
		disparosEnemigos = disparosEnemigos.filter(function (disparo) {
			return false;
		});
		enemigos = enemigos.filter(function (disparo) {
			return false;
		});
	}


}

function moverDisparosEnemigos() {
	for (var i in disparosEnemigos) {
		var disparo = disparosEnemigos[i];

		disparo.y += 3;

		if (nivel == 5) {
			disparo.y += 2;
			if (contador_jefe > 5000)
				disparo.x += 3;
			if (contador_jefe > 6000)
				disparo.x -= 3;
			if (contador_jefe > 8000)
				disparo.x -= 2;
		}
	}
	disparosEnemigos = disparosEnemigos.filter(function (disparo) {
		return disparo.y < canvas.height;
	});
}

/** FUNCIONES DE DIBUJADO **/

function dibujarFondo() {

	ctx.drawImage(fondo, 0, 0);
}

function actualizarImgNave(ruta) {
	img_avatar = ruta;
}


function dibujarNave() {
	ctx.save(); //Guardamos la info actual del ctx
	avatar = new Image();
	avatar.src = img_avatar;
	ctx.drawImage(avatar, nave.x, nave.y, nave.width, nave.height);
	ctx.restore();
}

// Funcion para dibujar disparos

function dibujarDisparos() {
	ctx.save();
	//ctx.fillStyle = 'black';
	imgDisparo = new Image();
	imgDisparo.src = "../assets/juego/disparo.png";
	for (var i in disparos) {
		var disparo = disparos[i];
		ctx.drawImage(imgDisparo, disparo.x, disparo.y, disparo.width, disparo.height);
	}
	ctx.restore();
}

//Funcion para dibujar enemigos

function dibujarEnemigos() {
	for (var i in enemigos) {
		var enemigo = enemigos[i];
		ctx.save();
		imgEnemigo = new Image();
		imgEnemigo.src = "../../assets/juego/enemigo.png";
		imgEnemigoMuerto = new Image();
		imgEnemigoMuerto.src = "../../assets/juego/enemigo_muerto.png";
		if (enemigo.estado == 'vivo') ctx.drawImage(imgEnemigo, enemigo.x, enemigo.y, enemigo.width, enemigo.height);
		if (enemigo.estado == 'golpeado') ctx.drawImage(imgEnemigoMuerto, enemigo.x, enemigo.y, enemigo.width, enemigo.height);
	}
}

// Funcion para dibujar disparos de los enemigos

function dibujarDisparosEnemigos() {
	for (var i in disparosEnemigos) {
		var disparo = disparosEnemigos[i];
		ctx.save();
		imgDisparoE = new Image();
		imgDisparoE.src = "../../assets/juego/disparo_e.png";
		ctx.drawImage(imgDisparoE, disparo.x, disparo.y, disparo.width + 10, disparo.height + 10);
		ctx.restore();
	}
}

// Funcion que dibuja el texo al finalizar la partida. Cuando se pierde y cuando se acaba el juego.

function dibujaTexto() {
	if (textoRespuesta.contador == -1) return;
	var alpha = textoRespuesta.contador / 50.0;
	if (alpha > 1) {
		for (var i in enemigos) {
			delete enemigos[i];
		}
	}
	ctx.save();
	ctx.globalAlpha = alpha;
	if (juego.estado == 'perdido' || juego.estado == 'finalizado') {
		ctx.fillStyle = 'white';
		ctx.font = 'Bold 40pt Arial';
		ctx.fillText(textoRespuesta.titulo, 140, 200);
		ctx.font = '14pt Arial';
		ctx.fillText(textoRespuesta.subtitulo, 190, 250);
	}
	if (juego.estado == 'victoria' || juego.estado == 'comenzar') {
		ctx.fillStyle = 'white';
		ctx.font = 'Bold 40pt Arial';
		ctx.fillText(textoRespuesta.titulo, 140, 200);
		ctx.font = '14pt Arial';
		ctx.fillText(textoRespuesta.subtitulo, 190, 250);
	}
	ctx.restore();
}


function frameLoop() {

	moverNave();
	actualizarEstadoJuego();
	actualizaEnemigos();
	moverDisparos();
	moverDisparosEnemigos();
	verificarContacto();
	dibujarFondo();
	dibujarEnemigos();
	dibujarDisparosEnemigos();
	dibujarDisparos();
	dibujaTexto();
	dibujarNave();
}


//Ejecucion de funciones
agregarEventosTeclado();
loadMedia();