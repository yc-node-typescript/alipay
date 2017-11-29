import * as moment from 'moment';
import * as rp from 'request-promise';
import { readFileSync } from 'fs';
import { Request } from './requests/request';
import { signParams, verify, formatParams } from './utils';

export const alipay_gate_way = 'https://openapi.alipay.com/gateway.do';
export const alipay_gate_way_sandbox =
  'https://openapi.alipaydev.com/gateway.do';

export enum EClientSignType {
  RSA = 'RSA',
  RSA2 = 'RSA2',
}

export interface IClientOptions {
  appId: string; // 支付宝的appId
  rsaPrivate: string; // 商户私钥pem文件路径
  rsaPublic: string; // 支付宝公钥pem文件路径
  signType?: EClientSignType; // 签名方式, 'RSA' or 'RSA2'
  sandbox?: boolean; // 是否是沙盒环境
}

export interface IClientRequestParams {
  app_id: string; // 是	32	支付宝分配给开发者的应用ID	2014072300007148
  method: string; // 是	128	接口名称	alipay.trade.fastpay.refund.query
  format?: string; // 否	40	仅支持JSON	JSON
  charset: string; // 是	10	请求使用的编码格式，如utf-8,gbk,gb2312等	utf-8
  sign_type: 'RSA2' | 'RSA'; // 是	10	商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2	RSA2
  sign: string; // 是	256	商户请求参数的签名串，详见签名	详见示例
  timestamp: string; // 是	19	发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"	2014-07-24 03:07:50
  version: '1.0'; // 是	3	调用的接口版本，固定为：1.0	1.0
  [x: string]: any;
}

export class Client {
  public appId: string;
  public rsaPrivate: string;
  public rsaPublic: string;
  public signType: EClientSignType = EClientSignType.RSA2;
  public sandbox: boolean = false;

  constructor(opts: IClientOptions) {
    this.appId = opts.appId;
    this.signType = opts.signType || this.signType;
    this.rsaPrivate = readFileSync(opts.rsaPrivate, 'utf-8');
    this.rsaPublic = readFileSync(opts.rsaPublic, 'utf-8');
    this.sandbox = !!opts.sandbox;
  }

  public async execute(req: Request): Promise<any> {
    const url = this.sandbox ? alipay_gate_way_sandbox : alipay_gate_way;
    const qs = this.generateRequestParams(req);
    const res = await rp.get(url, {
      qs: qs,
      json: true,
    });
    return res;
  }

  public generateRequestParams(req: Request): IClientRequestParams {
    const params: any = Object.assign(
      {
        app_id: this.appId,
        method: req.method,
        format: 'JSON',
        charset: 'utf-8',
        sign_type: this.signType,
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
        version: '1.0',
      },
      req.data
    );
    params.sign = signParams(params, this.rsaPrivate, this.signType);
    return params;
  }

  public verify(type: string, res: any): boolean {
    return verify(JSON.stringify(res[type]), res.sign, this.rsaPublic, this.signType);
  }
}
