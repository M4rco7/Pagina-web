let campoTelefono = document.getElementById("telefono");
let contador = document.createElement("small");
contador.style.display = "block";
contador.style.textAlign = "right";
contador.style.marginTop = "5px";
contador.style.fontSize = "12px";
contador.style.color = "#888";
contador.style.fontFamily = "sans-serif";
contador.textContent = "0 / 50 caracteres";
campoTelefono.insertAdjacentElement("afterend", contador);
function actualizarContador() {
    let textoActual = campoTelefono.value;
    let longitud = textoActual.length;
    let limite = 50;
    contador.textContent = longitud + " / " + limite + " caracteres";
    if (longitud > limite) {
        campoTelefono.style.borderColor = "#ff4444";
        campoTelefono.style.backgroundColor = "#331111";
        contador.style.color = "#ff8888";
        contador.style.fontWeight = "bold";
    } else {
        campoTelefono.style.borderColor = "#65f884";
        campoTelefono.style.backgroundColor = "#222";
        contador.style.color = "#65f884";
        contador.style.fontWeight = "normal";
    }
}
campoTelefono.addEventListener("input", actualizarContador);
actualizarContador();