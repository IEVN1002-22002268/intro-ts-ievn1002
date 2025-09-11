//con export ya exportamos a otros archivos la interfaz Producto
export interface Producto{
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:"Nokia AI",
    precio:1500
}
const tablet:Producto={
    desc:"Ipad Air",
    precio:3500
}
function calcularISV(productos:Producto[]):number{
    let total = 0;
    for(const producto of productos){
        total+=producto.precio
    }
    return total*0.15;
}
//Estructurado
console.log("-- Función ESTRUCTURADA ---")
const articulos=[telefono,tablet];
const isv=calcularISV(articulos);
console.log("ISV: ", isv);

//DESetructurado
console.log("-- Función DESESTRUCTURADA ---")
export function calcularISV2(productos:Producto[]):[number,number]{
    let total=0;
    for(const producto of productos){
        total+=producto.precio;
    }
    return [total, total*0.15];
}
const [total, isv2]=calcularISV2(articulos)
console.log("Total: ",total);
console.log("ISV2: ",isv2);