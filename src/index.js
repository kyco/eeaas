/**
 * # Eeaas
 * This utility creates a very rough skelton with which easter eggs can be injected into apps/websites.
 * Use at own risk.
 */
import flatten from 'lodash/flatten';
import forEach from 'lodash/forEach';
import camelCase from 'lodash/camelCase';

import KEYCODE_MAP from './keycodemap';
import { Event } from './event';

const containsKeyName = code => code.indexOf('|') > -1 || KEYCODE_MAP[code];
const getKeyupNamespace = (egg, eventName) => `keyup.${camelCase(egg.name)}_${eventName}`;
const getSetName = index => `Set${index + 1}`;

const isValidEgg = function(egg) {
  // Ensure `name` exists
  if (!egg.name) {
    console.error('Failed to register, register() requires a "name".');
    return false;
  }

  // Ensure `startTrigger` and `start` methods exist
  if (!egg.startTrigger || !egg.start) {
    console.error(`Failed to register "${egg.name}", register() requires a "startTrigger" and an "start".`);
    return false;
  }

  // Ensure `startTrigger` is a string, array or a function
  if (
    typeof egg.startTrigger !== 'string' &&
    typeof egg.startTrigger !== 'function' &&
    !Array.isArray(egg.startTrigger)
  ) {
    console.error(
      `Failed to register "${egg.name}", register() requires "startTrigger" to be a string, array or a function.`
    );
    return false;
  }

  // Ensure `start` is a function
  if (typeof egg.start !== 'function') {
    console.error(`Failed to register "${egg.name}", register() requires "start" to be a function.`);
    return false;
  }

  return true;
};

const attachKeyupHandler = function(egg, eventName, trigger, callback) {
  let index = 0;
  let sequence = [];
  let buttons = [];

  if (!Array.isArray(trigger)) {
    buttons = trigger.split(containsKeyName(trigger) ? '|' : '');
    buttons.forEach(key => {
      buttons[buttons.indexOf(key)] = containsKeyName(key) ? key : key.split('');
    });
    buttons = flatten(buttons);
  } else {
    buttons = {};
    trigger.forEach((set, i) => {
      const setName = getSetName(i);
      buttons[setName] = {};
      buttons[setName].index = 0;
      buttons[setName].sequence = [];
      buttons[setName].codes = trigger[i].split(containsKeyName(trigger[i]) ? '|' : '');
      buttons[setName].codes.forEach(key => {
        buttons[setName].codes[buttons[setName].codes.indexOf(key)] = containsKeyName(key) ? key : key.split('');
      });
      buttons[setName].codes = flatten(buttons[setName].codes);
    });
  }

  Event.addEventListener(getKeyupNamespace(egg, eventName), event => {
    if (!Array.isArray(trigger)) {
      const button = buttons[index];
      const expected = KEYCODE_MAP[button];

      if (event.which === expected) {
        sequence.push(button);
        index += 1;
        if (sequence.join('|') === buttons.join('|')) {
          callback();
          index = 0;
          sequence = [];
        }
      } else {
        index = 0;
        sequence = [];
      }
    } else {
      trigger.forEach((set, i) => {
        const setName = getSetName(i);
        const button = buttons[setName].codes[buttons[setName].index];
        const expected = KEYCODE_MAP[button];

        if (event.which === expected) {
          buttons[setName].sequence.push(button);
          buttons[setName].index += 1;
          if (buttons[setName].sequence.join('|') === buttons[setName].codes.join('|')) {
            callback();
            buttons[setName].index = 0;
            buttons[setName].sequence = [];
          }
        } else {
          buttons[setName].index = 0;
          buttons[setName].sequence = [];
        }
      });
    }
  });
};

const detachKeyupHandler = function(egg, eventName) {
  Event.removeEventListener(getKeyupNamespace(egg, eventName));
};

const Eeaas = {
  Eggs: {},

  enable() {
    forEach(this.Eggs, egg => egg.enable());
  },

  disable() {
    forEach(this.Eggs, egg => {
      egg.stop();
      egg.disable();
    });
  },

  register(egg = {}) {
    if (!isValidEgg(egg)) {
      return;
    }

    if (egg.startTrigger && egg.start && typeof egg.start === 'function') {
      if (typeof egg.startTrigger === 'string' || Array.isArray(egg.startTrigger)) {
        egg.enable = () => {
          attachKeyupHandler(egg, 'start', egg.startTrigger, egg.start);
          attachKeyupHandler(egg, 'stop', egg.stopTrigger, egg.stop);
        };
      }
      if (typeof egg.startTrigger === 'function') {
        if (typeof egg.stopTrigger === 'string' || Array.isArray(egg.stopTrigger)) {
          attachKeyupHandler(egg, 'stop', egg.stopTrigger, egg.stop);
        }
        if (!egg.enable || !egg.disable) {
          const name = egg.name;
          const missingMethod = egg.enable && !egg.disable ? '"disable"' : '"enable"';
          egg.enable = () => {
            console.warn(
              `"${name}" has no ${missingMethod} method. Using a function as "startTrigger" requires a custom "enable" and "disable" method.`
            );
          };
        }
      }
    }

    if (egg.stopTrigger && egg.stop && typeof egg.stop === 'function') {
      if (typeof egg.stopTrigger === 'string' || Array.isArray(egg.stopTrigger)) {
        egg.disable = () => {
          detachKeyupHandler(egg, 'start');
          detachKeyupHandler(egg, 'stop');
        };
      }
      if (typeof egg.stopTrigger === 'function') {
        if (typeof egg.startTrigger === 'string') {
          detachKeyupHandler(egg, 'start');
        }
        if (!egg.disable || !egg.enable) {
          const name = egg.name;
          const missingMethod = egg.disable && !egg.enable ? '"enable"' : '"disable"';
          egg.disable = () => {
            console.warn(
              `"${name}" has no ${missingMethod} method. Using a function as "stopTrigger" requires a custom "enable" and "disable" method.`
            );
          };
        }
      }
    }

    if (!egg.stopTrigger) {
      egg.stop = () =>
        console.warn(`"${egg.name}" has no "stopTrigger" method. Ensure "${egg.name}" can be stopped/removed.`);
    }
    if (!egg.stop) {
      egg.stop = () => console.warn(`"${egg.name}" has no "stop" method. Ensure "${egg.name}" was removed correctly.`);
    }

    this.Eggs[egg.name] = egg;
  }
};

export default Eeaas;
