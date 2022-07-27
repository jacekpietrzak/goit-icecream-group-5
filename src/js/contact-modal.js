const contactmodal = document.querySelector('.contacts__modal-backdrop');
const btnLocation = document.querySelector('.btn-location');

contactmodal.addEventListener('click', () => {
  contactmodal.classList.add('is-hidden');
});

btnLocation.addEventListener('click', () => {
  contactmodal.classList.remove('is-hidden');
});
