// Seleccionar los números
const temporizador = document.getElementById("temporizador");

// seleccionar los botones
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reiniciar = document.getElementById("reiniciar");

let min = 0,
  sec = 0,
  ms = 0,
  count = null,
  malt,
  salt,
  msalt;

let stopwatch = {
  start: function () {
    if (count !== null) return;
    count = setInterval(function () {
      if (ms == 100) {
        ms = 0;
        if (sec == 60) {
          sec = 0;
          min++;
        } else {
          sec++;
        }
      } else {
        ms++;
      }

      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);

      stopwatch.update(`${malt}:${salt}:${msalt}`);
    }, 10);
  },
  stop: function () {
    clearInterval(count);
    count = null; // importante para poder volver a iniciar
  },

  reset: function () {
    stopwatch.stop();
    min = 0;
    sec = 0;
    ms = 0;
    stopwatch.update("00:00:00");
  },

  update: function (txt) {
    temporizador.textContent = txt; // usa tu elemento real
  },

  pad: function (time) {
    return time < 10 ? "0" + time : String(time);
  },
};

stopwatch.update("00:00:00");

iniciar.addEventListener("click", stopwatch.start);
pausar.addEventListener("click", stopwatch.stop);
reiniciar.addEventListener("click", stopwatch.reset);
