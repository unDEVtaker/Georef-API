let urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias";
        let urlDepartamentosBase = "https://apis.datos.gob.ar/georef/api/departamentos";
        let urlMunicipiosBase = "https://apis.datos.gob.ar/georef/api/localidades";

        async function obtenerProvincias() {
            try {
                const response = await fetch(urlProvincias);
                const data = await response.json();
                const selectProvincias = document.getElementById('provincias');
                selectProvincias.innerHTML = '<option value="">Seleccione una provincia</option>';

                const provinciasOrdenadas = data.provincias.sort((a, b) =>
                    a.nombre.localeCompare(b.nombre)
                );

                provinciasOrdenadas.forEach(provincia => {
                    const option = document.createElement('option');
                    option.value = provincia.id;
                    option.textContent = provincia.nombre;
                    selectProvincias.appendChild(option);
                });
            } catch (error) {
                console.error("Error al obtener las provincias:", error);
                const selectProvincias = document.getElementById('provincias');
                selectProvincias.innerHTML = '<option value="">Error al cargar provincias</option>';
            }
        }

        async function obtenerDepartamentos(idProvincia) {
            try {
                const urlConFiltro = `${urlDepartamentosBase}?provincia=${idProvincia}&campos=id,nombre`;
                const response = await fetch(urlConFiltro);
                const data = await response.json();
                const selectDepartamentos = document.getElementById('departamentos');
                selectDepartamentos.innerHTML = '<option value="">Seleccione un departamento</option>';
                selectDepartamentos.disabled = false;

                const departamentosOrdenados = data.departamentos.sort((a, b) =>
                    a.nombre.localeCompare(b.nombre)
                );

                departamentosOrdenados.forEach(departamento => {
                    const option = document.createElement('option');
                    option.value = departamento.id;
                    option.textContent = departamento.nombre;
                    selectDepartamentos.appendChild(option);
                });

                // Limpiamos y deshabilitamos el select de municipios
                const selectMunicipios = document.getElementById('municipios');
                selectMunicipios.innerHTML = '<option value="">Seleccione un departamento primero</option>';
                selectMunicipios.disabled = true;

            } catch (error) {
                console.error(`Error al obtener los departamentos de la provincia con ID ${idProvincia}:`, error);
                const selectDepartamentos = document.getElementById('departamentos');
                selectDepartamentos.innerHTML = '<option value="">Error al cargar departamentos</option>';
                selectDepartamentos.disabled = true;
            }
        }
        async function obtenerMunicipios(idDepartamento) {
            try {
                const urlConFiltro = `${urlMunicipiosBase}?departamento.id=${idDepartamento}&campos=id,nombre`;
                const response = await fetch(urlConFiltro);
                const data = await response.json();
                console.log("Data de municipios:", data);
                const selectMunicipios = document.getElementById('municipios');
                selectMunicipios.innerHTML = '<option value="">Seleccione un municipio</option>';
                selectMunicipios.disabled = false;
        
                if (data && data.municipios) {
                    const municipiosOrdenados = data.municipios.sort((a, b) =>
                        a.nombre.localeCompare(b.nombre)
                    );
        
                    municipiosOrdenados.forEach(municipio => {
                        const option = document.createElement('option');
                        option.value = municipio.id;
                        option.textContent = municipio.nombre;
                        selectMunicipios.appendChild(option);
                    });
                } else {
                    console.warn("La respuesta de municipios no contiene 'municipios':", data);
                    selectMunicipios.innerHTML = '<option value="">No se encontraron municipios</option>';
                    selectMunicipios.disabled = true;
                }
        
            } catch (error) {
                console.error(`Error al obtener los municipios del departamento con ID ${idDepartamento}:`, error);
                const selectMunicipios = document.getElementById('municipios');
                selectMunicipios.innerHTML = '<option value="">Error al cargar municipios</option>';
                selectMunicipios.disabled = true;
            }
        }

        document.addEventListener('DOMContentLoaded', obtenerProvincias);

        document.getElementById('provincias').addEventListener('change', function() {
            const idProvinciaSeleccionada = this.value;
            if (idProvinciaSeleccionada) {
                obtenerDepartamentos(idProvinciaSeleccionada);
            } else {
                const selectDepartamentos = document.getElementById('departamentos');
                selectDepartamentos.innerHTML = '<option value="">Seleccione una provincia primero</option>';
                selectDepartamentos.disabled = true;
                const selectMunicipios = document.getElementById('municipios');
                selectMunicipios.innerHTML = '<option value="">Seleccione un departamento primero</option>';
                selectMunicipios.disabled = true;
            }
        });

        document.getElementById('departamentos').addEventListener('change', function() {
            const idDepartamentoSeleccionado = this.value;
            console.log("ID de departamento seleccionado para municipios:", idDepartamentoSeleccionado); // <-- Agrega esta línea
            if (idDepartamentoSeleccionado) {
                obtenerMunicipios(idDepartamentoSeleccionado);
            } else {
                const selectMunicipios = document.getElementById('municipios');
                selectMunicipios.innerHTML = '<option value="">Seleccione un departamento primero</option>';
                selectMunicipios.disabled = true;
            }
        });