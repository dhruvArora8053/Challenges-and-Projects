'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeMOdal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const btn of btnsOpenModal) {
  btn.addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeMOdal);
overlay.addEventListener('click', closeMOdal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeMOdal();
});
