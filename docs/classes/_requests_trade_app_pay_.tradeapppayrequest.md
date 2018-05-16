

APP支付

```ts
import { Client, TradeAppPayRequest } from '@ycnt/alipay';

const client = new Client(...);
const req = new TradeAppPayRequest();
req.setBizContent({
  subject: 'test',
  out_trade_no: 'test001',
  total_amount: '0.01',
});
const res = await client.generateRequestParams(req);
console.log(res);
```

# Hierarchy

 [Request](_requests_request_.request.md)

**↳ TradeAppPayRequest**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new TradeAppPayRequest**(): [TradeAppPayRequest](_requests_trade_app_pay_.tradeapppayrequest.md)

*Overrides [Request](_requests_request_.request.md).[constructor](_requests_request_.request.md#constructor)*

*Defined in [requests/trade/app/pay.ts:91](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L91)*

**Returns:** [TradeAppPayRequest](_requests_trade_app_pay_.tradeapppayrequest.md)

___

# Properties

<a id="data"></a>

##  data

**● data**: *`object`*

*Inherited from [Request](_requests_request_.request.md).[data](_requests_request_.request.md#data)*

*Defined in [requests/request.ts:29](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/request.ts#L29)*

公共请求参数 已下字段均省略，Client类会自动生成。

`app_id`, `method`, `format`, `charset`,`sign_type`, `sign`, `version`

#### Type declaration

[x: `string`]: `any`

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Inherited from [Request](_requests_request_.request.md).[method](_requests_request_.request.md#method)*

*Defined in [requests/request.ts:21](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/request.ts#L21)*

请求的支付宝API。例：alipay.user.info.share

___

# Methods

<a id="setbizcontent"></a>

##  setBizContent

▸ **setBizContent**(bc: *[IAppBizContent](../interfaces/_requests_trade_app_pay_.iappbizcontent.md)*): `void`

*Defined in [requests/trade/app/pay.ts:96](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bc | [IAppBizContent](../interfaces/_requests_trade_app_pay_.iappbizcontent.md) | 

**Returns:** `void`

___

