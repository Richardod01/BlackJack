/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta del deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
      throw "No existe el deck o no hay mas cartas disponibles";
    }
    const carta = deck.pop();
    return carta;
  };