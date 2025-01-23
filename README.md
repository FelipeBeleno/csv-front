# Proyecto Next.js: Visualizador de CSV

Este proyecto Next.js proporciona una interfaz de usuario para subir y visualizar archivos CSV. Los datos se envían a una API NestJS (que debes tener en ejecución) para su procesamiento y almacenamiento.

## Funcionalidades:

* **Autenticacion basica:** Permite a los usuarios autenticarse antes de cualquier petición.
* **Subida de archivos:** Permite a los usuarios subir archivos CSV a través de un formulario.
* **Visualización de datos:**  Muestra los datos del CSV en tablas interactivas, organizadas en acordeones.
* **Integración con API:** Se comunica con una API NestJS para enviar los archivos CSV y obtener los datos procesados.

## Tecnologías:

* Next.js
* React
* Heroicons
* Tailwind CSS
* Fetch API
* React-Toastify

## Instalación:

1. Clona el repositorio: `git clone https://github.com/FelipeBeleno/csv-front.git`
2. Instala las dependencias: `npm install`
3. Inicia la aplicación: `npm run dev`

## Uso:

1. Abre la aplicación en tu navegador.
2. Sube un archivo CSV usando el formulario.
3. Los datos del CSV se mostrarán en tablas interactivas dentro de acordeones.

## Consideraciones:

* Este proyecto requiere una API NestJS en ejecución para funcionar correctamente.
* Asegúrate de que la URL de la API esté configurada correctamente en el componente `HomePage`.
* Puedes personalizar la apariencia de la interfaz de usuario modificando el CSS.

## Contribuciones:

Las contribuciones son bienvenidas. Por favor, crea un fork del repositorio y envía un pull request con tus cambios.
# csv-front
