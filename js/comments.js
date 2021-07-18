const GET_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'
const commentSection = document.querySelector('.commentSection')

function createSeccion(){
  commentSection.innerHTML = `<section>
    <div class="container">
        <div class="row">
            <div id="comentarios" class="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
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
createSeccion()

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
    const data = await Promise.all([
     getJSON(`${GET_COMMENTS_URL}`)
    ])
    showComments(data)
  } catch (error) {
    console.log(error)
  }
}

getComments()


const showComments = (data) =>{
    let commentsList = []
/*     console.log(data[0].slice(0,5).map(comment => comment.email)); */
    data.forEach((comment) => {
        const commentContainer = document.querySelector('#comentarios');
     /*    commentContainer.classList.add('col-sm-5', 'col-md-6', 'col-12', 'pb-4') */
        commentContainer.innerHTML= `<div class="comment mt-4 text-justify float-left"> <img src="./assets/spiderman.png" alt="" class="rounded-circle" width="40" height="40">
                    <h4>${comment[1].name}</h4> <span>- 20 October, 2018</span> <br>
                    <p>${comment[2].body}</p>
                </div>
                <div class="text-justify darker mt-4 float-right"> <img src="./assets/spiderman.png" alt="" class="rounded-circle" width="40" height="40">
                    <h4>${comment[2].name}</h4> <span>- 20 October, 2018</span> <br>
                    <p>${comment[2].body}</p>
                </div>
                <div class="comment mt-4 text-justify"> <img src="./assets/spiderman.png" alt="" class="rounded-circle" width="40" height="40">
                    <h4>${comment[3].name}</h4> <span>- 20 October, 2018</span> <br>
                    <p>${comment[2].body}</p>
                </div>
                <div class="darker mt-4 text-justify"> <img src="./assets/spiderman.png" alt="" class="rounded-circle" width="40" height="40">
                    <h4>${comment[4].name}</h4> <span>- 20 October, 2018</span> <br>
                    <p>${comment[2].body}</p>
                </div>`;
        commentsList.push(commentContainer)
    });
    commentSection.append(commentsList)

}