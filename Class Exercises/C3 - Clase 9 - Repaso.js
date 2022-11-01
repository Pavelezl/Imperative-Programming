//sumar todas las notas y dividirlas entre la cantidad de notas a promediar. 

function promedioNotas(nota1,nota2,nota3){
    return ((nota1 + nota2 + nota3)/3)
}
let promedioAgustin = promedioNotas(6,7,8);
let promedioPablo = promedioNotas(8,5,9);
console.log(promedioAgustin)
console.log(promedioPablo)

//Hacer un promedio para calcular el promedio de 3 notas; si el promedio es mayor a 10,5 mostrar aprobado

function promedioNotas(nota1,nota2,nota3){
    let promedio = ((nota1 + nota2 + nota3)/3)
    if(promedio >=10.5){
        return "Aprobado"
    }else{
        return "No aprobaste"
    }
}
let promedioAgustin = promedioNotas(10,15,16);
let promedioPablo = promedioNotas(8,5,9);
console.log(promedioAgustin)
console.log(promedioPablo)

//Elabora un programa que muestre la cantidad de pares e impares entre 10 numeros. 


function cantidadParesEImpares(numero){
    let acumuladorP = 0;
    let acumuladorI = 0;
    
    for(i=numero; i <= numero + 10; i++) {
        if(i % 2 != 0){
            acumuladorI++
        }else
            acumuladorP++
    }
    return "Impares: " + acumuladorI + "Pares: " + acumuladorP;
}
console.log(cantidadParesEImpares(10))

//Elabora un programa que muestre la cantidad de pares e impares entre x numeros. 

function cantidadParesEImpares(numero1, numero2){
    let acumuladorP = 0;
    let acumuladorI = 0;
    
    for(i=numero1; i <= numero2; i++) {
        if(i % 2 != 0){
            acumuladorI++
        }else
            acumuladorP++
    }
    return "Impares: " + acumuladorI + "Pares: " + acumuladorP;
}
console.log(cantidadParesEImpares(5, 400));