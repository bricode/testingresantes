'use strict'

/*

Inicio
  Dividir la cadena en un array
  Convertir valores de array a codigo ascci
  Odernar array alfaveticamente
  Comprovar si hay coincidencias entre los valores
  Devolver coincidencias

Fin

*/


var cadena = 'hola, que buena ola Laomir';
var subCadena = 'oal';

console.log(solucion(cadena, subCadena));


function solucion(cadena, subCadena) {
  var coincidencias = 0;
  var cadenaPrincipal = getCodeChar(cadena);
  var cadenaSecundaria = getCodeChar(subCadena)[0];
  var match = 0;
  for (var i = 0; i < cadenaSecundaria.length; i++) {

      for (var j = 0; j < cadenaPrincipal.length; j++) {

        for (var k = 0; k < cadenaPrincipal[j].length; k++) {
          if(cadenaSecundaria[i] == cadenaPrincipal[j][k]) {
            match++;
            if(match == cadenaSecundaria.length) {
              coincidencias++;
              match = 0;
            }
          }
        }
      }
  }
  return coincidencias;
}


// obtiene codigos ascci y los ordena
function getCodeChar(cadena) {
  var arrayDeCadenas = cadena.toLowerCase().split(' ');
  var cadenaOrdenada = [];
  var aux = [];
  for (var i = 0; i < arrayDeCadenas.length; i++) {
    for (var j = 0; j < arrayDeCadenas[i].length; j++) {
      aux.push(arrayDeCadenas[i].charCodeAt(j));
    }
    cadenaOrdenada.push(aux.sort(function (a,b) {
      return a - b;
    }));
    aux = [];
  }
  return cadenaOrdenada;
}


// Convierte codigo Ascci a una cadena ordenada alfaveticamente
function toStrinFromCode(codigoAscci) {
  var cadenaOrdenada = [];
  var cadenaAux = [];
  for (var i = 0; i < codigoAscci.length; i++) {
    for (var j = 0; j < codigoAscci[i].length; j++) {
      cadenaAux.push(String.fromCharCode(codigoAscci[i][j]));
    }
    cadenaOrdenada.push(cadenaAux.join(''));
    str = [];
  }
  return cadenaOrdenada;
}
