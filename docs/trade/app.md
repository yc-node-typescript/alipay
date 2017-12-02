## APP支付
> 示例
```ts
import { Client, TradeAppPayRequest } from '@ycnt/alipay';

const client = new Client(...);
const req = new TradeAppPayRequest();
req.setBizContent({
  subject: 'test',
  out_trade_no: 'test001',
  total_amount: '0.01' 
})
const res = await client.generateRequestParams(req);
console.log(res);

```

## interfaces
```ts
export interface IAppBizContent {
  subject: string; // 商品的标题/交易标题/订单标题/订单关键字等
  out_trade_no: string; // 商户网站唯一订单号
  total_amount: string; // 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]  

  body?: string; // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
  timeout_express?: string; // 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
  seller_id?: string; // 收款支付宝用户ID。 如果该值为空，则默认为商户签约账号对应的支付宝用户ID
  goods_type?: EGoodType;
  passback_params?: IBizContentPassbackParams; // 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
  promo_params?: IBizContentPromoParams; // 优惠参数(仅与支付宝协商后可用)
  extend_params?: IBizContentExtendParams; // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
  enable_pay_channels?: EPayChanel[]; // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
  disable_pay_channels?: EPayChanel[]; // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
  store_id?: string; // 商户门店编号
}
```

## methods
```ts
// 构造方法
constructor();

// 设置bizContent
setBizContent(bc: IAppBizContent): void
```