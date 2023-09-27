const openModalope6 = document.querySelector('.hero__ctaope6');
const modalope6 = document.querySelector('.modalope6');
const closeModalope6 = document.querySelector('.modalope6__close');

openModalope6.addEventListener('click', (e) => {
    e.preventDefault();
    modalope6.classList.add('modalope6--show');
});

closeModalope6.addEventListener('click', (e) => {
    e.preventDefault();
    modalope6.classList.remove('modalope6--show');
});