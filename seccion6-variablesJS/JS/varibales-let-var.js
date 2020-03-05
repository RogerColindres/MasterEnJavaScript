//en JS se pueden las variables de dos formas var y let
//diferencia 
//let limita variables al bloque de declaracion donde se esta utilizando
//var  define una variable global o local sin importar el ambito del bloque

//prueba con var
//varible global
var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

//prueba con let
//variable local por codigo de bloque

let texto = "curso JS";
console.log(texto);

if (true) {
    let texto = "curso nuevo de laravel5";
    console.log(texto);
}

console.log(texto);