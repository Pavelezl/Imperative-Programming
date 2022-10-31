// Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.
function numerosSiguientes(numero) {
    for(let i = numero+1; i <= numero + 10; i++) {
        console.log(i);
    }
}
numerosSiguientes(4);

// Imprimir los números entre el 5 y el 20, saltando de tres en tres.
function numerosTresEnTres() {
    for(let i = 5; i <= 20; i+=3) {
        console.log(i);
    }
}
// numerosTresEnTres();

// Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100
function de0Al100() {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
        sum += i
    }
return sum
}
console.log(de0Al100());

// Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
function factorialNumero(numero) {
    let multiplicacion = 1;
    for(let i = 1; i <= numero; i++) {
        multiplicacion *= i;
    }
return multiplicacion;
}
console.log(factorialNumero(5))


  //figonachi
 // Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.
function fibonacci(numero) {
    for(let i = 2; i <= numero; i++) {
        console.log((i - 1) + (i - 2))
    }
}
console.log(fibonacci(1));
