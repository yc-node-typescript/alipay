

# Hierarchy

**IAppBizContent**

# Properties

<a id="body"></a>

## `<Optional>` body

**● body**: *`string`*

*Defined in [requests/trade/app/pay.ts:28](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L28)*

对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body

___
<a id="disable_pay_channels"></a>

## `<Optional>` disable_pay_channels

**● disable_pay_channels**: *[EPayChanel](../enums/_requests_trade_bizcontent_enum_.epaychanel.md)[]*

*Defined in [requests/trade/app/pay.ts:65](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L65)*

禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable\_pay\_channels互斥。

___
<a id="enable_pay_channels"></a>

## `<Optional>` enable_pay_channels

**● enable_pay_channels**: *[EPayChanel](../enums/_requests_trade_bizcontent_enum_.epaychanel.md)[]*

*Defined in [requests/trade/app/pay.ts:60](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L60)*

可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable\_pay\_channels互斥。

___
<a id="extend_params"></a>

## `<Optional>` extend_params

**● extend_params**: *[IBizContentExtendParams](_requests_trade_bizcontent_interface_.ibizcontentextendparams.md)*

*Defined in [requests/trade/app/pay.ts:55](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L55)*

业务扩展参数 [https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs)

___
<a id="goods_type"></a>

## `<Optional>` goods_type

**● goods_type**: *[EGoodType](../enums/_requests_trade_bizcontent_enum_.egoodtype.md)*

*Defined in [requests/trade/app/pay.ts:40](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L40)*

___
<a id="out_trade_no"></a>

##  out_trade_no

**● out_trade_no**: *`string`*

*Defined in [requests/trade/app/pay.ts:18](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L18)*

商户网站唯一订单号

___
<a id="passback_params"></a>

## `<Optional>` passback_params

**● passback_params**: *[IBizContentPassbackParams](_requests_trade_bizcontent_interface_.ibizcontentpassbackparams.md)*

*Defined in [requests/trade/app/pay.ts:45](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L45)*

公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。

___
<a id="promo_params"></a>

## `<Optional>` promo_params

**● promo_params**: *[IBizContentPromoParams](_requests_trade_bizcontent_interface_.ibizcontentpromoparams.md)*

*Defined in [requests/trade/app/pay.ts:50](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L50)*

优惠参数(仅与支付宝协商后可用)

___
<a id="seller_id"></a>

## `<Optional>` seller_id

**● seller_id**: *`string`*

*Defined in [requests/trade/app/pay.ts:38](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L38)*

收款支付宝用户ID。 如果该值为空，则默认为商户签约账号对应的支付宝用户ID

___
<a id="store_id"></a>

## `<Optional>` store_id

**● store_id**: *`string`*

*Defined in [requests/trade/app/pay.ts:70](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L70)*

商户门店编号

___
<a id="subject"></a>

##  subject

**● subject**: *`string`*

*Defined in [requests/trade/app/pay.ts:13](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L13)*

商品的标题/交易标题/订单标题/订单关键字等

___
<a id="timeout_express"></a>

## `<Optional>` timeout_express

**● timeout_express**: *`string`*

*Defined in [requests/trade/app/pay.ts:33](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L33)*

设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。

___
<a id="total_amount"></a>

##  total_amount

**● total_amount**: *`string`*

*Defined in [requests/trade/app/pay.ts:23](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/app/pay.ts#L23)*

订单总金额，单位为元，精确到小数点后两位，取值范围\[0.01,100000000\]

___

