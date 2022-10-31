//Declarar una variable

let nombre2 = 'Pablo';

console.log(nombre2);

//Otra variable

let numero_preferido = 3;

console.log(numero_preferido);

if(true){
    let numero_preferido = 5;
    console.log(numero_preferido);
}

//Declaración variable Const
const apellido2 = "Velez";

console.log(apellido2);

//Tipos de datos

//Numbers
let edad = 32;
let precio = 160.55;

console.log(edad);
console.log(precio);

//Strings

let saludos = "Hola terricolas";
console.log(saludos);

//Booleanos

let nacioEnArgentina = true;
console.log(nacioEnArgentina);

let nacioEnColombia = false;
console.log(nacioEnColombia);

//Objeto Literal

let persona = {
    nombre: "Pablo",
    edad: 28
}

console.log(persona);

//Array

let paises = ["Argentina", "Venezuela", "Colombia"];
console.log(paises);


//Temas operadores

//suma

console.log(5 + 4);

//Resta

console.log(18 - 10);

//multiplicación

console.log(5 * 10);

//división

console.log(10 / 2);

//modulo

console.log(10 % 2);

//Incremento

let numero = 5;

console.log (++numero);

//Decremento

let otroNumero = 10;
console.log(--otroNumero);

// COMPARACIÓN SIMPLE

console.log(5 == "5");

//Compracion estricta

console.log(5 === "5");

//Desigualdad

console.log (5 != "5");

//Desigualdad estricta

console.log (5 !== "5")

//Mayor que

console.log (10 > 6);

//Mayor o igual que

console.log (6 >= 6);

//OPERADORES LOGICOS

//AND &&

console.log(true && true);

//concatenacion

let nombre = "pablo"
let apellido = "velez"

console.log(nombre + " " + apellido);

//EJERCICIO

// Esto es una asignación estática (valor fijo)
let unNumero = 124;

// Esto es una asignación dinámica (resultado de una operacion)
let siguienteNumero = unNumero + 1;

// Imprime en pantalla el valor asignado, o sea 124
console.log(siguienteNumero);

//EJERCICIO PLAYGROUND

let primerNumero = 100
let segundoNumero = 5

console.log(resultadoSuma = primerNumero + segundoNumero); // 105
console.log(resultadoResta = primerNumero - segundoNumero)  // 95
console.log(resultadoMultiplicacion = primerNumero * segundoNumero) // 500
console.log(resultadoDivision = primerNumero / segundoNumero) // 20