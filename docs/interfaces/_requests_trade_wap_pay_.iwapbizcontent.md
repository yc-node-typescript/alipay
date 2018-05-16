

# Hierarchy

**IWapBizContent**

# Properties

<a id="auth_token"></a>

## `<Optional>` auth_token

**● auth_token**: *`string`*

*Defined in [requests/trade/wap/pay.ts:44](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L44)*

获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。

___
<a id="body"></a>

## `<Optional>` body

**● body**: *`string`*

*Defined in [requests/trade/wap/pay.ts:29](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L29)*

对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body

___
<a id="disable_pay_channels"></a>

## `<Optional>` disable_pay_channels

**● disable_pay_channels**: *[EPayChanel](../enums/_requests_trade_bizcontent_enum_.epaychanel.md)[]*

*Defined in [requests/trade/wap/pay.ts:68](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L68)*

禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable\_pay\_channels互斥。

___
<a id="enable_pay_channels"></a>

## `<Optional>` enable_pay_channels

**● enable_pay_channels**: *[EPayChanel](../enums/_requests_trade_bizcontent_enum_.epaychanel.md)[]*

*Defined in [requests/trade/wap/pay.ts:63](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L63)*

可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable\_pay\_channels互斥。

___
<a id="extend_params"></a>

## `<Optional>` extend_params

**● extend_params**: *[IBizContentExtendParams](_requests_trade_bizcontent_interface_.ibizcontentextendparams.md)*

*Defined in [requests/trade/wap/pay.ts:58](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L58)*

业务扩展参数 [https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs)

___
<a id="goods_type"></a>

## `<Optional>` goods_type

**● goods_type**: *[EGoodType](../enums/_requests_trade_bizcontent_enum_.egoodtype.md)*

*Defined in [requests/trade/wap/pay.ts:46](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L46)*

___
<a id="out_trade_no"></a>

##  out_trade_no

**● out_trade_no**: *`string`*

*Defined in [requests/trade/wap/pay.ts:19](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L19)*

商户网站唯一订单号

___
<a id="passback_params"></a>

## `<Optional>` passback_params

**● passback_params**: *[IBizContentPassbackParams](_requests_trade_bizcontent_interface_.ibizcontentpassbackparams.md)*

*Defined in [requests/trade/wap/pay.ts:48](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L48)*

___
<a id="promo_params"></a>

## `<Optional>` promo_params

**● promo_params**: *[IBizContentPromoParams](_requests_trade_bizcontent_interface_.ibizcontentpromoparams.md)*

*Defined in [requests/trade/wap/pay.ts:53](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L53)*

优惠参数(仅与支付宝协商后可用)

___
<a id="quit_url"></a>

## `<Optional>` quit_url

**● quit_url**: *`string`*

*Defined in [requests/trade/wap/pay.ts:78](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L78)*

添加该参数后在h5支付收银台会出现返回按钮，可用于用户付款中途退出并返回到该参数指定的商户网站地址。注：该参数对支付宝钱包标准收银台下的跳转不生效。

___
<a id="store_id"></a>

## `<Optional>` store_id

**● store_id**: *`string`*

*Defined in [requests/trade/wap/pay.ts:73](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L73)*

商户门店编号

___
<a id="subject"></a>

##  subject

**● subject**: *`string`*

*Defined in [requests/trade/wap/pay.ts:14](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L14)*

商品的标题/交易标题/订单标题/订单关键字等

___
<a id="time_expire"></a>

## `<Optional>` time_expire

**● time_expire**: *`string`*

*Defined in [requests/trade/wap/pay.ts:34](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L34)*

绝对超时时间，格式为yyyy-MM-dd HH:mm。 注：1）以支付宝系统时间为准；2）如果和timeout\_express参数同时传入，以time\_expire为准。

___
<a id="timeout_express"></a>

## `<Optional>` timeout_express

**● timeout_express**: *`string`*

*Defined in [requests/trade/wap/pay.ts:39](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L39)*

该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。注：若为空，则默认为15d。

___
<a id="total_amount"></a>

##  total_amount

**● total_amount**: *`string`*

*Defined in [requests/trade/wap/pay.ts:24](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/wap/pay.ts#L24)*

订单总金额，单位为元，精确到小数点后两位，取值范围\[0.01,100000000\]

___

