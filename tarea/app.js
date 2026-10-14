// Tarea v2: DOM + eventos (sin clases)
const formTarea = document.querySelector("#formTarea");
const texto = document.querySelector("#texto");
const prioridad = document.querySelector("#prioridad");
const mensaje = document.querySelector("#mensaje");
const contadorLetras = document.querySelector("#contadorLetras");
const ul = document.querySelector("#lista");

texto.addEventListener("input", () => {
  contadorLetras.textContent = texto.value.length + " caracteres";
});

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valor = texto.value.trim();
  if (valor.length < 3) {
    mensaje.textContent = "La tarea debe tener al menos 3 caracteres";
    mensaje.classList.add("error");
    return;
  }
  const li = document.createElement("li");
  li.textContent = valor + " (" + prioridad.value + ")";
  const btnMarcar = document.createElement("button");
  btnMarcar.textContent = "Marcar";
  btnMarcar.addEventListener("click", () => li.classList.toggle("hecha"));
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => li.remove());
  li.appendChild(btnMarcar);
  li.appendChild(btnBorrar);
  ul.appendChild(li);
  mensaje.textContent = "Tarea agregada";
  mensaje.classList.remove("error");
  formTarea.reset();
  contadorLetras.textContent = "0 caracteres";
});
