
/*cuando se trabaja con diferentes archivos,componentes, clases, archivos
es importante reutilizar codigo para no escribir o rescribir dichos códigos
*/

import type {Producto} from "./05-desestructuracion-funciones";
import {calcularISV2} from "./05-desestructuracion-funciones";

const carrito:Producto[]=[
    {
        desc:"telegono 1",
        precio: 1000
    },
    {
        desc:"telefono 2",
        precio:2000
    },
    {
        desc:"telegono 3",
        precio: 3000
    }
]
const [total,isv]=calcularISV2(carrito);
console.log("Total carrito: ",total)
console.log("ISV carrito: ",isv)