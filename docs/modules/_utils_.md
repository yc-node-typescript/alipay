

# Functions

<a id="formatparams"></a>

##  formatParams

▸ **formatParams**(params: *`any`*): `string`

*Defined in [utils.ts:54](https://github.com/yc-node-typescript/alipay/blob/698a611/src/utils.ts#L54)*

对请求参数进行组装、编码

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `any` |  请求参数 |

**Returns:** `string`

___
<a id="sign"></a>

##  sign

▸ **sign**(str: *`string`*, privateKey: *`string` |`object`*, signType: *"RSA2" |"RSA"*): `string`

*Defined in [utils.ts:34](https://github.com/yc-node-typescript/alipay/blob/698a611/src/utils.ts#L34)*

对字符串进行签名

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  要签名的字符串 |
| privateKey | `string` |
`object`
 |  商户应用私钥 |
| signType | "RSA2" |
"RSA"
 | 

**Returns:** `string`

___
<a id="signparams"></a>

##  signParams

▸ **signParams**(params: *`any`*, privateKey: *`string` |`object`*, signType: *"RSA2" |"RSA"*): `string`

*Defined in [utils.ts:69](https://github.com/yc-node-typescript/alipay/blob/698a611/src/utils.ts#L69)*

对请求参数进行组装、编码、签名，返回已组装好签名的参数字符串

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `any` |  请求参数 |
| privateKey | `string` |
`object`
 |  商户应用私钥 |
| signType | "RSA2" |
"RSA"
 | 

**Returns:** `string`

___
<a id="verify"></a>

##  verify

▸ **verify**(str: *`string`*, sign: *`string`*, publicKey: *`string` |`any`*, signType: *"RSA2" |"RSA"*): `boolean`

*Defined in [utils.ts:11](https://github.com/yc-node-typescript/alipay/blob/698a611/src/utils.ts#L11)*

对字符串进行签名验证

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  要验证的参数字符串 |
| sign | `string` |  要验证的签名 |
| publicKey | `string` |
`any`
 |  支付宝公钥 |
| signType | "RSA2" |
"RSA"
 | 

**Returns:** `boolean`

___

