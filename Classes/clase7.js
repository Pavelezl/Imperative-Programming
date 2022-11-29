// BUCLES O REPETICIONES

// 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function numerosSiguientes(num){
    for(let i=num; i<=num +10;i++){
        console.log(i)
    }
}

numerosSiguientes(10);

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function numerosTesenTes(){
    for(let i=5; i<=20;i+=3){
        console.log(i)
    }
}

numerosTesenTes();

// 3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

function sumatoria(){
    let acumulador = 0;
    for(let i=0; i<=100;i++){
        acumulador+=i
    }
    return acumulador;
}

console.log(sumatoria())

// Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorial(num1){
    let acumulador = 1
    for(let i=1; i<=num1;i++){
        acumulador *= i
    }
    return acumulador
}

console.log(factorial(5))

//La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

function loro(texto){
    for(let i=0;i<=5;i++){
        console.log(texto)
    }
}

loro("Pablo")

//En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for 

function noParesDeContarImparesHasta(numero){
    let acumulador = 0;
    for(let i=0; i<=numero;i++){
        if(i % 2 !== 0){
            acumulador++ 
        }
    }
    return acumulador
}

console.log(noParesDeContarImparesHasta(9))

//// Crear una función que pida un valor por parámetro y muestre los 10
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
