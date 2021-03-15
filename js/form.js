const formLink = document.querySelector('.button-link-form');
const formPopup = document.querySelector('.modal-form');
const formClose = formPopup.querySelector('.button-close');
const formForm = formPopup.querySelector('.form-user');
const formLogin = formPopup.querySelector('.form-login');
const formEmail = formPopup.querySelector('.form-email');
const formLetter = formPopup.querySelector('.letter-textarea');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener('click',function (evt) {
  evt.preventDefault();
  formPopup.classList.add('modal-show');

  if (storage) {
    formLogin.value = storage;
    formEmail.focus();
  } else {
    formLogin.focus();
  }
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.remove('modal-show');
  formPopup.classList.remove('modal-error');
});

formForm.addEventListener('submit', function (evt) {
  if (!formLogin.value || !formEmail.value || !formLetter.value){
    evt.preventDefault();
    formPopup.classList.add('modal-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('login', formLogin.value);
    }
  }
});

window.addEventListener('keydown',function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      formPopup.classList.remove('modal-show');
      formPopup.classList.remove('modal-error');
    }
  }
});


