/*Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario*/
var numero1 = parseInt(prompt("Ingrese el valor del primer numero: ", 0));
var numero2 = parseInt(prompt("Ingrese el valor del segundo numero: ", 0));

console.log(numero1, numero2);

while (numero1 < numero2) {
    numero1++;

    if (numero1 % 2 != 0) {
        console.log("El numero " + numero1 + " es impar");
    }
}