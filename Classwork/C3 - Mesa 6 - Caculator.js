const prompt = require('prompt-sync')({ sigint: true })

//CALCULADORA NIVEL I

//sumar

function sumar (numero1, numero2){
    return numero1 + numero2
}

//Restar

function restar (numero1, numero2){
    return numero1 - numero2
}

//Multiplicar

function multiplicar (numero1, numero2){
    return numero1 * numero2
}

//Multiplicar

function dividir (numero1, numero2){
    return numero1 / numero2
}

//CALCULADORA NIVEL II
// console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)

//sumar
let n1 = prompt("Ingrese su primer numero: ");
let n2 = prompt("Ingrese su Segundo numero: ");
console.log("Su valor es: " + sumar(n1,n2));

//Restar
let numero1 = prompt("Ingrese su primer numero: ");
let numero2 = prompt("Ingrese su Segundo numero: ");
console.log("Su valor es: " + restar(numero1,numero2));

//Multiplicar
let numero3 = prompt("Ingrese su primer numero: ");
let numero4 = prompt("Ingrese su Segundo numero: ");
console.log("Su valor es: " + multiplicar(numero3,numero4));

//Dividir
let numero5 = prompt("Ingrese su primer numero: ");
let numero6 = prompt("Ingrese su Segundo numero: ");
console.log("Su valor es: " + dividir(numero5,numero6));

//CALCULADORA NIVEL III
// console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)

// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
// número como parámetro y deberá retornar ese número elevado al cuadrado.
function cuadradoDeUnNumero(n1){
    return multiplicar(n1,n1)
}

console.log(cuadradoDeUnNumero(5))

// 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
// de 3 números, que serán ingresados por parámetro.
function promedioDeTresNumeros(n1,n2,n3){
    return ((sumar(sumar(n1,n2), n3))/3)
}

console.log(promedioDeTresNumeros(6,11,7))

// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
function calcularPorcentaje(n1, n2){
    return (multiplicar(n1, n2)/100)
}

console.log(calcularPorcentaje(300, 15))

// 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
function GeneradorDePorcentaje(numero1, numero2){
    return (calularDiv(numero1, numero2) * 100)
}

console.log(GeneradorDePorcentaje(2, 200));

