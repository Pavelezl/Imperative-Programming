 //Funcion expresada

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}

console.log(sumar(5, 9));

//Funcion declarada
function restar(numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(8, 5));


//Scope local
function Hola(){
    let saludo = "Hola, que tal?"
        return saludo;
}
console.log(Hola());

//Scope Gobal

let elMejorlenguaje = "Javascript, es lo más"
    function estoyAprendiendo(){
        return elMejorlenguaje
    }

console.log(elMejorlenguaje);

//Ejemplo 

let mensaje = "Hola"

function saludo(){
    let mensaje = "chau"; 
    return mensaje;
}

console.log(saludo());

//Un operador matematico como + también puede ser usado para unir 2 strings.

function saludar(nombre){
    const mensaje = "Hola, tanto tiempo sin verte"
    console.log(mensaje + nombre);
}
saludar(" Ezequiel")
saludar(" pablo")