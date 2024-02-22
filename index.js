// Exercici 1.1: Arrow functions

// ----- NIVELL 1 -----

/* Exercici 1:
    Conversió de funcions: Tens una funció add que accepta dos paràmetres i 
    retorna la seva suma. Converteix-la en una funció de fletxa. 
    Per exemple: function add(a, b) {return a + b;}.
*/

const add = (a, b) => {
  return a + b;
};

console.log("Suma de dos números: ", add(23, 20));

/** Exercici 2
 * Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada
 * randomNumber que no necessiti paràmetres i que retorni un número aleatori
 * entre 0 i 100.
 */

const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};
console.log("Número aleatorio del 0 al 100: ", randomNumber());

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
person.greet();

// ----- NIVELL 2 -----

/** Exercici 4
 * Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers
 * que accepti un array de números i utilitzi un loop for per imprimir cada
 * número a la consola utilitzant una funció de fletxa.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printNumbers = (listNumbers) => {
    listNumbers.forEach(element => {
        const printNumber = () => console.log("Número: ", element)
        printNumber();
    });
}

printNumbers(numbers)

// ----- NIVELL 3 -----
/** Exercici 5 
 * Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi
 * un missatge a la consola després d'esperar 3 segons
 */

const timeOut3000 = () =>  setTimeout(() =>{
    console.log("Buenas tardes Luis!")
}, 3000)

timeOut3000();

// Exercici 1.2: Operador ternari

/** Exercici 1
 * Operador ternari bàsic: 
 * Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador
 * ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 
 * 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
 */
const potCounduir = (edat) => {
    return edat >= 18 ? 'Pots conduir' : "No pots conduir";
}
let anys = 18;
console.log(`Tinc ${anys} anys puc conduir: `, potCounduir(anys));
anys = 17;
console.log(`Tinc ${anys} anys puc conduir: `, potCounduir(anys))