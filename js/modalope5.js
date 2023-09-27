const openModalope5 = document.querySelector('.hero__ctaope5');
const modalope5 = document.querySelector('.modalope5');
const closeModalope5 = document.querySelector('.modalope5__close');

openModalope5.addEventListener('click', (e) => {
    e.preventDefault();
    modalope5.classList.add('modalope5--show');
});

closeModalope5.addEventListener('click', (e) => {
    e.preventDefault();
    modalope5.classList.remove('modalope5--show');
});