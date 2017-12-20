/**
 * 支付宝接口请求
 *
 * ```ts
 * import { Client, Request } from '@ycnt/alipay';
 *
 * const client = new Client(...);
 *
 * const req = new Request('alipay.user.info.share');
 * req.data.auth_token = 'xxx';
 *
 * const res = await client.execute(req);
 * console.log(res);
 *
 * ```
 */
export class Request {
  /**
   * 请求的支付宝API。例：alipay.user.info.share
   */
  public method: string;

  /**
   * 公共请求参数
   * 已下字段均省略，Client类会自动生成。
   *
   * `app_id`, `method`, `format`, `charset`,`sign_type`, `sign`, `version`
   */
  public data: {
    [x: string]: any;
  } = {};

  /**
   * 构造方法
   * @param method {string} 请求的支付宝API。例：alipay.user.info.share
   */
  constructor(method: string) {
    this.method = method;
  }
}
