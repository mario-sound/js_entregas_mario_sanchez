// Seleccionar los números
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// seleccionar los botones
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

const reset = document.getElementById("reset");

// Seleccionar resultado
const resultado = document.getElementById("resultado");

// asignar funciones a cada botón relacionandolas con los números
// Mostrar el valor obtenido en pantalla
sumar.addEventListener("click", () => {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = "Introduce números válidos";
    return;
  }

  const suma = valor1 + valor2;
  resultado.textContent = `Resultado: ${suma}`;
});
restar.addEventListener("click", () => {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = "Introduce números válidos";
    return;
  }

  const resta = valor1 - valor2;
  resultado.textContent = `Resultado: ${resta}`;
});
multiplicar.addEventListener("click", () => {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = "Introduce números válidos";
    return;
  }

  const multiplicacion = valor1 * valor2;
  resultado.textContent = `Resultado: ${multiplicacion}`;
});
dividir.addEventListener("click", () => {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  if (isNaN(valor1) || isNaN(valor2) || valor2 === 0) {
    resultado.textContent = "Introduce números válidos";
    return;
  }

  const division = valor1 / valor2;
  resultado.textContent = `Resultado: ${division}`;
});

reset.addEventListener("click", () => {
  resultado.textContent = `Resultado:`;
  num1.value = "";
  num2.value = "";
});
