import { describe, expect, test } from '@jest/globals';
import Validator from '../index.js';

describe('string validator', () => {
  const v = new Validator();
  test('valid non-required value', () => {
    const schema = v.string();
    expect(schema.isValid('')).toBeTruthy();
    expect(schema.isValid(null)).toBeTruthy();
    expect(schema.isValid(undefined)).toBeTruthy();
    expect(schema.isValid('fox')).toBeTruthy();
  });

  test('valid required value', () => {
    const schema = v.string();
    schema.required();
    expect(schema.isValid('')).toBeFalsy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(undefined)).toBeFalsy();
    expect(schema.isValid('fox')).toBeTruthy();
  });

  test('valid contains value', () => {
    const schema = v.string();
    expect(
      schema.contains('what').isValid('what does the fox say'),
    ).toBeTruthy();
    expect(
      schema.contains('whatthe').isValid('what does the fox say'),
    ).toBeFalsy();
  });
});
