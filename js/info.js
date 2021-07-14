import { navbar } from "./app.js";
import { createInfoPage } from "./funciones.js";

(function () {
  const arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  const id = window.location.hash(1);
  console.log(id);
  const pelicula = arrayPeliculas.filter((pelicula) => pelicula.id == id);
  const containerInfo = document.querySelector(".containeer");
  console.log(pelicula);
  containerInfo.innerHTML = createInfoPage(pelicula);
})();
