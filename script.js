
let current_player = "X";
let juegoActivo = true; // Variable para controlar si el juego sigue activo
document.getElementById('current-player').innerHTML = current_player;
const combinacionesGanadoras = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila media
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna central
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal inversa
];
const tablero = document.getElementById('board');//capturamos el div completo
const listaElementos = tablero.querySelectorAll('.cell')
let jugadas = ["", "", "", "", "", "", "", "", ""];

console.log(listaElementos)



listaElementos.forEach(element => {
    element.addEventListener('click', function (e) {
        if (!juegoActivo) {
            //para validar si el juego ha terminado y el juego termina el return no deja que se ejecute el listener
            return;
        }
        console.log(e.target.id);
        if (e.target.classList.contains('player-x') || e.target.classList.contains('player-o')) {
            return //con esto validamos si la casilla ya contiene el estilo de relleno, si lo contiene el return no deja que se siga ejecutando la funcion
        }
        //si no esta rellena pues le aplicamos el relleno que corresponda segun el turno
        if (current_player == "X") {
            e.target.classList.add('player-x')
        } else if (current_player == "O") {
            e.target.classList.add('player-o')
        }
        //llenamos el array de jugadas
        jugadas[e.target.id] = (current_player)
        let hayGanador = false;//inicializamos la variable de ganador
        combinacionesGanadoras.forEach(combinacion => {
            const posA = combinacion[0];
            const posB = combinacion[1];
            const posC = combinacion[2];
            //recorremos todas las combinaciones y comparamos la posicion de las jugadas con la posicion de las combinaciones para saber si las 3 ubicaciones en jugadas estan rellenas con el mismo simbolo
            if (jugadas[posA] !== "" && jugadas[posA] === jugadas[posB] && jugadas[posB] === jugadas[posC]) {
                console.log("¡Ganador: " + jugadas[posA] + "!");
                document.getElementById('current-player').innerHTML = jugadas[posA] + " GANADOR ";
                document.getElementById('game-status').innerHTML = "¡" + jugadas[posA] + " ha ganado!";
                juegoActivo = false; // Desactivar el juego
                hayGanador = true;
            }
        });
        if (hayGanador) {
            return;
        }//si hay ganador finaliza la funcion y no deja continuar

        // Verificar empate (si el tablero eesta lleno y no hay ganador)
        if (!jugadas.includes("")) {
            console.log("¡Empate!");
            document.getElementById('current-player').innerHTML = "EMPATE";
            document.getElementById('game-status').innerHTML = "¡Es un empate!";
            juegoActivo = false;
            return;
        }
            //cambiar turno
        console.log(jugadas)
        if (current_player == "X") {
            current_player = "O";
        } else {
            current_player = "X";
        }


        document.getElementById('current-player').innerHTML = current_player;// esto es para que escriba el turno actual en pantalla


    })


});

