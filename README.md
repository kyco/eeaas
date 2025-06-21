# Easter eggs as a service

A zero-dependency library to inject easter eggs into any app or website.

Built with modern JavaScript.

[Demo](https://kyco.github.io/eeaas/examples/nyancat)

[Documentation](https://kyco.github.io/eeaas/)

---

> [!NOTE]
> *The instructions below are for the monorepo and not for the `@eeaas/core` package.*

---

## Installation

This package depends on [Node.js](https://nodejs.org), [nvm](https://github.com/nvm-sh/nvm) and [Nx](https://nx.dev/). Make sure you have those installed and then run:

```sh
# 1 - Clone repo
# 2 - Open folder
# 3 - Ensure you're using the correct Node version
# 4 - Install Nx globally (required to run dev commands)
# 5 - Install dependencies

git clone git@github.com:kyco/eeaas.git
cd eeaas
nvm use
npm i -g nx
npm i
```

## Running locally

The main files are in the [core package](./packages/core/src/). Additionally there is a [docs app](./apps/docs/src/) which is used to test all the changes. To run the app, use:

```sh
# Run the app
nx run docs:serve

# Watch for changes (simultaneously, in a separate tab)
nx run docs:watch-deps
```

The app will be running on [localhost:4200/eeaas/](http://localhost:4200/eeaas/).

## Publishing a release

Merge `develop` into `main` or push directly on `main`. This will trigger a workflow which will publish the package to the [npm @eeaas/core](https://www.npmjs.com/package/@eeaas/core).
