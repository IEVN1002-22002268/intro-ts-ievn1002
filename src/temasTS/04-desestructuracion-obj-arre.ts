//omitir la jerarquia

interface Reproductor{
    volumen:number;
    segundo:number,
    cancion:string,
    //en sus propiedades tiene otra interfaz
    detalles:Detalles
}
interface Detalles{
    autor:string,
    anio:number
}
const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Helena",
    detalles:{
        autor:"My chemical Romance",
        anio:2005
    }
}
console.log("----- OBJETO Estructurado -----")

console.log("El volumen actual es: ",reproductor.volumen);
console.log("El segundo actual es: ",reproductor.segundo);
console.log("El cancion actual es: ",reproductor.cancion);
console.log("El autor actual es: ",reproductor.detalles.autor);
console.log("El anio actual es: ",reproductor.detalles.anio);

console.log("----- OBJETO Desestructurado -----")

//¿COMO LO DESESTRUCTURO?
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio}=detalles;

console.log("El volumen actual es: ",volumen);
console.log("El segundo actual es: ",segundo);
console.log("El cancion actual es: ",cancion);
console.log("El autor actual es: ",autor);
console.log("El anio actual es: ",anio);

//DesEstructuracion de arreglo
console.log("----- ARREGLO Desestructurado -----")
const dbz:string[]=["Goku", "Vegeta", "Trunks"];
const [p1,p2,p3]=dbz;
console.log("Personaje 1:",p1)
console.log("Personaje 2:",p2)
console.log("Personaje 3:",p3)
console.log("Personaje 3 Estructurado:",dbz[2])