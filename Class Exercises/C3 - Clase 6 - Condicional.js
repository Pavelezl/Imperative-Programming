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