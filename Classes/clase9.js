//sumar todas las notas y dividirlas entre la cantidad de notas a promediar.

function promedio (nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3
}

let promedioPablo = promedio(3,8,9)
let promedioCarlos = promedio(6,8,9)

console.log(promedioCarlos)
console.log(promedioPablo)

//hacer un programa ara calcular el promedio de 3 notas; i el promedio es mayor ue 10.5 mostrar aprobado. 

function promedio2 (nota1, nota2, nota3){
    let promedioNotas = (nota1+nota2+nota3)/3
    if(promedioNotas >= 10.5){
        return "Aprobado, tu promedio es de: " + promedioNotas;
    }else if(promedioNotas < 10.5){
        return "No Aprobaste, tenes que repetir la materia. Tu promedio es de: " + promedioNotas;
    }
}

let promedioAntonio = promedio2(3,8,9)
let promedioVelez = promedio2(10, 10, 14)

console.log(promedioAntonio)
console.log(promedioVelez)

//elaborar un programa que muestrela cantidad de numeros pares e impares entre 10 numeros


function cantidadParesEImpares(numeroMIN, numeroMax){
    let acumuladorP = 0
    let acumuladorI = 0
    for (i=numeroMIN; i <= numeroMax; i++){
        if(i % 2 ==0){
            acumuladorP++;
        }else{
            acumuladorI++
        }
    }
    return "Numeros pares:" + acumuladorP + " y Numeros impares:" + acumuladorI
}

console.log(cantidadParesEImpares(10,200))

