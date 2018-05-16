

Wap支付

```ts
import { Client, TradeWapPayRequest } from '@ycnt/alipay';

const client = new Client(...);
const req = new TradeWapPayRequest ();
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

**↳ TradeWapPayRequest**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new TradeWapPayRequest**(): [TradeWapPayRequest](_requests_trade_wap_pay_.tradewappayrequest.md)

*Overrides [Request](_requests_request_.request.md).[constructor](_requests_request_.request.md#constructor)*

*Defined in [requests/trade/wap/pay.ts:98](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L98)*

**Returns:** [TradeWapPayRequest](_requests_trade_wap_pay_.tradewappayrequest.md)

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

▸ **setBizContent**(bc: *[IWapBizContent](../interfaces/_requests_trade_wap_pay_.iwapbizcontent.md)*): `void`

*Defined in [requests/trade/wap/pay.ts:107](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L107)*

设置bizContent

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bc | [IWapBizContent](../interfaces/_requests_trade_wap_pay_.iwapbizcontent.md) |  参数 |

**Returns:** `void`

___

