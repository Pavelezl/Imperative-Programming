// Ti

//VARIABLES - Ejercicio playground

// Nuestra tarea será declarar dos variables: una con el nombre edad y la otra con el nombre peso.
// Our task will be to declare two variables: one with the name age and the other with the name weight.

let edad
let peso

// Declaremos dos variables llamadas edad y peso, a las cuales debemos asignarles un valor numérico.
let edad1 = 29;
let peso1 = 70;

//Ahora, debemos crear una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignaremos valores numéricos 18 y 99 respectivamente.

const EDAD_MINIMA = 18;

const EDAD_MAXIMA = 99;

//Para este ejercicio, debemos declarar 4 variables de tipo let con los nombres: verdadero, nada, texto y numero. A cada una de ellas, tendremos que asignarle el tipo de dato que sugiera su nombre, según corresponda.

let verdadero = true;
let nada = null;
let texto = "Hola";
let numero = 29;

// Declarar y asigna dos variables: primerNumero y segundoNumero. Luego, declarar las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision y en cada una almacena el resultado que corresponda. Por último, imprimir cada uno de los resultados utilizando console.log(nombreDeLaVariable)

let primerNumero = 100;
let segundoNumero = 50;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicación = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoMultiplicación)
console.log(resultadoDivision)

//Nuestra tarea es crear una función que se va a llamar ejemplo y tiene que devolver un String diciendo "hola, soy una función"

function ejemplo(){
    return "Hola, soy una funcion"
}

console.log(ejemplo())

//Primero creamos una variable con el nombre  ejemplo y le asignamos como valor una función. La misma debe retornar un String que diga: "hola, soy una función expresada"

let ejemplo2 = function(){
    return "Hola, soy una funcion expresada"
}

console.log(ejemplo2())

// Escribir las siguientes tres funciones:
// anterior: recibe un número como parámetro y devuelve ese número menos uno.
// triple: recibe un número como parámetro y devuelve el triple de ese número. 
// anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).

//Funcion anterior
function anterior(numero1){
    return numero1 - 1;
}

console.log(anterior(10))

//Funcion triple
function triple(numero2){
    return numero2 * 3
}

console.log(triple(10))

//funcion anterior triple
function anteriorTriple(numero3){
    return (anterior(triple(numero3)))
}

console.log(anteriorTriple(10))

