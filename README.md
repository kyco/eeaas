# Easter eggs as a service

A zero-dependency library to inject easter eggs into any app or website.

Built with modern JavaScript.

[Docs](./packages/core/README.md) / [Demo](https://kyco.github.io/eeaas/)

---

> [!TIP]
> If you want to run your own version of the package then read on.

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

The main files are in the [core package](./packages/core/src/). Additionally there is a [demo app](./apps/demo-react/src/) which is used to test all the changes. To run the app, use:

```sh
# Run the app
nx run demo-react:serve

# Watch for changes (simultaneously, in a separate tab)
nx run demo-react:watch-deps
```

The app will be running on [localhost:4200/eeaas](http://localhost:4200/eeaas/).

## Publishing a release

To publish a new version merge `develop` into `main`. This will trigger a GitHub action to publish the package to [npm](https://www.npmjs.com/package/@eeaas/core).
