document.addEventListener("DOMContentLoaded", function() {
    fetch("/user/data")
        .then(response => response.json())
        .then(data => {
            const userName = document.getElementById("usuario");

            if (userName) {
                userName.innerHTML = data.userName;
            }

        }
    );


    fetch("/user/roles")
        .then(response => response.json())
        .then(roles => {
            const contenido = document.getElementById("contenido-dinamico");
            const navegacion = document.getElementById("navegacion");

            if (!roles.includes("ROLE_ADMIN")) {

                navegacion.innerHTML +=
                    '<li class="nav-item dropdown">' +
                    '    <a class="nav-link dropdown-toggle" href="get_reservations.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">reservations</a>' +
                    '    <ul class="dropdown-menu">' +
                    '        <li><a class="dropdown-item" href="post_reservations.html">Guardar</a></li>' +
                    '        <li><a class="dropdown-item" href="get_reservations.html">Listar</a></li>' +
                    '    </ul>' +
                    '</li>' +
                    '<li><a class="btn btn-danger" href="/logout">Salir</a></li>';

                if (contenido) {
                    contenido.innerHTML +=
                        '<li><a class="btn btn-success py-5 fw-bold" href="get_reservations.html" id="abm-turnos">ABM de turnos</a></li>';
                }} else {
                navegacion.innerHTML +=
                    '<li class="nav-item dropdown">' +
                    '    <a class="nav-link dropdown-toggle" href="get_customers.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pacientes</a>' +
                    '    <ul class="dropdown-menu">' +
                    '        <li><a class="dropdown-item" href="post_customers.html">Guardar</a></li>' +
                    '        <li><a class="dropdown-item" href="get_customers.html">Listar</a></li>' +
                    '    </ul>' +
                    '</li>' +
                    '<li class="nav-item dropdown">' +
                    '    <a class="nav-link dropdown-toggle" href="get_products.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Odontólogos</a>' +
                    '    <ul class="dropdown-menu">' +
                    '        <li><a class="dropdown-item" href="post_products.html">Guardar</a></li>' +
                    '        <li><a class="dropdown-item" href="get_products.html">Listar</a></li>' +
                    '    </ul>' +
                    '</li>' +
                    '<li class="nav-item dropdown">' +
                    '    <a class="nav-link dropdown-toggle" href="get_reservations.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">reservations</a>' +
                    '    <ul class="dropdown-menu">' +
                    '        <li><a class="dropdown-item" href="post_reservations.html">Guardar</a></li>' +
                    '        <li><a class="dropdown-item" href="get_reservations.html">Listar</a></li>' +
                    '    </ul>' +
                    '</li>' +
                    '<li><a class="btn btn-danger" href="/logout">Salir</a></li>';
                if (contenido) {
                    contenido.innerHTML +=
                        '<li><a class="btn btn-info py-5 text-white fw-bold" href="get_customers.html" id="abm-pacientes">ABM de pacientes</a></li>' +
                        '<li><a class="btn btn-primary py-5 fw-bold" href="get_products.html" id="abm-odontologos">ABM de odontólogos</a></li>' +
                        '<li><a class="btn btn-success py-5 fw-bold" href="get_reservations.html" id="abm-turnos">ABM de turnos</a></li>';
                }
                }
        });
});