// Ejercicio 1

let ecommerce = [
    {
        nombre: "Samsung TV",
        precio: 6000,
        cantidad: 10
    },
    {
        nombre: "DELL notebook",
        precio: 4000,
        cantidad: 30
    },
    {
        nombre:"Auriculares Sony",
        precio: 1500,
        cantidad: 15
    },
    {
        nombre:"Monitor Philips",
        precio:12000,
        cantidad: 20
    },
    {
        nombre:"Teclado logitech",
        precio: 3000,
        cantidad: 5
    }
];

function agregar(arr) {
    for (let i = 0; i < arr.length; i++) {
            arr[i].total = arr[i].precio * arr[i].cantidad 
        }
    } 


console.log(ecommerce);
agregar(ecommerce);
console.log(ecommerce);

// ejericio 2

let paises = [
    {
    nombre: "Argentina",
    continente: "Sudamerica",
    poblacion: 40000000
    },
{
    nombre: "Colombia",
    continente: "Sudamerica",
    poblacion: 50372000
    },
    {
    nombre: "Brasil",
    continente: "Sudamerica",
    poblacion: 300000000
    },   {
        nombre: "Venezuela",
        continente: "Sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "Chile",
        continente: "Sudamerica",
        poblacion: 10000000
    }

    ];

function ordenarPorPoblacion(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].poblacion < arr[j + 1].poblacion) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]= temp;
            }
        }
    }
} 
console.log(paises);
console.log(ordenarPorPoblacion(paises));
console.log(paises);


// ejercicio 3

//parte a

let matriz = [
    [12, 5, 6, 20, 40, 54, 2, 90, 76, 23],
    [1, 11, 14, 89, 100, 43, 56, 90, 23, 19],
    [6, 7, 8, 99, 3 ,34, 33, 65, 92, 12],
    [10, 30, 43, 58, 71, 76, 96, 105, 66, 79],
    [21, 68, 32, 110, 500, 78, 97, 45, 50,15],
    [47, 120, 52, 21, 28, 200, 83, 17,84, 34],
    [32,58,64, 65, 1000,432, 74,12, 42, 63],
    [106, 54,34,17, 854, 99, 130, 43, 51,93],
    [88, 78,35,400, 333, 178,208,856,900,345]
]

// parte b

function sumarMultiplos(mat){
    let suma = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if ( mat[i][j] % 3 === 0){
                suma += mat[i][j];
            } 
        }
    }
    return suma
}

console.log(sumarMultiplos(matriz));

// parte c
function modificarValorPorString(matri) {
    for (let i = 0; i < matri.length; i++) {
            matri[i][5] = 'esto es la columna 5'
    }
}

// console.table(modificarValorPorString(matriz));

