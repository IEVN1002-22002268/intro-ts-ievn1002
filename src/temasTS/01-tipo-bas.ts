console.log("Hola mundo");

//declaración de variables, es un lenguaje altamente tipado
var num1 = 23;
let num2 = 65;
const num3 = 22;

//indicamos el tipo de dato
let nombres:string
let num:number
let activo:boolean

let sum:number = num1 + num2 + num3;
console.log("La suma es: " + sum);

//una variable puede ser más de un tipo de dato, por ej: tipo numero y string
let matricula:number|string
matricula=123456;
matricula="AH491"

console.log(matricula)