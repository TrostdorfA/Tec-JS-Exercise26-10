// Crear una funcion que tome dos parametros y devuelva un console.log() con el resultado de la suma dentro del bloque de ejecucion de la funcion. Invocar la funcion al menos 3 veces.
function suma(a, b) {
  console.log(a + b);
}
console.log("Funcion suma");
suma(1, 2);
suma(8, 52);
suma(256, 46);

//Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la resta dentro del bloque de ejecución de la función.
function resta(a, b) {
  console.log(a - b);
}
console.log("Funcion resta");
resta(10, 5);
resta(42, 7);
resta(125, 89);

//Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la multiplicación dentro del bloque de ejecución de la función.
function multiplicacion(a, b) {
  console.log(a * b);
}
console.log("Funcion multiplicacion");
multiplicacion(2, 3);
multiplicacion(5, 6);
multiplicacion(10, 20);

//Crear una función que tome dos parámetros y devuelva un console.log() con el resultado de la división dentro del bloque de ejecución de la función.
function division(a, b) {
  console.log(a / b);
}
console.log("Funcion division");
division(10, 2);
division(100, 10);
division(500, 50);

//Crear un array con al menos cinco frutas y crear una funcion que recorra el array al ser invocada, devolviendo los nombres de las frutas por consola, dentro del bloque de ejecucion.
let frutasArray = ["manzana", "pera", "banana", "naranja", "sandia"];
function frutas() {
  for (let i = 0; i < frutasArray.length; i++) {
    console.log(frutasArray[i]);
  }
}
console.log("Funcion frutas:");
frutas();

//Crear una funcion que recorra un array de diez animales y devuelva los nombres por consola dentro del bloque de ejecucion.
function animales() {
  let animalesArray = [
    "perro",
    "gato",
    "conejo",
    "hamster",
    "pez",
    "loro",
    "tortuga",
    "serpiente",
    "iguana",
    "pajaro",
  ];
  for (let i = 0; i < animalesArray.length; i++) {
    console.log(animalesArray[i]);
  }
}
console.log("Funcion animales:");
animales();

//Crear una funcion que permite reducir los puntos 1 al 4 en una sola funcion, por lo cual debera tomar tres parametros: Los valores a procesar y la operacion aritmetica a resolver.
function operaciones(a, b, operacion) {
  switch (operacion) {
    case "suma":
      console.log(a + b);
      break;
    case "resta":
      console.log(a - b);
      break;
    case "multiplicacion":
      console.log(a * b);
      break;
    case "division":
      console.log(a / b);
      break;
    default:
      console.log("Operacion invalida");
      break;
  }
}

console.log("Funcion operaciones:");
operaciones(20, 5, "suma");
operaciones(525, 25, "resta");
operaciones(3, 56, "multiplicacion");
operaciones(4300, 2, "division");

//Crear una funcion que tome el primer elemento del array obtenido en https://jsonplaceholder.typicode.com/users y que retorne el nombre del usuario con su correo.
function usuario() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      console.log(`Nombre: ${json[0].name} - Correo: ${json[0].email}`);
    });
}
console.log("Funcion usuario:");
usuario();

//Pedirle cinco numeros al usuario, almacenarlos para luego crear una funcion que los ordene de menor a mayor y otra funcion que los ordene de mayor a menor.
let numerosArray = [];
for (let i = 0; i < 5; i++) {
  numerosArray.push(parseInt(prompt("Ingrese un numero:")));
}
console.log(`Numeros ingresados: ${numerosArray}`);
function ordenarAscendente() {
  numerosArray.sort((a, b) => a - b);
  console.log(`Numeros ordenados de menor a mayor: ${numerosArray}`);
}
function ordenarDescendente() {
  numerosArray.sort((a, b) => b - a);
  console.log(`Numeros ordenados de mayor a menor: ${numerosArray}`);
}
console.log("Funcion ordenarAscendente:");
ordenarAscendente();
console.log("Funcion ordenarDescendente:");
ordenarDescendente();

//¿Que son los eventos en JavaScript? Buscar informacion y debatir sobre el funcionamiento de: onclick, onchange, onkeydown, onmouseover, onsubmit y onscroll.
//onclick: Se ejecuta cuando se hace click sobre un elemento.
//onchange: Se ejecuta cuando se cambia el valor de un elemento.
//onkeydown: Se ejecuta cuando se presiona una tecla.
//onmouseover: Se ejecuta cuando el mouse pasa sobre un elemento.
//onsubmit: Se ejecuta cuando se envia un formulario.
//onscroll: Se ejecuta cuando se hace scroll sobre un elemento.

//Crear una funcion que cambie una cadena de texto a minusculas (sin importar el formato de ingreso).
function minusculas(cadena) {
  console.log(cadena.toLowerCase());
}
console.log("Funcion minusculas:");
minusculas("Hola MUNDO, como estas? Me llAmo AnDRES y TEngo 25 AÑOS.");

//Crear una funcion a gusto que resuelva un problema que gusten.
function problemaAgusto() {
  let numero = parseInt(prompt("Ingrese un numero:"));
  let resultado = 0;
  for (let i = 1; i <= numero; i++) {
    resultado += i;
  }
  console.log(`La suma de los numeros del 1 al ${numero} es: ${resultado}`);
}
console.log("Funcion problemaAgusto:");
problemaAgusto();

// Darle estilo a un console.log() con CSS.
console.log("%c Fin del ejercicio", "color: blue; font-size: 20px;");
