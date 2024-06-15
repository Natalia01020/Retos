function generarContrasena() {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var longitud = 6;
    var contrasena = '';

    for (var i = 0; i < longitud; i++) {
        var Aleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(Aleatorio);
    }

    document.getElementById('result').textContent = 'Contraseña segura: ' + contrasena;
}
