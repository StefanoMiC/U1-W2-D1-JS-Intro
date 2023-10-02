// QUESTO SARA' IL NOSTRO AMBIENTE JS, che scriveremo esternamente al file HTML e poi lo collegheremo
// console.log è un metodo che ci permette di avere un qualche output nella console del nostro browser,
// ci permette di avere quindi visibilità su quello che sta succedendo nel nostro codice in una determinata posizione o momento nel tempo

console.log("Hello World");

// il lavoro dello sviluppatore si focalizza sulla RISOLUZIONE di problemi per raggiungere un determinato obiettivo.
// uno sviluppo sequenziale, definito e numerato di passaggi che portano al risultato si definisce ALGORITMO
// è molto simile ad una ricetta. passo dopo passo, svolgo una serie finita di passaggi e ottengo un risultato.

// i contenitori di una ricetta sono tanto fondamentali quanto lo sono in programmazione
// nel caso di JavaScript ci riferiamo a questi contenitori con il nome di VARIABILI

// una VARIABILE è un'allocazione di memoria (un contenitore), col fine di salvare un dato che possiamo riprendere nel tempo
// le variabili vengono salvate (esistono) nella memoria a BREVE termine del computer (RAM)
// tutte le variabili hanno un nome col quale potremmo riferirci per estrarne il valore che contengono

// possiamo immaginarle come contenitori o scatole, dapprima vuote e poi riempite.
// questi contenitori possono anche cambiare il contenuto nel tempo, da lì il nome VARIABILE

// CREAZIONE DI VARIABILI
var myVariable; // ho creato un contenitore VUOTO (è il metodo ANTICO da non usare MAI PIU'!!!)
console.log(myVariable); // undefined - il contenitore non ha mai ricevuto un valore

myVariable = "Stefano";
console.log(myVariable); // il contenitore passa da undefined al valore contenuto nella variabile => Stefano
// questa è un'operazione in due passaggi:
// 1) trovo la scatola con l'etichetta myVariable
// 2) apro la scatola e prendo il contenuto che aveva all'interno (il valore)
// successivamente questo valore ottenuto viene posizionato nel console.log ed è il motivo per cui possiamo vederlo nella console del browser

// IN SOSTITUZIONE AL VAR...
// useremo LET!

let animal; // creazione di variabile vuota
// let animal = "Rabbit" // non si può ridichiarare una variabile già dichiarata in precedenza

animal = "Cat"; // si può ASSEGNAZIONE un valore
console.log(animal);

// in un unico passaggio verrebbe così:
let myFavouriteAnimal = "Horse"; // ho creato il contenitore e assegnato un valore nello stesso momento, si può fare!
console.log(myFavouriteAnimal);
// questa nomenclatura particolare si chiama camelCase

animal = "Dog"; // l'operatore di assegnazione = può essere utilizzato per inserire il valore iniziale, ma anche per cambiare il valore ad una variabile nel tempo
console.log(animal);

let myFavouriteNumber = 7; // in questo caso la variabile contiene un NUMERO (NUMBER)
console.log(myFavouriteNumber); // 7
myFavouriteNumber = 13;
console.log(myFavouriteNumber); // 13

// TIPI DI VALORE POSSIBILI PER LE NOSTRE VARIABILI

// STRING - "Stefano", 'Miceli', `Stefano` (tastierino numerico ALT + 96)
// NUMBER - 101, 44, 7, 2000, 45.1, 99.999, NaN
// BOOLEAN - true / false
// UNDEFINED - rappresenta l'assenza di un valore, es. una variabile appena inizializzata e senza aver ancora mai inserito un valore
// NULL - rappresenta l'assenza INTENZIONALE di valore, che verrà verosimilmente inserito in un momento successivo

// Symbol - entita singola, molto poco utilizzata

// typeof ci restituisce il tipo del valore specificato alla sua destra
// ce lo restituisce sotto forma di stringa che specifica il tipo: "number", "string", "undefined"
console.log(typeof myFavouriteNumber); // "number"
console.log(typeof myFavouriteAnimal); // "string"

// una cosa a cui prestare estrema attenzione è di rispettare il valore iniziale di una variabile, ovvero: se iniziamo con un numero mantenteniamo un numero come valore all'interno
myFavouriteNumber = "20"; // in questo caso stiamo cambiando il tipo, ed è considerato un errore
console.log(typeof myFavouriteNumber); // "string"

// l'unica eccezione alla gestione del tipo è la possibilità di passare da undefined/null a un valore di tipo diverso.
let anotherNum = null;
anotherNum = 10;
// passare da null a number è permesso
// passare da number a string NON è permesso

let areYouAbleToDrive = false; // questa variabile conterrà un booleano finché non decido di cambiarla
areYouAbleToDrive = true; // qui diventa true

let hasStudentWebcam = true;

console.log("Stefano"); // questo è un elemento a stringa nuovo e diverso dal contenuto della variabile successiva. una volta letto verrà perso nel nulla.
console.log(myVariable); // in questo caso la stringa è una stringa completamente diversa dalla precedente. NON C'E' relazione tra le due.
//una volta letta continua ad esistere nella sua variabile

