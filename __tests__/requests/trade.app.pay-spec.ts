import { TradeAppPayRequest, EGoodType, EPayChanel } from '../../src';

test('Should set simple bizContent', () => {
  const req = new TradeAppPayRequest();
  req.setBizContent({
    subject: 'test',
    out_trade_no: 'test001',
    total_amount: '0.01',
  });
  expect(req.method).toBe('alipay.trade.app.pay');
  expect(req.data.bizContent).toBe(
    JSON.stringify({
      subject: 'test',
      out_trade_no: 'test001',
      total_amount: '0.01',
    })
  );
});

test('Should set advanced bizContent', () => {
  const req = new TradeAppPayRequest();
  req.setBizContent({
    subject: 'test2',
    out_trade_no: 'test002',
    total_amount: '0.01',
    body: 'i am a test',
    timeout_express: '10m',
    seller_id: 'id001',
    goods_type: EGoodType.Physical,
    passback_params: {
      bar: 'foo',
    },
    promo_params: {
      bar2: 'foo2',
    },
    extend_params: {
      sys_service_provider_id: 'x001',
      TRANS_MEMO: 'y001',
    },
    enable_pay_channels: [EPayChanel.balance, EPayChanel.bankPay],
    disable_pay_channels: [],
    store_id: 's001',
  });
  expect(req.data.bizContent).toBe(
    JSON.stringify({
      subject: 'test2',
      out_trade_no: 'test002',
      total_amount: '0.01',
      body: 'i am a test',
      timeout_express: '10m',
      seller_id: 'id001',
      goods_type: EGoodType.Physical,
      passback_params: encodeURIComponent('bar=foo'),
      promo_params: JSON.stringify({
        bar2: 'foo2',
      }),
      extend_params: JSON.stringify({
        sys_service_provider_id: 'x001',
        TRANS_MEMO: 'y001',
      }),
      enable_pay_channels: [EPayChanel.balance, EPayChanel.bankPay].join(','),
      disable_pay_channels: '',
      store_id: 's001',
    })
  );
});
