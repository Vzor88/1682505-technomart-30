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
