# Easter eggs as a service

A zero-dependency library to inject easter eggs into any app or website.

Built with modern JavaScript.

[Demo](https://kyco.github.io/eeaas/docs/examples/examples/nyancat)

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

The main files are in the [core](./packages/core/src/) package. Additionally there is a [test-app](./apps/test-app/src/) which can be used to test all the changes.

To run the app, use:

```sh
# Run the app
npx nx run test-app:serve

# Watch for changes in core package (simultaneously, in a separate tab)
npx nx run test-app:watch-deps
```

The app will be running on: http://localhost:4200/eeaas/

## Publishing a release

Merge `develop` into `main` or push directly on `main`. This will trigger a workflow which will always deploy the docs website and, if there are changes in the core package, will publish the package to the npm under the name [@eeaas/core](https://www.npmjs.com/package/@eeaas/core).
