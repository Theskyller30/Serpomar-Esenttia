const openModalpor4 = document.querySelector('.hero__ctapor4');
const modalpor4 = document.querySelector('.modalpor4');
const closeModalpor4 = document.querySelector('.modalpor4__close');

openModalpor4.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor4.classList.add('modalpor4--show');
});

closeModalpor4.addEventListener('click', (e) => {
    e.preventDefault();
    modalpor4.classList.remove('modalpor4--show');
});