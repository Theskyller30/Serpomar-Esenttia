const openModalre1 = document.querySelector('.hero__ctare1');
const modalre1 = document.querySelector('.modalre1');
const closeModalre1 = document.querySelector('.modalre1__close');

openModalre1.addEventListener('click', (e) => {
    e.preventDefault();
    modalre1.classList.add('modalre1--show');
});

closeModalre1.addEventListener('click', (e) => {
    e.preventDefault();
    modalre1.classList.remove('modalre1--show');
});