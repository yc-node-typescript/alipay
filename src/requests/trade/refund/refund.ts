import { IRefundBizContent } from './interface';
import { Request } from '../../request';

/**
 * 退款
 * 
 * ```ts
 * import { Client, TradeRefundRequest } from '@ycnt/alipay';
 * 
 * const client = new Client(...);
 * const req = new TradeRefundRequest();
 * req.setBizContent({
 *   out_trade_no: 'test001',
 *   refund_amount: 10,
 * });
 * const res = await client.execute(req);
 * console.log(res);
 * 
 * ```
 */
export class TradeRefundRequest extends Request {
  constructor() {
    super('alipay.trade.refund');
  }

  public setBizContent(bc: IRefundBizContent): void {
    this.data.bizContent = JSON.stringify(bc);
  }
}
