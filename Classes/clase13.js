// Ejercicios extra

// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par

function loopDePares(num){
    for(let i=0;i<=100;i++){
        if((i+num) % 2 === 0){
            console.log(`El numero ${i} es par`)
        }else{
            console.log(i)
        }
    }

}

loopDePares(5)

//Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:

function sumatoria(num){
    let suma = 0 
    for(let i=num;i>=0;i--){
        suma +=i
    }
    return suma
}

console.log(sumatoria(8))

//Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

function nuevoArreglo(num1){
    let array = []
    for(let i=0;i<=num1;i++){
        array.push(i)
    }
    return array
}

console.log(nuevoArreglo(10))

//Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

let numeros = [1,2,3,4]
let letra = ["h","o","l","a"]
function arrayHandler(array1,array2){
    for(let i =0;i<=array1.length;i++){
        console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`)
    }
}

arrayHandler(numeros,letra)
