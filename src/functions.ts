// import * as fs from 'fs';
// import * as path from 'path';
// import * as moment from 'moment';
// import * as utils from './utils';

// export const alipay_gate_way = 'https://openapi.alipay.com/gateway.do';
// export const alipay_gate_way_sandbox = 'https://openapi.alipaydev.com/gateway.do';

// export enum METHODS {
//   App = 'alipay.trade.app.pay',
//   Wap = 'alipay.trade.wap.pay',
//   Page = 'alipay.trade.page.pay',
//   Query = 'alipay.trade.query'
// }

// export enum GOOD_TYPES {
//   Virtual = 0, // 虚拟类商品
//   Physical = 1 // 实物类商品
// }

// export enum PRODUCT_CODES {
//   QUICK_MSECURITY_PAY = 'QUICK_MSECURITY_PAY',
//   QUICK_WAP_PAY = 'QUICK_WAP_PAY',
//   FAST_INSTANT_TRADE_PAY = 'FAST_INSTANT_TRADE_PAY'
// }

// export enum QR_PAY_MODES {
//   Simple = 0, // 订单码-简约前置模式，对应 iframe 宽度不能小于600px，高度不能小于300px
//   Forward = 1, // 订单码-前置模式，对应 iframe 宽度不能小于300px，高度不能小于600px
//   Redirect = 2, //订单码-跳转模式 用户的扫码界面是由支付宝生成的，不存在商户的域名下
//   Mini = 3, // 订单码-迷你模式，对应 iframe 宽度不能小于75px，高度不能小于75px
//   Custom = 4 // 订单码-可定义宽度的嵌入式二维码，商户可根据需要设定二维码的大小
// }

// export enum PAY_CHANELS {
//   balance = 'balance', //	余额
//   moneyFund = 'moneyFund', //	余额宝
//   coupon = 'coupon', //	红包
//   pcredit = 'pcredit', //	花呗
//   pcreditpayInstallment = 'pcreditpayInstallment', //	花呗分期
//   creditCard = 'creditCard', //	信用卡
//   creditCardExpress = 'creditCardExpress', //	信用卡快捷
//   creditCardCartoon = 'creditCardCartoon', //	信用卡卡通
//   credit_group = 'credit_group', //	信用支付类型（包含信用卡卡通、信用卡快捷、花呗、花呗分期）
//   debitCardExpress = 'debitCardExpress', //	借记卡快捷
//   mcard = 'mcard', //	商户预存卡
//   pcard = 'pcard', //	个人预存卡
//   promotion = 'promotion', //	优惠（包含实时优惠+商户优惠）
//   voucher = 'voucher', //	营销券
//   point = 'point', //	积分
//   mdiscount = 'mdiscount', //	商户优惠
//   bankPay = 'bankPay' //	网银
// }

// export interface IURLS {
//   return_url?: string;
//   notify_url?: string;
// }

// export interface IPassbackParams {
//   [k: string]: any;
// }

// export interface IPromoParams {
//   [k: string]: any;
// }

// export interface IExtendParams {
//   sys_service_provider_id: string;
//   needBuyerRealnamed: string;
//   TRANS_MEMO: string;
//   hb_fq_num: string;
//   hb_fq_seller_percent: string;
// }

// export interface IAppPayOptions {
//   subject: string; // 商品的标题/交易标题/订单标题/订单关键字等
//   out_trade_no: string; // 商户网站唯一订单号
//   total_amount: string; // 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]

//   body?: string; // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
//   timeout_express?: string; // 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
//   seller_id?: string; // 收款支付宝用户ID。 如果该值为空，则默认为商户签约账号对应的支付宝用户ID
//   goods_type?: GOOD_TYPES;
//   passback_params?: IPassbackParams; // 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
//   promo_params?: IPromoParams; // 优惠参数(仅与支付宝协商后可用)
//   extend_params?: IExtendParams; // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
//   enable_pay_channels?: PAY_CHANELS[]; // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
//   disable_pay_channels?: PAY_CHANELS[]; // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
//   store_id?: string; // 商户门店编号
// }

// export interface IWapPayOptions {
//   subject: string; // 商品的标题/交易标题/订单标题/订单关键字等
//   out_trade_no: string; // 商户网站唯一订单号
//   total_amount: string; // 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]

