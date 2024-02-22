// Exercici 1.1: Arrow functions

/* Exercici 1:
    Conversió de funcions: Tens una funció add que accepta dos paràmetres i 
    retorna la seva suma. Converteix-la en una funció de fletxa. 
    Per exemple: function add(a, b) {return a + b;}.
*/

const add  = (a, b) => {
    return a + b;
}

console.log("Suma de dos numeros: ", add(23, 20));

/** Exercici 2
 * Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada 
 * randomNumber que no necessiti paràmetres i que retorni un número aleatori 
 * entre 0 i 100.
 */

const randomNumber = () => {
    return Math.floor(Math.random() * 100);
}
console.log("Numero aleatorio del 0 al 100: ",randomNumber());