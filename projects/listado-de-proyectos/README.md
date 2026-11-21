# Performance 7 Digital · Proyectos y servicios

Sitio estático de una página para mostrar proyectos, compatible con GitHub Pages. No requiere dependencias, compilación ni servicios externos.

## Publicación

Subí el contenido de esta carpeta (incluidos `index.html` y `assets/`) a la raíz del repositorio de GitHub Pages que quieras utilizar. En Settings → Pages, elegí **Deploy from a branch**, la rama correspondiente y la carpeta `/ (root)`.

**Importante:** `performance7digital.github.io` ya es el sitio principal indicado entre los proyectos. Publicar este índice en la raíz de ese mismo repositorio **reemplazaría la página principal actual**. Para conservarla, publicá el índice en una subcarpeta como `/projects-portfolio/` dentro del repositorio existente, o en otro repositorio GitHub Pages. Los enlaces internos de esta entrega son relativos y admiten ambas opciones.

## Estructura

- `index.html`: contenido, títulos, enlaces y descripciones de los proyectos.
- `assets/css/styles.css`: estilos adaptables y máscaras de desvanecimiento.
- `assets/js/theme.js`: selector de tema con persistencia en `localStorage`.
- `assets/images/projects/`: vistas previas WebP de los proyectos.
- `assets/images/favicon.svg`: símbolo gráfico simplificado para la pestaña.

## Añadir un proyecto

1. Guardá su captura optimizada en `assets/images/projects/`.
2. Duplicá uno de los bloques `<article class="project">` en `index.html`.
3. Actualizá el número, `id`, título, enlaces, imagen, texto alternativo y descripción.
4. Actualizá el contador de proyectos del encabezado.
5. Si creás una imagen móvil específica, añadí un `<source media="(max-width: 640px)" ...>` al elemento `<picture>`.

Las vistas previas de los proyectos 3–6 se recortaron a partir de las capturas proporcionadas. Las imágenes 1–2 utilizan exactamente los recortes de escritorio y móvil que fueron compartidos, convertidos a WebP para reducir el peso.

El botón de tema comienza en oscuro y permite alternar a claro; el navegador guarda la preferencia cuando lo permite. El desvanecimiento en los bordes usa `mask-image`, sin modificar los archivos originales.
