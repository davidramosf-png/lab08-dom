# Auditoría UX de mi lista de tareas

Antes de cambiar el diseño, revisé la lista de tareas y anoté lo que puede confundir o dificultar su uso.

## Problemas que encontré

| Heurística | Problema que encontré | Gravedad | Mejora que propongo |
|---|---|---|---|
| Visibilidad del estado | Al completar o eliminar una tarea no siempre queda claro qué ocurrió. | Media | Mostrar un mensaje breve cuando se agrega, completa o elimina una tarea. |
| Coincidencia con el mundo real | El botón «Marcar» no explica claramente qué pasará con la tarea. | Media | Usar «Completar» y «Reabrir» según el estado de la tarea. |
| Control y libertad | Al eliminar una tarea, se borra de inmediato y no hay confirmación. | Media | Pedir confirmación antes de eliminarla. |
| Prevención de errores | El mínimo de caracteres se informa recién después de intentar agregar la tarea. | Media | Indicar junto al campo que se necesitan al menos 3 caracteres y conservar la validación. |
| Reconocer, no recordar | Los nombres de los campos aparecen como texto de ejemplo y desaparecen al escribir. | Baja | Agregar etiquetas visibles para los campos de tarea y búsqueda. |
| Accesibilidad | Los controles se ven pequeños y no destacan mucho al navegar con teclado. | Media | Agrandar los controles y hacer visible el foco del teclado. |

## Leyes de usabilidad que aplicaré

| Ley | Cambio que aplicaré | Cómo ayuda |
|---|---|---|
| Fitts | Haré los botones y campos más grandes y fáciles de pulsar. | Reduce el esfuerzo para seleccionar cada control. |
| Hick | Mantendré la acción principal de agregar clara y dejaré la prioridad como una opción sencilla. | Ayuda a decidir más rápido qué hacer primero. |
| Miller | Separaré el formulario, la búsqueda y la lista en bloques con títulos. | Hace más fácil ubicar la información. |

## Resultado inicial de Lighthouse

Antes del rediseño, Lighthouse dio **77 puntos en Accesibilidad**. Al terminar, volveré a ejecutar la revisión para comparar el resultado.

## Resultado después del rediseño

Lighthouse dio **98 puntos en Accesibilidad**, frente a los 77 puntos iniciales.

## Pruebas manuales

- Agregué una tarea y apareció en la lista.
- La completé y el contador cambió a 0 de 1.
- La reabrí y el contador volvió a 1 de 1.
- Probé cancelar la eliminación y la tarea se conservó.
- Confirmé la eliminación y la tarea desapareció; el contador quedó en 0 de 0.

## Capturas de las pruebas

- [Tarea agregada](capturas/tarea-agregada.png)
- [Tarea completada](capturas/tarea-completada.png)
- [Tarea reabierta](capturas/tarea-reabierta.png)
- [Confirmación antes de eliminar](capturas/confirmar-eliminacion.png)
- [Tarea eliminada](capturas/tarea-eliminada.png)
- [Lighthouse antes del rediseño: 77](capturas/lighthouse-antes-77.png)
- [Lighthouse después del rediseño: 98](capturas/lighthouse-despues-98.png)
