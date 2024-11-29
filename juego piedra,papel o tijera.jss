/* script.js */
class Usuario {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const usuarios = [];
let usuarioActual = null;

function showRegisterForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        usuarios.push(new Usuario(username, email, password));
        alert('Usuario registrado con éxito');
        showLoginForm();
    } else {
        alert('Por favor, complete todos los campos');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const usuario = usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
        usuarioActual = usuario;
        document.getElementById('welcome-user').innerText = `Bienvenido, ${usuario.username}`;
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('game-container').classList.remove('hidden');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function play(choice) {
    const options = ['piedra', 'papel', 'tijeras'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let result = '';

    if (choice === computerChoice) {
        result = 'Es un empate';
    } else if ((choice === 'piedra' && computerChoice === 'tijeras') ||
               (choice === 'papel' && computerChoice === 'piedra') ||
               (choice === 'tijeras' && computerChoice === 'papel')) {
        result = 'Ganaste';
    } else {
        result = 'Perdiste';
    }

    document.getElementById('game-result').innerText = `Tu elección: ${choice}\nElección de la computadora: ${computerChoice}\n${result}`;
}
