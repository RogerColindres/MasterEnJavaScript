/*hacer un porgrama que muestre todos los numeros divisores de un 
numero introducido por el usuario*/

var numero = parseInt(prompt("Introduce un numero", 0));

for (var i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("El numero: " + i + " es divisor de " + numero);
    }
}