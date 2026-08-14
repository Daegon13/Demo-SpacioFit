# SpacioFit Montevideo — Landing DEMO

Landing comercial estática, mobile-first y no indexable, diseñada para convertir tráfico de Instagram/Google en reservas en la agenda existente de Agenxu.

## Idea del embudo

**Instagram / Google → landing explica y convence → Agenxu cierra la reserva.**

La web **no implementa ni sustituye** un sistema de reservas.

## Datos conectados

- Agenda: `https://agenxu.com/booking/centro-estetico?location_id=24`
- WhatsApp: `+598 95 835 225`
- Instagram: `@spaciofit.uy`
- Dirección: Av. Luis Alberto de Herrera 4131, Montevideo

## Ejecutar

No necesita dependencias.

Abrí `index.html` directamente o servilo con cualquier servidor estático:

```bash
python -m http.server 8080
```

Después abrí `http://localhost:8080`.

## Deploy rápido

Funciona directamente en Vercel, Netlify, Cloudflare Pages o GitHub Pages.

Para Vercel, subir esta carpeta como proyecto estático. `vercel.json` agrega `X-Robots-Tag: noindex`.

### Privacidad

`noindex` evita la indexación, pero **no es control de acceso**. Si la demo debe ser verdaderamente privada frente a terceros, activá protección de acceso/password del proveedor de hosting o compartí únicamente un Preview Deployment protegido.

## Promociones

Editar `config.js`:

```js
promotion: {
  active: true,
  title: "Texto real de la promo",
  text: "Detalle real publicado por SpacioFit.",
  ctaLabel: "Reservar",
  ctaUrl: "https://agenxu.com/booking/centro-estetico?location_id=24"
}
```

Con `active: false` el componente desaparece.

## Google Reviews

No hay testimonios escritos falsos. El módulo usa únicamente el agregado configurado en `config.js`.

Para producción, lo ideal es reemplazarlo por una integración que consuma reseñas reales desde la fuente autorizada o mantener solo el enlace a Google.

## Analytics

Todos los CTA importantes tienen `data-analytics`.

`script.js` envía eventos a:

- `window.dataLayer` si luego se instala Google Tag Manager.
- `window.plausible()` si luego se instala Plausible.

Eventos principales:
- `reserve_header`
- `reserve_hero`
- `reserve_services`
- `reserve_agenxu`
- `reserve_together`
- `reserve_final`
- `reserve_footer`
- `whatsapp_*`
- `maps`
- `google_reviews`
- `service_interest`

Así se puede medir exactamente cuántos visitantes terminan clickeando “Reservar”.

## Fotografías

Las fotografías actuales son **imágenes ilustrativas externas de ambientación** y no representan clientes, instalaciones ni resultados de SpacioFit. Antes de una versión definitiva para el negocio conviene sustituirlas por material propio autorizado de SpacioFit.

## SEO y noindex

Aunque la demo está bloqueada para indexación, la estructura está preparada para una futura versión pública con intención local sobre:

- centro estético Montevideo
- tratamientos estéticos Montevideo
- depilación definitiva Montevideo
- masajes Montevideo
- estética corporal Montevideo

Para publicar una versión indexable habría que retirar:
- metas `noindex`
- `robots.txt`
- header `X-Robots-Tag` de `vercel.json`
