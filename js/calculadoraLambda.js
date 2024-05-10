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



}