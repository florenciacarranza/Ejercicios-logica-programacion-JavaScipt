/*Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error personalizado a la consola.*/

function operacionesAritmeticas(num1 = 0, num2 = 0, operacion) {
  switch (operacion) {
    case "sumar":
      return num1 + num2;
      break;
    case "restar":
      return num1 - num2;
      break;
    case "multiplicar":
      return num1 * num2;
      break;
    case "dividir":
      return num1 / num2;
      break;
    default:
      console.error("error");
      break;
  }
}

/*Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.*/

function numPares(a, b) {
  const array = [];

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      array.push(i);
    } else {
      continue;
    };
  }
  return array;
}
//Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.*/

 function multiplicar (a,x){
    for( let i = 0; i<=x; i++){
    
        if (i === 5){continue;}

        console.log( `${a} x ${i} = ${a * i}`);


    }
}


 
//Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100.

const arreglo = [];

for (let i =1 ; i<=100; i++){

  arreglo.push (i);

};


function multiploDeTres (array){

 const filtrar = array.forEach(element => {
  
  if ( element % 3 === 0){
    console.log (element)
  }
 });



}
