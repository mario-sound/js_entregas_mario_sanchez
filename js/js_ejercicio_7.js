const longitud = document.getElementById("longitud");
const generar = document.getElementById("generar");
const resultado = document.getElementById("resultado");

function randomChar(str) {
  const index = Math.floor(Math.random() * str.length);
  return str[index];
}

generar.addEventListener("click", () => {
  const valor = longitud.value;

  if (valor.trim() === "") {
    resultado.value = "La longitud debe ser mayor o igual a 4";
    return;
  }

  let n = Number(valor);

  if (Number.isNaN(n)) {
    resultado.value = "Introduce un número válido";
    return;
  }

  if (!Number.isInteger(n)) {
    resultado.value = "La longitud debe ser un número entero";
    return;
  }

  const MAX_LONGITUD = 64;
  if (n > MAX_LONGITUD) {
    resultado.value = `La longitud máxima es ${MAX_LONGITUD}`;
    return;
  }

  if (n < 4) {
    resultado.value = "La longitud debe ser mayor o igual a 4";
    return;
  }

  const letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = '!"·$%&/()=|@#¢∞¬÷“”≠´‚¿?,.-;:_ºª*^¨Çç´`';
  const caracteresPosibles = letras + numeros + simbolos;

  const passwordArray = [];
  passwordArray.push(randomChar(letras));
  passwordArray.push(randomChar(numeros));
  passwordArray.push(randomChar(simbolos));

  while (passwordArray.length < n) {
    passwordArray.push(randomChar(caracteresPosibles));
  }

  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  const contrasena = passwordArray.join("");

  resultado.value = contrasena;
});
