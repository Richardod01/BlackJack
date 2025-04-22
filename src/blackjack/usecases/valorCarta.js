/**
 * 
 * @param {String} carta 
 * @returns {Number} Retorna el valor de la carta
 */

// pedirCarta();
export const valorCarta = (carta) => {
    if(!carta) throw new Error('La carta no Existe')
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };