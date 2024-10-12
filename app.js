function generarContrasena() {
    const longitud = parseInt(document.getElementById('longitud').value);
    const incluirMayusculas = document.getElementById('mayusculas').checked;
    const incluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirEspeciales = document.getElementById('especiales').checked;

    // Validar longitud
    if (isNaN(longitud) || longitud < 4 || longitud > 20) {
        alert("Por favor, ingresa una longitud entre 4 y 20.");
        return;
    }

    let caracteres = '';
    if (incluirMayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (incluirNumeros) caracteres += '0123456789';
    if (incluirEspeciales) caracteres += '!@#$%^&*()';

    if (caracteres.length === 0) {
        alert("Debes seleccionar al menos un tipo de carácter.");
        return;
    }

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }

    document.getElementById('resultado').textContent = contrasena;
    evaluarFortaleza(contrasena);
}

function evaluarFortaleza(contrasena) {
    let fortaleza = "Débil";
    if (contrasena.length >= 12 && /[A-Z]/.test(contrasena) && /[a-z]/.test(contrasena) && /\d/.test(contrasena) && /[!@#$%^&*()]/.test(contrasena)) {
        fortaleza = "Fuerte";
    } else if (contrasena.length >= 8) {
        fortaleza = "Media";
    }
    document.getElementById('fortaleza').textContent = fortaleza;
}

function copiarContrasena() {
    const resultado = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Contraseña copiada al portapapeles!");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}
