const openModalope = document.querySelector('.hero__ctaope');
const modalope = document.querySelector('.modalope');
const closeModalope = document.querySelector('.modalope__close');

openModalope.addEventListener('click', (e) => {
    e.preventDefault();
    modalope.classList.add('modalope--show');
});

closeModalope.addEventListener('click', (e) => {
    e.preventDefault();
    modalope.classList.remove('modalope--show');
});