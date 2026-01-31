const campo = document.getElementById("campo");
const palabras = document.getElementById("palabras");
const caracteres = document.getElementById("caracteres");

const valorCampo = () => {
  return campo.value;
};

const numPalabras = () => {
  const texto = valorCampo().trim();

  let palabrasValue = 0;

  if (texto === "") {
    palabrasValue = 0;
  } else {
    palabrasValue = texto.split(/\s+/).length;
  }

  palabras.textContent = palabrasValue;
};

const numCaracteres = () => {
  const texto = valorCampo();
  const soloCaracteres = texto.replace(/\s/g, "");
  caracteres.textContent = soloCaracteres.length;
};

campo.addEventListener("input", () => {
  numPalabras();
  numCaracteres();
});
