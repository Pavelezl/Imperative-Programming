const prompt = require('prompt-sync')({ sigint: true })


// 1 Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function pulgadasACentrimetro(pulgadas){
 return pulgadas * 2.54
}
let pulgadas = prompt("Ingrese numero en pulgadas: ")
console.log("Su valor en centimetros es: " + pulgadasACentrimetro(pulgadas))


//  2. Crear una función que recibe un string y lo convierte en una URL.
//  Ej: “pepito” es devuelto como “http://www.pepito.com”

let textoAUrl = (texto) => "http://www." + (texto) +".com"
console.log("la url es: " + textoAUrl(prompt("Ingrese texto a convertir: ")))


// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

let textoAUrlAdmiracion = (texto) => "¡" + (texto) + "!" 
console.log(textoAUrlAdmiracion (prompt("Ingrese texto a convertir: ")))


// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

function anioPerro(anio){
    return anio * 7
}
let anio = prompt("Ingrese los años de su perro: ")
console.log("La edad perruna de su perro es: " +anioPerro(anio))


// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

let horaTrabajo = function(salario){
    let resultado = salario / 40
    return resultado
}
console.log(horaTrabajo(prompt("Cual es su salario mensual: ")))


// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

function calculadorIMC(altura, peso){
    return peso / altura ** 2
}
console.log("Su IMC es: " + calculadorIMC(prompt("ingrese su altura en metr: "), prompt("ingrese su peso: ")))