# 🇦🇷 API GEO REF 🗺️ (en construcción 🚧)

Este proyecto es una aplicación web 🌐 que permite a los usuarios seleccionar provincias 🇦🇷, departamentos y municipios de Argentina utilizando la API de datos geográficos del gobierno argentino.

## 📂 Estructura del Proyecto

### Archivos principales:

  - **index.html**: Contiene la estructura HTML de la aplicación, incluyendo los elementos `<select>` para provincias, departamentos y municipios.
  - **JavaScript/script.js**: Contiene la lógica para interactuar con la API 🔗 y actualizar dinámicamente los elementos `<select>` en función de las selecciones del usuario.
  - **.vscode/settings.json**: Configuración para el entorno de desarrollo en Visual Studio Code.

## ✨ Funcionalidades

1.  **Cargar Provincias**:
    - Al cargar la página, se obtienen las provincias desde la API y se muestran en el `<select>` correspondiente.

2.  **Cargar Departamentos**:
    - Al seleccionar una provincia, se obtienen los departamentos asociados y se muestran en el segundo `<select>`.

3.  **Cargar Municipios**:
    - Al seleccionar un departamento, se obtienen los municipios asociados y se muestran en el tercer `<select>`.

## 🚀 Uso

1.  Clona este repositorio en tu máquina local.
2.  Abre el archivo `index.html` en un navegador.
3.  Selecciona una provincia 🇦🇷, un departamento y un municipio  para explorar las opciones disponibles.

## 🔗 Dependencias

Este proyecto utiliza la API de datos geográficos del gobierno argentino 🏛️:

  - **Provincias**: `https://apis.datos.gob.ar/georef/api/provincias`
  - **Departamentos**: `https://apis.datos.gob.ar/georef/api/departamentos`
  - **Municipios**: `https://apis.datos.gob.ar/georef/api/localidades`

## 🛠️ Configuración del Entorno

El archivo `.vscode/settings.json` está configurado para abrir el proyecto en el navegador Chrome 🌐 utilizando extensiones como Live Server 🔌 o Live Preview 👀.

## ⚙️ Código Principal

El archivo [`JavaScript/script.js`](JavaScript/script.js) contiene las siguientes funciones principales:

  - `obtenerProvincias()`: Obtiene y muestra las provincias 🇦🇷.
  - `obtenerDepartamentos(idProvincia)`: Obtiene y muestra los departamentos de una provincia seleccionada.
  - `obtenerMunicipios(idDepartamento)`: Obtiene y muestra los municipios de un departamento seleccionado.

## ▶️ Ejecución

1.  Asegúrate de tener conexión a Internet para acceder a la API.
2.  Abre el archivo `index.html` en tu navegador.
3.  Interactúa con los menús desplegables para explorar las provincias 🇦🇷, departamentos y municipios.

## 🐞 Captura de Errores

El código maneja errores en las solicitudes a la API y muestra mensajes de error en los menús desplegables si ocurre algún problema.

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, puedes enviar un pull request o reportar problemas en el repositorio.

## 📜 Licencia

Este proyecto utiliza datos públicos proporcionados por el gobierno argentino 🏛️. Asegúrate de cumplir con los términos de uso de la API.

## 👾 Dev

[unDEVtaker](https://github.com/unDEVtaker)

![gif](img/cowboy%20bebop%20eating%20GIF.gif)
