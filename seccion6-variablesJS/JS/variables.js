 /* 'use strict' modo de escritura de variables estricta*/
 /*trabajremos con variables*/
 /*una variable es un contenedor de informacion*/

 var pais = "Honduras";
 var continente = "America";
 var antiguedad = 2019;

 pais = "España";
 continente = "Europa"

 var pais_y_continente = pais + " " + continente;
 console.log(pais, continente, antiguedad);
 console.log(pais_y_continente);
 alert(pais_y_continente);

 //en JS se pueden las variables de dos formas var y let
 //diferencia 
 //let limita variables al bloque de declaracion donde se esta utilizando
 //var  define una variable global o local sin importar el ambito del bloque