const openModalinde = document.querySelector('.hero__ctainde');
const modalinde = document.querySelector('.modalinde');
const closeModalinde = document.querySelector('.modalinde__close');

openModalinde.addEventListener('click', (e) => {
    e.preventDefault();
    modalinde.classList.add('modalinde--show');
});

closeModalinde.addEventListener('click', (e) => {
    e.preventDefault();
    modalinde.classList.remove('modalinde--show');
});