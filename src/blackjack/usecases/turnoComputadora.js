import { pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} Elemento  elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora  elemento html para mostrar las cartas
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if(!puntosMinimos) throw new Error('Puntos requeridos');
    if(!puntosHTML) throw new Error('Argumentos HTML son necesarios');
    if(!deck) throw new Error('El deck es necesario');

    let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta)
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};