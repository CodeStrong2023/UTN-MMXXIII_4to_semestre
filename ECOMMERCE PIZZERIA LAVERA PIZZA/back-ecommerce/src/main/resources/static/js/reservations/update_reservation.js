window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_turno_form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        let turnoId = document.querySelector('#turno_id').value;

        const formData = {
            id: turnoId,
            paciente: document.querySelector('#paciente').value,
            odontologo: document.querySelector('#odontologo').value,
            fecha: document.querySelector('#fecha').value,
        };

        const cedulaPaciente = formData.paciente;
        const matriculaOdontologo = formData.odontologo;

        fetch(`/pacientes/cedula/${cedulaPaciente}`)
            .then(response => {
                if (!response.ok) {
                    errorAlert('encontrar', 'Paciente');
                    throw new Error('Paciente no encontrado');
                }
                return response.json();
            })
            .then(paciente => {
                return fetch(`/odontologos/matricula/${matriculaOdontologo}`)
                    .then(response => {
                        if (!response.ok) {
                            errorAlert('encontrar', 'Odontólogo');
                            throw new Error('Odontólogo no encontrado');
                        }
                        return response.json();
                    })
                    .then(odontologo => {
                        const updatedFormData = {
                            id: turnoId,
                            paciente: {
                                id: paciente.id,
                                nombre: paciente.nombre,
                                apellido: paciente.apellido,
                                fechaIngreso: paciente.fechaIngreso,
                                cedula: paciente.cedula,
                                domicilio: {
                                    calle: paciente.domicilio.calle,
                                    numero: paciente.domicilio.numero,
                                    localidad: paciente.domicilio.localidad,
                                    provincia: paciente.domicilio.provincia
                                },
                                email: paciente.email
                            },
                            odontologo: {
                                id: odontologo.id,
                                nombre: odontologo.nombre,
                                apellido: odontologo.apellido,
                                matricula: odontologo.matricula,
                            },
                            fecha: document.querySelector('#fecha').value,
                        };

                        const url = '/turnos';
                        const settings = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedFormData)
                        };

                        return fetch(url, settings);
                    });
            })
            .then(response => {
                if (!response.ok) {
                    errorAlert('modificar', 'Turno');
                    throw new Error('Error al modificar el turno');
                }
                successAlert('modificar', 'Turno');
                window.location.href = '/get_reservations.html';
            })
            .catch(error => {
                errorAlert('procesar', 'Turno');
            });
    });

    function resetUploadForm() {
        document.querySelector('#paciente').value = "";
        document.querySelector('#odontologo').value = "";
        document.querySelector('#fecha').value = "";
    }

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

    function findBy(id) {
        const url = '/turnos/' + id;
        const settings = {
            method: 'GET'
        }
        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                let turno = data;
                document.querySelector('#turno_id').value = turno.id;
                document.querySelector('#paciente').value = turno.paciente.cedula;
                document.querySelector('#odontologo').value = turno.odontologo.matricula;
                document.querySelector('#fecha').value = turno.fecha;
                document.querySelector('#div_turno_updating').style.display = "block";
            }).catch(error => {
            errorAlert('buscar', error.message);
        });
    }

    window.findBy = findBy;
});


