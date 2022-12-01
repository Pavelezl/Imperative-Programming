//Tenemos una matriz de los gastos de un mes, siendo semana las filas y los días las columnas:

let gastos = [
    [1135, 2255, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]

// calcular el total de gastos de una semana

function semanaTotal(mat, semana){
    let suma = 0
    for(i=0;i<mat[semana].length;i++){
        suma+=mat[semana][i]
    }
    return suma;
}

let totalSemana2 = semanaTotal(gastos, 0)
console.log(totalSemana2) 

// calcular el total de gastos de una semana

function diaTotal(mat, dia){
    let suma = 0
    for(i=0;i<mat.length;i++){
        suma+=mat[i][dia]
    }
    return suma;
}

console.log(diaTotal(gastos, 1)) 

//Total de gastos del mes
function totalMes(mat){
    let suma=0;
    for(i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            suma+=mat[i][j];
        }
    }
    return suma;
}

console.log(totalMes(gastos))


//Otros ejercicios
//realizar una funcion que imprima una piramide

function piramide(numero){
    for(let i=1; i<=30;i++){
        let fila = " "
        for(let j=1;j<=i;j++){
            fila += `${i}`;
        }
        console.log(fila);
    }
}

piramide();