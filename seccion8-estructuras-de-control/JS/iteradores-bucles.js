//bucle for
//estructura de control que se repite varias veces

for (var i = 0; i <= 2; i++) {
    console.log(i);
}

//bucle while
var anio = 2018;
while (anio <= 2030) { //se cumple la condicion cuado es verdadera pasa al bloque de codigo
    console.log("estamos en el año: " + anio);
    anio++;
}

//blucle do-while
var years = 15;

do {
    console.log("Solo cuando sea diferente a 20");
    console.log(years)
    years++;
} while (years != 20);