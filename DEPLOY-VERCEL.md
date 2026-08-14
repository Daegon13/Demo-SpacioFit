# Deploy en Vercel — SpacioFit DEMO

Este proyecto no usa framework ni build step. Vercel debe servir los archivos del repositorio tal cual.

## Configuración recomendada en Vercel

- Framework Preset: **Other** / sin framework
- Root Directory: **raíz del repositorio** (no `public`)
- Build Command: **vacío**
- Output Directory: **vacío**
- Install Command: **vacío**

`index.html` debe estar visible en la raíz del deployment.

Si Root Directory u Output Directory apuntan a `public`, `/` devolverá 404 porque este proyecto no tiene un `public/index.html`.

## Estructura crítica

```text
index.html
styles.css
script.js
config.js
vercel.json
images/
  spaciofit/
    ...
```

Las rutas `/images/spaciofit/...` son ahora rutas físicas reales, sin symlink y sin rewrite.

## Después de cambiar Settings

Vercel aplica los cambios de Root/Output Directory al siguiente deployment, por lo que hay que hacer un Redeploy.
