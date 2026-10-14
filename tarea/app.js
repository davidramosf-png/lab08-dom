// Tarea: lista de tareas (DOM + eventos + objetos)

class Tarea {
  constructor(texto, prioridad) {
    this.texto = texto;
    this.prioridad = prioridad;
    this.hecha = false;
  }
  alternar() {
    this.hecha = !this.hecha;
  }
  descripcion() {
    return this.texto + " (" + this.prioridad + ")";
  }
}

class ListaTareas {
  constructor() {
    this.items = [];
  }
  agregar(tarea) {
    this.items.push(tarea);
  }
  eliminar(tarea) {
    this.items = this.items.filter((t) => t !== tarea);
  }
  pendientes() {
    return this.items.filter((t) => !t.hecha).length;
  }
}

const lista = new ListaTareas();
const formTarea = document.querySelector("#formTarea");
const texto = document.querySelector("#texto");
const prioridad = document.querySelector("#prioridad");
const mensaje = document.querySelector("#mensaje");
const contadorLetras = document.querySelector("#contadorLetras");
const buscador = document.querySelector("#buscador");
const ul = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");

function mostrar() {
  const filtro = buscador.value.toLowerCase();
  ul.textContent = "";
  lista.items.forEach((t) => {
    if (!t.texto.toLowerCase().includes(filtro)) return;
    const li = document.createElement("li");
    li.textContent = t.descripcion();
    if (t.hecha) li.classList.add("hecha");

    const btnMarcar = document.createElement("button");
    btnMarcar.textContent = t.hecha ? "Desmarcar" : "Marcar";
    btnMarcar.addEventListener("click", () => { t.alternar(); mostrar(); });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => { lista.eliminar(t); mostrar(); });

    li.appendChild(btnMarcar);
    li.appendChild(btnBorrar);
    ul.appendChild(li);
  });
  resumen.textContent = "Pendientes: " + lista.pendientes() + " de " + lista.items.length;
}

texto.addEventListener("input", () => {
  contadorLetras.textContent = texto.value.length + " caracteres";
});

buscador.addEventListener("input", mostrar);

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valor = texto.value.trim();
  if (valor.length < 3) {
    mensaje.textContent = "La tarea debe tener al menos 3 caracteres";
    mensaje.classList.add("error");
    return;
  }
  lista.agregar(new Tarea(valor, prioridad.value));
  mensaje.textContent = "Tarea agregada";
  mensaje.classList.remove("error");
  formTarea.reset();
  contadorLetras.textContent = "0 caracteres";
  mostrar();
});

mostrar();
