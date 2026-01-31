const textarea = document.getElementById("tareas");
const addTask = document.getElementById("addTask");
const removeTasks = document.getElementById("removeTasks");

let lista = document.getElementById("listaTareas");
if (!lista) {
  lista = document.createElement("ul");
  lista.id = "listaTareas";
  addTask.parentElement.insertAdjacentElement("afterend", lista);
}

// ----- LocalStorage -----
const STORAGE_KEY = "tareas";

// Fuente de verdad
let tareas = cargarTareas();

// Cargar al iniciar
renderTareas();

// Helpers localStorage
function guardarTareas() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
}

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

// ----- UI helpers -----
function generarId() {
  return `task_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function crearTareaElemento(tarea) {
  const li = document.createElement("li");
  li.dataset.id = tarea.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarea.completed;

  const texto = document.createElement("span");
  texto.textContent = ` ${tarea.text} `;

  const borrar = document.createElement("button");
  borrar.type = "button";
  borrar.textContent = "x";

  // Marcar / desmarcar -> actualizar datos + guardar
  checkbox.addEventListener("change", () => {
    const id = li.dataset.id;
    const t = tareas.find((x) => x.id === id);
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

function renderTareas() {
  // Mantener el UL y vaciar sus hijos
  lista.replaceChildren();

  tareas.forEach((tarea) => {
    const li = crearTareaElemento(tarea);
    lista.appendChild(li);
  });
}

// ----- Eventos -----
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

// Borrar completadas
removeTasks.addEventListener("click", () => {
  tareas = tareas.filter((t) => !t.completed);
  guardarTareas();
  renderTareas();
});
