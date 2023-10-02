const openModalpor = document.querySelector('.hero__ctapor');
const modalpor = document.querySelector('.modalpor');
const closeModalpor = document.querySelector('.modalpor__close');

openModalpor.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor.classList.add('modalpor--show');
});

closeModalpor.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor.classList.remove('modalpor--show');
});