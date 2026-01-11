// obtener input buscador
const buscador = document.getElementById("buscador");

// obtener lista (ul)
const lista = document.getElementById("lista");

// escuchar cuando el usuario escribe
buscador.addEventListener("input", () => {
  const textoBuscador = buscador.value.toLowerCase();

  // obtener todos los li
  const elementosLista = lista.querySelectorAll("li");

  elementosLista.forEach((li) => {
    const textoItem = li.textContent.toLowerCase();

    if (textoItem.includes(textoBuscador)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});
