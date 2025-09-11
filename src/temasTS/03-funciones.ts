//Vamos a definir funciones, pueden recibir y regresar parámetros, y combinarlas
//en los parametros definir el tipo de dato
//despues del (), poner :number para que sepa que regresa un tipo numérico
function sumar(a:number, b:number):number
{
    return a+b
}

const resultado = sumar(4,3);
console.log("El resultado es: " + resultado)

//Definir otra funcion. 
function multiplicar(n1:number, onumber?:number, base:number=6):number
{
    return n1 * base;
}
console.log(multiplicar(3));
console.log(multiplicar(3,5));
console.log(multiplicar(3,3,4));

//Funciones TIPO FLECHA, en el resultado, es para imprimir resultados multilinea
const addNumberArrow=(a:number,b:number):string=>{return `${a+b}`}

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}
function mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad += x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}

const nuevaMascota:Mascotas={
    nombre:"firulais",
    edad:5,
    raza:"pastor aleman",
    vacunado:true,
    mostrarEdad() {
        console.log(`la edad de ${this.nombre} es ${this.edad} y su raza es ${this.raza}`);
    },
}
mostrarMascota(nuevaMascota,2);