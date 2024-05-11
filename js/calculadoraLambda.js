const sumar=(idNum1,idNum2)=>{
    var num1 = parseInt(document.getElementById("idnumero1").value);
    var num2 = parseInt(document.getElementById("idnumero2").value);

    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}

const restar=(idNum1,idNum2)=>{
    var num1 = parseInt(document.getElementById("idnumero1").value);
    var num2 = parseInt(document.getElementById("idnumero2").value);

    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}

const multiplicar=(idNum1,idNum2)=>{
    var num1 = parseInt(document.getElementById("idnumero1").value);
    var num2 = parseInt(document.getElementById("idnumero2").value);

    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}

const dividir=(idNum1,idNum2)=>{
    var num1 = parseInt(document.getElementById("idnumero1").value);
    var num2 = parseInt(document.getElementById("idnumero2").value);

    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}
function agregarElemento(){
    document.getElementById('idDivision').innerHTML="<button>NUEVO</button>";

}

function quitarElemento(){
    document.getElementById('idDivision').innerHTML="";

}

function conceptosJS(){
    /* Tipos de datos JS */
    /*let,var,const*/
    const IVA=12;
    console.log(IVA);
   /* IVA =15;
    console.log(IVA);  eSTO NO SE PUEDE HACER DEBIDO A QUE ES UNA CONSTANTE Y NO SE PUEDE SOBRESCRIBIR*/

    var nombre ="Jimmy";
    console.log(nombre);
    nombre="Fabricio";
    console.log(nombre);

    let apellido="Ortega"
    console.log(apellido);
    apellido = "Salinas";
    console.log(apellido);

    //Declaración de arreglos
    const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[6]);

    diasSemana[5]="sabado";

    console.log(diasSemana[5]);

    diasSemana.push("domingo");
    console.log(diasSemana);

    diasSemana.unshift("días");
    console.log(diasSemana);

    const numerosPares=[2,4,6,8,10];
    console.log(numerosPares);

    const numerosImpares=[1,3,5,7,9];
    console.log(numerosImpares);

    const numerosCompletos = numerosPares.concat(numerosImpares);
    console.log(numerosCompletos);

    for(const dia of diasSemana){
        if(dia === "Viernes"){
            console.log("Por fin llegó el fin de semana");
        }
}

if(diasSemana[4]===undefined){
    console.log('No tiene valor');
}else{
    console.log('Si tiene valor');
}

//manejo de objetos 
const estudiante={
    nombre:"Jimmy",
    apellido:"Ortega",
    edad:25,
    genero:"M",
    cuidadNacimiento:"Cuenca"


}
console.log(estudiante);
console.log(estudiante.apellido);


estudiante.nombre="Juan";
console.log(estudiante);

const profesor={
    nombre:"Oscar",
    apellido:"toalombo",
    edad:"40",
    genero:"M",
    cuidadNacimiento:"Quito",
    direccion:{
        callePrincipal:"Av. America",
        calleSecundaria:"La gasca",
        numeracion:"Oe3-59",
        barrio:"La gasca"

    }

}
console.log(profesor);
console.log(profesor.direccion.barrio);

console.log(profesor.direccion.barrio="Las Casas")


//Arrelo de Objetos

    const estu1={
        nombre:"Daniel",
        apellido:"Segarra"

}
const estu2={
    nombre:"Pedro",
    apellido:"Sanz"

}
const estu3={
    nombre:"Juan",
    apellido:"Constante"

}
const estu4={
    nombre:"Piedad",
    apellido:"Ala"

}

const estudiantes =[estu1,estu2,estu3,estu4]
console.log(estudiantes);
console.table(estudiantes);

console.log(estudiantes[1].apellido);

estudiantes[1].apellido="Cambiar Apellido";
console.log(estudiantes);

const profesores=[{nombre:"Oscar",edad:40},{nombre:"Andrea",edad:32}];
console.table(profesores);
var prof =profesores.pop(); // Elimina unos elementos de la lista pop
console.log(prof);
console.table(profesores);

//Desestructuración de Arreglos

const diasSemana2 = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
const [dia1,dia2,dia3,dia4]=diasSemana2;
console.log(dia2);
console.table(diasSemana2);

const [d1,d2,d3,d4,d5]=  ["Lunes-1","Martes-2","Miercoles-3","Jueves-4","Viernes-5"];
console.log(d2);
console.log(d5);

//Desestructuracion de Objetos

const vehiculo= {
    marca:"Toyota",
    modelo:"Prius",
    anio:"2018"
}

const {marca,anio}=vehiculo; //utilizo llaves{ } para Desestructuracion de Objetos

console.log(marca);
console.log(anio);

const {modelo}= {
    marca:"Ford",
    modelo:"Edge",
    anio:"2020"
}
console.log(modelo);

//Desustructuracion de un objeto que tenga un atributo compuesto

const pelicula={
    nombre1:"Los Simios",
    genero:"Accion",
    director:"Adam",
    detalles:{
        duraccion:"1.60",
        critica:"Buena",
        calificacion:"4"
    }
}

/*const {nombre1}=pelicula;
console.log(nombre);

const{duracion} = detalles;
console.log(duracion);
*/



const{nombre1,genero, detalles:{duraccion}}=pelicula;
console.log(duraccion);




}