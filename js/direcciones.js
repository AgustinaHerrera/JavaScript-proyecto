class Direccion {
    constructor (direccion) {
        this.direccion = direccion;
     
    }
}

let arrayUsuarios = [];
let miFormulario = document.querySelector ("#formulario");
let inputNombre = document.querySelector ("#iDireccion");

let direccionI = formulario.children [1].value;

let contenedor = document.querySelector ("#direccionIngresada")
let displayTodos = document.querySelector ("#displayTodos");
let parrafos = displayTodos.getElementsByTagName ("p");
let bandera = false;


miFormulario.addEventListener ("submit", AgregarDireccion);
btnMostrar.addEventListener ('click', MostrarTodasLasDireciiones);

inputNombre.focus ();

function validarForm () {
    direccionI = formulario.children [1].value;
   
    console.log (direccionI);
  
}

function AgregarDireccion (e) {
    e.preventDefault ();
    validarForm ();
    if (bandera == true) {
        let opcion = confirm ("¿Está seguro que desea agregar esta dirección?");
        if (opcion == true) {
            let formulario = e.target
            arrayDirecciones.push (new Direccion (direccionI));
        } else {
            alert ('No se agrega la dirección')
        }

        formulario.children [1]. value = '';
        contenedor.innerHTML = '';
        AgregarAlDom ();
        inputNombre.focus();
    } else {
        inputNombre.focus ();
    }
}

function AgregarAlDom (){
    contenedor.innerHTML = `<h3> Ultima dirección agregada:</h3>
    <p><strong> Dirección: </strong> ${direccionI}</p>
    <hr>`;
}

function MostrarTodasLasDireciiones (e) {
    e.preventDefault ();
    let i = 0;
    displayTodos.innerHTML = '<h3 class ="sub"> Mis direcciones: </h3>';
    for (const direccion of arrayDirecciones) {
        displayTodos.innerHTML += `
    <p><strong> Nombre: </strong> ${direccionI}</p>

    <hr>`;
    }
}
