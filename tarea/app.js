// Tarea v1: solo DOM
const tareas = ["Estudiar JS", "Hacer el laboratorio"];
const ul = document.querySelector("#lista");
tareas.forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  ul.appendChild(li);
});
