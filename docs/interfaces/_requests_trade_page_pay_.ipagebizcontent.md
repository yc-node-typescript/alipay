

# Hierarchy

**IPageBizContent**

# Properties

<a id="auth_token"></a>

## `<Optional>` auth_token

**● auth_token**: *`string`*

*Defined in [requests/trade/page/pay.ts:52](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L52)*

获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。

___
<a id="body"></a>

## `<Optional>` body

**● body**: *`string`*

*Defined in [requests/trade/page/pay.ts:35](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L35)*

对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body

___
<a id="disable_pay_channels"></a>

## `<Optional>` disable_pay_channels

**● disable_pay_channels**: *[EPayChanel](../enums/_requests_trade_bizcontent_enum_.epaychanel.md)[]*

*Defined in [requests/trade/page/pay.ts:72](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L72)*

禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable\_pay\_channels互斥。

___
<a id="enable_pay_channels"></a>

## `<Optional>` enable_pay_channels

**● enable_pay_channels**: *[EPayChanel](../enums/_requests_trade_bizcontent_enum_.epaychanel.md)[]*

*Defined in [requests/trade/page/pay.ts:67](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L67)*

可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable\_pay\_channels互斥。

___
<a id="extend_params"></a>

## `<Optional>` extend_params

**● extend_params**: *[IBizContentExtendParams](_requests_trade_bizcontent_interface_.ibizcontentextendparams.md)*

*Defined in [requests/trade/page/pay.ts:62](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L62)*

业务扩展参数 [https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs)

___
<a id="goods_detail"></a>

## `<Optional>` goods_detail

**● goods_detail**: *`string`*

*Defined in [requests/trade/page/pay.ts:42](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L42)*

订单包含的商品列表信息，JSON格式，例如：{"show_url":"[https://example/good/id"}](https://example/good/id"})

___
<a id="goods_type"></a>

## `<Optional>` goods_type

**● goods_type**: *[EGoodType](../enums/_requests_trade_bizcontent_enum_.egoodtype.md)*

*Defined in [requests/trade/page/pay.ts:37](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L37)*

___
<a id="out_trade_no"></a>

##  out_trade_no

**● out_trade_no**: *`string`*

*Defined in [requests/trade/page/pay.ts:25](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L25)*

商户网站唯一订单号

___
<a id="passback_params"></a>

## `<Optional>` passback_params

**● passback_params**: *[IBizContentPassbackParams](_requests_trade_bizcontent_interface_.ibizcontentpassbackparams.md)*

*Defined in [requests/trade/page/pay.ts:57](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L57)*

公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。

___
<a id="qr_pay_mode"></a>

## `<Optional>` qr_pay_mode

**● qr_pay_mode**: *[EQRPayMode](../enums/_requests_trade_bizcontent_enum_.eqrpaymode.md)*

*Defined in [requests/trade/page/pay.ts:82](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L82)*

PC扫码支付的方式，支持前置模式和跳转模式。前置模式是将二维码前置到商户的订单确认页的模式，需要商户在自己的页面中以 iframe 方式请求支付宝页面。

___
<a id="qrcode_width"></a>

## `<Optional>` qrcode_width

**● qrcode_width**: *`string`*

*Defined in [requests/trade/page/pay.ts:87](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L87)*

商户自定义二维码宽度。注：qrPayMode = 4 时该参数生效

___
<a id="store_id"></a>

## `<Optional>` store_id

**● store_id**: *`string`*

*Defined in [requests/trade/page/pay.ts:77](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L77)*

商户门店编号

___
<a id="subject"></a>

##  subject

**● subject**: *`string`*

*Defined in [requests/trade/page/pay.ts:20](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L20)*

商品的标题/交易标题/订单标题/订单关键字等

___
<a id="timeout_express"></a>

## `<Optional>` timeout_express

**● timeout_express**: *`string`*

*Defined in [requests/trade/page/pay.ts:47](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L47)*

设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。

___
<a id="total_amount"></a>

##  total_amount

**● total_amount**: *`string`*

*Defined in [requests/trade/page/pay.ts:30](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/page/pay.ts#L30)*

订单总金额，单位为元，精确到小数点后两位，取值范围\[0.01,100000000\]

___

