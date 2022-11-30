// OBJETOS LITRALES

let persona = {
    nombre: "juan pablo",
    edad: 29,
    esMayorDeEdad: true,
    saludar: function(){
        return "hola como vas " + this.nombre + "?";
    }
}

//deberas modificar la propiedad de nombre por el tuyo a travez de la anotación del punto. 
//deberas agregar una nueva propiedad con la clave "profesion" y valor programador a traves de la anotación punto. 

persona.nombre = "pablo";
console.log(persona);

persona.profesion = "Programador";
console.log(persona);
console.log(persona.saludar())

//Debes crear una funcion llamada arregloDeObjetosque reciba un numero como parametro y devuelva un arreglo de objetos que tenga una propirdad llamada valor que contenga el valor del numero y sus anteriores. 

function arregloDeObjetos(num){
    let array = []
    for(let i = 1; i <= num; i++){
        array.push({
            prop: i
        })
    }
    return array
}

console.log(arregloDeObjetos(5))


//Otra manera de hacerlo guardando el arreglo en una variable. 
let arreglo2objetos = arregloDeObjetos(2)
console.log(arreglo2objetos);