function deleteBy(id) {
    const url = '/turnos/' + id;
    const settings = {
        method: 'DELETE'
    };

    fetch(url, settings)
        .then(response => {
            if (!response.ok) {

                throw new Error('Error al eliminar el turno');
            }
            return response.text();
        })
        .then(data => {

            let row_id = "#tr_" + id;
            document.querySelector(row_id).remove();


            successAlert('eliminar', 'Turno');

            window.location.reload();
        })
        .catch(error => {
            // Mostrar alerta de error
            errorAlert('eliminar', 'Turno');
        });
}

function successAlert(accion, elemento) {
    const successAlert = `
        <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            El <strong>${elemento}</strong> se ha podido ${accion} con éxito
        </div>`;
    document.querySelector('#response').innerHTML = successAlert;
    document.querySelector('#response').style.display = "block";
}

function errorAlert(accion, mensaje) {
    const errorAlert = `
        <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Error al ${accion}: ${mensaje}</strong>
        </div>`;
    document.querySelector('#response').innerHTML = errorAlert;
    document.querySelector('#response').style.display = "block";
}
