// ---> Exercici 1.1: Arrow functions

//  NIVELL 1

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

//  NIVELL 2

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

//  NIVELL 3
/** Exercici 5
 * Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi
 * un missatge a la consola després d'esperar 3 segons
 */

const timeOut3000 = () =>
  setTimeout(() => {
    console.log("Buenas tardes Luis!");
  }, 3000);

timeOut3000();

// ---> Exercici 1.2: Operador ternari

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
console.log("Nombre maxim es: ", maxim);

// NIVELL 3

/** Exercici 4
 * Operador ternari dins un bucle:
 * Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle
 * per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar
 * si cada número és parell o imparell.
 */
const listNumbers = [23, 32, 45, 55, 66, 100, 0, 2, 43];
const parOImpar = (numbers) => {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(`El nombre ${number} és parell`);
    } else {
      console.log(`El nombre ${number} és imparell`);
    }
  });
};
parOImpar(listNumbers);

// ---> Exercici 1.3: Callbacks

// NIVELL 1

/** Exercici 1
 * Callback bàsic:
 * Escriu una funció anomenada processar que accepti dos paràmetres:
 * un nombre i una funció de callback. La funció processar ha d'invocar
 * la funció de callback, passant el nombre com a paràmetre.
 * */

const processar = (nombre, callback) => {
  return callback(nombre);
};
processar(12, (nombre) => {
  console.log("El nombre es " + nombre);
});

/** Exercici 2
 * Callbacks amb operacions matemàtiques: Escriu una funció calculadora
 * que accepti tres paràmetres: dos nombres i una funció de callback.
 * La funció calculadora ha d'invocar la funció de callback amb els dos
 * nombres com a paràmetres. Després, crida calculadora amb una funció
 * que faci la suma dels dos nombres.
 * */

const calculadora = (nombre1, nombre2, callback) => {
  return callback(nombre1, nombre2);
};

calculadora(23, 45, (nombre1, nombre2) => {
  const suma = nombre1 + nombre2;
  console.log(`Resultat de la suma ${nombre1} y ${nombre2} = ${suma}`);
});

// NIVELL 2

/** Exercici 3
 * Ús de callbacks en funcions asíncrones:
 * Escriu una funció esperarISaludar que accepti dos paràmetres:
 * un nom i una funció de callback. La funció ha d'esperar 2 segons i
 * llavors invocar la funció de callback, passant el nom com a paràmetre.
 * */

const esperarISaludar = (nom, callback) => {
  setTimeout(() => {
    callback(nom);
  }, 2000);
};
esperarISaludar("Juan Valdivia", (nom) => {
  console.log(`El meu nom és ${nom}`);
});

/** Exercici 4
 * Callbacks amb arrays:
 * Escriu una funció processarElements que accepti dos paràmetres:
 * un array i una funció de callback. La funció processarElements
 * ha d'invocar la funció de callback per cada element de l'array.
 * */

const elements = ["a", "b", "c", "d"];

const processarElements = (payload, callback) => {
  payload.forEach((element) => {
    callback(element);
  });
};
processarElements(elements, (element) => {
  console.log(element);
});

// NIVELL 3

/** Exercici 5
 * Escriu una funció processarCadena que accepti dos paràmetres:
 * una cadena de caràcters i una funció de callback. La funció
 * processarCadena ha de convertir la cadena a majúscules i llavors
 * invocar la funció de callback amb la cadena transformada.
 * */

const processarCadena = (cadena, callback) => {
  const mayuscules = cadena.toUpperCase();

  callback(mayuscules);
};
processarCadena("Buenas noches Juan", (mayuscules) => {
  console.log(mayuscules);
});

// ---> Exercici 1.4: Rest & Spread operators

// NIVELL 1

/** Exercici 1
 * Operador Spread en Arrays:
 * Crea dues arrays, array1 i array2. Utilitza l'operador spread
 * per a crear una tercera array que contingui tots els elements
 * de array1 i array2.
 * */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = ["1", "2", "3", "4", "5"];

const newArray = [...array1, ...array2];

console.log(newArray);

/** Exercici 2
 * Operador Rest en Funcions:
 * Crea una funció 'suma' que utilitzi l'operador rest per a acceptar
 * un nombre indeterminat d'arguments i retornar la seva suma.
 * */

