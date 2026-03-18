let jugadores = document.querySelectorAll(".contenedor");

jugadores.forEach(function(jugador) {
    jugador.addEventListener("click", function() {
        let nombre = this.dataset.nombre;
        let goles = this.dataset.goles;
        let asistencias = this.dataset.asistencias;

        alert(
            "Jugador: " + nombre +
            "\nGoles: " + goles +
            "\nAsistencias: " + asistencias
        );
    });
});