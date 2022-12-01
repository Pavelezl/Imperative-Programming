// Ejercicios de Objetos

//crear un array llamado mascotas

//dentro de ese array crearemos un objeto literal de cada mascota: cada objeto debe tener:
//nombre, raza, edad, sonido y un metodo que retorne ese sonido 2 veces. 

let mascotas = [
    {
        nombre: "paco",
        raza: "chitzu",
        edad: 3,
        sonido: "guau guau",
        sonido2: function(){
        return this.sonido + this.sonido;
        }
    },{
        nombre: "Riki",
        raza: "Callejero",
        edad: 6,
        sonido: "woof woof",
        sonido2: function(){
        return this.sonido + this.sonido;
        }
    },{
        nombre: "Margarita",
        raza: "tortuga",
        edad: 32,
        sonido: "jjjj",
        sonido2: function(){
        return this.sonido + this.sonido;
        }
    },
];

console.log(mascotas[0].sonido2())

//funcion que se le sume 1 año a cada animal.

function aumentarEdad(){
    for(i=0;i<mascotas.length;i++){
        mascotas[i].edad++
    }
}

aumentarEdad();
console.log(mascotas)

//Ahora debemos crear otra funcion que se llame aumentar edad2, que va a hacer otro trabajo:
// si la mascota tiene menos de 6 años, debe aumentar su edad en 1. 
//si la mascota tiene entre 6 a 10 años, debe aumentar su edad en 2. 
// si la mascota tiene edad mas de 10 años, debe sumarle la mitad de su edad. 

function aumentarEdad2(){
    for(i=0;i<mascotas.length;i++){
        if(mascotas[i].edad<6){
            mascotas[i].edad++
        }else if(mascotas[i].edad>=6 && mascotas[i].edad <= 10){
            mascotas[i].edad = mascotas[i].edad + 2;
        }else if (mascotas[i].edad >10){
            mascotas[i].edad = mascotas[i].edad + (mascotas[i].edad / 2)
        }
    }
}
aumentarEdad2()
console.log(mascotas)

//Deberas crear una funcion llamada loopDeParesque reciba como parametro un numero y haga un loop de 0 a 100
// mostrando en la consola cada numero del loop. En caso de que el numero de la interación sumado al numero pasa por parametro
// sea par , mostrara por consola " el numero x es par"

function loopPares(num){
    for(let i=0;i<=100;i++){
        if( (num + i) % 2 === 0){
            console.log("el numero: " + (num + i) + "es par");
        }else{
            console.log(i);
        }
    }
}