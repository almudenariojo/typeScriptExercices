//Basic: definición de tipo estricta

const ejemploString: string = "Hola!";
const ejemploNumber: number = 16;
const ejemploBoolean: boolean = true;

//Array

let arrayString: string[] = ["Hola", "me", "llamo", "Almu"];
let arrayNumber: number[] = [1, 2, 3, 4];
let arrayAny: any[] = [1, "hola", true, 4];

//Tupla: igual  que la array pero sabe el números y el tipo de datos que contiene



let tuplaPlayer: [string, number, boolean] = ["Hola", 3, false];

//Tupla de array

let tuplaArray: [number, string][  ];
tuplaArray=[
    [1, "David"],
    [2, "Maria"],
    [3, "Emilio"],
    [4, "Miguel"],
];

// Asigna tipos a las variables: Inferencia de tipos
let variable; //Si pones el cursor en él ves que asigna el tipo any
let variable1: string; //Si pones el cursor en él ves que asigna el tipo string
let variable2 = "Hola mundo"; //Si pones el cursor en él ves que asigna el tipo string

//Unions

let variable3: string | number | null;
//No se le podría asignar un boolean 
//let variable3: true;

//Enum

enum Roles{
    User,
    Admin,
    SuperAdmin
}
console.log(Roles.Admin); //Devuelve 1


enum NombresRoles{
    User= 'Almu',
    Admin= 'Maria',
    SuperAdmin= 'David'
}
console.log(NombresRoles.Admin); //Devuelve Maria


//Object

const roles = {
    User: 0,
    Admin:1,
    SuperAdmin:2
}
console.log(roles.SuperAdmin); //Devuelve 2

//Type Assertion

let assercion: any = "typeAssertion";
// let assercion1 = <string>assercion; o
let assercion1 = assercion as string;

//const mycanvas = document.getElementById('main') as HTMLCanvasElement;
//const mycanvas = <HTMLCanvasElement>document.getElementById('main');


//Generics: funciones

function saludo(nombre: string ="User") {
    console.log(`Hello, ${nombre}!!`);
}
saludo('David');
saludo();

function getNumber():number {
    return (Math.random() * 100);
}
console.log(getNumber());

function positionNumber(position:{lat:number, long:number | null}) :void {
    console.log(`La latitud y la longitud son ${position.lat} y ${position.long}`);
}
positionNumber({ lat: 45, long: 56 });

// Interfaces y clases

//Interface solo existen en tiempo de desarrollo
//cuando el código es transpilado a javascript, 
//para verificar tipos

interface Book {
    id: number,
    autor: string,
    titulo: string
    coautor?: string, //la interrogaccion es argumento opcional
    isLoan?: (id:number) => void //crea un método
}
//Se puede introducir cualquier dato asi
const book = {};
//Pero aqui hay un contrato de libros y tiene que pasarle los paramentros de Book 
const book1: Book ={
    id: 1,
    autor: "Perez Reverte, Arturo",
    titulo: "La reina del sur"
}

const book2: Book[] = [];

function getBook () : Book{
    return {id:2, autor: "Perez Reverte, Arturo",
    titulo: "El capitán Alatriste"}
};

function crearBook(book: Book): Book{
    return book;
}
const book3: Book ={
    id: 3,
    autor: "Perez Reverte, Arturo",
    titulo: "El coronel no tiene quien le escriba", 
    coautor: "Azorín"
}
crearBook(book3);

//Extender interface

interface Persona {
    id: number;
    nombre: string;
}

interface Empleado extends Persona{
    departamento: string;
}

interface Cliente extends Persona{
    ciudad: string
}

const empleado1: Empleado = {
    id: 1,
    nombre: "David Zaba",
    departamento: "Todos"
}

const cliente1: Cliente = {
    id: 1,
    nombre: "Almudena Riojo",
    ciudad: "Almería"
}
interface Animal {
    getDogs: () => void;
    getCats: () => void;
}
class Zoo implements Animal {
    nombre = "Mush";
    getCats(): void{
        //
    }
    getDogs(): void {
        //
    }
}

// Clases 
//Palabras de control de acceso:
//public
//private
//protected
//readonly (solo lectura)

class Personas{
    public zona = "caribe";
    protected ciudad = "Santo domingo";
    private pais = "RD";
       constructor() {}
        saludo(): void {
            console.log("Hello");
        }
}
class Empleados extends Personas{
   
    //Atributos de la clase
   // Se puedenn eliminar si se le asigna al constructor
    //protected id: number;
    //public nombre: string;
    //private departamento: string ;

    constructor( protected id: number, public nombre: string, private departamento: string) {
        super();
        //this.id = id;
        //this.nombre = nombre;
        // this.departamento =departamento
        this.showInfo();
    }

    //Metodos
    public showInfo(): void{
        console.log(`nombre: ${this.nombre}`);
}
    
}
const empleado4 = new Empleados(4, "Juan", "Recursos");


