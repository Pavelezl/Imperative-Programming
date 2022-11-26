const prompt = require("prompt-sync")({ sigint: true });

// Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.

function suma(num1, num2){
    return num1 + num2
}

//Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
function resta(num3, num4){
    return num3 - num4
}

//Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación.
function multi(num1, num2){
    return num1 * num2
}

//Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de la división del primero sobre el segundo.
function division(num1, num2){
    return num1 / num2
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

/* let primerN = prompt("Ingrese primer numero:")
let segundoN = prompt("Ingrese su segundo numero:") */

/* //Ejecutar la función que permite sumar y la función que permite restar pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados.
console.log(suma(primerN,segundoN))
console.log(resta(primerN,segundoN))

//Ejecutar la función que permite multiplicar pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
console.log(multi(primerN,segundoN))
// Ejecutar la función que permite dividir pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
console.log(division(primerN,segundoN)) */

// PARTE 3: 

//Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado. Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

function cuadradoDeUnNumero(num1){
    return multi(num1, num1)
}

console.log(cuadradoDeUnNumero(5))

//Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro. Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

function promedioTresNumeros(num1, num2, num3,){
    return (suma(suma(num1,num2), num3)/3)
}

console.log(promedioTresNumeros(6,7,8))

//Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300. Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

function calcularPorcentaje(num1, porncentaje){
    return ((num1/100)*porncentaje)
}

console.log(calcularPorcentaje(300,15))


