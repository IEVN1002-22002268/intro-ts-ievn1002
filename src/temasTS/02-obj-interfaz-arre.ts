//objetos, interfaces y arreglos
//Intefaz: Define propiedades para un objeto y definiciones de métodos

//Definir interfaz en SINGULAR
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number; //Asi se pone una variable opcional
}

//objeto a partir de una interfaz, implementar las propiedades que tiene en la misma con su valor
const alumno:Alumno={
    nombre:"Mario",
    apellido:"López",
    edad: 19,
    email: "mariolopez@gmail.com",
    //nota:""
}

console.table(alumno)

//Vamos a hacer un arreglo, una sola variable tiene varios valores
let mascotas=['perro', 'gato', 'perico'];
mascotas[1]='nuevo gato';
//propiedad push que permite agregar un nuevo valor al arreglo
mascotas.push('hamster');
console.log(mascotas);

//amos a crear otro arreglo
let tem:(number|string)[]=[]; //este tiene un tipado de datos, un arreglo con más de 1 tipo de dato
tem.push(11)
//duplicar linea shift + alt + flecha arriba o abajo
tem.push('once')