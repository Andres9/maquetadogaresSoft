document.addEventListener("DOMContentLoaded", () => {
    /* --------------------------- MOSTRAR FORMULARIO --------------------------- */
    const cerrar = document.querySelector(".close");
    const modal = document.querySelector(".modal");
    const modalC = document.querySelector(".modal-container");
    const btnNuevaNota = document.querySelector("#nuevaNota");
    const servicioEquipo = document.querySelector('#servicioEquipo');

    btnNuevaNota.addEventListener('click', e => {
        e.preventDefault();
        servicioEquipo.style.display = "block";
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        /* Toogle quita o pone la clase modal close */
        modalC.classList.toggle("modal-close");
    })

    function cerrarModal() {
        modalC.classList.toggle("modal-close");
        servicioEquipo.style.display = "none";
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }

    cerrar.addEventListener('click', e => {
        e.preventDefault();
        cerrarModal();
    })

    /* ------------------------------ VENTANA MODAL ----------------------------- */
    const btnaddPlus = document.querySelector('#addPlus');
    const inServicio = document.querySelector('#inServicio');
    const inPrecio = document.querySelector('#inPrecio');
    const tabla = servicioEquipo.children[7].children[1].children[1];
    let servicios = [];

    btnaddPlus.addEventListener('click', e => {
        e.preventDefault();
        almacenarDatos();
        limpiarHTML();
        crearTabla();
    });

    function almacenarDatos() {
        const servicio = {
            servicio: inServicio.value,
            precio: inPrecio.value,
        }
        servicios = [...servicios, servicio];
        inServicio.value = '';
        inPrecio.value = '';
    }

    function crearTabla() {
        const row = document.createElement('tr');
        servicios.forEach(servicio => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${servicio.servicio}</td>
                <td>${servicio.precio}</td>
                <td>E</td>
                <td>X</td>
            `;
            tabla.appendChild(row);
        })
    }

    function limpiarHTML() {
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild);
        }
    }



    /* -------------------------- LISTA DE DISPOSITIVOS ------------------------- */
    const btnSaveEquipo = document.querySelector('#btnSaveEquipo');

    const cantidadEquipos = document.querySelector('#cantidadEquipos');
    const tipoDispositivo = document.querySelector('#tipoDispositivo');
    const marcaEquipo = document.querySelector('#marcaEquipo');
    const modeloEquipo = document.querySelector('#modeloEquipo');
    const dscEquipo = document.querySelector('#dscEquipo');
    const problemaEquipo = document.querySelector('#problemaEquipo');
    const obsEquipo = document.querySelector('#obsEquipo');

    let dispositivos = [];

    btnSaveEquipo.addEventListener('click', e => {
        e.preventDefault();

        const equipo = {
            cantidadEquipos: cantidadEquipos.value,
            tipoDispositivo: tipoDispositivo.value,
            marcaEquipo: marcaEquipo.value,
            modeloEquipo: modeloEquipo.value,
            dscEquipo: dscEquipo.value,
            problemaEquipo: problemaEquipo.value,
            obsEquipo: obsEquipo.value,
            tablaServicios: servicios,
        }

        dispositivos = [...dispositivos, equipo];

        const contenedorDispositivo = document.querySelector('.contenedorDispositivo');

        const contenido = document.createElement('div');
        contenido.classList = "listaEquipo";

        dispositivos.forEach(dispositivo => {

            contenido.innerHTML = `
           
         <div class="equipo">
             <section id="imagen">
                 <img src="img/impresora.png" alt="">
             </section>
             <section id="infoEquipo">
                 <h3>Información del equipo</h3>
                 <p>Cantidad: <span>${dispositivo.cantidadEquipos}</span></p>
                 <p>Dispositivo: <span>Laptop</span></p>
                 <p>Marca: <span>${dispositivo.marcaEquipo}</span></p>
                 <p>Modelo: <span>${dispositivo.modeloEquipo}</span></p>
             </section>
         </div>
         <div class="equipo">
             <section>
                 <h3>Accesorios:</h3>
                 <p>${dispositivo.dscEquipo}</p>
             </section>
         </div>
         <div class="equipo">
             <section>
                 <h3>Problema del equipo:</h3>
                 <p>${dispositivo.problemaEquipo}
                 </p>
             </section>
         </div>
         <div class="equipo">
             <section>
                 <h3>Observaciones:</h3>
                 <p>${dispositivo.obsEquipo}
                 </p>
             </section>
         </div>
         <div class="equipo">
             <section>
                 <h3>Servicios</h3>
                 <table>
                     <thead>
                         <th>Servicio</th>
                         <th>Servicio</th>
                     </thead>
                     <tbody>
                         <tr>
                             <td>Formateo</td>
                             <td>400</td>
                         </tr>
                         <tr>
                             <td>Instalacion de corel draw</td>
                             <td>400</td>
                         </tr>
                         <tr>
                             <td>Formateo</td>
                             <td>400</td>
                         </tr>
                     </tbody>
                 
                 </table>
             </section>
         </div>
         <div class="equipo">
             <section>
                 <button>Editar</button>
             </section>
             <section>
                 <button>Eliminar</button>
             </section>
         </div>
  
         `;

        })

        contenedorDispositivo.appendChild(contenido);

        console.log(dispositivos);

        cerrarModal();


    })
    /* -------------------------------------------------------------------------- */
    /*                         DATATABLES NOTAS DE ENTRADA                        */
    /* -------------------------------------------------------------------------- */
    $(document).ready(function () {
        $('#table_id').DataTable();
    });


    /* -------------------------------------------------------------------------- */
    /*                                 DATEPICKER                                 */
    /* -------------------------------------------------------------------------- */
    $('.datepicker').pickadate({
        monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd, dd !de mmmm !de yyyy',
        formatSubmit: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true,
        max: 30,
        onStart: function () {
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });
    /* -------------------------------------------------------------------------- */
    /*                                 TIME PICKER                                */
    /* -------------------------------------------------------------------------- */
    $('.timepicker').pickatime();


  




})