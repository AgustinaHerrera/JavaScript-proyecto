let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
let edad = prompt ("Ingrese su edad");
let documento = prompt ("Ingrese su documento de identidad");
let celular = prompt ("Ingrese su número de celular");
let mail = prompt ("Ingrese su correo electrónico");
let direccion = prompt ("Ingrese su direccion");

function Usuario (first, last, edad, documento, celular, mail, direccion) {
    this.nombre = {
        'first': first,
        'last': last
    };
    this.edad = edad;
    this.documento = documento;
    this.celular = celular;
    this.mail = mail;
    this.direccion = direccion
    ;

    if (this.edad<18){
        alert ("Para comprar en nuestro sitio tenés que ser mayor de edad")
        }else{
            alert ("Bienvenid@")
           }
}

const nuevoUsuario = new Usuario (nombre, apellido, edad, documento, celular, mail, direccion);

const usuario1 = [nombre, apellido, edad, documento, celular, mail, direccion];

console.log (usuario1.toString());


const direcciones = [];

direcciones.push ("Colonia");

const addresses = direcciones.concat (usuario1.slice (6));

console.log (addresses);
