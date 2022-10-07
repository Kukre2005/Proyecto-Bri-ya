import { data } from '../data/productos.js';

//Renderizado de productos cargados en el archivo data.js
let cardWrapperAccesorios = document.querySelector(".accesorios");
let cardWrapperScrunchies = document.querySelector(".scrunchies");
let cardWrapperLuxury = document.querySelector(".luxury");
let cardWrapperHolder = document.querySelector(".holder");
let cardWrapperPañuelos = document.querySelector(".pañuelos");
let cardWrapperLlaveros = document.querySelector(".llaveros")

const showProducts = () => {
    listarProductos(cardWrapperAccesorios,data.accesorios);
    listarProductos(cardWrapperScrunchies,data.scrunchies);
    listarProductos(cardWrapperLuxury,data.luxury);
    listarProductos(cardWrapperHolder,data.holder);
    listarProductos(cardWrapperPañuelos,data.pañuelos);
    listarProductos(cardWrapperLlaveros,data.llaveros);  
}

const listarProductos = (cardWrapper,array) => {
    let clase = cardWrapper.className;
    array.forEach((elemento) => { 

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("id","product-card");
        cardDiv.innerHTML = `
            <img src=${elemento.img} alt="">
            <p>${elemento.title}</p>
            <span>$${elemento.precio}</span>
            <button onclick="mostrarInfo(${elemento.id},event)" class="${clase}">Ver producto</button>
        `;
        cardWrapper.appendChild(cardDiv);
    })

}

window.onload = showProducts;


//Mostrar info de productos desde modal
window.mostrarInfo = (id, event) =>{
    //console.log(id,event.target.className)
    switch (event.target.className) {
        case "accesorios":
            crearModal(data.accesorios[id]);
            break;
        case "scrunchies" :
            crearModal(data.scrunchies[id]);
            break;
        case "luxury":
            crearModal(data.luxury[id]);
            break;
        case "holder":
            crearModal(data.holder[id]);
            break;
        case "pañuelos":
            crearModal(data.pañuelos[id]);
            break;
        case "llaveros":
            crearModal(data.llaveros[id]);
            break;
    }
}

//Funcion para renderizar info
const crearModal = (producto) => {
    let modalInfo = document.getElementById("product-info");
    let modalCard = document.createElement("div");
    modalInfo.innerHTML = "";
    modalCard.innerHTML = `
        <div>
            <img src="${producto.img}"></img>
        </div>
        <div>
            <h1>${producto.title}</h1>
            <h2>${producto.desc}</h2>
            <h3>$ ${producto.precio}</h3>
            <button onclick="cerrarModal()">Cerrar</button>
        </div>
        
    `
    modalInfo.appendChild(modalCard);
    let modalWrapper = document.getElementById("modal");
    modalWrapper.style.display="block";
    modalInfo.style.transform = `translateY(${window.pageYOffset}px)`;
}

window.cerrarModal = () => {
    let modalWrapper = document.getElementById("modal");
    modalWrapper.style.display="none";
}

