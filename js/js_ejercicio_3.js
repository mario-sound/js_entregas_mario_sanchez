// obtener los elementos de la pagina
const nuevoItem = document.getElementById("nuevoItem");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

function agregarElemento() {
  const li = document.createElement("li");
  const botonBorrar = document.createElement("button");

  li.textContent = nuevoItem.value + " ";
  botonBorrar.textContent = "x";

  // al hacer click en el botón, se elimina ESTE li
  botonBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(botonBorrar);
  lista.appendChild(li);

  nuevoItem.value = "";
}

agregar.addEventListener("click", agregarElemento);
