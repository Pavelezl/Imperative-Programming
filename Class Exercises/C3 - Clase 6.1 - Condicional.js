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