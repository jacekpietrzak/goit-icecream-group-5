const btnMilk = document.querySelector('.hero__milk-button');
const descMilk = document.querySelector('.hero__milk-description-long');

btnMilk.addEventListener('click', () => {
  descMilk.classList.toggle('is-hidden');
});
