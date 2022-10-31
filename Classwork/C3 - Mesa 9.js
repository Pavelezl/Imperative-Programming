// Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log().
const prompt = require('prompt-sync')({ sigint: true })

function imprimirPorConsola(palabra) {
    console.log(palabra)
}

// imprimirPorConsola(prompt('Ingrese una palabra: '))

/*Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".*/

function saludo(nombre) {
    console.log('Hola ' + nombre + '!')
}

// saludo(prompt('Ingrese su nombre: '))

/*
Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.
*/

function suma(num1, num2) {
    return num1 + num2
}

// console.log(suma(Number(prompt('num1: ')), Number(prompt('num2: '))))

/*Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.*/

let calculoEdad = (anioNacimiento) => {
    let ANIOACTUAL = 2022
    let edad = ANIOACTUAL - anioNacimiento
    console.log('Tienes ' + edad + ' años')
}

// calculoEdad(prompt('Ingrese su año de nacimiento: '))

/*
Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"*/

function adivinarNumero(guess) {
    let numAleatorio = Math.round(Math.random() * 10)
    if (numAleatorio == 0) {
        numAleatorio = numAleatorio + 1
    }
    if (guess == numAleatorio) {
        console.log('Acertaste!')
    } else {
        console.log('Lo siento, seguí intentando. Psst, el numero era: ' + numAleatorio)
    }
}

// adivinarNumero(Number(prompt('Adelante, elegí, estoy seguro de que perderás: ')))

/*Escribí un programa que imprima los números pares del 0 al
100.*/

function pares() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

// pares()

/*Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.*/

function acercamiento(numero) {
    if (numero > 99 || numero <= 0) {
        console.log('Ingrese un numero distinto de cero y con 2 cifras como mucho.')
    } else if (numero >= 10 && numero < 100) {
        console.log('te falta ' + (100 - numero) + ' para llegar a un numero de 3 cifras.')
    } else if (numero > 0 && numero < 10) {
        console.log('te falta ' + (10 - numero) + ' para ser un numero de 2 cifras.')
    }
}

// let numeroIngresado = prompt('Ingrese un numero de HASTA 2 cifras: ')
// acercamiento(numeroIngresado)

/*Hacer un algoritmo que muestre el promedio de varias notas o
de N notas ingresadas, se debe definir el valor de N para
conocer la cantidad de notas a ingresar.*/

// DUDAS EN ESTE CON LA CONSIGNA, UNA FORMA DE ENCARARLO:
function promedio(N, num1, num2, num3, num4, num5) {
    console.log(...arguments)
    switch (N) {
        case 1:
            return num1 / N
        case 2:
            return (num1 + num2) / N
        case 3:
            return (num1 + num2 + num3) / N
        case 4:
            return (num1 + num2 + num3 + num4) / N
        case 5:
            return (num1 + num2 + num3 + num4 + num5) / N
        default:
            console.log('Ingrese los valores devuelta')
    }
}

// console.log(promedio(5, 10,20,50,15,34))

/*
Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.
*/

function sumatoria(N) {
    let acumulador = 0
    for (let i = 0; i <= N; i++) {
        acumulador = acumulador + i;
    }
    return acumulador
}

console.log(sumatoria(5))