class Usuario {
    constructor (nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

let arrayUsuarios = [];
let miFormulario = document.querySelector ("#formulario");
let inputNombre = document.querySelector ("#iNombre");

let nombreI = formulario.children [1].value;
let emailI = formulario.children [3].value;
let passwordI = formulario.children [5].value;

let contenedor = document.querySelector ("#usuarioIngresado")
let displayTodos = document.querySelector ("#displayTodos");
let parrafos = displayTodos.getElementsByTagName ("p");
let bandera = false;


miFormulario.addEventListener ("submit", AgregarUsuarios);
btnMostrar.addEventListener ('click', MostrarTodosLosUsuarios);

inputNombre.focus ();

function validarForm () {
    nombreI = formulario.children [1].value;
    emailI = formulario.children [3].value;
   passwordI = formulario.children [5].value;
    console.log (nombreI);
    console.log (emailI);
    console.log (passwordI);


if (nombreI == '' || emailI == '' || passwordI == '' ) {
    alert ('ERROR - Debe completar todos los campos para continuar');
    inputNombre.focus ();
    bandera = false;
} else {
    bandera = true
}
}

function AgregarUsuarios (e) {
    e.preventDefault ();
    validarForm ();
    if (bandera == true) {
        let opcion = confirm ("¿Está seguro que desea agregar este usuario?");
        if (opcion == true) {
            let formulario = e.target
            arrayUsuarios.push (new Usuario (nombreI, emailI, passwordI));
        } else {
            alert ('No se agrega el usuario')
        }

        formulario.children [1]. value = '';
        formulario.children [3]. value = '';
        formulario.children [5]. value = '';
        contenedor.innerHTML = '';
        AgregarAlDom ();
        inputNombre.focus();
    } else {
        inputNombre.focus ();
    }
}

function AgregarAlDom (){
    contenedor.innerHTML = `<h3> Ultimo usuario agregado:</h3>
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Email: </strong> ${emailI}</p>
    <p><strong> Contraseña: </strong> ${passwordI}</p> 
    <hr>`;
}

function MostrarTodosLosUsuarios (e) {
    e.preventDefault ();
    let i = 0;
    displayTodos.innerHTML = '<h3 class ="sub"> Mis datos: </h3>';
    for (const usuario of arrayUsuarios) {
        displayTodos.innerHTML += `
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Email: </strong> ${emailI}</p>
    <p><strong> Contraseña: </strong> ${passwordI}</p> 
    <hr>`;
    }
}
