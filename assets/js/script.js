var tabla = document.getElementById("tabla")

function cargarAutores() {
    fetch('http://127.0.0.1:8080/autores')
        .then(r => r.json())
        .then(
            data => data.map(
                x => {
                    tabla.innerHTML += `<tr>
                                            <td>${x.nombre}</td>
                                            <td>${x.apellido}</td>
                                            <td>${x.nacionalidad}</td>
                                        </tr>`;
                    /* console.log(x.nombre) */
                }
            )
        )
}

cargarAutores()