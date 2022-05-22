document.addEventListener('DOMContentLoaded', e => {
    /* -------------------------------------------------------------------------- */
    /*                     DATATABLES ADMINISTRACION CLIENTES                     */
    /* -------------------------------------------------------------------------- */
    $(document).ready(function () {
        $('#table_adminClientes').DataTable();
    });

    /* ----------------------- ADMINISTRACION DE CLIENTES ----------------------- */
    const btnNuevoCliente = document.querySelector('#btnNuevoCliente');
    const btnSaveClient = document.querySelector("#saveClient");
    const formCliente = document.querySelector("#formCliente");
    const cerrar = document.querySelector(".close");
    const modal = document.querySelector(".modal");
    const modalC = document.querySelector(".modal-container");
    const btnEditarCliente = document.querySelector('#editarCliente');
    const btnEliminarCliente = document.querySelector('#eliminarCliente');
    const tituloFormulario = document.querySelector('#tituloFormulario');

    btnNuevoCliente.addEventListener('click', e => {
        e.preventDefault();
        formCliente.style.display = "block";
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        /* ---------------- toogle quita o pone la clase modal close ---------------- */
        modalC.classList.toggle("modal-close");
    })

    /* -------------------------------------------------------------------------- */
    /*                      CODIGO ADMINISTRACION DE CLIENTES                     */
    /* -------------------------------------------------------------------------- */

    cerrar.addEventListener('click', e => {
        e.preventDefault();
        modalC.classList.toggle("modal-close");
        formCliente.style.display = "none";
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        tituloFormulario.innerText = "Alta Cliente";
    })


    btnSaveClient.addEventListener('click', e => {
        e.preventDefault();
        Swal.fire(
            'Cliente',
            'Registrado',
            'exitosamente'
        );
        formCliente.style.display = "none";
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        tituloFormulario.innerText = "Alta Cliente";
    })

    btnEditarCliente.addEventListener('click', e => {
        e.preventDefault();
        formCliente.style.display = "block";
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        /* ---------------- toogle quita o pone la clase modal close ---------------- */
        modalC.classList.toggle("modal-close");
        tituloFormulario.innerText = "Editar Cliente";
    })

    btnEliminarCliente.addEventListener('click', e => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    })

})