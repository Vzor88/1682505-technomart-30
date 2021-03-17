if (document.querySelector('.modal-form')) {
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
}

if(document.querySelector('.modal-map')) {
  const mapLink = document.querySelector('.contacts-small-map');
  const mapPopup = document.querySelector('.modal-map');
  const mapClose = mapPopup.querySelector('.button-close-form');

  mapLink.addEventListener('click',function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown',function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        mapPopup.classList.remove('modal-show');
      }
    }
  });
}

if(document.querySelector('.modal-buy')) {
  const buyLinks = document.querySelectorAll('.button-buy');
  const buyPopup = document.querySelector('.modal-buy');
  const buyClose = buyPopup.querySelector('.button-close-form');
  const continueClose = buyPopup.querySelector('.continue-buy');

  for(let buyLink of buyLinks) {
    buyLink.addEventListener('click', function () {
      buyPopup.classList.add('modal-show');
    });
  }

  buyClose.addEventListener('click', function () {
    buyPopup.classList.remove('modal-show');
  });

  continueClose.addEventListener('click', function () {
    buyPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown',function (evt) {
    if (evt.keyCode === 27) {
      if (buyPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        buyPopup.classList.remove('modal-show');
      }
    }
  });
}
