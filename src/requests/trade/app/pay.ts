import { EGoodType, EProductCode, EPayChanel } from '../bizContent/enum';
import {
  IBizContentExtendParams,
  IBizContentPassbackParams,
  IBizContentPromoParams,
} from '../bizContent/interface';
import { Request } from '../../request';

export interface IAppBizContent {
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

  /**
   * 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
   */
  timeout_express?: string;

  /**
   * 收款支付宝用户ID。 如果该值为空，则默认为商户签约账号对应的支付宝用户ID
   */
  seller_id?: string;

  goods_type?: EGoodType;

  /**
   * 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
   */
  passback_params?: IBizContentPassbackParams;

  /**
   * 优惠参数(仅与支付宝协商后可用)
   */
  promo_params?: IBizContentPromoParams;

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
}

/**
 * APP支付
 *
 * ```ts
 * import { Client, TradeAppPayRequest } from '@ycnt/alipay';
 *
 * const client = new Client(...);
 * const req = new TradeAppPayRequest();
 * req.setBizContent({
 *   subject: 'test',
 *   out_trade_no: 'test001',
 *   total_amount: '0.01',
 * });
 * const res = await client.generateRequestParams(req);
 * console.log(res);
 *
 * ```
 */
export class TradeAppPayRequest extends Request {
  constructor() {
    super('alipay.trade.app.pay');
  }

  public setBizContent(bc: IAppBizContent): void {
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
            case 'promo_params':
            case 'extend_params':
              return [x, JSON.stringify(bc[x])];
            case 'enable_pay_channels':
            case 'disable_pay_channels':
              return [x, bc[x].join(',')];
            default:
              return [x, (<any>bc)[x]];
          }
        })
        .concat([['product_code', EProductCode.QUICK_MSECURITY_PAY]])
        .reduce((a: any, b: [any, any]) => {
          a[b[0]] = b[1];
          return a;
        }, {})
    );
  }
}
