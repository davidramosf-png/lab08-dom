# Tarea: Mi componente interactivo

## Componente elegido
Una **lista de tareas** con prioridad, botones para marcar y borrar, validación, contador de caracteres y buscador.

## Version 1: solo DOM
```js
const tareas = ["Estudiar JS", "Hacer el laboratorio"];
const ul = document.querySelector("#lista");
tareas.forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  ul.appendChild(li);
});
```
- **Qué agregué:** una lista creada con `createElement` y `appendChild`.
- **Por qué:** para dominar primero el DOM sin eventos ni clases.
- **Qué cambió:** la página muestra las tareas, pero no reacciona; para cambiarlas hay que editar el código.

## Version 2: con eventos
```js
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (texto.value.trim().length < 3) {
    mensaje.textContent = "La tarea debe tener al menos 3 caracteres";
    mensaje.classList.add("error");
    return;
  }
  // crear li con botones Marcar y Borrar (click)
});
texto.addEventListener("input", () => {
  contadorLetras.textContent = texto.value.length + " caracteres";
});
```
- **Qué agregué:** eventos `submit`, `click` e `input`, y validación con mensaje en la página.
- **Por qué:** para que el usuario pueda agregar, marcar y borrar tareas sin recargar.
- **Qué cambió:** la página ya reacciona al usuario y muestra el error en rojo.

## Version 3: con clases y objetos
```js
class Tarea {
  constructor(texto, prioridad) { this.texto = texto; this.prioridad = prioridad; this.hecha = false; }
  alternar() { this.hecha = !this.hecha; }
  descripcion() { return this.texto + " (" + this.prioridad + ")"; }
}
class ListaTareas {
  constructor() { this.items = []; }
  agregar(tarea) { this.items.push(tarea); }
  eliminar(tarea) { this.items = this.items.filter((t) => t !== tarea); }
  pendientes() { return this.items.filter((t) => !t.hecha).length; }
}
```
- **Qué agregué:** las clases `Tarea` y `ListaTareas`, y el buscador.
- **Por qué:** para guardar los datos en objetos y no en el HTML.
- **Qué cambió:** el comportamiento es el mismo, pero el código es más ordenado y se muestra "Pendientes: X de Y".

## Donde uso DOM, eventos y objetos
| Pieza | Línea de mi código | Para qué sirve |
|-------|--------------------|----------------|
| DOM | `document.createElement("li")`, `ul.appendChild(li)` | Crear y mostrar cada tarea |
| Eventos | `formTarea.addEventListener("submit", ...)`, `click` en los botones, `input` en el buscador | Reaccionar al usuario |
| Objetos | `new Tarea(valor, prioridad.value)`, `lista.agregar(...)` | Guardar y manejar los datos |

## Pruebas realizadas
| Acción | Resultado esperado | Resultado obtenido | Cumple |
|--------|--------------------|--------------------|--------|
| Agregar tarea vacía o de 2 letras | Mensaje rojo de error | Mensaje rojo de error | Sí |
| Agregar "Estudiar JS" | Aparece en la lista | Aparece en la lista | Sí |
| Clic en Marcar | Tarea tachada y pendientes baja en 1 | Tachada, "Pendientes: 2 de 3" | Sí |
| Clic en Borrar | La tarea desaparece | La tarea desaparece, "Pendientes: 2 de 2" | Sí |
| Escribir "lab" en el buscador | Solo se ven tareas con "lab" | Se muestra 1 tarea | Sí |

## Por que disene asi mi clase
`Tarea` tiene `texto`, `prioridad` y `hecha` porque son los datos mínimos de una tarea, y los métodos `alternar()` y `descripcion()` porque son lo que una tarea sabe hacer. `ListaTareas` guarda el arreglo `items` con `agregar()`, `eliminar()` y `pendientes()`, para que la lógica no se mezcle con el DOM.