const suma = (...nums) => {
  let values = Object.values(nums);
  let resultat = 0;

  for (let i = 0; i < values.length; i++) {
    resultat += values[i];
  }

  // values.forEach(res => {
  //   resultat += res
  // })

  return resultat;
};

console.log(suma(1, 2, 3, 4, 5, 6));

// NIVELL 2

/** Exercici 3
 * Copiant objectes amb Spread:
 * Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2',
 * que sigui una còpia de 'objecte1' utilitzant l'operador spread.
 * Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
 * */

const objecte1 = {
  id: 1,
  title: "Sprint 2 JavaScript 1",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, atque!",
};
const objecte2 = { ...objecte1 };
objecte2.title =
  "Sprint 2 JavaScript 1 Exercici 1.4: Rest & Spread operators, Exercici 3";

console.log(objecte1, objecte2);

/** Exercici 4
 * Rest en Destructuring:
 * Crea una array amb diversos elements. Utilitza destructuring i l'operador
 * rest per a assignar els primers dos elements a variables, i després assignar
 * la resta dels elements a una tercera variable.
 * */

const resDestructuring = [
  "Buenos días!",
  [2],
  [{ id: 1, name: "Juan Valdivia" }],
  { message: "destructuring i loperador rest" },
  "Buenas tardes!",
];

const [bienvenida, nums, ...objs] = resDestructuring;

console.log(bienvenida, nums, objs);

// NIVELL 3

/** Exercici 5
 * Spread en Funcions:
 * Crea una funció que accepti tres arguments. Després, crea una array amb tres
 * elements i crida la funció utilitzant l'operador spread amb aquesta array.
 * */

const elementos = (elemento1, elemento2, elemento3) => {
  return {
    elemento1,
    elemento2,
    elemento3,
  };
};
const listaElementos = [{ title: "Spread en Funcions" }, 1, [1, 2, 3]];
console.log(elementos(...listaElementos));

/** Exercici 6
 * Fusionant Objectes amb Spread:
 * Crea dos objectes amb propietats diferents. Utilitza l'operador spread
 * per a fusionar aquests dos objectes en un de nou.
 * */
const fruteria = { peras: 5, platanos: 10 };
const panaderia = { baguetts: 2, donuts: 5 };

const carrito = {
  ...fruteria,
  ...panaderia,
};

console.log(carrito);

// ---> Exercici 1.5: Array transformations

// NIVELL 1

/** Exercici 1
 * Map: Teniu un array de números [1, 2, 3, 4].
 * Crea una nova array que contingui el quadrat de cada número.
 * */

const ids = [4, 23, 45, 65, 34];
const quadrats = ids.map((num) => Math.floor(Math.sqrt(num)));

console.log(ids, quadrats);

/** Exercici 2
 * Filter: Teniu una array de números [1, 2, 3, 4].
 * Crea una nova array que només contingui els números parells.
 * */

const ids2 = [4, 23, 45, 65, 34, 44, 22, 67, 88];
const parells = ids2.filter((num) => num % 2 === 0);
console.log("Números parells: ", parells);

/** Exercici 3
 * Find: Teniu una array de números [1, 10 , 8, 11].
 * Utilitza la funció find per a trobar el primer número que és major a 10.
 * */

const ids3 = [1, 10, 8, 11];

const majorA10 = ids3.find((num) => num > 10);
console.log("Find Exercici 3 --> ", majorA10);

/** Exercici 4
 * Reduce: Teniu una array de números [13, 7, 8, 21].
 * Fes servir la funció reduce per a calcular la suma total dels números.
 * */

const ids4 = [13, 7, 8, 21];
const sumaIds4 = ids4.reduce((a, b) => a + b, 0);
console.log("Reduce Exercici 4 -->", sumaIds4);

// NIVELL 2

/** Exercici 5
 * Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]",
 *
 * crea una funció en una sola línia que faci el següent:
 * - Filtra els nombres majors o iguals a 10.
 * - Multiplica cada nombre filtrat per 2.
 * - Calcula la suma dels nombres filtrats i multiplicats per 2.
 * - La funció ha de retornar el resultat de la suma.
 */
const arrayDonat = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const resultat = () =>
  arrayDonat
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((a, b) => a + b, 0);

console.log("Exercici 5 --> ", resultat());

// NIVELL 3

