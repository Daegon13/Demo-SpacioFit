# SpacioFit — Assets visuales

Extraer el contenido de este ZIP en la **raíz del repositorio**.

La estructura resultante será:

```text
public/
└── images/
    └── spaciofit/
        ├── hero-facial-treatment.png
        ├── hero-facial-treatment.webp
        ├── facial-care-closeup.png
        ├── facial-care-closeup.webp
        ├── body-modeling-treatment.png
        ├── body-modeling-treatment.webp
        ├── laser-hair-removal.png
        ├── laser-hair-removal.webp
        ├── relaxation-massage.png
        ├── relaxation-massage.webp
        ├── wellness-interior.png
        └── wellness-interior.webp
```

## Rutas que YA espera el prompt enviado a Codex

No renombrar estos seis PNG:

- `/images/spaciofit/hero-facial-treatment.png`
- `/images/spaciofit/facial-care-closeup.png`
- `/images/spaciofit/body-modeling-treatment.png`
- `/images/spaciofit/laser-hair-removal.png`
- `/images/spaciofit/relaxation-massage.png`
- `/images/spaciofit/wellness-interior.png`

Los `.webp` son alternativas optimizadas para una pasada posterior o para un `<picture>` si el proyecto lo admite.

## Etiqueta global recomendada

`Imágenes ilustrativas utilizadas para esta demo.`

## ALT recomendados

- `hero-facial-treatment.png` — `Tratamiento facial en un espacio de bienestar, imagen ilustrativa.`
- `facial-care-closeup.png` — `Detalle de un tratamiento de cuidado facial, imagen ilustrativa.`
- `body-modeling-treatment.png` — `Tratamiento estético corporal con equipo de aplicación manual, imagen ilustrativa.`
- `laser-hair-removal.png` — `Sesión de depilación con tecnología de luz en un espacio de estética, imagen ilustrativa.`
- `relaxation-massage.png` — `Masaje de relajación en un ambiente de bienestar, imagen ilustrativa.`
- `wellness-interior.png` — `Interior contemporáneo de estética y bienestar, imagen ambiental ilustrativa.`

## Carga

- Hero: no usar lazy-loading; priorizar.
- Resto: `loading="lazy"`.
- Definir dimensiones/aspect-ratio para evitar CLS.
- Usar `object-fit: cover`.

`assets-manifest.json` contiene el mismo mapeo en formato estructurado.
