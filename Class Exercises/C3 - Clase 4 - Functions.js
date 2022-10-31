
//Funcioens basicas
function anterior(numero){
    return numero -1;
} 

function triple (numero){
    return numero*3;
}

function anteriorTriple (numero){
    return anterior(triple(numero));
}

//Clase 5

//Ejercicio 1
function saludar(nombre){
    const mensaje = "hola, tanto tiempo sin verte "
    console.log(mensaje + nombre);
}
saludar(" Pablo")
saludar(" Antonio")

//Ejercicio 2
function multiplicarPorDosYSumarleCinco(x){
    return 2 * x + 5;
}

console.log(multiplicarPorDosYSumarleCinco(1));
console.log(multiplicarPorDosYSumarleCinco(5));
const pepe = 5
console.log(multiplicarPorDosYSumarleCinco(pepe));
