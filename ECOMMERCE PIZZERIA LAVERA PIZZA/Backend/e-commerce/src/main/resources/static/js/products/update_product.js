window.addEventListener('load', function () {


    //Buscamos y obtenemos el formulario donde estan
    //los datos que el usuario pudo haber modificado del odontologo
    const formulario = document.querySelector('#update_odontologo_form');

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
    function resetUploadForm(){
        document.querySelector('#matricula').value = "";
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";

    }


    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let odontologoId = document.querySelector('#odontologo_id').value;

        //creamos un JSON que tendrá los datos del odontologo
        //a diferencia de un odontologo nuevo en este caso enviamos el id
        //para poder identificarlo y modificarlo para no cargarla como nuevo
        const formData = {
            id: odontologoId,
            matricula: document.querySelector('#matricula').value,
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,

        };

        //invocamos utilizando la función fetch la API odontologos con el método PUT que modificará
        //el odontologo que enviaremos en formato JSON
        const url = '/odontologos';
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
          fetch(url,settings)
              .then(response => {
                  if (!response.ok) {
                      errorAlert('modificar', 'Odontologo');
                      throw new Error('Error al modificar el odontologo');
                  }
                  return response;
              })
              .then(data => {
                  successAlert('modificar', 'Odontologo');
                  window.location.reload(); // Recargar la página después de éxito
              })
              .catch(error => {
                  errorAlert('modificar', 'Odontologo');
              });

    })
})

    //Es la funcion que se invoca cuando se hace click sobre el id de un odontologo del listado
    //se encarga de llenar el formulario con los datos de la odontologo
    //que se desea modificar
    function findBy(id) {
          const url = '/odontologos'+"/"+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Odontologo no encontrado');
                  }
                  return response.json();
              })
              .then(data => {
                  let odontologo = data;
              document.querySelector('#odontologo_id').value = odontologo.id;
              document.querySelector('#matricula').value = odontologo.matricula;
              document.querySelector('#nombre').value = odontologo.nombre;
              document.querySelector('#apellido').value = odontologo.apellido;
              //el formulario por default esta oculto y al editar se habilita
              document.querySelector('#div_odontologo_updating').style.display = "block";
          }).catch(error => {
              console.error('Error en la solicitud:', error);
              errorAlert('modificar', 'Odontologo');
          })
      }