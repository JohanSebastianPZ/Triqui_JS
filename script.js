
let current_player = "X";
document.getElementById('current-player').innerHTML = current_player;

const tablero = document.getElementById('board');

const listaElementos = tablero.querySelectorAll('.cell')

console.log(listaElementos)



listaElementos.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log(e.target.id);
        if (e.target.classList.contains('player-x') || e.target.classList.contains('player-o')) {
            return
        }
                if (current_player == "X") {
                    e.target.classList.add('player-x')
                } else if (current_player == "O") {
                    e.target.classList.add('player-o')
                }

                if (current_player == "X") {
                    current_player = "O";
                } else {
                    current_player = "X";
                }
            
       document.getElementById('current-player').innerHTML = current_player;// esto es para que escriba el turno actual en pantalla

    })


});

