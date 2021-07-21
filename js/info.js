import { navbar, createInfoPage } from "./funciones.js";

function infopelicula() {
  const arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  const id = window.location.hash.slice(1);
  const pelicula = arrayPeliculas.find((pelicula) => pelicula.id == id);
  document.querySelector(".titleMovie").textContent = `${pelicula.name}`;
  const containerInfo = document.querySelector(".containeer");
  containerInfo.innerHTML = createInfoPage(pelicula);
}

navbar();
infopelicula();
