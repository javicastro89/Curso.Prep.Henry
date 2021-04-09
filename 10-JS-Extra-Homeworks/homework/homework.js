// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  for (i in objeto) {
    matriz.push([i, objeto[i]]);
  } return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let miObjeto = {};
  for (let i = 0; i < string.length; i++) {
    if (miObjeto[string[i]] === undefined) {
      miObjeto[string[i]] = 1;
      }
    else {
      miObjeto[string[i]] = miObjeto[string[i]] + 1;
    } 
 } return miObjeto;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let s2 = '';
  let s3 = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      s2 += s[i];
    } else {
      s3 += s[i];
    }
  } return s2 + s3;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  // let mirror = '';
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === ' ' || i === str.length - 1) {
  //     for (let j = i - 1; j >= 0; j--) {
  //       if (str[j] === ' ') {
  //         break
  //       } if (j === str.length - 2) {
  //         mirror += str[j + 1];
  //       }
  //       mirror += str[j];
        
  //     }
  //     if (i !== str.length - 1) {
  //       mirror += ' ';
  //     }
  //   }
  // } return mirror
  let mirror = str.split(' ').map(function(elemento) {
    return elemento.split('').reverse().join('')
  }).join(' ')
  return mirror
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // let num = ''
  // for (let i = numero.toString().length - 1; i >= 0; i--) {
  //   num += numero.toString()[i];
  // }
  // if (num === numero.toString()) {
  //   return 'Es capicua';
  // } return 'No es capicua';
  let num = numero.toString();
  let cadena = num.split('').reverse().join('')
  if (cadena === num) {
    return 'Es capicua';
  } return 'No es capicua';

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = ''
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i].toUpperCase() !== 'A' && cadena[i].toUpperCase() !== 'B' &&
        cadena[i].toUpperCase() !== 'C') {
          nuevaCadena += cadena[i];
        }
  } return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let aux = arr [i];
        arr[i] = arr[j]
        arr[j] = aux
      }
    }
  } return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let nuevoArray = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArray.push(arreglo1[i]);
        break;
      }
    }
  } return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

