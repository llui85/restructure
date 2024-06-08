import {Number as NumberT} from './Number.js';

export function resolveLength(length, stream, parent) {
  let res;
  if (typeof length === 'number') {
    res = length;

  } else if (typeof length === 'function') {
    res = length.call(parent, parent);

  } else if (parent && (typeof length === 'string')) {
    res = parent[length];

  } else if (stream && length instanceof NumberT) {
    res = length.decode(stream);
  }

  if (isNaN(res)) {
    console.warn('restructure.utils: Not a fixed size. Error overridden, returning 0');
    return 0;
  }

  return res;
};

export class PropertyDescriptor {
  constructor(opts = {}) {
    this.enumerable = true;
    this.configurable = true;

    for (let key in opts) {
      const val = opts[key];
      this[key] = val;
    }
  }
}
