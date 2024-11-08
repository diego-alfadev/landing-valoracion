# Vende tu casa landing
![https://astro.build/](https://img.shields.io/badge/astro-4.16.9-orange?style=flat&logo=astro&logoColor=orange&link=https%3A%2F%2Fastro.build%2F)
![https://www.typescriptlang.org/](https://img.shields.io/badge/typescript-5.6.3-blue?style=flat&logo=typescript&link=https%3A%2F%2Fwww.typescriptlang.org%2F)
![https://tailwindcss.com/](https://img.shields.io/badge/tailwind-3.4.14-cyan?style=flat&logo=tailwindcss&link=https%3A%2F%2Ftailwindcss.com%2F)




Página web estática creada con astro: `npm create astro@latest --template basics`. El propósito principal es actual como landing page para el servicio de valoración del inmueble automatizado.

Construida para [Nuevo Milenio Inmobiliaria](https://nuevomilenio-inmo.com)

Hosteada [Aquí](https://valora-tu-inmueble.nuevomilenio-inmo.com)


## Estructura del proyecto

```plaintext
public/
├── images/
│   ├── carousel/
│   └── nm/
src/
├── components/ #reusable components
├── config/ # handwritten content
├── layouts/ # reusable blocks of UI
├── lib/ # custom functions
├── pages/ # project pages
├── sections/ # sections of a page
└── styles/
```



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
