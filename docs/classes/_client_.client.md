

客户端配置

```ts
import { Client, EClientSignType } from '@ycnt/alipay';

const client = new Client({
  appId: '你的支付宝 APP ID',
  rsaPrivate: '私钥PATH',
  rsaPublic: '公钥PATH',
  signType: EClientSignType.RSA2, // 签名类型
  sandbox: true; // 是否使用沙箱环境
});
```

# Hierarchy

**Client**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Client**(opts: *[IClientOptions](../interfaces/_client_.iclientoptions.md)*): [Client](_client_.client.md)

*Defined in [client.ts:145](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L145)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| opts | [IClientOptions](../interfaces/_client_.iclientoptions.md) | 

**Returns:** [Client](_client_.client.md)

___

# Properties

<a id="appid"></a>

##  appId

**● appId**: *`string`*

*Defined in [client.ts:125](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L125)*

支付宝的appId

___
<a id="rsaprivate"></a>

##  rsaPrivate

**● rsaPrivate**: *`string`*

*Defined in [client.ts:130](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L130)*

商户私钥pem

___
<a id="rsapublic"></a>

##  rsaPublic

**● rsaPublic**: *`string`*

*Defined in [client.ts:135](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L135)*

支付宝公钥pem

___
<a id="sandbox"></a>

##  sandbox

**● sandbox**: *`boolean`* = false

*Defined in [client.ts:145](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L145)*

是否是沙盒环境，默认 否

___
<a id="signtype"></a>

##  signType

**● signType**: *[EClientSignType](../enums/_client_.eclientsigntype.md)* =  EClientSignType.RSA2

*Defined in [client.ts:140](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L140)*

签名方式，默认 'RSA2'

___

# Methods

<a id="execute"></a>

##  execute

▸ **execute**(req: *[Request](_requests_request_.request.md)*): `Promise`<`any`>

*Defined in [client.ts:158](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L158)*

发送HTTP请求

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | [Request](_requests_request_.request.md) | 

**Returns:** `Promise`<`any`>

___
<a id="generaterequestparams"></a>

##  generateRequestParams

▸ **generateRequestParams**(req: *[Request](_requests_request_.request.md)*): [IClientRequestParams](../interfaces/_client_.iclientrequestparams.md)

*Defined in [client.ts:171](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L171)*

生成HTTP请求地址

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | [Request](_requests_request_.request.md) | 

**Returns:** [IClientRequestParams](../interfaces/_client_.iclientrequestparams.md)

___
<a id="verify"></a>

##  verify

▸ **verify**(field: *`string`*, res: *`any`*): `boolean`

▸ **verify**(res: *`any`*): `boolean`

*Defined in [client.ts:195](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L195)*

验证响应报文

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `string` |  需要验证的字段。例：alipay\_user\_info\_share\_response |
| res | `any` |  响应报文 |

**Returns:** `boolean`
boolean

*Defined in [client.ts:203](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L203)*

验证响应报文

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| res | `any` |  响应报文 |

**Returns:** `boolean`
boolean

___

