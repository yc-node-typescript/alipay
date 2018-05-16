

退款

```ts
import { Client, TradeRefundRequest } from '@ycnt/alipay';

const client = new Client(...);
const req = new TradeRefundRequest();
req.setBizContent({
  out_trade_no: 'test001',
  refund_amount: '10',
});
const res = await client.execute(req);
console.log(res);
```

# Hierarchy

 [Request](_requests_request_.request.md)

**↳ TradeRefundRequest**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new TradeRefundRequest**(): [TradeRefundRequest](_requests_trade_refund_refund_.traderefundrequest.md)

*Overrides [Request](_requests_request_.request.md).[constructor](_requests_request_.request.md#constructor)*

*Defined in [requests/trade/refund/refund.ts:21](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/refund.ts#L21)*

**Returns:** [TradeRefundRequest](_requests_trade_refund_refund_.traderefundrequest.md)

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

▸ **setBizContent**(bc: *[IRefundBizContent](../interfaces/_requests_trade_refund_interface_.irefundbizcontent.md)*): `void`

*Defined in [requests/trade/refund/refund.ts:26](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/refund.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bc | [IRefundBizContent](../interfaces/_requests_trade_refund_interface_.irefundbizcontent.md) | 

**Returns:** `void`

___

