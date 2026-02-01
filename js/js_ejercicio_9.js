// Enlace de elementos JS con HTML
const textarea = document.getElementById("tareas");
const addTask = document.getElementById("addTask");
const removeTasks = document.getElementById("removeTasks");

// Creo la lista de tareas si no existe (ul)
let lista = document.getElementById("listaTareas");
if (!lista) {
  lista = document.createElement("ul");
  lista.id = "listaTareas";
  addTask.parentElement.insertAdjacentElement("afterend", lista);
}

// ----- Funciones -----

// Con esta función, se crea el elemento visual HTML <li> y sus elementos necesarios
function crearTareaElemento(tarea) {
  const li = document.createElement("li");
  li.dataset.id = tarea.id; // Este id se genera en el evento de click

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarea.completed; // Este es el estado del checkbox, false por defecto

  const texto = document.createElement("span");
  texto.textContent = ` ${tarea.text} `; // Aquí se añade el texto escrito por el user

  const borrar = document.createElement("button");
  borrar.type = "button";
  borrar.textContent = "x";

  // Marcar / desmarcar -> actualizar estado checkbox + guardar
  checkbox.addEventListener("change", () => {
    const id = li.dataset.id;
    const t = tareas.find((tarea) => tarea.id === id);
    if (!t) return;
    t.completed = checkbox.checked;
    guardarTareas();
  });

  // Borrar una tarea -> actualizar datos + guardar + render
  borrar.addEventListener("click", () => {
    const id = li.dataset.id;
    tareas = tareas.filter((t) => t.id !== id);
    guardarTareas();
    renderTareas();
  });

  li.appendChild(texto);
  li.appendChild(checkbox);
  li.appendChild(borrar);

  return li;
}

// Guarda los datos en localStorage (clave, valor(string))
function guardarTareas() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
}

// Obtiene los datos guardados en localStorage usando la clave "tareas"
function cargarTareas() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// Borro todo y vuelvo a añadir todas las tareas desde 0 y evito duplicados
function renderTareas() {
  // Mantener el UL y vaciar sus hijos
  lista.replaceChildren();

  tareas.forEach((tarea) => {
    const li = crearTareaElemento(tarea);
    lista.appendChild(li);
  });
}

// Genera un ID único con la fecha actual
function generarId() {
  return `task_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

// ----- LocalStorage -----

// Defino la clave para guardar/cargar datos en LS
const STORAGE_KEY = "tareas";

// Carga tareas guardadas en LS
let tareas = cargarTareas();

// Añade las tareas al HTML
renderTareas();

// ----- Eventos -----

// Evento para añadir tareas a la lista (button)
addTask.addEventListener("click", () => {
  const textoTarea = textarea.value.trim();
  if (textoTarea === "") return;

  const nueva = {
    id: generarId(),
    text: textoTarea,
    completed: false,
  };

  tareas.push(nueva);
  guardarTareas();
  renderTareas();

  textarea.value = "";
});

// Evento para eliminar las tareas ya completadas (button)
removeTasks.addEventListener("click", () => {
  tareas = tareas.filter((t) => !t.completed);
  guardarTareas();
  renderTareas();
});
