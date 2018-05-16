

支付宝接口请求

```ts
import { Client, Request } from '@ycnt/alipay';

const client = new Client(...);

const req = new Request('alipay.user.info.share');
req.data.auth_token = 'xxx';

const res = await client.execute(req);
console.log(res);
```

# Hierarchy

**Request**

↳  [TradeAppPayRequest](_requests_trade_app_pay_.tradeapppayrequest.md)

↳  [TradeWapPayRequest](_requests_trade_wap_pay_.tradewappayrequest.md)

↳  [TradePagePayRequest](_requests_trade_page_pay_.tradepagepayrequest.md)

↳  [TradeRefundRequest](_requests_trade_refund_refund_.traderefundrequest.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Request**(method: *`string`*): [Request](_requests_request_.request.md)

*Defined in [requests/request.ts:31](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/request.ts#L31)*

构造方法

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  请求的支付宝API。例：alipay.user.info.share |

**Returns:** [Request](_requests_request_.request.md)

___

# Properties

<a id="data"></a>

##  data

**● data**: *`object`*

*Defined in [requests/request.ts:29](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/request.ts#L29)*

公共请求参数 已下字段均省略，Client类会自动生成。

`app_id`, `method`, `format`, `charset`,`sign_type`, `sign`, `version`

#### Type declaration

[x: `string`]: `any`

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Defined in [requests/request.ts:21](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/request.ts#L21)*

请求的支付宝API。例：alipay.user.info.share

___

