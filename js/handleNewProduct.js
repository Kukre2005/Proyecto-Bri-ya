import { data } from '../data/productos.js';

const newProducto = {
    id:0,
    img:"",
    title:"",
    desc:"",
    precio:0
}

let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    let form = document.getElementById("alta");

    
    newProducto.title = form.nombre.value;
    newProducto.desc = form.descripcion.value;
    newProducto.precio = form.precio.value;
    newProducto.img = form.imagen.value;

    let categoria = form.categoria.value;
    console.log(categoria)

    console.log(data.accesorios);
    
    switch (categoria) {
        case "accesorios":
            newProducto.id = data.accesorios.length + 1;
            data.starWars.push(newProducto);
            console.log(data.accesorios);
            break;
        case "scrunchies":
            newProducto.id = data.scrunchies.length + 1;
            data.scrunchies.push(newProducto);
            break;
        case "luxury":
            newProducto.id = data.luxury.length + 1;
            data.luxury.push(newProducto);
            break;
        case "holder":
            newProducto.id = data.holder.length + 1;
            data.holder.push(newProducto);
            break;
        case "pañuelos":
            newProducto.id = data.pañuelos.length + 1;
            data.pañuelos.push(newProducto);
            break;
        case "llaveros":
            newProducto.id = data.llaveros.length + 1,
            data.llaveros.push(newProducto);
            break;
    }


})


