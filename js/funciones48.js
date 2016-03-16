/*global window */
/*global alert */
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - Web Storage I
 * Origin: Capitulo48.html ==> Almacenando Información
 */

// "use strict";


//1. Definición de Objetos y Variables
var botonGrabar;
var zonaDatos;



//1.1 Extracción de elementos desde HTML
botonGrabar = document.getElementById("grabar");
zonaDatos = document.getElementById("zona-datos");



//2. Definición de Funciones

function itemMostrar(itemClave) {
    'use strict';

    var itemValorMostrar;

    itemValorMostrar = sessionStorage.getItem(itemClave);

    zonaDatos.innerHTML = "<div>Clave: " + itemClave + "--" + "Valor: " + itemValorMostrar + "</div>";
}


function itemNuevo() {
    'use strict';

    var itemClave;
    var itemValor;

//OJO DEFINIMOS itemClave e itemValor como variables locales. Si las
// definimos como variables generales, no funciona
    itemClave = document.getElementById("clave").value;
    itemValor = document.getElementById("valor").value;

    sessionStorage.setItem(itemClave, itemValor);

    itemMostrar(itemClave);
}




function comenzar() {
    'use strict';

    botonGrabar.addEventListener("click", itemNuevo, false);

}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
