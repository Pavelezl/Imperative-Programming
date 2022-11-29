//ARRAYS Y COLECIONES

// 0. arrays
let alumno1 = "Agustin";
let alumno2 = "Pablo";
let alumno3 = "Martina";
let alumno4 = "Flor";

let alumno = ["Agustin", "Pablo", "Martina", "Flor"];

console.log(alumno[3])

// 1. Tenemos un array con palabras sueltas que, juntas, forman una gran frase. Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];
let fraseNueva = arrayFrase.join(" ");
console.log(fraseNueva);

//Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.

let estudiantes = [
    {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
    },
    {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
    },
    {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
    },
]

estudiantes.push({
    nombre: "Juan",
    promedio: 5,
    curso: "ios"

},{
    nombre: 'miguel',
    promedio : 2,
    curso : 'android',
})

console.log(estudiantes)

// 1. Crear la estructura adecuada para guardar las siguientes películas: "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[3])

//2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.

function mayusculas(array) {

    for (let i = 0; i < peliculas.length; i++) {
        array[i] = array[i].toUpperCase()
    }
    return array
}

console.log(mayusculas(peliculas))

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay quen crear otra estructura similar a la primera, pero con las siguientes películas animadas:"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite" Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.

let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function agregar(array, array2) {
    for (let i = 0; i < array2.length; i++) {
        array.push(array2[i])
    }
    return peliculas
}

console.log(agregar(peliculas,animadas))

//Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.

function agregar(array, array2) {
    array2.pop()
    for (let i = 0; i < array2.length; i++) {
        array.push(array2[i])
    }
    return peliculas
}

console.log(agregar(peliculas,animadas))

// Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
// Te piden crear una función que compare las calificaciones e indique si son igualeso diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacion(primerArray, segundoArray) {
    for (let i = 0; i < primerArray.length; i++) {
        if (primerArray[i] == segundoArray[i]) {
            console.log('iguales')
        } else {
            console.log('diferentes')
        }
    }
}

comparacion(asiaScores, euroScores);