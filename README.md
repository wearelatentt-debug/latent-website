# LATENT · sitio web vol. 02

Sitio estático (HTML / CSS / JS plano). Se publica en Vercel desde la rama principal del repo.

## Estructura
- `index.html`, `proyectos.html`, `servicios.html`, `talento.html`, `studio.html`, `contacto.html`
- `assets/styles.css` · `assets/main.js`
- `videos/` · showreel y proyectos (ver abajo)
- `assets/talento/` · 4 imágenes del bloque "talento digital" de la home
- `vercel.json` · URLs limpias (`/proyectos` en vez de `/proyectos.html`) y caché de videos
- `build.py` · opcional. Regenera las seis páginas desde bloques compartidos. Los HTML se pueden editar a mano sin usarlo.

## Archivos que hay que subir
| Archivo | Uso |
|---|---|
| `videos/showreel.mp4` | Hero de la home. Ideal < 25 MB, H.264, 1920×1080, sin audio o con audio (arranca muteado). |
| `videos/showreel-poster.jpg` | Primer frame del showreel (mobile / antes de cargar). |
| `videos/proyecto-01.mp4` … `proyecto-05.mp4` | Galería. Orden = orden de los títulos. Ideal < 30 MB cada uno. |
| `assets/talento/escenario-01.jpg` … `04.jpg` | Mismo rostro en 4 escenarios (Estudio, Ciudad, Playa, Nieve). 4:5, mín. 1200×1500. Si faltan, queda un placeholder oscuro. |
| `og-image.png` | 1200×630 para redes. |

Para cambiar el orden o los títulos de la galería: editar `VIDEOS` en `build.py` y correr `python3 build.py`, o editar directamente los `<button class="gallery-item">` en `index.html` y `proyectos.html`.

## Idiomas
`assets/main.js` → objeto `translations`. `es` está completo. `en` y `pt` están vacíos: toda clave que falte cae al castellano. Se completan sobre el copy aprobado.

## Reemplazar el sitio anterior
1. En el repo, borrar el `index.html` viejo y los `work-0X.mp4` / `foto-0X` que ya no se usan.
2. Copiar todo el contenido de esta carpeta a la raíz del repo.
3. Subir los videos e imágenes a `videos/` y `assets/talento/`.
4. Commit + push. Vercel redeploya solo.

## El punto en la interfaz (Brand Guidelines, Cap 07)
- Cierra todos los titulares (`<span class="hd">`), Uso 02.
- Entrada al sitio: una vez por sesión, el punto pulsa y crece hasta llenar la pantalla de naranja; corte a la página.
- Navegación interna: el punto crece desde el click, la página siguiente entra desde naranja.
- CTA final de cada página: el punto crece con el scroll hasta volverse el fondo naranja. Único bloque naranja del sitio.
- Nav activa, paginación de escenarios, numeración de proyectos y ticker usan el punto como marcador (Usos 04 y 06).
- Todo se desactiva con `prefers-reduced-motion`.
