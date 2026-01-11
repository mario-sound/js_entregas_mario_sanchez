// obtener el botón y el texto
const boton = document.getElementById("contarClics");
const texto = document.getElementById("textClics");
const reset = document.getElementById("resetClics");

// estado inicial
let contador = 0;
texto.textContent = `Clics: 0`;

// función que actualiza el contador y el texto
function actualizarTexto() {
  contador++;
  texto.textContent = `Clics: ${contador}`;
}

function resetText() {
  contador = 0;
  texto.textContent = `Clics: ${contador}`;
}

// evento click
boton.addEventListener("click", actualizarTexto);
reset.addEventListener("click", resetText);
