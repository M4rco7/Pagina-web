let jugadores = document.querySelectorAll(".contenedor");
let modal = document.getElementById("modalJugador");
let spanCerrar = document.getElementsByClassName("cerrar-modal")[0];
let modalNombre = document.getElementById("modal-nombre");
let modalGoles = document.getElementById("modal-goles");
let modalAsistencias = document.getElementById("modal-asistencias");

function abrirModal(nombre, goles, asistencias) {
    modalNombre.textContent = nombre;
    modalGoles.textContent = goles;
    modalAsistencias.textContent = asistencias;
    modal.style.display = "block";
}
function cerrarModal() {
    modal.style.display = "none";
}
jugadores.forEach(function(jugador) {
    jugador.addEventListener("click", function() {
        let nombre = this.dataset.nombre;
        let goles = this.dataset.goles;
        let asistencias = this.dataset.asistencias;
        
        abrirModal(nombre, goles, asistencias);
    });
});
spanCerrar.onclick = cerrarModal;
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}