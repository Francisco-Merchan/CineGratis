import { navbar, createInfoPage } from "./funciones.js";
import {createSeccion} from "./comments.js";
createSeccion()




function infopelicula() {
  const arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  const id = window.location.hash.slice(1);
  console.log(id);
  const pelicula = arrayPeliculas.find((pelicula) => pelicula.id == id);
  console.log(pelicula);
  const containerInfo = document.querySelector(".containeer");
  containerInfo.innerHTML = createInfoPage(pelicula);
}

navbar();
infopelicula();
