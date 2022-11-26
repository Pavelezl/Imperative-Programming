// Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function pulgadasACentimetros(pulgadas){
    return pulgadas * 2.54
}

console.log(pulgadasACentimetros(10))

// Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

function url(texto){
    return "http://www." + texto + ".com"
}

console.log(url("pablo"))

//Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function admiracion(texto2){
    return "¡" + texto2 + "!"
}

console.log(admiracion("hola"))

// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

function edadPerros(edad){
    return edad * 7
}

console.log(edadPerros(2))

// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.

function horaDeTrabajo(saldoMesual){
    return saldoMesual / 40
}

console.log(horaDeTrabajo(10000))

// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.

function mayuscula(texto3){
    return texto3.toUpperCase()
}

console.log(mayuscula("Hola, soy pablo"))

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.

function tipoDeDato(dato){
    return typeof dato
}

console.log(tipoDeDato(25))

// Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.

function circunferencia(radio){
    return Math.PI * (radio * radio)
}

console.log(circunferencia(4))