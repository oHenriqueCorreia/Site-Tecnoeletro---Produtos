# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Build estático para Apache (sem Node.js no servidor)

```sh
npm run build:static
```

Gera `dist-static/` com um `index.html` físico, `assets/` (JS/CSS) e
`assets-img/` (todas as imagens baixadas). Envie o conteúdo dessa pasta
para o `public_html` do Apache — não é necessário Node.js no servidor.
O `.htaccess` incluído faz o fallback de SPA.

Se as imagens vierem de outro domínio, use:
`ASSET_BASE=https://seu-dominio npm run build:static`.
