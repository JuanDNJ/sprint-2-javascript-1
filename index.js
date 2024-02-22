// Exercici 1.1: Arrow functions

// ----- NIVELL 1 -----

/* Exercici 1:
    Conversió de funcions: Tens una funció add que accepta dos paràmetres i 
    retorna la seva suma. Converteix-la en una funció de fletxa. 
    Per exemple: function add(a, b) {return a + b;}.
*/

const add  = (a, b) => {
    return a + b;
}

console.log("Suma de dos números: ", add(23, 20));

/** Exercici 2
 * Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada 
 * randomNumber que no necessiti paràmetres i que retorni un número aleatori 
 * entre 0 i 100.
 */

const randomNumber = () => {
    return Math.floor(Math.random() * 100);
}
console.log("Número aleatorio del 0 al 100: ",randomNumber());

/** Exercici 3
 * Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui
 * una propietat name i una funció greet que utilitzi una funció de fletxa.
 * La funció ha d'imprimir una salutació que inclogui el nom de la persona. 
 * Per exemple: console.log(Hola, ${this.name});.
*/
class Person {
    name = "Juan Valdivia";

    greet() {
        const printName = () => console.log(`Buenos días ${this.name}`);
        printName();
    }
}

const person = new Person();
person.greet()



