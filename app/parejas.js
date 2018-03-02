(function () {
    document.addEventListener("DOMContentLoaded", () => {

        let parejas = {
            "homer": "../assets/parejas/p1.jpg",
            "bart": "../assets/parejas/p2.jpg",
            "lisa": "../assets/parejas/p3.jpg",
            "maggie": "../assets/parejas/p4.jpg",
            "marge": "../assets/parejas/p5.jpg",
            "apu": "../assets/parejas/p6.jpg",
            "flanders": "../assets/parejas/p7.jpg",
            "babel": "../assets/parejas/p8.png",
        }

        let parejasRell = [
            ["homer", 0],
            ["bart", 0],
            ["lisa", 0],
            ["maggie", 0],
            ["marge", 0],
            ["apu", 0],
            ["flanders", 0],
            ["babel", 0],
        ]

        let grid = [
            ["homer", "flanders", "marge", "marge"],
            ["babel", "bart", "apu", "maggie"],
            ["apu", "maggie", "lisa", "babel"],
            ["flanders", "homer", "bart", "lisa"]
        ]

        let pareja = []

        let ePulsado2 = false;


        let cartas = document.querySelectorAll("button");
        let puntuacion = document.querySelector(".puntos");
        let puntos = 0;

        cartas.forEach(item => {
            item.addEventListener("click", comprobar, false);
        })

        function ponerHaciaArriba(target, carta) {
            target.style.backgroundImage = `url(${parejas[carta]})`;
        }

        function ponerHaciaAbajo(cartas) {
            cartas.forEach(item => {
                let r = item.row;
                let c = item.col;
                let selector = `button[data-row="${r}"][data-col="${c}"]`;
                let btn = document.querySelector(selector);
                btn.style.backgroundImage = "url(../assets/game.png)";
            });
            ePulsado2 = false;
        }

        function sumarPuntos() {
            puntos += 10;
            puntuacion.innerHTML = `${puntos} puntos`;
        }

        function comprobar(oEv) {
            if ((oEv.target.style.backgroundImage === 'url("../assets/game.png")' || oEv.target.style.backgroundImage === "")&&(!ePulsado2)) {
                let row = oEv.target.dataset.row;
                let col = oEv.target.dataset.col;
                let pulsado = { row: row, col: col };
                ponerHaciaArriba(oEv.target, grid[pulsado.row][pulsado.col]);
                pareja.push(pulsado);
                if (pareja.length === 2) {
                    ePulsado2 = true;
                    cartaA = grid[pareja[0].row][pareja[0].col];
                    cartaB = grid[pareja[1].row][pareja[1].col];
                    if (cartaA != cartaB) {
                        setTimeout(ponerHaciaAbajo,1000,pareja);
                    } else {
                        sumarPuntos();
                        ePulsado2 = false;
                    }
                    pareja = [];
                }
            }
        }


    }, false)
})();