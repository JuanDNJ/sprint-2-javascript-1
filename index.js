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
  listNumbers.forEach((element) => {
    const printNumber = () => console.log("Número: ", element);
    printNumber();
  });
};

printNumbers(numbers);

// ----- NIVELL 3 -----
/** Exercici 5
 * Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi
 * un missatge a la consola després d'esperar 3 segons
 */

const timeOut3000 = () =>
  setTimeout(() => {
    console.log("Buenas tardes Luis!");
  }, 3000);

timeOut3000();

// Exercici 1.2: Operador ternari

// NIVELL 1

/** Exercici 1
 * Operador ternari bàsic:
 * Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador
 * ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar
 * 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
 */
const potCounduir = (edat) => {
  return edat >= 18 ? "Pots conduir" : "No pots conduir";
};
let anys = 18;
console.log(`Tinc ${anys} anys puc conduir: `, potCounduir(anys));
anys = 17;
console.log(`Tinc ${anys} anys puc conduir: `, potCounduir(anys));

/** Exercici 2
 * Ús amb operadors de comparació:
 * Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres
 * donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'.
 * Si no, retorna 'num2 és més gran'.
 */

const num1 = 45;
const num2 = 56;
const quinNombresEsMesGran = (num1, num2) => {
  return num1 > num2
    ? `Num 1 ${num1} és més gran`
    : `Num 2 ${num2} és més gran`;
};
console.log(quinNombresEsMesGran(45, 56));

// NIVELL 2

/** Exercici 3
 * Ús enllaçat d'operadors ternaris:
 * Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar
 * si un número és positiu, negatiu o zero.
 *
 */
const numPositiuNegatiuOZero = (num) =>
  num === 0 ? "Cero" : num > 0 ? "Positiu" : "Negatiu";

console.log("El nombre és", numPositiuNegatiuOZero(0));
console.log("El nombre és", numPositiuNegatiuOZero(-1));
console.log("El nombre és", numPositiuNegatiuOZero(1));

/*
 * Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres
 * paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
 */

const trobarMaxim = (a, b, c) => {
  const valorMaxim = a > b ? (a > c ? a : c) : b > c ? b : c;
  return valorMaxim;
};

const maxim = trobarMaxim(34, 25, 86);
console.log('Nombre maxim es: ', maxim);
