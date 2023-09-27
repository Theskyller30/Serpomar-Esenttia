const openModalope4 = document.querySelector('.hero__ctaope4');
const modalope4 = document.querySelector('.modalope4');
const closeModalope4 = document.querySelector('.modalope4__close');

openModalope4.addEventListener('click', (e) => {
    e.preventDefault();
    modalope4.classList.add('modalope4--show');
});

closeModalope4.addEventListener('click', (e) => {
    e.preventDefault();
    modalope4.classList.remove('modalope4--show');
});