//   body?: string; // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
//   time_expire?: string; // 绝对超时时间，格式为yyyy-MM-dd HH:mm。 注：1）以支付宝系统时间为准；2）如果和timeout_express参数同时传入，以time_expire为准。
//   timeout_express?: string; // 该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。注：若为空，则默认为15d。
//   auth_token?: string; // ，获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。
//   goods_type?: GOOD_TYPES; passback_params?: string; // 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
//   promo_params?: string; // 优惠参数(仅与支付宝协商后可用)
//   extend_params?: string; // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
//   enable_pay_channels?: string; // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
//   disable_pay_channels?: string; // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
//   store_id?: string; // 商户门店编号
//   quit_url?: string; // 添加该参数后在h5支付收银台会出现返回按钮，可用于用户付款中途退出并返回到该参数指定的商户网站地址。注：该参数对支付宝钱包标准收银台下的跳转不生效。
// }

// export interface IPagePayOptions {
//   subject: string; // 商品的标题/交易标题/订单标题/订单关键字等
//   out_trade_no: string; // 商户网站唯一订单号
//   total_amount: string; // 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]

//   body?: string; // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
//   goods_type?: GOOD_TYPES;
//   goods_detail?: string; // 订单包含的商品列表信息，JSON格式，例如：{"show_url":"https://example/good/id"}
//   timeout_express?: string; // 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
//   auth_token?: string; // ，获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。
//   passback_params?: string; // 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
//   extend_params?: string; // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
//   enable_pay_channels?: string; // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
//   disable_pay_channels?: string; // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
//   store_id?: string; // 商户门店编号
//   qr_pay_mode?: QR_PAY_MODES; // PC扫码支付的方式，支持前置模式和跳转模式。前置模式是将二维码前置到商户的订单确认页的模式，需要商户在自己的页面中以 iframe 方式请求支付宝页面。
//   qrcode_width?: string; // 商户自定义二维码宽度。注：qrPayMode = 4 时该参数生效
// }

// export interface IQueryOptions {
//   out_trade_no: string;
//   trade_no: string;
// }

// export interface AlipayOptions {
//   appId: string; // 支付宝的appId
//   notifyUrl: string; // 支付宝服务器主动通知商户服务器里指定的页面http/https路径
//   rsaPrivate: string; // 商户私钥pem文件路径
//   rsaPublic: string; // 支付宝公钥pem文件路径
//   signType?: 'RSA' | 'RSA2'; // 签名方式, 'RSA' or 'RSA2'
//   sandbox?: boolean; // 是否是沙盒环境
// }

// class Alipay {
//   appId: string;
//   notifyUrl: string;
//   rsaPrivate: string;
//   rsaPublic: string;
//   signType: 'RSA' | 'RSA2' = 'RSA';
//   sandbox: boolean = false;

//   constructor(opts: AlipayOptions) {
//     this.appId = opts.appId;
//     this.notifyUrl = opts.notifyUrl;
//     this.signType = opts.signType;
//     this.rsaPrivate = fs.readFileSync(opts.rsaPrivate, 'utf-8');
//     this.rsaPublic = fs.readFileSync(opts.rsaPublic, 'utf-8');
//     this.sandbox = !!opts.sandbox;
//   }

//   makeParams(method: string, product_code: PRODUCT_CODES, opts: any, urls: IURLS): any {
//     return Object.assign({
//       app_id: this.appId,
//       method: method,
//       format: 'JSON',
//       charset: 'utf-8',
//       sign_type: this.signType,
//       timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
//       version: '1.0',
//       biz_content: JSON.stringify(
//         Object.keys(opts)
//           .map(x => {
//             switch (x) {
//               case 'passback_params':
//                 return [x, encodeURIComponent(Object.keys(opts[x]).map(k => `${k}=${opts[x][k]}`).join('&'))];
//               case 'promo_params':
//               case 'extend_params':
//                 return [x, JSON.stringify(x)];
//               case 'enable_pay_channels':
//               case 'disable_pay_channels':
//                 return [x, opts[x].join(',')];
//               default:
//                 return [x, (<any>opts)[x]];
//             }
//           })
//           .reduce((a: any, b: [any, any]) => {
//             a[b[0]] = b[1];
//             return a;
//           }, product_code ? {
//             product_code: product_code,
//           } : {})
//       )
//     }, urls);
//   }

//   appPay(opts: IAppPayOptions, urls: IURLS) {
//     const params = this.makeParams(METHODS.App, PRODUCT_CODES.QUICK_MSECURITY_PAY, opts, urls);
//     return utils.processParams(params, this.rsaPrivate, this.signType);
//   }

