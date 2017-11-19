import { TradeAppPayRequest, EGoodType, EPayChanel, TradeWapPayRequest } from '../../src';
import { exec } from 'child_process';

test('wap set bizContent', () => {
    const wapReq = new TradeWapPayRequest();
    wapReq.setBizContent({
        subject: 'test wap',
        out_trade_no:'test wap0',
        total_amount: '0.01',
    });

    expect(wapReq.method).toBe('alipay.trade.wap.pay');
    expect(wapReq.data.bizContent).toBe(
        JSON.stringify({
                subject: 'test wap',
                out_trade_no:'test wap0',
                total_amount: '0.01',
        })
    )
    // 练练手
    // expect(wapReq.sum([1,2,3,4])).toBe(10);

 });

 test('wap set advanced bizcontent', () => {
    const wapReq = new TradeWapPayRequest();
    wapReq.setBizContent({
        subject: 'test wap',
        out_trade_no:'test wap0',
        total_amount: '0.01',
        body:' i am a advanced test',
        time_expire: '10m', // 绝对超时时间
        timeout_express: '12h', // 最晚付款时间
        auth_token: 'i am a auth_token',
        goods_type: EGoodType.Physical,
        promo_params: { // 优惠参数
            discount: '7.5'
        },
        extend_params:{ // 业务扩展
            sys_service_provider_id: 'x001',
            TRANS_MEMO: 'y001', 
        },
        enable_pay_channels: [EPayChanel.balance, EPayChanel.bankPay],
        disable_pay_channels: [],
        store_id: 's001',
        quit_url: 'this is a url after paied to return button on h5 webpage',

    });

    expect(wapReq.method).toBe('alipay.trade.wap.pay');
    expect(wapReq.data.bizContent).toBe(
        JSON.stringify({
            subject: 'test wap',
            out_trade_no:'test wap0',
            total_amount: '0.01',
            body:' i am a advanced test',
            time_expire: '10m', // 绝对超时时间
            timeout_express: '12h', // 最晚付款时间
            auth_token: 'i am a auth_token',
            goods_type: EGoodType.Physical,
            promo_params: JSON.stringify({ // 优惠参数
                discount: '7.5'
            }),
            extend_params:JSON.stringify({ // 业务扩展
                sys_service_provider_id: 'x001',
                TRANS_MEMO: 'y001', 
            }),
            enable_pay_channels: [EPayChanel.balance, EPayChanel.bankPay].join(','),
            disable_pay_channels: '',
            store_id: 's001',
            quit_url: 'this is a url after paied to return button on h5 webpage',
        })
    )
 });