const buyLinks = document.querySelectorAll('.button-buy');
const buyPopup = document.querySelector('.modal-buy');
const buyClose = buyPopup.querySelector('.button-close-form');

for( let buyLink of buyLinks) {
  buyLink.addEventListener('click', function () {
    buyPopup.classList.add('modal-show');
  });
}
  buyClose.addEventListener('click', function (evt) {
    evt.preventDefault();
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