//   wapPay(opts: IWapPayOptions, urls: IURLS) {
//     const params = this.makeParams(METHODS.Wap, PRODUCT_CODES.QUICK_WAP_PAY, opts, urls);
//     return utils.processParams(params, this.rsaPrivate, this.signType);
//   }

//   webPay(opts: IWapPayOptions, urls: IURLS) {
//     return this.wapPay(opts, urls);
//   }

//   pagePay(opts: IPagePayOptions, urls: IURLS) {
//     const params = this.makeParams(METHODS.Page, PRODUCT_CODES.FAST_INSTANT_TRADE_PAY, opts, urls);
//     return utils.processParams(params, this.rsaPrivate, this.signType);
//   }

//   signVerify(response: any) {
//     const ret = Object.assign({}, response);
//     const sign = ret['sign'];
//     delete ret.sign;
//     delete ret.sign_type;

//     const response_type = [
//       'alipay_trade_app_pay_response',
//       'alipay_trade_create_response',
//       'alipay_trade_query_response',
//       'alipay_trade_refund_response',
//       'alipay_trade_precreate_response',
//       'alipay_trade_pay_response',
//       'alipay_trade_cancel_response',
//       'alipay_trade_close_response',
//       'alipay_trade_order_settle_response',
//       'alipay_trade_fastpay_refund_query_response'
//     ];
//     // 支付宝（电脑网站支付）响应报文的结构 https://docs.open.alipay.com/api_1/alipay.trade.fastpay.refund.query/
//     const res = response_type.reduce((curr, next) => {
//       if (next in ret) return ret[next];
//       return curr;
//     });

//     if (res) {
//       return utils.signVerify(JSON.stringify(res), sign, this.rsaPublic, this.signType);
//     } else {
//       const tmp = utils.formatParams(ret);
//       return utils.signVerify(tmp.unencoded, sign, this.rsaPublic, this.signType);
//     }
//   }
//   query(opts: IQueryOptions) {
//       var params = this.makeParams(METHODS.Query, null, opts, {});
//       if (this.appAuthToken) {
//         params.app_auth_token = this.appAuthToken;
//       }

//       var body = utils.processParams(params, this.rsaPrivate, this.signType);

//       return utl.request({
//         method: 'GET',
//         url: (this.sandbox ? alipay_gate_way_sandbox : alipay_gate_way) + '?' + body
//       });
//     };
// }

// /**
//  * 签名校验
//  * @param {Object} response 支付宝的响应报文
//  */

// /**
//  * 查询交易状态 https://doc.open.alipay.com/doc2/apiDetail.htm?spm=a219a.7629065.0.0.PlTwKb&apiId=757&docType=4
//  * @param {Object} opts
//  * @param {String} [opts.outTradeId]    订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 tradeId,outTradeId如果同时存在优先取tradeId
//  * @param {String} [opts.tradeId]       支付宝交易号，和商户订单号不能同时为空
//  * @param {String} [opts.appAuthToken]  https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1
//  */

// /**
//  * 统一收单交易关闭接口 https://doc.open.alipay.com/doc2/apiDetail.htm?spm=a219a.7629065.0.0.6VzMcn&apiId=1058&docType=4
//  * @param {Object} opts
//  * @param {String} [opts.outTradeId]    订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 tradeId,outTradeId如果同时存在优先取tradeId
//  * @param {String} [opts.tradeId]       支付宝交易号，和商户订单号不能同时为空
//  * @param {String} [opts.operatorId]    卖家端自定义的的操作员 ID
//  * @param {String} [opts.appAuthToken]  https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1
//  */
// props.close = function (opts) {

//   var biz_content = {
//     out_trade_no: opts.outTradeId,
//     trade_no: opts.tradeId,
//     operator_id: opts.operatorId
//   };

//   var params = this.makeParams('alipay.trade.close', biz_content);
//   if (this.appAuthToken) {
//     params.app_auth_token = this.appAuthToken;
//   }

//   var body = utl.processParams(params, this.rsaPrivate, this.signType);

//   return utl.request({
//     method: 'GET',
//     url: (this.sandbox ? alipay_gate_way_sandbox : alipay_gate_way) + '?' + body
//   });
// };

