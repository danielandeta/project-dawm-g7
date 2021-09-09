import React, { useEffect, useState } from 'react'
import DarkFooter from "components/Footers/DarkFooter.js";
import { useParams } from 'react-router-dom'  // usar parametros en la url
import axios from 'axios'


// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function LandingPage() {

  return (
    <>
      <IndexNavbar color="1" />
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="color-texto">Carrito de compras</h2>
              <h5 className="description">
                Aquí observará el carrito de compras de sus artículos.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <main id="items" class="ml-auto mr-auto text-center"></main>
        <aside class="ml-auto mr-auto text-center">
          <h2>Carrito</h2>
          <ul id="carrito" class="list-group"></ul>
          <p class="text-center">Total: <span id="total"></span>&euro;</p>
          <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
          <button id="boton-comprar" class="btn btn-green">Comprar</button>
        </aside>
      </Container>




      <DarkFooter />
    </>
  )
}


window.onload = function () {

  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: 'Frutilla',
      precio: 4.5,
      imagen: 'https://i.imgur.com/TFYgb1Q.jpg'

    },
    {
      id: 2,
      nombre: 'Frutimora',
      precio: 4.5,
      imagen: 'https://i.imgur.com/9Eu0oje.jpg'
    },
    {
      id: 3,
      nombre: 'Guayaba',
      precio: 4.5,
      imagen: 'https://i.imgur.com/SKHQpKY.jpg'
    },
    {
      id: 4,
      nombre: 'Manzana',
      precio: 4.5,
      imagen: 'https://i.imgur.com/kpAv7Nu.jpg'
    },
    {
      id: 5,
      nombre: 'Piña',
      precio: 4.5,
      imagen: 'https://i.imgur.com/APMzKLr.jpg'

    }
  ];

  let carrito = [];
  let total = 0;
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const DOMbotonComprar = document.querySelector('#boton-comprar');
  const miLocalStorage = window.localStorage;

  // Funciones

  /**
  * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
  */
  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = info.precio + '€';
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = 'Agregar al carrito';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();
    // Actualizamos el carrito 
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
  * Dibuja todos los productos guardados en el carrito
  */
  function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
        return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}€`;
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
  }

  /**
  * Evento para borrar un elemento del carrito
  */
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
  * Calcula el precio total teniendo en cuenta los productos repetidos
  */
  function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    carrito.forEach((item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
  }

  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
    // Borra LocalStorage
    localStorage.clear();

  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
      // Carga la información
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  DOMbotonComprar.addEventListener('click', function (event) {
    event.preventDefault(); //esto cancela el comportamiento del click
    window.location.href = "/Formulario";
  });


  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  calcularTotal();
  renderizarCarrito();

}

export default LandingPage;



