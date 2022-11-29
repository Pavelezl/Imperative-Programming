const prompt = require("prompt-sync")({ sigint: true });
// EJERCICIOS de practica

// 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola. Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log().

let frase = prompt("Escribi tu frase: ")
console.log(frase)

// 2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".

let saludo = prompt("Escribe tu nombre: ")
console.log(`Hola ${saludo} !`)

// 3) Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

let numero1 = prompt("ingresa el primero numero; ")
let numero2 = prompt("ingresa el primero segundo; ")

console.log(numero1 + numero2)

//Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”.

let nacimiento = prompt("¿Cual es tu año de nacimiento? ")
let edadActual = 2022 - nacimiento;
console.log(`Tienes ${edadActual} años !`)

// Escribí un programa que imprima los números pares del 0 al 100.

function numerosPares(){
    for(let i=0; i <= 100 ;i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}
numerosPares();

// Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola: const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

const nombres1 = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

function nombres(arr){
    for(let i=0; i<=arr.length;i++){
        console.log(arr[i])
    }
}
nombres(nombres1)

//Escribí una función llamada elemento que recibe un arreglo como parámetro. La función debe devolver el valor que se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1.

const nombres2 = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

function tercerElemento(arr){
    if(arr.length > 3){
        return arr[3]
    }else{
        return -1
    }
}
console.log(tercerElemento(nombres2))
