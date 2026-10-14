// Tarea v1: Estructura DOM y selectores
console.log("Versión 1 cargada");
// Tarea v2: Eventos e Interactividad
const formEstudiante = document.querySelector("#formEstudiante");
const nombreEst = document.querySelector("#nombreEst");
const notaEst = document.querySelector("#notaEst");
const listaNotas = document.querySelector("#listaNotas");
const msgError = document.querySelector("#msgError");
const promedio = document.querySelector("#promedio");

let listaDeNotas = [];

nombreEst.addEventListener("input", () => {
    msgError.textContent = "";
});

formEstudiante.addEventListener("submit", (e) => {
    e.preventDefault();
    let valNota = Number(notaEst.value);

    if (nombreEst.value.trim() === "" || isNaN(valNota) || valNota < 0 || valNota > 20) {
        msgError.textContent = "Error: Ingrese un nombre válido y una nota entre 0 y 20.";
        return;
    }

    msgError.textContent = "";
    listaDeNotas.push(valNota);

    const li = document.createElement("li");
    li.textContent = `${nombreEst.value} — Nota: ${valNota.toFixed(2)}`;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnBorrar);
    listaNotas.appendChild(li);

    let suma = listaDeNotas.reduce((acc, curr) => acc + curr, 0);
    promedio.textContent = (suma / listaDeNotas.length).toFixed(2);

    formEstudiante.reset();
});
// Tarea v3: Clases y Objetos
class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    obtenerDetalle() {
        return `${this.nombre} — Nota: ${this.nota.toFixed(2)}`;
    }

    estaAprobado() {
        return this.nota >= 13 ? "Aprobado" : "Desaprobado";
    }
}

class RegistroCurso {
    constructor() {
        this.estudiantes = [];
    }

    agregar(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedio() {
        if (this.estudiantes.length === 0) return 0;
        let suma = this.estudiantes.reduce((acc, curr) => acc + curr.nota, 0);
        return suma / this.estudiantes.length;
    }
}

const curso = new RegistroCurso();
const formEstudiante = document.querySelector("#formEstudiante");
const nombreEst = document.querySelector("#nombreEst");
const notaEst = document.querySelector("#notaEst");
const listaNotas = document.querySelector("#listaNotas");
const msgError = document.querySelector("#msgError");
const promedio = document.querySelector("#promedio");

nombreEst.addEventListener("input", () => {
    msgError.textContent = "";
});

formEstudiante.addEventListener("submit", (e) => {
    e.preventDefault();
    let valNota = Number(notaEst.value);

    if (nombreEst.value.trim() === "" || isNaN(valNota) || valNota < 0 || valNota > 20) {
        msgError.textContent = "Error: Debe colocar un nombre válido y una nota de 0 a 20.";
        return;
    }

    msgError.textContent = "";
    const nuevoEstudiante = new Estudiante(nombreEst.value, valNota);
    curso.agregar(nuevoEstudiante);

    const li = document.createElement("li");
    li.textContent = `${nuevoEstudiante.obtenerDetalle()} [${nuevoEstudiante.estaAprobado()}]`;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnBorrar);
    listaNotas.appendChild(li);

    promedio.textContent = curso.calcularPromedio().toFixed(2);
    formEstudiante.reset();
});