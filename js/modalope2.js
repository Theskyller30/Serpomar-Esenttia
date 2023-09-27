const openModalope2 = document.querySelector('.hero__ctaope2');
const modalope2 = document.querySelector('.modalope2');
const closeModalope2 = document.querySelector('.modalope2__close');

openModalope2.addEventListener('click', (e) => {
    e.preventDefault();
    modalope2.classList.add('modalope2--show');
});

closeModalope2.addEventListener('click', (e) => {
    e.preventDefault();
    modalope2.classList.remove('modalope2--show');
});