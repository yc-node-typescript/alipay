'use strict';
import {
  EGoodType,
  EProductCode,
  EPayChanel,
  EQRPayMode,
} from '../bizContent/enum';
import {
  IBizContentExtendParams,
  IBizContentPassbackParams,
  IBizContentPromoParams,
} from '../bizContent/interface';
import { Request } from '../../request';
import { watch } from 'fs';

export interface IPageBizContent {
  /**
   * 商品的标题/交易标题/订单标题/订单关键字等
   */
  subject: string;

  /**
   * 商户网站唯一订单号
   */
  out_trade_no: string;

  /**
   * 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]
   */
  total_amount: string;

  /**
   * 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
   */
  body?: string;

  goods_type?: EGoodType; //

  /**
   * 订单包含的商品列表信息，JSON格式，例如：{"show_url":"https://example/good/id"}
   */
  goods_detail?: string;

  /**
   * 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
   */
  timeout_express?: string;

  /**
   * 获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。
   */
  auth_token?: string;

  /**
   * 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
   */
  passback_params?: IBizContentPassbackParams;

  /**
   * 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
   */
  extend_params?: IBizContentExtendParams;

  /**
   * 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
   */
  enable_pay_channels?: EPayChanel[];

  /**
   * 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
   */
  disable_pay_channels?: EPayChanel[];

  /**
   * 商户门店编号
   */
  store_id?: string;

  /**
   * PC扫码支付的方式，支持前置模式和跳转模式。前置模式是将二维码前置到商户的订单确认页的模式，需要商户在自己的页面中以 iframe 方式请求支付宝页面。
   */
  qr_pay_mode?: EQRPayMode;

  /**
   * 商户自定义二维码宽度。注：qrPayMode = 4 时该参数生效
   */
  qrcode_width?: string;
}

/**
 * Page支付
 *
 * ```ts
 * import { Client, TradePagePayRequest} from '@ycnt/alipay';
 *
 * const client = new Client(...);
 * const req = new TradePagePayRequest();
 * req.setBizContent({
 *   subject: 'test',
 *   out_trade_no: 'test001',
 *   total_amount: '0.01'
 * })
 * const res = await client.generateRequestParams(req);
 * console.log(res);
 *
 * ```
 */
export class TradePagePayRequest extends Request {
  constructor() {
    super('alipay.trade.page.pay');
  }

  public setBizContent(bc: IPageBizContent): void {
    this.data.bizContent = JSON.stringify(
      Object.keys(bc)
        .map(x => {
          switch (x) {
            case 'passback_params':
              return [
                x,
                encodeURIComponent(
                  Object.keys(bc[x])
                    .map(k => `${k}=${bc[x][k]}`)
                    .join('&')
                ),
              ];
            case 'extend_params':
              return [x, JSON.stringify(bc[x])];
            case 'enable_pay_channels':
            case 'disable_pay_channels':
              return [x, bc[x].join(',')];
            default:
              return [x, (<any>bc)[x]];
          }
        })
        .reduce((a: any, b: [any, any]) => {
          a[b[0]] = b[1];
          return a;
        }, {})
    );
  }
}
