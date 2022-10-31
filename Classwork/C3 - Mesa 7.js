let edad = 17 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

if(edad < 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}if(edad == 21){
    console.log("felicidades por ser mayor de edad!")
}else if((edad%2)==0){
    console.log("¿Sabías que tuedad es impar?.!")
}else if(edad < 18) {
    console.log("No puede pasar al bar.")
}else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}else {
    console.log("Puede pasar al bar y tomar alcohol.")
}

//Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.
function totalAPagar(vehiculo,litrosConsumidos){
    if (litrosConsumidos > 0 && litrosConsumidos < 25){
        if (vehiculo == "coche"){
            return litrosConsumidos * 86 + 50
        }
        else if (vehiculo == "moto"){
            return litrosConsumidos * 70 + 50
        } else if (vehiculo == "autobus"){
            return litrosConsumidos * 55 + 50
        }
    }
    else if (vehiculo == "coche"){
        return litrosConsumidos * 86 + 25
    } else if (vehiculo == "moto"){
        return litrosConsumidos * 70 + 25
    } else if (vehiculo == "autobus"){
        return litrosConsumidos * 55 + 25
    }
}

console.log(totalAPagar("autobus",28));

//Local de sándwiches
function subway(sandwich, tipoDePan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let valorSandwich = 0;
    let cosasEnElSandwich = ""
    if(sandwich == "Pollo") {
        valorSandwich += 150;
        cosasEnElSandwich += "Pollo";
    }
    else if(sandwich == "Carne"){
        valorSandwich += 200;
        cosasEnElSandwich += "Carne "
    }
    else if(sandwich == "Vegetariano") {
        valorSandwich += 100;
        cosasEnElSandwich += "Vegetariano "
    }
    if(tipoDePan == "Blanco") {
        valorSandwich += 50;
        cosasEnElSandwich += " blanco";
    }
    else if(tipoDePan == "Negro") {
        valorSandwich += 60;
        cosasEnElSandwich += " negro";
    }
    else if(tipoDePan == "s/gluten") {
        valorSandwich += 75;
        cosasEnElSandwich += " s/gluten";
    }
    if(queso) {
        valorSandwich += 20;
        cosasEnElSandwich += " queso";
    }
    if(tomate) {
        valorSandwich += 15
        cosasEnElSandwich += " tomate"
    }
    if(lechuga) {
        valorSandwich += 10
        cosasEnElSandwich += " lechuga"
    }
    if(cebolla) {
        valorSandwich += 15
        cosasEnElSandwich += " cebolla"
    }
    if(mayonesa) {
        valorSandwich += 5
        cosasEnElSandwich += " mayonesa"
    }
    if(mostaza) {
        valorSandwich += 5
        cosasEnElSandwich += " mostaza"
    }
return "Tu sandwich que contiene: " + cosasEnElSandwich
}

console.log(subway("Pollo", "Blanco", true, true, true, true, true, true));


