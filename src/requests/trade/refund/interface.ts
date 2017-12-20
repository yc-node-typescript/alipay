export interface IRefundBizContent {
  /**
   * 订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 tradeId,outTradeId如果同时存在优先取tradeId
   */
  out_trade_no?: string;

  /**
   * 支付宝交易号，和商户订单号不能同时为空
   */
  trade_no?: string;

  /**
   * 需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数
   */
  refund_amount: number;

  /**
   * 退款的原因说明
   */
  refund_reason?: string;

  /**
   * 标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。
   */
  out_request_no?: string;

  /**
   * 卖家端自定义的的操作员 ID
   */
  operator_id?: string;

  /**
   * 商户的门店编号
   */
  store_id?: string;

  /**
   * 商户的终端编号
   */
  terminal_id?: string;

  /**
   * 	退款包含的商品列表信息。
   */
  goods_detail?: IGoodsDetail[];
}

export interface IGoodsDetail {
  /**
   * 必填	32	商品的编号	apple-01
   */
  goods_id: string;

  /**
   * 可选	32	支付宝定义的统一商品编号	20010001
   */
  alipay_goods_id?: string;

  /**
   * 必填	256	商品名称	ipad
   */
  goods_name: string;

  /**
   * 必填	10	商品数量	1
   */
  quantity: number;

  /**
   * 必填	9	商品单价，单位为元	2000
   */
  price: number;

  /**
   * 可选	24	商品类目	34543238
   */
  goods_category?: string;

  /**
   * 可选	1000	商品描述信息	特价手机
   */
  body?: string;

  /**
   * 可选	400	商品的展示地址	http://www.alipay.com/xxx.jpg
   */
  show_url?: string;
}
