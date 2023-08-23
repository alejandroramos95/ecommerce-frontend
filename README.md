# E-commerce frontend React Js

Proyecto e-commerce realizado con React Js. La app muestra un catalogo con un listado de productos y un carrito con funcionalidades para generar tu orden de compra.

## Git Clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola:

git clone https://github.com/alejandroramos95/ecommerce-frontend

npm install

npm start

## Tecnologías principales:

React Js
JavaScript
Html
CSS

## Librerias

react-router-dom
react-boostrap
bootstrap-icons
firebase

Utilicé react-boostrap y bootstrap-icons por la facilidad que me brindó para resolver ciertos componentes.
El componente CartWidget utiliza boostrap-icons, y los componentes Item y NavBar react-boostrap.
También utilicé firebase para almacenar las colecciones y los datos utilizados en los componentes Checkout, ItemDetailContainer y ItemListContainer.

## Firebase colecciones

items
| Campo | Tipo | Valor |
| title | String | Nombre producto |
| description | String | Descripcion producto |
| stock | Number | Cant stock |
| price | Number | Precio producto |
| image | Number | Link imagen |
| category | String | Categoria producto |

orders
| Campo | Tipo | Valor |
| buyer | String | Info comprador |
| cart | Array | Carrito |
| dia | Timestamp | Fecha y hora |
| total | Number | Total orden |
