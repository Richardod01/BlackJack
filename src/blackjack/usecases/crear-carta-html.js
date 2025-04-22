/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de carta retornada
 */

export const crearCartaHTML = (carta)=>{
    if(!carta) throw new Error('La carta es requerida')
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");

    return imgCarta
}