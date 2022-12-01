// Declara una variable que contenga una matriz
// de 5x5 llena de puros numeros enteros y positivos

// Luego, escribe un algoritmo para sumar todos
// los numeros en la matriz.

let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

function total(mat){
    let suma=0;
    for(i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            suma+=mat[i][j];
        }
    }
    return suma;
}

console.log(total(matriz))

// Completa la función para que retorne una matriz
// de 10x10


