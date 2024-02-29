# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Description

This is a site who provide a list of hero cards from Marvel API

# Getting started

Use the following steps to clone the repository and start the app

1. Clone the repository

```bash
git clone https://github.com/MarianoJimenezPerez/zara-assessment
```

2. Define .env file on client folder with the following keys. Dont forget obtain your keys on Marvel API:

```bash
VITE_API_BASE_URL=https://gateway.marvel.com:443
VITE_API_KEY=
VITE_API_HASH=
VITE_API_TS=
```

3. Install the packages on client folder

```bash
npm install

or

yarn install

or

pnpm install
```

# Client scripts

| Script | Descripcion                                           |
| ------ | ----------------------------------------------------- |
| dev    | Initiate developer server on port 5173 (vite default) |
| test   | Execute all the tests swites                          |
| build  | Create a build dist for deployment                    |

# Libraries used on project

| Library          | Documentation                   |
| ---------------- | ------------------------------- |
| React            | https://es.react.dev/           |
| React Router Dom | https://reactrouter.com/en/main |
