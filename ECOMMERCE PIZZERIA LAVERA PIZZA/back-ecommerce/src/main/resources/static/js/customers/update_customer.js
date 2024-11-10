window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_paciente_form');

    function successAlert(accion, elemento) {
        const successAlert = `
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                El <strong>${elemento}</strong> se ha podido ${accion} con éxito
            </div>`;
        document.querySelector('#response').innerHTML = successAlert;
        document.querySelector('#response').style.display = "block";
        resetUploadForm(); // Restablecer el formulario después de éxito
    }

    function errorAlert(accion, mensaje) {
        const errorAlert = `
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Error al ${accion}: ${mensaje}</strong>
            </div>`;
        document.querySelector('#response').innerHTML = errorAlert;
        document.querySelector('#response').style.display = "block";
        resetUploadForm(); // Restablecer el formulario después de error
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

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let pacienteId = document.querySelector('#paciente_id').value;

        const formData = {
            id: pacienteId,
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
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };

        fetch(url, settings)
            .then(response => {
                if (!response.ok) {
                    errorAlert('modificar', 'Paciente');
                    throw new Error('Error al modificar el paciente');
                }
                return response;
            })
            .then(data => {
                successAlert('modificar', 'Paciente');
                window.location.reload(); // Recargar la página después de éxito
            })
            .catch(error => {
                errorAlert('modificar', 'Paciente');
            });
    });
});

function findBy(id) {
    const url = '/pacientes/' + id;
    const settings = {
        method: 'GET'
    };

    fetch(url, settings)
        .then(response => {
            if (!response.ok) {
                throw new Error('Paciente no encontrado');
            }
            return response.json();
        })
        .then(data => {
            let paciente = data;
            document.querySelector('#paciente_id').value = paciente.id;
            document.querySelector('#nombre').value = paciente.nombre;
            document.querySelector('#apellido').value = paciente.apellido;
            document.querySelector('#cedula').value = paciente.cedula;
            document.querySelector('#fechaIngreso').value = paciente.fechaIngreso;
            document.querySelector('#calle').value = paciente.domicilio.calle;
            document.querySelector('#numero').value = paciente.domicilio.numero;
            document.querySelector('#localidad').value = paciente.domicilio.localidad;
            document.querySelector('#provincia').value = paciente.domicilio.provincia;
            document.querySelector('#email').value = paciente.email;

            document.querySelector('#div_paciente_updating').style.display = "block";
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            errorAlert('modificar', 'Paciente no encontrado');
        });
}
