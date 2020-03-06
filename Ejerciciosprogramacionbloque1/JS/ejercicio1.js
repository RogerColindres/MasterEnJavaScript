'use strict'
/*un programa que pidas dos numeros y diga cual es menor, mayor o iguales*/


var numero1 = prompt("Ingrese el valor del primer numero: ");
var numero2 = prompt("Ingrese el valor del seundo numero: ");

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = prompt("Ingrese el valor del primer numero: ");
    numero2 = prompt("Ingrese el valor del seundo numero: ");
}

console.log(numero1, numero2);

if (numero1 == numero2) {
    alert("Los numeros son iguales");
} else if (numero1 > numero2) {
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);

} else if (numero2 > numero1) {
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: " + numero1);
} else {
    alert("Introduce numeros correctos");
}