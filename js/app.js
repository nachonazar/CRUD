import Juego from "./classJuego.js";
//funciones
const abrirModal = () => {
  const modalJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
  modalJuego.show();
};

const crearJuego = () => {
  //todo: tomar los datos del formulario y validarlos
  //con los datos voy a crear un objeto juego
  const juegoNuevo = new Juego("Darth", "Vader", "3544664", "", "");
  console.log(juegoNuevo);
  //guardar el juego en un array
};

//declarar variables
const btnAgregar = document.getElementById("btnAgregar");
const formularioJuego = document.querySelector("form");
const coleccion = [];

//agrego los manejadores de eventos
btnAgregar.addEventListener("click", abrirModal);
formularioJuego.addEventListener("submit", (e) => {
  e.preventDefault();
  //aqui voy a crear un contacto
  crearJuego();
  //algun dia aqui voy a editar un contacto
});
