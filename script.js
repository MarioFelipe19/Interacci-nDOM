document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos referencias a los elementos HTML que vamos a utilizar
    const galeria = document.getElementById('galeria');
    const botonAgregarImagen = document.querySelector('.contenedor-entrada');
    const campoUrlImagen = document.getElementById('urlImagen');
    const campoTituloImagen = document.getElementById('tituloImagen');
    const expo = document.getElementById('expo');
    const imagenModal = document.getElementById('imagenModal');
    const tituloModal = document.getElementById('tituloModal');
    const cerrarExpo = document.querySelector('.cerrar');

    // Agregamos un evento de clic al botón de "Añadir Imagen"
    botonAgregarImagen.addEventListener('click', agregarImagen);

    // Agregamos un evento de clic al botón de cerrar la ventana modal (expo)
    cerrarExpo.addEventListener('click', () => expo.style.display = 'none');

    // Esta función se ejecuta cuando se hace clic en el botón de "Añadir Imagen"
    function agregarImagen() {
        // Obtenemos los valores de los campos de URL y título
        const url = campoUrlImagen.value.trim();
        const titulo = campoTituloImagen.value.trim();

        // Verificamos que los campos no estén vacíos
        if (url && titulo) {
            // Creamos un nuevo elemento de galería con la imagen y el título
            const elementoGaleria = crearElementoGaleria(url, titulo);
            
            // Agregamos el nuevo elemento a la galería
            galeria.appendChild(elementoGaleria);
            
            // Limpiamos los campos de entrada
            campoUrlImagen.value = '';
            campoTituloImagen.value = '';

            // Aplicamos una animación de entrada al nuevo elemento
            elementoGaleria.classList.add('entrar');
            setTimeout(() => elementoGaleria.classList.remove('entrar'), 500);
        }
    }

    // Esta función crea un nuevo elemento de la galería
    function crearElementoGaleria(url, titulo) {
        // Creamos un nuevo elemento <div> para el elemento de la galería
        const div = document.createElement('div');
        div.className = 'elemento-galeria';

        // Creamos la imagen con la URL proporcionada
        const img = document.createElement('img');
        img.src = url;
        img.alt = titulo;

        // Creamos un elemento <h3> para mostrar el título
        const h3 = document.createElement('h3');
        h3.textContent = titulo;

        // Creamos un botón para eliminar el elemento de la galería
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.addEventListener('click', (e) => {
            // Evitamos que se abra la ventana modal (expo) al eliminar
            e.stopPropagation();
            eliminarImagen(div);
        });

        // Creamos un botón para mostrar los detalles de la imagen
        const botonDetalles = document.createElement('button');
        botonDetalles.textContent = 'Ver detalles';
        botonDetalles.className = 'boton-detalles';
        botonDetalles.addEventListener('click', () => mostrarDetalles(url, titulo));

        // Agregamos todos los elementos al div principal
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(botonEliminar);
        div.appendChild(botonDetalles);

        // Devolvemos el nuevo elemento de la galería
        return div;
    }

    // Esta función elimina un elemento de la galería
    function eliminarImagen(item) {
        // Aplicamos una animación de salida al elemento
        item.classList.add('salir');
        setTimeout(() => {
            // Una vez terminada la animación, eliminamos el elemento de la galería
            galeria.removeChild(item);
        }, 500);
    }

    // Esta función muestra los detalles de una imagen en la ventana modal (expo)
    function mostrarDetalles(url, titulo) {
        // Establecemos la imagen y el título en la ventana modal
        imagenModal.src = url;
        tituloModal.textContent = titulo;
        
        // Mostramos la ventana modal
        expo.style.display = 'block';

    }
});