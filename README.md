# Easter eggs as a service

A production ready and framework agnostic library to help bring back the magic of easter eggs into every app and website. Built with modern JavaScript.

**[Start here!](./packages/core/README.md)**

If you want to contribute to the package then read on.

## Running locally

The main files are in the [core package](./packages/core/src/). Additionally there is a [react demo](./apps/demo-react/src/) which is used to test all the changes. To run the react demo, use:

```sh
nx run demo-react:serve
```

The app will be running on [localhost:4200](http://localhost:4200).

## Publishing a release

Publishing a new version is a _two step_ process.

To create a new tag and also create a release on the [GitHub releases](https://github.com/kyco/eeaas/releases) page ensure you're on the `develop` branch, then run:

```
nx release --skip-publish
```

Now merge `develop` into `main` which will trigger the GitHub action to publish the package to [npm](https://www.npmjs.com/package/@eeaas/core).

### Built with Nx

This library was built with the help of [Nx](https://nx.dev).
