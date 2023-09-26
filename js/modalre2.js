const openModalre2 = document.querySelector('.hero__ctare2');
const modalre2 = document.querySelector('.modalre2');
const closeModalre2 = document.querySelector('.modalre2__close');

openModalre2.addEventListener('click', (e) => {
    e.preventDefault();
    modalre2.classList.add('modalre2--show');
});

closeModalre2.addEventListener('click', (e) => {
    e.preventDefault();
    modalre2.classList.remove('modalre2--show');
});