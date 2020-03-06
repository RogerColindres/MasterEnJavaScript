/*Hacer un programa que nos diga si un numero es par o impar
1.ventana prompt
2.validacion*/

var numero = parseInt(prompt("Introduce un numero", 0));

while (numero <= 0 || isNaN(numero)) {
    numero = prompt("Ingrese el valor del primer numero: ");
}

if (numero % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}