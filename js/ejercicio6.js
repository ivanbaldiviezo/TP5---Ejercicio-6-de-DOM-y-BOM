let temporizador;
let tiempoRestante = 0;
let enEjecucion = false;

function iniciarTemporizador() {
    if (!enEjecucion) {
        const minutosIngresados = parseInt(document.getElementById('minutos').value, 10);
        if (!isNaN(minutosIngresados) && minutosIngresados > 0) {
            tiempoRestante = minutosIngresados * 60; // Convertir minutos a segundos
            actualizarTemporizador();
            temporizador = setInterval(decrementarTiempo, 1000);
            enEjecucion = true;
        } else {
            alert('Ingrese un tiempo válido en minutos.');
        }
    }
}

function pausarTemporizador() {
    clearInterval(temporizador);
    enEjecucion = false;
}

function resetearTemporizador() {
    clearInterval(temporizador);
    tiempoRestante = 0;
    actualizarTemporizador();
    enEjecucion = false;
}

function decrementarTiempo() {
    if (tiempoRestante > 0) {
        tiempoRestante--;
        actualizarTemporizador();
    } else {
        alert('¡Tiempo agotado!');
        resetearTemporizador();
    }
}

function actualizarTemporizador() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundosRestantes = tiempoRestante % 60;
    const tiempoFormateado = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    document.getElementById('temporizador').innerText = tiempoFormateado;
}

actualizarTemporizador();