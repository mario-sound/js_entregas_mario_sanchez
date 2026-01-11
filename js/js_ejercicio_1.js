// obtener el elemento botón usando su id
const boton = document.getElementById("cambiarColor");
const botonReset = document.getElementById("resetColor");

// obtener el elemento body del documento
const body = document.body;

// definir una función que genere un color aleatorio
function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// definir una función que cambie el color de fondo del body
function cambiarColorDeFondo() {
  const color = generarColorAleatorio();
  body.style.backgroundColor = color;
}

//  definimos una función que resetee el color blanco del documento
function resetColor() {
  body.style.backgroundColor = ``;
}

// añadir un evento de click al botón y le asignamos la función correspondiente
boton.addEventListener("click", cambiarColorDeFondo);
botonReset.addEventListener("click", resetColor);
