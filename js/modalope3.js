const openModalope3 = document.querySelector('.hero__ctaope3');
const modalope3 = document.querySelector('.modalope3');
const closeModalope3 = document.querySelector('.modalope3__close');

openModalope3.addEventListener('click', (e) => {
    e.preventDefault();
    modalope3.classList.add('modalope3--show');
});

closeModalope3.addEventListener('click', (e) => {
    e.preventDefault();
    modalope3.classList.remove('modalope3--show');
});