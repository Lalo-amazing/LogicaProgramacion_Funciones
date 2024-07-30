/*
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function f1() {
  console.log("Hola mundo!");
}
f1();

let name = prompt("Ingresa tu nombre");
console.log("Tu nombre es " + name);
function f2(name) {
  console.log("Hola " + name);
}
f2(name);

let number = parseInt(prompt("Ingresa un numero"));
function f3(number) {
  console.log("El numero asignado fue " + number);
  let n = number * 2;
  console.log("El doble del numero es " + n);
}
f3(number);

let n1, n2, n3, i;
n1 = parseFloat(prompt("Ingresa un numero"));
n2 = parseFloat(prompt("Ingresa un numero"));
n3 = parseFloat(prompt("Ingresa un numero"));
function f4(n1, n2, n3) {
  let prom = (n1 + n2 + n3) / 3;
  console.log("El promedio es " + prom);
}
f4(n1, n2, n3);

let num1 = parseInt(prompt("Ingresa un numero: "));
let num2 = parseInt(prompt("Ingresa otro numero: "));
function f5(num1, num2) {
  if (num1 > num2) {
    console.log("El primer numero es mayor es decir: " + num1 + " > " + num2);
  } else {
    if (num1 < num2) {
      console.log(
        "El segundo numero es mayor es decir: " + num2 + " < " + num1
      );
    } else {
      console.log("Ambos numeros son iguales :" + num1 + " == " + num2);
    }
  }
}
f5(num1, num2);

let number1 = parseInt(prompt("Ingresa un numero bro: "));
function f6(number1) {
  number1 = number1 * number1;
  console.log("La multitplicación del mismo numero es: " + number1);
  return;
}
f6(number1);
