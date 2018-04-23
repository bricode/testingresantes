'use strict'

// Algoritmo
/*

  Inicio
  ingresar array A
  ingresar array B
  ingresar array C
  Formar tablones a partir de A y B
  TABLONES -> [A[k], B[k]];
  CONTADOR_DE_CLAVOS -> 0;
  comprobar si C[j] se encuentra en el rango de TABLONES[i]
  SI
    TABLONES > CONTADOR_DE_CLAVOS
      retornar -1
  SI NO
    retornar CONTADOR_DE_CLAVOS
  FIN

*/

/////////////////////////////////////////
// INICIO DEL CÓDIGO

// Array que marcar el inicio del tablón
var A = [1, 4, 5, 8];
// Array que marcar el fin del tablón
var B = [4, 5, 9, 10];

// posision en que son clavados los clavos.
var C = [4, 6, 7,10];

// contador de cantidad de clavos
var contadorDeClavos = 0;

// se invoca la funcion solucion()
solucion(A,B,C);

function solucion(inicio, fin, posClavos) {
  var tablones = crearTablones(inicio, fin);
  var clavar =  clavarTablones(tablones, posClavos);
  if(clavar == (-1)) {
    console.log('No se pueden clavar todos los tablones');
    console.log(clavar);
  } else {
    console.log('Los clavos necesarios son: ', clavar);
  }
  return clavar;
}

// retorna la cantidad de clavos necesarios para clavar todos los tablones
function clavarTablones(tablones, posClavos) {
  for (var i = 0; i < tablones.length; i++) {
    for (var j = 0; j < posClavos.length; j++) {
      if((posClavos[j] >= tablones[i][0] && posClavos[j] <= tablones[i][1]) ) {
        contadorDeClavos++;
        break;
      }
    }
  }
  if(tablones.length > contadorDeClavos) {
    return (-1);
  }
  return contadorDeClavos;
}

// crea los tablones a partir de los array A y B
function crearTablones(inicio, fin) {
  var tablones = [];
  for (var k in inicio) {
    tablones.push([inicio[k], fin[k]]);
  }
  return tablones;
}
