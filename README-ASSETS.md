# SpacioFit — Assets visuales

Este repositorio es HTML/CSS/JS estático, sin framework.

Por eso los assets públicos viven directamente en:

```text
images/
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

Las URLs usadas por `index.html` siguen siendo:

- `/images/spaciofit/hero-facial-treatment.webp`
- `/images/spaciofit/facial-care-closeup.webp`
- `/images/spaciofit/body-modeling-treatment.webp`
- `/images/spaciofit/laser-hair-removal.webp`
- `/images/spaciofit/relaxation-massage.webp`
- `/images/spaciofit/wellness-interior.webp`

No crear un symlink `images -> public/images`.
No mover estos assets a `public/` salvo que el proyecto sea migrado a un framework que tenga esa convención.
