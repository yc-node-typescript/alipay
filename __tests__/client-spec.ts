import { Client, EClientSignType } from '../src/client';
import { Request } from '../src/requests';
import * as moment from 'moment';
import { readFileSync } from 'fs';
import * as utils from '../src/utils';

let rsaPrivate: string;
let rsaPublic: string;
beforeAll(() => {
  rsaPrivate = readFileSync(__dirname + '/private.pem', 'utf-8');
  rsaPublic = readFileSync(__dirname + '/public.pem', 'utf-8');
});

test('Should create a client object', () => {
  const client = new Client({
    appId: '123',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public.pem',
    signType: EClientSignType.RSA,
    sandbox: true,
  });
  expect(client).toMatchObject({
    appId: '123',
    rsaPrivate: rsaPrivate,
    rsaPublic: rsaPublic,
    signType: EClientSignType.RSA,
    sandbox: true,
  });
});

test('Should create a client object with defaults', () => {
  const client = new Client({
    appId: '123',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public.pem',
  });
  expect(client).toMatchObject({
    appId: '123',
    rsaPrivate: rsaPrivate,
    rsaPublic: rsaPublic,
    signType: EClientSignType.RSA2,
    sandbox: false,
  });
});

test('Should generate requestParams', () => {
  const client = new Client({
    appId: '123',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public.pem',
  });
  const reqParams = client.generateRequestParams(new Request('abc'));
  expect(reqParams).toMatchObject({
    app_id: client.appId,
    method: 'abc',
    format: 'JSON',
    charset: 'utf-8',
    sign_type: client.signType,
    timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    version: '1.0',
  });
  expect(reqParams).toHaveProperty('sign');
});

test('Should generate requestParams sandbox', async () => {
  const client = new Client({
    appId: '2016072400106490',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public.pem',
    sandbox: true,
  });
  const req = new Request('alipay.user.info.share');
  const res = await client.execute(req);
  expect(res).toHaveProperty('alipay_user_info_share_response');
  console.log(res);
  const verify = client.verify('alipay_user_info_share_response', res);
  expect(verify).toBe(true);
});

test('Should generate requestParams', async () => {
  const client = new Client({
    appId: '2016072400106490',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public.pem',
  });
  const req = new Request('alipay.user.info.share');
  const res = await client.execute(req);
  expect(res).toHaveProperty('alipay_user_info_share_response');
});

test('Should verify 0 parameter fail', async () => {
  const client = new Client({
    appId: '2016072400106490',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public.pem',
  });
  const verify: any = client.verify;
  const verified = await verify();
  expect(verified).toBe(false);
});

test('Should verify 1 parameter success', async () => {
  const client = new Client({
    appId: '2016072400106490',
    rsaPrivate: __dirname + '/private.pem',
    rsaPublic: __dirname + '/public_local.pem',
    signType: EClientSignType.RSA2
  });
  const res: any = {
    a: 1,
    b: 2
  };
  const sign = utils.signParams(res, client.rsaPrivate, client.signType);
  res.sign = sign;
  console.log(res);
  const verified = await client.verify(res);
  expect(verified).toBe(true);
});