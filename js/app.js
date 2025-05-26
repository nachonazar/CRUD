import Juego from "./classJuego.js";
//funciones
const abrirModal = () => {
  const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
  modalJuego.show();
};

const crearJuego = () => {
  //todo: tomar los datos del formulario y validarlos
  //con los datos voy a crear un objeto juego
  const juegoNuevo = new Juego(
    inputNombre.value,
    inputGénero.value,
    inputPlataforma.value,
    inputDesarrollador.value,
    inputImagen.value,
    inputDescripción.value
  );
  //guardar el juego en un array
  coleccion.push(juegoNuevo);
  limpiarFormulario();
};

const limpiarFormulario = () => {
  formularioJuego.reset();
};

//declarar variables
const btnAgregar = document.getElementById("btnAgregar");
const formularioJuego = document.querySelector("form");
const inputNombre = document.querySelector("#nombre");
const inputGénero = document.querySelector("#género");
const inputPlataforma = document.querySelector("#plataforma");
const inputDesarrollador = document.querySelector("#desarrollador");
const inputImagen = document.querySelector("#imagen");
const inputDescripción = document.querySelector("#descripción");
const coleccion = [];

//agrego los manejadores de eventos
btnAgregar.addEventListener("click", abrirModal);
formularioJuego.addEventListener("submit", (e) => {
  e.preventDefault();
  //aqui voy a crear un contacto
  crearJuego();
  //algun dia aqui voy a editar un contacto
});
