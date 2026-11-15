# Presentación AR Tour Kaminaljuyú

Presentación web (sitio estático) del *AR Tour Kaminaljuyú · Realidad aumentada*.
No necesita backend: es HTML + CSS + JavaScript.

## Ver la presentación

- **En línea (GitHub Pages):** _(se completará con la URL una vez activado Pages)_
- **En tu computadora:** abre `index.html` con un navegador, o levanta un servidor local:

  ```bash
  python3 -m http.server 8000
  ```

  Luego abre http://localhost:8000/

## Estructura

- `index.html` — archivo principal de la presentación.
- `AR Tour Kaminaljuyú · Realidad aumentada_files/` — estilos (`.css`), scripts (`.js.download`) e imágenes que usa la presentación.

## Editar

1. Clona el repositorio.
2. Modifica `index.html` o los archivos dentro de la carpeta `_files`.
3. Haz commit y push a la rama `main`. GitHub Pages republica automáticamente en 1–2 minutos.

El orden del deck lo define el orden de los `<script>` en `index.html`; cada
diapositiva es un archivo `NN-id.js` que llama a `Presentacion.diapositiva(...)`.

## Secciones del deck (22 diapositivas)

- **1–13 · Módulo de arquitectura y lenguaje (Mónica).** Sin cambios.
- **14–21 · Módulo de GPS y navegación (José Pereira).** Añadidas en noviembre de 2025:
  `40-gps-intro` … `47-gps-resultados-tecnicos` (+ `gps.css`). Cubren, en este orden:
  qué resuelve el módulo, objetivos, las ocho fases de metodología, las decisiones de
  diseño, la arquitectura y el flujo, la detección de proximidad y dos diapositivas de
  resultados (validación con usuarios y rendimiento técnico).
- **22 · Cierre.** Compartida.

Decisiones de esta tanda: toda cifra y afirmación de las diapositivas 14–21 proviene del
trabajo escrito (objetivos §2.2, metodología §7, resultados §8) y del código del módulo
(`FeatureModules/GPSModule/`). Las diapositivas de producto previas (guía virtual,
colocación, modelos, recorrido) se retiraron del deck; sus archivos siguen en `_files`
pero ya no se cargan.
