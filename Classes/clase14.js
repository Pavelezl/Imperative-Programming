// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener en un nuevo array las edades menores a 18.
function menores(arr){
    let array = []
    for(let i =0;i<=arr.length;i++){
        if(arr[i]<18){
            array.push(arr[i])
        }
    }
    return array
}

/* console.log(menores(edades)) */

// Obtener en un nuevo array las edades mayor o igual a 18.
function mayores(arr){
    let array = []
    for(let i =0;i<=arr.length;i++){
        if(arr[i]>18){
            array.push(arr[i])
        }
    }
    return array
}

/* console.log(mayores(edades)) */

// Obtener en un nuevo array las edades igual a 18.
function iguales(arr){
    let array = []
    for(let i =0;i<=arr.length;i++){
        if(arr[i]==18){
            array.push(arr[i])
        }
    }
    return array
}

/* console.log(iguales(edades)) */

// Obtener el menor.

function menorr(arr){
    let menor = 0
    for(let i =0;i<=arr.length;i++){
        if(arr[i] < menor){
            menor = arr[i]
        }
    }
    return menor
}

/* console.log(menorr(edades)) */

// Obtener el mayor. 
function mayorr(arr){
    let mayor = 0
    for(let i =0;i<=arr.length;i++){
        if(arr[i] > mayor){
            mayor = arr[i]
        }
    }
    return mayor
}

console.log(mayorr(edades))

// Obtener el promedio de edades.

function promedio(arr){
    let suma = 0
    for(let i =0;i<=arr.length;i++){
        suma += i
    }
    return suma/10
}

/* console.log(promedio(edades)) */


// Incrementar en 1 todas las edades.

function incremento(arr){
    for(let i =0;i<=arr.length;i++){
        console.log(arr[i] + 1) 
    }
}

/* incremento(edades) */

// ----------------------------------------------------- OBJETOS LITERALES -----------------------------------------

const arrayCuentas =
[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
]

// 1. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
/* function menoresEdad(array){
    let menoresArray = []
    for(let i =0;i<=array.length;i++){
        if(30 < array[i].edadTitular){
            menoresArray.push(array[i])
        }
    }
    return menoresArray
}

console.log(menoresEdad(arrayCuentas)) */

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
// Obtener la cuenta con el titular de la misma más joven.
// Obtener un array con las cuentas habilitadas.
// Obtener un array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.

let clientes = {
    clientes: arrayCuentas,
    // Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
    mayores: function(){
        let nuevoArray = []
        for(let i=0; i<arrayCuentas.length; i++){
            if(30 < arrayCuentas[i].edadTitular){
                nuevoArray.push(arrayCuentas[i])
            }
        }
        return nuevoArray

    },
    // Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
    menores: function(){
        let nuevoArray = []
        for(let i=0; i<arrayCuentas.length; i++){
            if(30 > arrayCuentas[i].edadTitular){
                nuevoArray.push(arrayCuentas[i])
            }
        }
        return nuevoArray

    },
    // Obtener la cuenta con el titular de la misma más joven.
    másJoven: function(){
        let menor = 0
        for(let i=0; i<arrayCuentas.length; i++){
            if(menor > arrayCuentas[i].edadTitular){
                menor = this.clientes[i] 
            }
        }
        return menor
    },
    // Obtener un array con las cuentas habilitadas.
    cuentaHabilitada: function(){
        let nuevoArray = []
        for(let i=0; i<arrayCuentas.length; i++){
            if(true == arrayCuentas[i].estaHabilitada){
                nuevoArray.push(arrayCuentas[i])
            }
        }
        return nuevoArray
    },
    // Obtener un array con las cuentas deshabilitadas.
    cuentaDeshabilitada: function(){
        let nuevoArray = []
        for(let i=0; i<arrayCuentas.length; i++){
            if(false == arrayCuentas[i].estaHabilitada){
                nuevoArray.push(arrayCuentas[i])
            }
        }
        return nuevoArray
    },
    // RESOLVER - Obtener la cuenta con el mayor saldo.
    mayorSaldo: function(){
        let mayor = 0
    for(let i =0;i<=arrayCuentas.length;i++){
        if(clientes.arrayCuentas[i].saldo > mayor){
            mayor = this.clientes[i]
        }
    }
    return mayor
    }
}

console.log(clientes.mayorSaldo())