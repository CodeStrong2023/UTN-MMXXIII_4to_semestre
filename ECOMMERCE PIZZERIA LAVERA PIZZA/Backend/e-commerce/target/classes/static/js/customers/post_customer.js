window.addEventListener('load', function () {

    const formulario = document.querySelector('#add_new_paciente');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar envío por defecto

        const formData = {
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            cedula: document.querySelector('#cedula').value,
            fechaIngreso: document.querySelector('#fechaIngreso').value,
            domicilio: {
                calle: document.querySelector('#calle').value,
                numero: document.querySelector('#numero').value,
                localidad: document.querySelector('#localidad').value,
                provincia: document.querySelector('#provincia').value,
            },
            email: document.querySelector('#email').value
        };

        const url = '/pacientes';
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
                    throw new Error('Error al agregar el paciente');
                }
                return response.json();
            })
            .then(data => {
                successAlert('agregar', 'Paciente');
            })
            .catch(error => {
                errorAlert('agregar', 'Paciente');
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
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";
        document.querySelector('#cedula').value = "";
        document.querySelector('#fechaIngreso').value = "";
        document.querySelector('#calle').value = "";
        document.querySelector('#numero').value = "";
        document.querySelector('#localidad').value = "";
        document.querySelector('#provincia').value = "";
        document.querySelector('#email').value = "";
    }

});
