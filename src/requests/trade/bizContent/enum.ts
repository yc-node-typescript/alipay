export enum EGoodType {
  Virtual = 0, // 虚拟类商品
  Physical = 1 // 实物类商品
}

export enum EProductCode {
  QUICK_MSECURITY_PAY = 'QUICK_MSECURITY_PAY',
  QUICK_WAP_PAY = 'QUICK_WAP_PAY',
  FAST_INSTANT_TRADE_PAY = 'FAST_INSTANT_TRADE_PAY',
  FACE_TO_FACE_PAYMENT = 'FACE_TO_FACE_PAYMENT'
}

export enum EQRPayMode {
  Simple = 0, // 订单码-简约前置模式，对应 iframe 宽度不能小于600px，高度不能小于300px
  Forward = 1, // 订单码-前置模式，对应 iframe 宽度不能小于300px，高度不能小于600px
  Redirect = 2, //订单码-跳转模式 用户的扫码界面是由支付宝生成的，不存在商户的域名下
  Mini = 3, // 订单码-迷你模式，对应 iframe 宽度不能小于75px，高度不能小于75px
  Custom = 4 // 订单码-可定义宽度的嵌入式二维码，商户可根据需要设定二维码的大小
}

export enum EPayChanel {
  balance = 'balance', //	余额
  moneyFund = 'moneyFund', //	余额宝
  coupon = 'coupon', //	红包
  pcredit = 'pcredit', //	花呗
  pcreditpayInstallment = 'pcreditpayInstallment', //	花呗分期
  creditCard = 'creditCard', //	信用卡
  creditCardExpress = 'creditCardExpress', //	信用卡快捷
  creditCardCartoon = 'creditCardCartoon', //	信用卡卡通
  credit_group = 'credit_group', //	信用支付类型（包含信用卡卡通、信用卡快捷、花呗、花呗分期）
  debitCardExpress = 'debitCardExpress', //	借记卡快捷
  mcard = 'mcard', //	商户预存卡
  pcard = 'pcard', //	个人预存卡
  promotion = 'promotion', //	优惠（包含实时优惠+商户优惠）
  voucher = 'voucher', //	营销券
  point = 'point', //	积分
  mdiscount = 'mdiscount', //	商户优惠
  bankPay = 'bankPay' //	网银
}