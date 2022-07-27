const modal = document.querySelector('.about__modal-backdrop');
const btnAbout = document.querySelector('.btn-light--about');
const closeModal = document.querySelector('.modal__close-btn');
const btnReturn = document.querySelector('.btn-light--return');

closeModal.addEventListener('click', () => {
  modal.classList.add('is-hidden');
});

btnReturn.addEventListener('click', () => {
  modal.classList.add('is-hidden');
});

btnAbout.addEventListener('click', () => {
  modal.classList.remove('is-hidden');
});
