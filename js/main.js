import { data } from '../data/productos.js';

//Renderizado de productos cargados en el archivo data.js
let cardWrapperStarWars = document.querySelector(".accesorios");
let cardWrapperConsolas = document.querySelector(".scrunchies");
let cardWrapperDiversos = document.querySelector(".luxury");

const showProducts = () => {
    listarProductos(cardWrapperStarWars,data.accesorios);
    listarProductos(cardWrapperConsolas,data.scrunchies);
    listarProductos(cardWrapperDiversos,data.luxury);    
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
        case "star":
            crearModal(data.accesorios[id]);
            break;
        case "consola" :
            crearModal(data.scrunchies[id]);
            break;
        case "luxury":
            crearModal(data.luxury[id]);
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

