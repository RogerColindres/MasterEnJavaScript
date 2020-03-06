/*hacer una tabla de multiplicar de un numero introducido por pantalla*/

var numero = parseInt(prompt("Introduce un numero", 0));

for (var i = 1; i <= 10; i++) {
    console.log(numero * i);
}

/*todas las tablas de multiplicar*/
for (var j = 1; j <= 10; j++) {
    document.write("<h1> Tabla del " + j + "</h1>");
    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + j + " = " + (j * i) + "<br>");
    }
}