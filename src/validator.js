import mappingValidation from './utils/validations.js';

export default class Validator {
  spec = {};

  string() {
    return this.clone(this.spec);
  }

  isValid(value) {
    const specKeys = Object.keys(this.spec);
    if (specKeys.length) {
      for (let i = 0; i < specKeys.length; i += 1) {
        const key = specKeys[i];
        if (!mappingValidation[key](value, this.spec[key])) {
          return false;
        }
      }
    }

    return true;
  }

  clone(spec) {
    const next = Object.create(Object.getPrototypeOf(this));
    next.spec = { ...next.spec, ...spec };
    return next;
  }

  required() {
    this.spec.required = true;
    return this.clone(this.spec);
  }

  contains(str) {
    this.spec.contains = str;
    return this.clone(this.spec);
  }

  minLength(length) {
    this.spec.minLength = length;
    return this.clone(this.spec);
  }
}
