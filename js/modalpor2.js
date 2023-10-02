const openModalpor2 = document.querySelector('.hero__ctapor2');
const modalpor2 = document.querySelector('.modalpor2');
const closeModalpor2 = document.querySelector('.modalpor2__close');

openModalpor2.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor2.classList.add('modalpor2--show');
});

closeModalpor2.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor2.classList.remove('modalpor2--show');
});