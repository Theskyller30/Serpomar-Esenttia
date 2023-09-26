const openModalre3 = document.querySelector('.hero__ctare3');
const modalre3 = document.querySelector('.modalre3');
const closeModalre3 = document.querySelector('.modalre3__close');

openModalre3.addEventListener('click', (e) => {
    e.preventDefault();
    modalre3.classList.add('modalre3--show');
});

closeModalre3.addEventListener('click', (e) => {
    e.preventDefault();
    modalre3.classList.remove('modalre3--show');
});