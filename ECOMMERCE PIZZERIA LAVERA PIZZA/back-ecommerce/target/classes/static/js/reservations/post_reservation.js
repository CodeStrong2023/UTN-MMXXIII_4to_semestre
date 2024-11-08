window.addEventListener('load', function () {

    // Al cargar la pagina buscamos y obtenemos el formulario donde estarán
    // los datos que el usuario cargará del nuevo turno
    const formulario = document.querySelector('#add_new_turno');

    // Ante un submit del formulario se ejecutará la siguiente función
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Para prevenir que el formulario se envíe de inmediato

        // Primero, obtenemos la cédula del paciente y la matrícula del odontólogo del formulario
        const cedulaPaciente = document.querySelector('#paciente').value;
        const matriculaOdontologo = document.querySelector('#odontologo').value;

        // Buscamos el ID del paciente usando la cédula
        fetch(`/pacientes/cedula/${cedulaPaciente}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Paciente no encontrado');
                }
                return response.json();
            })
            .then(paciente => {
                // Buscamos el ID del odontólogo usando la matrícula
                return fetch(`/odontologos/matricula/${matriculaOdontologo}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Odontólogo no encontrado');
                        }
                        return response.json();
                    })
                    .then(odontologo => {
                        // Ahora que tenemos ambos IDs, construimos el formData con el ID del paciente y el ID del odontólogo
                        const formData = {
                            paciente: paciente,
                            odontologo: odontologo,
                            fecha: document.querySelector('#fecha').value,
                        };

                        // Ahora enviamos el JSON con los objetos
                        const url = '/turnos';
                        const settings = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData)
                        };

                        return fetch(url, settings);
                    });
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Paciente no encontrado');
                }
                return response.json();
            })
            .then(data => {
                // Si no hay ningun error se muestra un mensaje diciendo que el turno se agrego bien
                let successAlert = '<div class="alert alert-success alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong></strong> Turno agregado </div>';

                document.querySelector('#response').innerHTML = successAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();
            })
            .catch(error => {
                // Si hay algun error se muestra un mensaje diciendo que el turno no se pudo guardar y se intente nuevamente
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    `<strong>Error: ${error.message}</strong> </div>`;

                document.querySelector('#response').innerHTML = errorAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();
            });
    });

    function resetUploadForm() {
        document.querySelector('#paciente').value = "";
        document.querySelector('#odontologo').value = "";
        document.querySelector('#fecha').value = "";
    }

    (function() {
        let pathname = window.location.pathname;
        if (pathname === "/") {
            document.querySelector(".nav .nav-item a:first").classList.add("active");
        } else if (pathname === "/get_reservations.html") {
            document.querySelector(".nav .nav-item a:last").classList.add("active");
        }
    })();
});
