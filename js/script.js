 // Aquí tu código

const lista = document.getElementById('lista');
const agregar = document.getElementById('agregar');
const borrarElemento = document.getElementById('borrarElemento');
const borrarLista = document.getElementById('borrarLista');

agregar.addEventListener('click', function() {
    const elemento = document.createElement('li');
    elemento.textContent = prompt('Ingrese un elemento');
    lista.appendChild(elemento);
});

borrarElemento.addEventListener('click', function() {
    lista.removeChild(lista.lastChild);
});

borrarLista.addEventListener('click', function() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
});
