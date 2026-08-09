# FALA IRMÃO — Sitio web

Landing de una página para **FALA IRMÃO**, ropa americana usada de primera calidad
(moda urbana vintage: 80s, 90s, oversize, retro) — Córdoba, Argentina.

Secciones: **Inicio · Nosotros · Contacto** (navegación con scroll suave y menú móvil).

## Cómo verla
Abrí `index.html` en el navegador. Para que carguen bien las tipografías y Tailwind
necesita conexión a internet. Si querés servirla localmente:

```bash
py -m http.server 5599
# luego abrí http://127.0.0.1:5599
```

## ⚙️ Qué tenés que editar (importante)
Todos los datos de contacto están en un solo lugar: **`assets/js/main.js`**, arriba de todo:

```js
const CONFIG = {
  whatsapp: "5493512093734",                       // +54 9 3512 09-3734
  instagram: "falairmao_",                         // usuario sin @
  tienda: "https://paycomerce.com/t/fala-irmao",   // tienda online (PayComerce)
  email: "hola@falairmao.com"                      // opcional
};
```

- **WhatsApp**: los botones "Consultar por WhatsApp", "Quiero mi 15%" y el formulario abren WhatsApp con el mensaje ya escrito.
- **Tienda**: los botones "Tienda" / "Ir a la tienda" llevan a tu storefront de PayComerce.
- **Instagram** @falairmao_ ya está cargado en todos los botones y links.

## Estructura
```
index.html            → la página
assets/css/styles.css → estilos propios (paleta, logo óvalo, marquee, animaciones)
assets/js/main.js     → menú, animaciones y contacto (EDITÁ EL CONFIG acá)
assets/img/           → imágenes usadas en la web
referencias/          → las 31 imágenes originales del zip (logos, flyers, stickers)
```

## Paleta (del branding)
- Beige `#C0B6AA` · Crema `#EFE8DA`
- Bordó `#7B2E3B` · Azul marino `#26304C`
- Verde petróleo `#3F6A61` · Oliva `#7E8B3F`

## Tecnología
HTML + Tailwind CSS (Play CDN) + CSS propio + un poco de JavaScript vanilla. Sin build, sin dependencias que instalar.

> Nota: Tailwind se carga por CDN (aparece un aviso en consola de que el CDN es para desarrollo).
> Funciona perfecto así; si algún día querés optimizar para producción, se puede compilar Tailwind localmente.
