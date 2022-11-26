//CONDICIONALES - Clase

//Declaremos una variable con el nombre dato y asignémosle un valor booleano. Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true". Caso contrario, que imprima por consola "es false".

let dato = true
if(dato == true){
    console.log("Es true")
}else{
    console.log("Es false")
}

//En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".

let lenguaje1 = "javascript"
if(lenguaje1 ==="javascript"){
    console.log("Estoy aprendiendo")
}else{
    console.log("lo aprendere más tarde")
}

//Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.

function puedePasar(nombre) {
    if(nombre == "Cosme Fulanito"){
        return false
    }else{
        return true
    }
    
}


//EJERCICIOS - 

//Funcion puede subir
function puedeSubir(altura, acompañada, penalizado){
    if(!penalizado){
    if(altura >= 1.40 && altura <= 2.00){
        return "Puede subir"
    }else if(altura < 1.40 && altura > 1.20 && acompañada==true){
        return "Puede subir"
    }else{
        return "No puede subir"
    }
    }
}

console.log(puedeSubir(1.22, true, true))

//Ejercicio de clima
let clima = "Soleado";
let día = "Lunes";

if(clima == "Soleado" && día == "domingo"){
    console.log("lindo dia para pasear");
}else if (clima == "Soleado" && día == "Martes"){
    console.log("Prodia salir igual");
}else{
    console.log("mejor me quedo en casa practicando JS");
}

//Ejemplo 2

let edad = 17;
let acceso = "";

if (edad < 19){
    acceso = "prohibido";
}else if(edad >=16 && edad <= 18){
    acceso = "permitido solo acompañado de un mayor"
}else{
    acceso = "Permitido"
    console.log(acceso);
}

//ejercicios
let lenguaje = "javascript";
if (lenguaje == "javascript"){
    console.log("Estoy aprendiendo")
}else{
    console.log("Lo aprenderé más adelante")
}

//ejercicio2

function puedePasar(nombre) {
    if(nombre == "Cosme Fulanito"){
        return false
    }else{
        return true
    }
    
}
//ejercicio 3
function tablaDeMultiplicar(numero) {
	let i = 1;
	while (i<=10){
		console.log(numero + " * " + i + " = " + numero * i);
		i++
	};  
}

