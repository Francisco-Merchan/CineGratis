const inputName = document.querySelector('#inputName') 
const inputEmail = document.querySelector('#inputEmail') 
const inputMsg = document.querySelector('#inputMsg') 
const form = document.querySelector('#contactForm')
const sendBtn = document.querySelector('#sendBtn')
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListener();
function eventListener() {
  document.addEventListener('DOMContentLoaded', startApp);
  //Campos del formulario
  inputName.addEventListener('blur', validateForm);
  inputEmail.addEventListener('blur', validateForm);
  inputMsg.addEventListener('blur', validateForm);

  //Añadir submit
  sendBtn.addEventListener('submit', sendMessage);
  // resetBtn.addEventListener('click', resetForm);
}


function startApp() {
  sendBtn.disabled = "true";
  sendBtn.classList.add('opacity-50', 'cursor-not-allowed');

}

function validateForm(e) {
  const error = document.querySelector('p.error');

  if(e.target.value.length > 0) {
    if (error) {
      error.remove();
    }
    e.target.classList.remove('border-red-500');
    e.target.classList.add('border-green-500');
    //Happy path
  } else {
    //Añadir error
    e.target.classList.add('border', 'border-red-500');
    showError('Todos los campos son obligatorios');
  }

  if(e.target.type === 'email') {
    if(emailRegex.test(e.target.value)) {
      if(error) {
        error.remove();
      }
      e.target.classList.remove('border-red-500');
      e.target.classList.add('border-green-500');
    } else {
      e.target.classList.remove('border-green-500');
      e.target.classList.add('border-red-500');
      showError('El email no es válido');
    }
  }

  if(e.target.type === 'text') {
    if(emailRegex.test(e.target.value)) {
      if(error) {
        error.remove();
      }
      e.target.classList.remove('border-red-500');
      e.target.classList.add('border-green-500');
    } else {
      e.target.classList.remove('border-green-500');
      e.target.classList.add('border-red-500');
      showError('El email no es válido');
    }
  }

  if(emailRegex.test(inputEmail.value) && inputEmail.value !== '' && inputName.value !== '' && inputMsg.value !== '') {
    sendBtn.disabled = "false";
    sendBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  }

}

function showError(msg) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = msg;
  errorMessage.classList.add('border', 'border-red-500', 'background-red-100', 'p-3', 'mt-5', 'text-red-500', 'text-center', 'error');
  const errors = document.querySelectorAll('.error');
  if(errors.length === 0) {
    form.append(errorMessage);
  }
}

function sendMessage(e) {
  e.preventDefault();
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';
  setTimeout(() => {
    spinner.style.display = 'none';
    const successMsg = document.createElement('p');
    successMsg.textContent = 'Mensaje enviado exitosamente';
    successMsg.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
    form.insertBefore(successMsg, spinner);
    setTimeout(() => {
      successMsg.remove();
      resetForm();
    }, 5000)
  }, 3000)
}


function resetForm() {
  form.reset();
  startApp();
}