/** Exercici 6
 * Every / Some:
 * Usa every i some per a determinar si tots o alguns dels elements
 * de l'array [11, 12, 13, 14] són majors que 10, respectivament
 * */

const ids5 = [11, 12, 13, 14];

const totsMajorA10 = ids5.every((num) => num > 10);
const algunsSonMajors10 = ids5.some((num) => num > 10);

console.log("Every / Some Exercici 6 -->", { totsMajorA10, algunsSonMajors10 });

// ---> Exercici 1.6: Array loops

// NIVELL 1

/** Exercici 1
 * forEach:
 * Teniu una array de noms. Utilitza forEach per a imprimir cada
 * nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
 * */

let noms = ["Anna", "Bernat", "Clara"];
noms.forEach((nom) => console.log("Nom forEach: ", nom));

/** Exercici 2
 * for-of:
 * Teniu una array de noms. Utilitza un bucle for-of per a imprimir
 * cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
 * */
noms = ["Anna", "Bernat", "Clara"];
for (const nom of noms) {
  console.log("Nom for-of: ", nom);
}

/** Exercici 3
 * filter:
 * Teniu una array de números. Utilitza filter per a crear una
 * nova array que només contingui els números parells.
 * let numeros = [1, 2, 3, 4, 5, 6];
 * */

let idsNumeros = [1, 2, 3, 4, 5, 6];
let numerosParells = idsNumeros.filter((num) => num % 2 === 0);
console.log("Exercici 3 filter números parells: ", numerosParells);

// NIVELL 2

/** Exercici 4
 * for-in:
 * Teniu un objecte amb parells clau-valor:
 * let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' };
 * Utilitza un bucle for-in per a imprimir a la consola cada
 * clau i el seu valor corresponent.
 * */

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
for (const item in obj) {
  console.log({ calu: item, value: obj[item] });
}

/** Exercici 5
 * for-of amb break:
 * Teniu una array de números. Utilitza un bucle for-of per
 * a imprimir a la consola els números fins a trobar el número 5,
 * llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
 * */

let ids1Numeros = [1, 2, 3, 4, 5, 6];

for (const num of ids1Numeros) {
  if (num === 5) {
    console.log("Num 5 trobat");
    break;
  }
}

// NIVELL 3

/** Exercici 6
 * for-of amb index:
 * Utilitza un bucle for-of per a imprimir a la consola cada
 * element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']
 * */

noms = ["Anna", "Bernat", "Clara"];

const entries = noms.entries(); // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

for (const iterador of entries) {
  const [next, value] = iterador;
  console.log({ next, value });
}

// ---> Exercici 1.7: Promises & Async/Await

// NIVELL 1

/** Exercici 1
 * Creació d'una Promesa:
 * Crea una promesa que es resolgui després de 2 segons i que
 * retorni la cadena de text 'Hola, món'.
 * */

const promesa = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Hola mon");
  }, 2000)
);
/** Exercici 2
 * Utilització d'una Promesa:
 * Utilitza la promesa creada en l'exercici anterior.
 * Crea un .then que imprimeixi el resultat a la consola.
 * */
promesa.then((res) => console.log(res));

/** Exercici 3
 * Promesa amb reject:
 * Crea una promesa que es resolgui després de 2 segons
 * si l'input és igual a 'Hola', i que la rebutgi si l'input
 * és qualsevol altra cosa.
 * */

const input = (dataString) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataString === "Hola") reject("rebutg");
      resolve("Resolt");
    }, 2000);
  });
  input("Hola")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
  input("Hola Buenos dias")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
  
/** Exercici 4
 * Ús de async/await:
 * Escriu una funció asíncrona que utilitzi la funció await
 * per a esperar el resultat de la promesa creada a l'exercici 1,
 * i que després imprimeixi aquest resultat a la consola.
 * */

// NIVELL 2

/** Exercici 5
 * Gestió d'errors amb async/await:
 * Modifica la funció de l'exercici 4 per a que capturi qualsevol
 * possible error utilitzant un bloc try/catch.
 * */

// NIVELL 3

/** Exercici 6
 * Promise.all:
 * Crea dues promeses que es resolguin després de 2 i 3 segons,
 * respectivament. Utilitza Promise.all per a esperar que ambdues
 * promeses es resolguin, i imprimeix els resultats a la consola.
 * */
