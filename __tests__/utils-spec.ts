import * as utils from '../src/utils';
import { readFileSync } from 'fs';

let rsaPrivate: string;
let rsaPublic: string;
beforeAll(() => {
  rsaPrivate = readFileSync(__dirname + '/private.pem', 'utf-8');
  rsaPublic = readFileSync(__dirname + '/public.pem', 'utf-8');
});

test('Should sign rsa and verify correctly', () => {
  const str = 'abc';
  const signed = utils.sign(str, rsaPrivate, 'RSA');
  const verify = utils.verify(str, signed, rsaPublic, 'RSA');
  expect(verify).toBe(true);
});

test('Should sign rsa2 and verify correctly', () => {
  const str = 'abc';
  const signed = utils.sign(str, rsaPrivate, 'RSA2');
  const verify = utils.verify(str, signed, rsaPublic, 'RSA2');
  expect(verify).toBe(true);
});

test('Should formatParams', () => {
  const params = {
    a: '1',
    b: '{}',
  };
  const formatted = utils.formatParams(params);
  expect(formatted).toBe('a=1&b={}');
});

test('Should signParams', () => {
  const params = {
    a: '1',
    b: '{}',
  };
  const signed = utils.signParams(params, rsaPrivate, 'RSA');
  const formatted = utils.formatParams(params);
  const verify = utils.verify(formatted, signed, rsaPublic, 'RSA');
  expect(verify).toBe(true);
});
