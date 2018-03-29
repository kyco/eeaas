# Easter eggs as a service

This utility creates a very basic skelton with which easter eggs can be injected into apps or websites running JavaScript.
> Use at own risk.

[Demo](https://eeaas.herokuapp.com/)


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

That's about it. Once enabled, all eggs will listen until triggered. In this example, if you included snake and nyancat, you can test out the easter eggs by typing "snake" and "nyan" respectively to trigger them (use "esc" to cancel the easter eggs).


## How does eeaas work?

At its core eeaas provides a key listener and a basic event handler for adding and removing key listeners (or start triggers). Eeaas is not limited to key listeners. Any logic to trigger an easter egg can be used.

Importing eeaas won't add any easter eggs to your app/website. You'll have to write your own or import the default eggs to get started.

To make an egg available it has to be registered with eeaas. You can do so by running `Eeaas.register(MyEgg)`, where `MyEgg` refers to an object. Once the egg is registered you can enable the egg by running `Eeaas.enable()`. You can also individually enable or disable eggs by calling the `enable()` or `disable` methods explicitly on the egg itself, e.g. `Eeaas.Eggs.MyEgg.enable()` or `Eeaas.Eggs.MyEgg.disable()`.

If you provided a `startTrigger` which is a string then typing the keys in the provided `startTrigger` will call the egg's `start` method. The `enable()` and `disable()` methods are safety wrappers which ensure that the eggs are only ever triggerable when the eggs themselves are "enabled".

If an egg is disabled it will be available but won't be triggereable via the `startTrigger`. You can always manually trigger eggs via the code. So even if an egg is disabled, calling `Eeaas.Eggs.MyEgg.start()` will run the egg.


## Building your own egg

```javascript
export default {
  name: 'MyEgg', // Required, this name is used as the namespace for the easter egg

  startTrigger: 'secretstring', // Required, must be as string, an array of strings or a function

  stopTrigger: 'esc', // Optional, must be a string, an array of strings or a function

  start() { ... }, // Required, contains all logic for the easter egg and attaches necessary elements to the DOM

  stop() { ... } // Optional, contains logic to remove the easter egg functionality and the attached DOM elements
};
```


## Eeaas methods

Eeaas comes with 3 built-in methods. These methods are mainly used to add, enable and disable easter eggs.

   Method    |                                                 Description
------------ | ------------------------------------------------------------------------------------------------------------
`register()` | Used to add easter eggs to the eeaas container.
`enable()`   | Used to add the keylisteners (start triggers) for all easter eggs. Can also be used on eggs individually.
`disable()`  | Used to remove the keylisteners (start triggers) for all easter eggs. Can also be used on eggs individually.

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
