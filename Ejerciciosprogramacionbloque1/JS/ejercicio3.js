/*hacer un programa que muestro todos los numeros, entre dos 
numeros introducidos por el usuario*/

var numero1 = prompt("Ingrese el valor del primer numero: ");
var numero2 = prompt("Ingrese el valor del segundo numero: ");

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = prompt("Ingrese el valor del primer numero: ");
    numero2 = prompt("Ingrese el valor del segundo numero: ");

}

if (numero1 == numero2) {
    alert("Los numeros son iguales no existe intervalo entre ellos");
} else if (numero1 > numero2) {
    for (var i = numero2; i <= numero1; i++) {
        console.log(i);
        document.write(i + "<br>");
    }

} else {
    for (var i = numero1; i <= numero2; i++) {
        console.log(i);
        document.write(i + "<br>");
    }
}