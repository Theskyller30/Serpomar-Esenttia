const openModalpor3 = document.querySelector('.hero__ctapor3');
const modalpor3 = document.querySelector('.modalpor3');
const closeModalpor3 = document.querySelector('.modalpor3__close');

openModalpor3.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor3.classList.add('modalpor3--show');
});

closeModalpor3.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor3.classList.remove('modalpor3--show');
});