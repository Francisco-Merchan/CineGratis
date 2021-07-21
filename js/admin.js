import { navbar, adminHTML } from "./funciones.js";
navbar();
adminHTML();

const saveBtn = document.querySelector('#saveMovies');
let totalMovies = localStorage.getItem("peliculas");
console.log(totalMovies)

class Movies {
  constructor(title, category, img, description) {
    this.title = title;
    this.category = category;
		this.img = img;
		this.description = description;
  }
}

function createMovie () {
const inputName = document.querySelector('#inputName').value;
const categorySelect = document.querySelector('#categorySelect').value;
const inputImg = document.querySelector('#inputImg').value;
const description = document.querySelector('#descriptionInput').value;
  
	const movie = new Movies(inputName, categorySelect, inputImg, description)

	totalMovies.unshift(movie)
	localStorage.setItem("peliculas", JSON.stringify(totalMovies));
}


saveBtn.addEventListener('submit', (e) => {
  e.preventDefault();
    createMovie();
  });