

# Hierarchy

**IRefundBizContent**

# Properties

<a id="goods_detail"></a>

## `<Optional>` goods_detail

**● goods_detail**: *[IGoodsDetail](_requests_trade_refund_interface_.igoodsdetail.md)[]*

*Defined in [requests/trade/refund/interface.ts:45](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L45)*

```
退款包含的商品列表信息。
```

___
<a id="operator_id"></a>

## `<Optional>` operator_id

**● operator_id**: *`string`*

*Defined in [requests/trade/refund/interface.ts:30](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L30)*

卖家端自定义的的操作员 ID

___
<a id="out_request_no"></a>

## `<Optional>` out_request_no

**● out_request_no**: *`string`*

*Defined in [requests/trade/refund/interface.ts:25](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L25)*

标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。

___
<a id="out_trade_no"></a>

## `<Optional>` out_trade_no

**● out_trade_no**: *`string`*

*Defined in [requests/trade/refund/interface.ts:5](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L5)*

订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 tradeId,outTradeId如果同时存在优先取tradeId

___
<a id="refund_amount"></a>

##  refund_amount

**● refund_amount**: *`string`*

*Defined in [requests/trade/refund/interface.ts:15](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L15)*

需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数

___
<a id="refund_reason"></a>

## `<Optional>` refund_reason

**● refund_reason**: *`string`*

*Defined in [requests/trade/refund/interface.ts:20](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L20)*

退款的原因说明

___
<a id="store_id"></a>

## `<Optional>` store_id

**● store_id**: *`string`*

*Defined in [requests/trade/refund/interface.ts:35](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L35)*

商户的门店编号

___
<a id="terminal_id"></a>

## `<Optional>` terminal_id

**● terminal_id**: *`string`*

*Defined in [requests/trade/refund/interface.ts:40](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L40)*

商户的终端编号

___
<a id="trade_no"></a>

## `<Optional>` trade_no

**● trade_no**: *`string`*

*Defined in [requests/trade/refund/interface.ts:10](https://github.com/yc-node-typescript/alipay/blob/698a611/src/requests/trade/refund/interface.ts#L10)*

支付宝交易号，和商户订单号不能同时为空

___

