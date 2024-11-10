// Elementos de la interfaz
const reglas = document.getElementById('reglas');

// Secciones
const seccionAtaques = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const seccionPersonaje = document.getElementById('seleccionar-personaje');

// Mensajes
const seccionMensaje = document.getElementById('mensajes');

// Enemigos
const personajesEnemigos = ["Zuko", "Katara", "Aang", "Toph"];

// Ataques
const ataques = ["Puño", "Patada", "Barrida"];

// Span de personajes
const spanPersonajeJugador = document.getElementById('personaje-jugador');
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');

// Botones de golpes
const botonPunio = document.getElementById('boton-punio');
const botonPatada = document.getElementById('boton-patada');
const botonBarrida = document.getElementById('boton-barrida');

// Span de vidas
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
let vidasJugador = 3;
let vidasEnemigo = 3;


// Seleccionar el contenedor de las reglas y el botón
    const contenedorReglas = document.getElementById('reglas');
    const botonReglas = document.getElementById("boton-reglas");

// Inicia el juego
const iniciarJuego = () => {
    // Ocultar secciones al inicio
    seccionAtaques.style.display = 'none';
    seccionMensaje.style.display = 'none';
    seccionReiniciar.style.display = 'none';

    // Eventos para los ataques
    botonPunio.addEventListener('click', () => ataque('Puño'));
    botonPatada.addEventListener('click', () => ataque('Patada'));
    botonBarrida.addEventListener('click', () => ataque('Barrida'));

}

// Selecciona personaje
const seleccionarPersonajeJugador = (n) => {
    const personajeSeleccionado = personajesEnemigos[n];
    console.log(personajeSeleccionado);
    if (personajeSeleccionado) {
        spanPersonajeJugador.innerHTML = personajeSeleccionado;
        spanPersonajeEnemigo.innerHTML = personajesEnemigos[Math.floor(Math.random() * personajesEnemigos.length)];
        seccionPersonaje.style.display = 'none';
        seccionAtaques.style.display = 'block';
        seccionMensaje.style.display = 'block';
        seccionReiniciar.style.display = 'block';
    } else {
        alert('Por favor selecciona un personaje');
    }
}

// Crear mensaje final
const crearMensajeFinal = (resultado) => {
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado;
    seccionMensaje.appendChild(parrafo);
    seccionMensaje.scrollTop = seccionMensaje.scrollHeight;
}

// Deshabilitar botones al finalizar juego
const deshabilitarBotones = () => {
    botonPunio.disabled = true;
    botonPatada.disabled = true;
    botonBarrida.disabled = true;
}

// Revisar vidas
const revisarVidas = () => {
    if (vidasJugador === 0) {
        crearMensajeFinal('Perdiste');
        deshabilitarBotones();
    } else if (vidasEnemigo === 0) {
        crearMensajeFinal('Ganaste 🎉');
        deshabilitarBotones();
    }
}

// Imprime y realiza ataques
const ataque = (ataqueJugador) => {
    let ataqueEnemigo = AtaqueAleatorio();
    crearMensaje(ataqueJugador, ataqueEnemigo);
}

// Creación de mensaje de batalla, ataques y resultado
const crearMensaje = (ataqueJugador, ataqueEnemigo) => {
    let parrafo = document.createElement('p');
    let resultado = combate(ataqueJugador, ataqueEnemigo);
    parrafo.innerHTML = "Tu personaje atacó con ${ataqueJugador}, el personaje del enemigo atacó con ${ataqueEnemigo} - ${resultado}";
    seccionMensaje.appendChild(parrafo);

    seccionMensaje.scrollTop = seccionMensaje.scrollHeight;

    revisarVidas();
}

// Ataque aleatorio
const AtaqueAleatorio = () => {
    return ataques[Math.floor(Math.random() * ataques.length)];
}

// Combate
const combate = (ataqueJugador, ataqueEnemigo) => {
    const winCase = {
        "Puño": "Barrida",
        "Patada": "Puño",
        "Barrida": "Patada"
    };
    if (winCase[ataqueJugador] === ataqueEnemigo) {
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        return "Ganaste 🎉";
    } else if (winCase[ataqueEnemigo] === ataqueJugador) {
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
        return "Perdiste";
    } else {
        return "Empate";
    }
}

// Renderizar reglas
const renderizarReglas = () => {
    

    // Alternar la clase 'activo' en el botón
    botonReglas.classList.toggle('activo');

    // Si el botón tiene la clase 'activo', mostrar las reglas
    if (botonReglas.classList.contains('activo')) {
        contenedorReglas.innerHTML = `
            <div class="reglas">
                <div>
                    <h2>Reglas del juego</h2>
                    <ul>
                        <li>Selecciona un personaje</li>
                        <li>Cada personaje tiene 3 vidas</li>
                        <li>Selecciona un ataque</li>
                        <li>Espera el resultado</li>
                        <li>El personaje que gane 3 veces gana la partida</li>
                    </ul>
                </div>
                <div>
                    <h2>Reglas batalla</h2>
                    <ul>
                        <li>Puño gana a Barrida</li>
                        <li>Patada gana a Puño</li>
                        <li>Barrida gana a Patada</li>
                    </ul>
                </div>
            </div>
        `;
        contenedorReglas.classList.remove('hidden'); 
    } else {
       
        contenedorReglas.innerHTML = "";
        contenedorReglas.classList.add('hidden'); 
    }
};



// Reiniciar juego
const reiniciar = () => {
    location.reload();
}

// Iniciar juego al cargar la página
window.addEventListener('DOMContentLoaded', iniciarJuego);