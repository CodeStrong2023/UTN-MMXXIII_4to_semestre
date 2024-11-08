window.addEventListener('load', function () {
    (function () {
        // Con fetch invocamos a la API de productos con el método GET
        const url = '/products';
        const settings = {
            method: 'GET'
        };

        fetch(url, settings)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Recorremos la colección de productos del JSON
                for (const producto of data) {
                    var table = document.getElementById("productoTable");
                    var productoRow = table.insertRow();
                    let tr_id = 'tr_' + producto.id;
                    productoRow.id = tr_id;

                    // Botón eliminar
                    let deleteButton = '<button ' +
                        'data-toggle="tooltip" data-placement="top" title="Eliminar" ' +
                        'id="btn_delete_' + producto.id + '" ' +
                        'type="button" onclick="deleteBy(' + producto.id + ')" class="btn btn-danger btn_delete">' +
                        '&times;' +
                        '</button>';

                    // Botón actualizar
                    let updateButton = '<button ' +
                        'data-toggle="tooltip" data-placement="top" title="Actualizar" ' +
                        'id="btn_id_' + producto.id + '" ' +
                        'type="button" onclick="findBy(' + producto.id + ')" class="btn btn-info btn_id">' +
                        producto.id +
                        '</button>';

                    // Armamos cada columna de la fila según el nuevo orden de encabezados
                    productoRow.innerHTML = '<td>' + updateButton + '</td>' + // Botón de actualización
                        '<td class="td_imagen"><img src="' + producto.image + '" alt="' + producto.name + '" style="width:50px; height:auto;"></td>' + // Imagen del producto
                        '<td class="td_categoria small">' + producto.category.name.toUpperCase() + '</td>' + // Categoría
                        '<td class="td_nombre ">' + producto.name.toUpperCase() + '</td>' + // Nombre
                        '<td class="td_descripcion small">' + producto.description + '</td>' + // Descripción
                        '<td class="td_tamano small">' + Math.floor(producto.size) + '</td>' + // Tamaño
                        '<td class="td_precio small">'+ "$ " + producto.price.toFixed(2) + '</td>' + // Precio
                        '<td class="td_ingredientes small">' +
                        (Array.isArray(producto.ingredient) ?
                            producto.ingredient.map(ingrediente => ingrediente.name).join(", ") :
                            '') + '</td>' + // Ingredientes
                        '<td class="td_aditivos small">' +
                        (Array.isArray(producto.additive) ?
                            producto.additive.map(aditivo => aditivo.name).join(", ") :
                            '') + '</td>' + // Aditivos
                        '<td class="td_precio_adicionales small">' +
                        "$ " + (Array.isArray(producto.additive) && producto.additive.length > 0
                            ? producto.additive[0].price.toFixed(2)
                            : '0.00') +
                        '</td>' + // Precio Adicionales
                    '<td>' + deleteButton + '</td>'; // Botón de eliminar
                }
            }).catch(error => {
            console.error('Hubo un problema con la operación fetch:', error);
        });
    })();

    (function () {
        let pathname = window.location.pathname;
        if (pathname === "/get_products.html") {
            document.querySelector(".nav .nav-item a:last").classList.add("active");
        }
    })();
});
