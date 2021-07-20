import { navbar, adminHTML } from "./funciones.js";
navbar();
adminHTML();

const saveBtn = document.querySelector('#saveMovies');
let totalMovies = JSON.parse(localStorage.getItem("peliculas"));


class Movies {
  constructor(title, category, img, description) {
    this.title = title;
    this.category = category;
		this.img = img;
		this.description = description;
    this.id = Date.now()
  }
}



 

saveBtn.addEventListener('click', (e) => {
e.preventDefault();
const inputName = document.querySelector('#inputName').value;
const categorySelect = document.querySelector('#categorySelect').value;
const inputImg = document.querySelector('#inputImg').value;
const description = document.querySelector('#descriptionInput').value;
  
	const movie = new Movies(inputName, categorySelect, inputImg, description)
  console.log(inputName)
    console.log(categorySelect)
      console.log(inputImg)
        console.log(description)
        console.log(totalMovies)
  totalMovies.unshift(movie)
	localStorage.setItem("peliculas", JSON.stringify(totalMovies));
  });
	
