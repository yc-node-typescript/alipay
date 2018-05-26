import { TradeRefundRequest } from '../../src';

test('Should set simple bizContent', () => {
  const req = new TradeRefundRequest();
  req.setBizContent({
    out_trade_no: 'test001',
    refund_amount: '10',
  });
  expect(req.method).toBe('alipay.trade.refund');
  expect(req.data.biz_content).toBe(
    JSON.stringify({
      out_trade_no: 'test001',
      refund_amount: '10',
    })
  );
});
