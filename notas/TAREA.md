# Tarea: Mi componente interactivo

## Componente elegido
Registro de notas de estudiantes que permite ingresar el nombre y la nota, valida los datos, calcula el promedio y permite eliminar registros mediante objetos.

## Version 1: solo DOM
Estructura base del formulario con HTML y selectores del DOM.
## Version 2: con eventos
Se agregó validación y eventos de envío y eliminación.
## Version 3: con clases y objetos
Versión final orientada a objetos con la clase Estudiante y RegistroCurso.
## Donde uso DOM, eventos y objetos
| Componente | Código |
| :--- | :--- |
| **DOM** | `document.querySelector` |
| **Eventos** | `addEventListener` |
| **Objetos** | `class Estudiante` |

## Pruebas realizadas
| Acción | Resultado esperado | Resultado obtenido | Cumple |
| :--- | :--- | :--- | :--- |
| Enviar vacío | Error | Error | Sí |

## Por qué diseñé así mi clase
Para encapsular los datos y métodos del estudiante de forma modular.