

接口请求参数

# Hierarchy

**IClientRequestParams**

# Indexable

\[x: `string`\]:&nbsp;`any`
其它

# Properties

<a id="app_id"></a>

##  app_id

**● app_id**: *`string`*

*Defined in [client.ts:63](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L63)*

是 32 支付宝分配给开发者的应用ID 2014072300007148

___
<a id="charset"></a>

##  charset

**● charset**: *`string`*

*Defined in [client.ts:78](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L78)*

是 10 请求使用的编码格式，如utf-8,gbk,gb2312等 utf-8

___
<a id="format"></a>

## `<Optional>` format

**● format**: *`string`*

*Defined in [client.ts:73](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L73)*

否 40 仅支持JSON JSON

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Defined in [client.ts:68](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L68)*

是 128 接口名称 alipay.trade.fastpay.refund.query

___
<a id="sign"></a>

##  sign

**● sign**: *`string`*

*Defined in [client.ts:88](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L88)*

是 256 商户请求参数的签名串，详见签名 [详见示例](https://docs.open.alipay.com/291/105974)

___
<a id="sign_type"></a>

##  sign_type

**● sign_type**: *"RSA2" |
"RSA"
*

*Defined in [client.ts:83](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L83)*

是 10 商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2 RSA2

___
<a id="timestamp"></a>

##  timestamp

**● timestamp**: *`string`*

*Defined in [client.ts:93](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L93)*

是 19 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss" 2014-07-24 03:07:50

___
<a id="version"></a>

##  version

**● version**: *"1.0"*

*Defined in [client.ts:98](https://github.com/yc-node-typescript/alipay/blob/698a611/src/client.ts#L98)*

是 3 调用的接口版本，固定为：1.0

___