// /**
//  * 统一收单交易退款接口 https://doc.open.alipay.com/doc2/apiDetail.htm?spm=a219a.7629065.0.0.PlTwKb&apiId=759&docType=4
//  * @param {Object} opts
//  * @param {String} [opts.outTradeId]    订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 tradeId,outTradeId如果同时存在优先取tradeId
//  * @param {String} [opts.tradeId]       支付宝交易号，和商户订单号不能同时为空
//  * @param {String} [opts.operatorId]    卖家端自定义的的操作员 ID
//  * @param {String} [opts.appAuthToken]  https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1
//  * @param {String} opts.refundAmount    需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数
//  * @param {String} [opts.refundReason]  退款的原因说明
//  * @param {String} [opts.outRequestId]  标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传。
//  * @param {String} [opts.storeId]       商户的门店编号
//  * @param {String} [opts.terminalId]    商户的终端编号
//  */
// props.refund = function (opts) {

//   var biz_content = {
//     out_trade_no: opts.outTradeId,
//     trade_no: opts.tradeId,
//     operator_id: opts.operatorId,
//     refund_amount: opts.refundAmount,
//     refund_reason: opts.refundReason,
//     out_request_no: opts.outRequestId,
//     store_id: opts.storeId,
//     terminal_id: opts.terminalId
//   };

//   var params = this.makeParams('alipay.trade.refund', biz_content);
//   if (this.appAuthToken) {
//     params.app_auth_token = this.appAuthToken;
//   }

//   var body = utl.processParams(params, this.rsaPrivate, this.signType);

//   return utl.request({
//     method: 'GET',
//     url: (this.sandbox ? alipay_gate_way_sandbox : alipay_gate_way) + '?' + body
//   });
// };

// /**
//  * 统一收单交易退款查询 https://doc.open.alipay.com/doc2/apiDetail.htm?docType=4&apiId=1049
//  * @param {Object} opts
//  * @param {String} [opts.outTradeId]    订单支付时传入的商户订单号,和支付宝交易号不能同时为空。 tradeId,outTradeId如果同时存在优先取tradeId
//  * @param {String} [opts.tradeId]       支付宝交易号，和商户订单号不能同时为空
//  * @param {String} [opts.outRequestId]  请求退款接口时，传入的退款请求号，如果在退款请求时未传入，则该值为创建交易时的外部交易号
//  * @param {String} [opts.appAuthToken]  https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1
//  */
// props.refundQuery = function (opts) {

//   var biz_content = {
//     out_trade_no: opts.outTradeId,
//     trade_no: opts.tradeId,
//     out_request_no: opts.outRequestId || opts.outTradeId
//   };

//   var params = this.makeParams('alipay.trade.fastpay.refund.query', biz_content);
//   if (this.appAuthToken) {
//     params.app_auth_token = this.appAuthToken;
//   }

//   var body = utl.processParams(params, this.rsaPrivate, this.signType);

//   return utl.request({
//     method: 'GET',
//     url: (this.sandbox ? alipay_gate_way_sandbox : alipay_gate_way) + '?' + body
//   });
// };

// /**
//  * 查询对账单下载地址 https://doc.open.alipay.com/doc2/apiDetail.htm?spm=a219a.7629065.0.0.iX5mPA&apiId=1054&docType=4
//  * @param {Object} opts
//  * @param {String} [opts.billType]     账单类型，商户通过接口或商户经开放平台授权后其所属服务商通过接口可以获取以下账单类型：
//  *                                     trade、signcustomer；trade指商户基于支付宝交易收单的业务账单；signcustomer是指基于商户支付宝余额收入及支出等资金变动的帐务账单；
//  * @param {String} [opts.billDate]     账单时间：日账单格式为yyyy-MM-dd，月账单格式为yyyy-MM。
//  * @param {String} [opts.appAuthToken] https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1
//  */
// props.billDownloadUrlQuery = function (opts) {

//   var biz_content = {
//     bill_type: opts.billType,
//     bill_date: opts.billDate
//   };

//   var params = this.makeParams('alipay.data.dataservice.bill.downloadurl.query', biz_content);
//   if (this.appAuthToken) {
//     params.app_auth_token = this.appAuthToken;
//   }

//   var body = utl.processParams(params, this.rsaPrivate, this.signType);

//   return utl.request({
//     method: 'GET',
//     url: (this.sandbox ? alipay_gate_way_sandbox : alipay_gate_way) + '?' + body
//   });
// };

// //1.0.3版本接口兼容
// props.pay = props.appPay;
// props.webPay = props.wapPay;

// module.exports = Alipay;