let num1 = 10;
let num2 = 20;
let num3 = num1;
console.log("Valore di num3:", num3);
console.log(num1, num2, num3);

let num4 = num2 + num3;
console.log("Valore di num4:", num4);
let num5 = num2 - num1;
console.log("Valore di num5:", num5);

console.log("moltiplicazione:", 15 * 2);
console.log("moltiplicazione2:", num1 * num2);
console.log("divisione:", 20 / 4);
console.log("resto della divisione (modulo):", 44 % 6); // operatore modulo % ritorna il resto di una divisione
console.log("il resto di 3 / 6 è: ", 6 % 3);

let falseNum = "15";
let falseNum2 = "30";

let falseNum3 = falseNum + falseNum2; // JS opererà una CONCATENAZIONE di due stringhe
console.log("falseNum3: ", falseNum3);
let falseNum4 = falseNum - falseNum2; // JS ha operato una coercizione (conversione) del tipo
console.log("falseNum4: ", falseNum4);

console.log("stefano" + "miceli"); // il + nel contesto di due stringhe le concatenerà
console.log("stefano" - "miceli"); // il - in questo caso proverà la type coercion e non riuscendoci ritornerà NaN (not a number) come valore

let name = "Stefano";
let surname = "Miceli";

let composedNameString = surname + " " + name;

console.log("My Full Name Is: " + composedNameString);
console.log("My Full Name Is:" + " " + composedNameString);

// un altro modo di dichiarare una variabile è: const
// const sta per costante e rappresenta una scatola il cui contenuto non è modificabile dopo la prima assegnazione

// const myName; // una costante NON PUO' essere inizializzata senza un valore
const myName = "Stefano";
// myName = "Miceli"; // non si può riassegnare il valore contenuto in questa variabile a costante
console.log(myName + "!!!"); // si utilizza come una qualsiasi variabile

// STRINGHE + NUMERI: quando ci troviamo in queste situazioni, JS opera una conversione automatica di uno dei due tipi.
// in questo caso converte il numero in stringa e poi concatena le due stringhe assieme
console.log(name + 30);
console.log(105 + "30"); // numero 105 diventa stringa
console.log(105 - "30"); // stringa 30 diventa numero per via del segno -

const myFullName = name + " " + surname;
name = "Samuele";

console.log(myFullName);
console.log(name);

// OPERATORI DI COMPARAZIONE

// > maggiore di
// < minore di
// >= maggiore o uguale
// <= minore o uguale

console.log(num4 > num1); // (30 > 10) ==> true

console.log(num4 >= 30); // (30 >= 30) ==> true
console.log(num4 > 30); // (30 > 30) ==> false

console.log(num1 < num4); // (10 < 30) ==> true

// OPERATORI DI UGUAGLIANZA
// == (DA EVITARE!!!)
// != (debolmente diverso - DA EVITARE!!!)
// === (uguaglianza STRETTA, da usare SEMPRE così, valuterà che anche il TIPO di dato sia uguale, non solo che il valore sia identico)
// !== (strettamente diverso - da usare SEMPRE così)

console.log("numero == stringa: ", 15 == "15"); // true
console.log("numero === stringa: ", 15 === "15"); // (giustamente) false
console.log("numero === numero: ", 15 === 15); // (giustamente) true

console.log(myVariable === "Stefano"); // true
console.log(myVariable !== name); // true, name era cambiato in "Samuele" a linea 137

// OPERATORE NOT
// ! (ci restituisce l'opposto, tipicamente di un boolean)

console.log("hasStudentWebcam", hasStudentWebcam);
console.log("!hasStudentWebcam", !hasStudentWebcam);

const studentDoesntHaveWebcam = !hasStudentWebcam;
console.log("studentDoesntHaveWebcam ", studentDoesntHaveWebcam);

// OPERATORI LOGICI
// && => AND (TUTTI I CHECK devono tornare true perché l'intero controllo ritorni true)
// true && true = true
// true && false = false

// || => OR (basta che UN SINGOLO check torni true perché l'intero controllo ritorni true)
// true  || false = true
// false || false = false

// !  => NOT
// ritorna il valore opposto

console.log("COMPARAZIONE1: ", num3 < num2 && num3 === num1); // true
//               true          true       // true
console.log("COMPARAZIONE2: ", num3 < num2 && num3 === num1 && num3 === "Stefano"); // false
//               true           true            false           // false

console.log("COMPARAZIONE3: ", num3 < num2 || num3 === num2 || num3 === "Stefano"); // true
//               true          false             false          // true

console.log("COMPARAZIONE4: ", (num3 < num2 || num3 === num2) && num3 !== "Stefano"); // OR e AND usati in combinazione con priorità data dalle parentesi
//                (true  || false) => true && true  =>       // true

console.log("NEGAZIONE: ", !(num3 < num2 && num3 === num1 && num3 === "Stefano")); // prima era false adesso ==> true
