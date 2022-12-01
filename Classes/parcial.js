/*Ejercicio 1*/

/*Doble de un numero */

function doble(num){
    return num*2
}

console.log(doble(21));

/* Multiplicación de dos numeros */

function multiplicacion(num1,num2) {
    return num1 * num2
}

console.log(multiplicacion(5,6));

/*  División */

function division(numero1, numero2){
    if (numero1 !== 0 && numero2 !== 0){
        return numero1 / numero2
        }   
    } 

console.log(division(10,2));

/* Ejercicio 2 */

/* Parte 1 */
let ciclista = {
    nombre : 'Rodrigo',
    apellido : 'Benitez',
    edad : 22,
    tieneBici : true
}

/* Parte 2 */ 
function puedeCompetir(obj){
    if (obj.edad >= 18 && obj.tieneBici === true) {
        return "Puede competir"
    } else if(obj.tieneBici === true && obj.edad < 18) {
            return "podra competir pero con un adulto acompañante"
    } else return "no podra competir"
}

console.log(puedeCompetir(ciclista));

// /* Ejericio 3 */

/* Parte 1 */
let competidores = [];

/* Parte 2 */ 

    let competidor1 = {
        nombre: 'Juan',
        edad: 42,
        kilometrosRecorridos: 80,
   }

    let competidor2 = {
        nombre: 'Sofia',
        edad: 22,
        kilometrosRecorridos: 90
   }

    let competidor3 = {
        nombre: 'Maria',
        edad: 45,
        kilometrosRecorridos: 70
    }


/* Parte 2 a - Agregandolos al array */
competidores.push(competidor1)
competidores.push(competidor2)
competidores.push(competidor3)

/* Parte 2 b - Mostrando en consola el array con los objetos*/
console.log(competidores);

/* Parte 3 */
function competencia100Km (array){
    for (let i = 0; i < array.length; i++) {
            array[i].kilometrosRecorridos += 100;
    }
}

/* Parte 4 */
console.log(competidores);
console.log(competencia100Km(competidores));
console.log(competidores);