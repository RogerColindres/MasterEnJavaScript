/*utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado*/
var suma = 0;
var contador = 0;


do {
    var numero = Number(prompt("Introduce numeros positivos hasta que introduscas un negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
        contador--;
    } else if (numero >= 0) {
        suma = suma + numero;
        contador++;
    }

} while (numero >= 0);


console.log(suma, contador);
var media = (suma / contador);
console.log(media)