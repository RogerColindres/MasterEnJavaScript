//condicional if estructuras de compracion

//si pasa esto
var edad = 18;
var nombre = "Pedro Picapiedra";

/*operadores relacionales
mayor >
menor <
mayor o igual >=
menor o igual <=
igual ==
distinto !=*/

/* if (edad >= 18) {
    console.log(nombre + " tiene: " + edad + " años, es mayor de edad");
    if (edad <= 33) {
        console.log("Eres de este milenio");
    } else if (edad >= 70) {
        console.log("Eres ansiano");
    } else {
        console.log("No eres de este milenio")
    }
} else {
    11
    console.log(nombre + " tiene: " + edad + " años, es menor de edad")
} */

//condicionales con operadores logicos 
//operadores logicos
// y = && 
//o = ||
//negacion = !

var year = 2018;
//negacion

if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

//operador and
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("estamos en la era post moderna");
}

//or
if (year == 2008 || year || 2018) {
    console.log("El año acaba en 8");
} else {
    console.log("El año no acaba en 8");
}

//condicional switch

switch (edad) {
    case 18:
        console.log('Tienes la mayoria de edad');
        break;
    case 25:
        console.log('ya eres un adulto');
        break;

    case 40:
        console.log('Crisis de los cuarenta');
        break;
    default:
        console.log("Edad no registrada");
        break;
}