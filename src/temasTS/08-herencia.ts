//Heredar elementos de clase PADRE a una clase HIJA

//Padre
class Persona3{
    protected nombre:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre:string, edad:number, direccion:string){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    mostrarPersona(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
        console.log(`Direccion: ${this.direccion}`)
    }
}

//Hijo
class Empleado extends Persona3{
    private salario:number;
    constructor(nombre:string, edad:number, direccion:string, salario:number){
        //Cuando instancio empleado, con super se los mando hasta el papá
        super(nombre, edad, direccion);
        this.salario = salario;
    }
    imprimir(){
    if(this.salario>5000)
        console.log(`${this.nombre} debe de pagar impuestos`)
    else
        console.log(`${this.nombre} no debe de pagar impuestos`)
    }
}


const persona3=new Persona3('Juan', 44, 'Veracruz 324');
persona3.mostrarPersona()

const empleado1=new Empleado('Juan', 44, 'Veracruz 32', 7000);
empleado1.imprimir();