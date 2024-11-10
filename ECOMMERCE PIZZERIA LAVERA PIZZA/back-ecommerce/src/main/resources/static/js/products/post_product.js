window.addEventListener('load', function () {

    const formulario = document.querySelector('#add_new_product');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.querySelector('#product_name').value,
            price: parseFloat(document.querySelector('#product_price').value) || 0.0,
            description: document.querySelector('#product_description').value,
            image: document.querySelector('#product_image').value,
            size: document.querySelector('#product_size').value,
            category: {
                name: document.querySelector('#product_category').value
            },
            ingredients: document.querySelector('#product_ingredients').value
                .split(',').map(name => ({ name: name.trim() })),
            additives: document.querySelector('#product_additives').value
                .split(',').map(name => ({ name: name.trim(), price: parseFloat(document.querySelector('#additive_price').value) || 0.0 }))
        };

        const url = '/products';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };

        fetch(url, settings)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al agregar el producto');
                }
                return response.json();
            })
            .then(data => {
                successAlert('agregar', 'Producto');
            })
            .catch(error => {
                errorAlert('agregar', 'Producto');
            });
    });

    function successAlert(accion, elemento) {
        const successAlert = `
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
               El <strong>${elemento}</strong> se ha podido ${accion} con éxito
            </div>`;
        document.querySelector('#response').innerHTML = successAlert;
        document.querySelector('#response').style.display = "block";
        resetUploadForm();
    }

    function errorAlert(accion, mensaje) {
        const errorAlert = `
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Error al ${accion}: ${mensaje}</strong>
            </div>`;
        document.querySelector('#response').innerHTML = errorAlert;
        document.querySelector('#response').style.display = "block";
        resetUploadForm();
    }

    function resetUploadForm() {
        formulario.reset();
    }

    (function () {
        let pathname = window.location.pathname;
        if (pathname === "/get_products.html") {
            document.querySelector(".nav .nav-item a:last").classList.add("active");
        }
    })();
});
