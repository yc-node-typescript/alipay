import * as crypto from 'crypto';

/**
 * 对字符串进行签名验证
 * @param {String} str 要验证的参数字符串
 * @param {String} sign 要验证的签名
 * @param {String} publicKey 支付宝公钥
 * @param {String} [signType] 签名类型
 * @returns {Boolean}
 */
export function verify(
  str: string,
  sign: string,
  publicKey: string | object,
  signType: 'RSA2' | 'RSA'
): boolean {
  let verify;
  if (signType === 'RSA2') {
    verify = crypto.createVerify('RSA-SHA256');
  } else {
    verify = crypto.createVerify('RSA-SHA1');
  }
  verify.update(str, 'utf8');
  return verify.verify(publicKey, sign, 'base64');
}

/**
 * 对字符串进行签名
 * @param {String} str 要签名的字符串
 * @param {String} privateKey 商户应用私钥
 * @param {String} [signType] 签名类型
 * @returns {String}
 */
export function sign(
  str: string,
  privateKey: string | { key: string; passphrase: string },
  signType: 'RSA2' | 'RSA'
): string {
  let sha;
  if (signType === 'RSA2') {
    sha = crypto.createSign('RSA-SHA256');
  } else {
    sha = crypto.createSign('RSA-SHA1');
  }
  sha.update(str, 'utf8');
  return sha.sign(privateKey, 'base64');
}

/**
 * 对请求参数进行组装、编码
 * @param {Object} params  请求参数
 * @returns {Object}
 */
export function formatParams(params: any): string {
  return Object.keys(params)
    .filter(k => params[k] !== undefined && params[k] !== '')
    .sort()
    .map(k => `${k}=${params[k]}`)
    .join('&');
}

/**
 * 对请求参数进行组装、编码、签名，返回已组装好签名的参数字符串
 * @param {{Object} params  请求参数
 * @param {String} privateKey 商户应用私钥
 * @param {String} [signType] 签名类型 'RSA2' or 'RSA'
 * @returns {String}
 */
export function signParams(
  params: any,
  privateKey: string | { key: string; passphrase: string },
  signType: 'RSA2' | 'RSA'
) {
  const formatted = formatParams(params);
  return sign(formatted, privateKey, signType);
}
