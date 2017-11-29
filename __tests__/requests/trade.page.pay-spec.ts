import {
  EGoodType,
  EPayChanel,
  TradePagePayRequest,
  EQRPayMode,
} from '../../src';
import { exec } from 'child_process';

test('page set bizContent', () => {
  const pageReq = new TradePagePayRequest();
  pageReq.setBizContent({
    subject: 'test page',
    out_trade_no: 'test page0',
    total_amount: '0.01',
  });

  expect(pageReq.method).toBe('alipay.trade.page.pay');
  expect(pageReq.data.bizContent).toBe(
    JSON.stringify({
      subject: 'test page',
      out_trade_no: 'test page0',
      total_amount: '0.01',
    })
  );
});

test('page set advanced bizContent', () => {
  const pageReq = new TradePagePayRequest();
  pageReq.setBizContent({
    subject: 'test page',
    out_trade_no: 'test page0',
    total_amount: '0.01',
    body: 'i am a advanced body', // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
    goods_type: EGoodType.Virtual, // guosidi 改动
    goods_detail: 'this is a coat', // 订单包含的商品列表信息，JSON格式，例如：{"show_url":"https://example/good/id"}
    timeout_express: '10m', // 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
    auth_token: 'i am a auth_token', // ，获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。
    passback_params: {
      reback: '我被回传了回来',
    }, // 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
    extend_params: {
      sys_service_provider_id: 'x001 郭思笛',
      TRANS_MEMO: 'y001',
    }, // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
    enable_pay_channels: [EPayChanel.bankPay, EPayChanel.creditCard], // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
    disable_pay_channels: [EPayChanel.debitCardExpress], // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
    store_id: 'store-KFC', // 商户门店编号
    qr_pay_mode: EQRPayMode.Custom, // PC扫码支付的方式，支持前置模式和跳转模式。前置模式是将二维码前置到商户的订单确认页的模式，需要商户在自己的页面中以 iframe 方式请求支付宝页面。
    qrcode_width: '4', // 商户自定义二维码宽度。注：qrPayMode = 4 时该参数生效
  });

  expect(pageReq.data.bizContent).toBe(
    JSON.stringify({
      subject: 'test page',
      out_trade_no: 'test page0',
      total_amount: '0.01',
      body: 'i am a advanced body', // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
      goods_type: EGoodType.Virtual, // guosidi 改动
      goods_detail: 'this is a coat', // 订单包含的商品列表信息，JSON格式，例如：{"show_url":"https://example/good/id"}
      timeout_express: '10m', // 设置未付款支付宝交易的超时时间，一旦超时，该笔交易就会自动被关闭。当用户进入支付宝收银台页面（不包括登录页面），会触发即刻创建支付宝交易，此时开始计时。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。该参数数值不接受小数点， 如 1.5h，可转换为 90m。
      auth_token: 'i am a auth_token', // ，获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。
      passback_params: encodeURIComponent('reback=我被回传了回来'), // 公用回传参数，如果请求时传递了该参数，则返回给商户时会回传该参数。支付宝会在异步通知时将该参数原样返回。本参数必须进行UrlEncode之后才可以发送给支付宝。
      extend_params: JSON.stringify({
        sys_service_provider_id: 'x001 郭思笛',
        TRANS_MEMO: 'y001',
      }), // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
      enable_pay_channels: [EPayChanel.bankPay, EPayChanel.creditCard].join(
        ','
      ), // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
      disable_pay_channels: [EPayChanel.debitCardExpress].join(','), // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
      store_id: 'store-KFC', // 商户门店编号
      qr_pay_mode: EQRPayMode.Custom, // PC扫码支付的方式，支持前置模式和跳转模式。前置模式是将二维码前置到商户的订单确认页的模式，需要商户在自己的页面中以 iframe 方式请求支付宝页面。
      qrcode_width: '4', // 商户自定义二维码宽度。注：qrPayMode = 4 时该参数生效
    })
  );
});
