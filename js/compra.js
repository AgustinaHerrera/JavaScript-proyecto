let productos = []

const agregarProducto=()=>{
    let id = parseInt (prompt("Ingrese el ID"))
    let nombre = prompt ("Ingrese un nombre de producto")
    let precio = parseInt (prompt("Ingrese un precio"))
    let stock = parseInt (prompt("Ingrese un stock"))

const producto = {
    id : id,
    nombre: nombre,
    precio: precio,
    stock: stock
}

productos.push(producto)

console.log(producto)

}

const mostrar=()=>{
    console.log (producto)

    for(let i =0; i < productos.length; i++){
           const texto = `Nombre: ${productos[i].nombre} \n
                           Precio: ${productos[i].precio} \n
                           Stock: ${productos[i].stock}`     

        alert(texto)
    }
}

const salir=()=>{
    alert ("Gracias por su visita")
}

const menu = () => {
do{
    opcion = prompt(
        "¿Qué desea hacer? \n 1- Agregar producto \n 2- Ver productos \n 3- Salir")
    
}
while (opcion!=1 && opcion!=2 && opcion!=3) 

switch(opcion){
    case "1":
        agregarProducto()
    break
    case "2":
        mostrar()
    break
    case "3":
        SVGRadialGradientElement()
    break
}
}





