function Numero(numero) {
    document.getElementById('resultado').value += numero;
}

function resetear() {
    document.getElementById('resultado').value = '';
}

function Operador(operador) {
    const ultimoCaracter = document.getElementById('resultado').value.slice(-1);
       if (['+', '-', '*', '/'].includes(ultimoCaracter)) {
        document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1) + operador;
    } else {
        document.getElementById('resultado').value += operador;
    }
}

function CalcularResultado() {
    const expresion = document.getElementById('resultado').value;
    try {
        const resultado = eval(expresion); // Utiliza la función eval para calcular el resultado de la expresión
        document.getElementById('resultado').value = resultado;
    } catch (error) {
        alert('Error en la expresión');
    }
}
