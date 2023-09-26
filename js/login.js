const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Verificar si el correo y la contraseña coinciden con los valores permitidos
    if (email === 'HBS@serpomar.com' && password === '123') {
        // Usuario válido, redirige a la página de inicio
        alert('Bienvenido HBS');
        localStorage.setItem('login_success', JSON.stringify({ email: email }));
        window.location.href = 'index.html';
    } else {
        // Usuario no válido
        alert('Usuario y/o contraseña incorrectos!');
    }
});