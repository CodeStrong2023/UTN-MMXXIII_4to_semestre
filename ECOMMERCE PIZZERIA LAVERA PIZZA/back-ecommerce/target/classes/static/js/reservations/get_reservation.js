window.addEventListener('load', function () {
    (function () {

                fetch('/turnos', {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(data => {
                        // Limpia la tabla antes de agregar nuevos datos
                        var table = document.getElementById("turnoTable");
                        table.innerHTML = "";

                        // Itera sobre los datos (turnos) obtenidos y construye las filas de la tabla
                        data.forEach(turno => {
                            let turnoRow = table.insertRow();
                            let tr_id = 'tr_' + turno.id;
                            turnoRow.id = tr_id;

                            let deleteButton = '<button ' +
                                'data-toggle="tooltip" data-placement="top" title="Eliminar" ' +
                                'id="btn_delete_' + turno.id + '" ' +
                                'type="button" onclick="deleteBy(' + turno.id + ')" ' +
                                'class="btn btn-danger btn_delete">' +
                                '&times;' +
                                '</button>';

                            let updateButton = '<button ' +
                                'data-toggle="tooltip" data-placement="top" title="Actualizar" ' +
                                'id="btn_id_' + turno.id + '" ' +
                                'type="button" onclick="findBy(' + turno.id + ')" ' +
                                'class="btn btn-info btn_id">' +
                                turno.id +
                                '</button>';

                            turnoRow.innerHTML = '<td>' + updateButton + '</td>' +
                                '<td class="td_paciente">' + turno.paciente.nombre.toUpperCase() + " " + turno.paciente.apellido.toUpperCase() + '</td>' +
                                '<td class="td_odontologo">' + turno.odontologo.nombre.toUpperCase() + " " + turno.odontologo.apellido.toUpperCase() + '</td>' +
                                '<td class="td_fecha">' + turno.fecha + '</td>' +
                                '<td>' + deleteButton + '</td>';
                        });
                    })
                    .catch(error => {

                    });



    })();
});
