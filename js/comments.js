const GET_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
const commentSection = document.querySelector('.commentSection')
const commentContainer = document.querySelector('#commentContainer')
function createSeccion(section){
  
  commentSection.innerHTML = `<section class="bg-secondary pt-2">
    <div class="container">
        <div class="row">
            <div id="commentContainer" class="col-sm-5 col-md-6 col-12 pb-4">
              <div id="comentarios"></div>  
            </div>
            <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div class="form-group">
                        <h4>Leave a comment</h4> <label for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" class="form-control" style="background-color: #F0F3F5;"></textarea>
                    </div>
                    <div class="form-group"> <label for="name">Name</label> <input type="text" name="name" id="fullname" class="form-control"> </div>
                    <div class="form-group"> <label for="email">Email</label> <input type="text" name="email" id="email" class="form-control"> </div>
                    <div class="form-group">
                        <p class="text-secondary">If you have a <a href="#" class="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                    </div>
                    <div class="form-inline"> <input type="checkbox" name="check" id="checkbx" class="mr-1"> <label for="subscribe">Subscribe me to the newlettter</label> </div>
                    <div class="form-group"> <button type="button" id="post" class="btn">Post Comment</button> </div>
                </form>
            </div>`

}
createSeccion(commentSection)

eventListener();
function eventListener() {
	commentSection.addEventListener('DOMContentLoaded', createSeccion);

}

const  getJSON = (url, errorMsg = 'mensaje de error') =>{
    return fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error(errorMsg);
      }
        return response.json();
    })
}

const getComments = async () => {
  try {
    
    const data = await getJSON(`${GET_COMMENTS_URL}`)
    console.log(data)
    showComments(data.slice(0, 5))
  } catch (error) {
    console.log(error)
  }
}

getComments()


const showComments = (data) =>{
    let commentsList = []
    const comentarios = document.querySelector('#comentarios');
    data.forEach((comment) => {
        comentarios.innerHTML += `<div class="comment mt-4 text-justify float-left"> <img src="./assets/spiderman.jfif" alt="" class="rounded-circle" width="40" height="40">
                    <h4>${comment.name}</h4> <span>- 20 October, 2018</span> <br>
                    <p>${comment.body}</p>
                </div>`;
        commentsList.push(comentarios)
    });
 
    commentContainer.append(comentarios)
}