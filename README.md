# eeaas

Easter eggs as a service

This utility creates a very rough skelton with which easter eggs can be injected into web apps running JavaScript.
> Use at own risk.


## Basic installation

```javascript
yarn add eeaas
```
Once installed you can import the utility and start creating your own easter eggs.


## Installing default eggs

```javascript
yarn add eeaas-snake
yarn add eeaas-nyancat
```


## Using eeaas

```javascript
import Eeaas from 'eeaas';
import Snake from 'eeaas-snake';
import Nyancat from 'eeaas-nyancat';

// Register the eggs, only registered eggs can be activated
Eeaas.register(Snake);
Eeaas.register(Nyancat);

// Enable all keylisteners (start triggers) for all eggs
Eeaas.enable();
```

That's about it. Once enabled, all eggs will listen until triggered.


## How does eeaas work?

Eeaas at its core provides a keylistener and a basic event handler for adding and removing keylisteners (or start triggers) from the DOM. Eeaas is not limited to keylisteners. Any logic to trigger an easter egg can be used. Eeaas provides a container to easily manage, add/remove and start/stop easter eggs.


## Building your own egg

```javascript
export default {
  name: 'MyEgg', // Required, this name is used as the namespace for the easter egg

  startTrigger: 'secretstring', // Required, must be as string, an array of strings or a function

  stopTrigger: 'esc', // Optional, must be a string, an array of strings or a function

  start() { ... }, // Required, contains all logic for the easter egg and attaches necessary elements to the DOM

  stop() { ... } // Optional, contains logic to remove all the easter egg functionality and to remove the attached elements from the DOM
};
```


## Eeaas methods

Eeaas has 3 built-in methods:

`register()`

Used to add easter eggs to the eeaas container.

`enable()`

Used to add the keylisteners (start triggers) for all easter eggs. Can also be used on eggs individually.

`disable()`

Used to remove the keylisteners (start triggers) for all easter eggs. Can also be used on eggs individually.

Example:
```javascript
import Eeaas from 'eeaas';
import Snake from 'eeaas-snake';
import Nyancat from 'eeaas-nyancat';

Eeaas.register(Snake);
Eeaas.register(Nyancat);

// Only enable "Snake"
Eeaas.Eggs.Snake.enable();

// Enable all eggs
Eeaas.enable();

// Disable "Snake"
Eeaas.Eggs.Snake.disable();

// Disable all eggs
Eeaas.disable();
```
