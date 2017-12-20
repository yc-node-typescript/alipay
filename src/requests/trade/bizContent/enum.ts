export enum EGoodType {
  /**
   * 虚拟类商品
   */
  Virtual = 0,

  /**
   * 实物类商品
   */
  Physical = 1,
}

export enum EProductCode {
  QUICK_MSECURITY_PAY = 'QUICK_MSECURITY_PAY',
  QUICK_WAP_PAY = 'QUICK_WAP_PAY',
  FAST_INSTANT_TRADE_PAY = 'FAST_INSTANT_TRADE_PAY',
  FACE_TO_FACE_PAYMENT = 'FACE_TO_FACE_PAYMENT',
}

export enum EQRPayMode {
  /**
   * 订单码-简约前置模式，对应 iframe 宽度不能小于600px，高度不能小于300px
   */
  Simple = 0,

  /**
   * 订单码-前置模式，对应 iframe 宽度不能小于300px，高度不能小于600px
   */
  Forward = 1,

  /**
   * 订单码-跳转模式 用户的扫码界面是由支付宝生成的，不存在商户的域名下
   */
  Redirect = 2,

  /**
   * 订单码-迷你模式，对应 iframe 宽度不能小于75px，高度不能小于75px
   */
  Mini = 3,

  /**
   * 订单码-可定义宽度的嵌入式二维码，商户可根据需要设定二维码的大小
   */
  Custom = 4,
}

export enum EPayChanel {
  /**
   * 余额
   */
  balance = 'balance',

  /**
   * 余额宝
   */
  moneyFund = 'moneyFund',

  /**
   * 红包
   */
  coupon = 'coupon',

  /**
   * 花呗
   */
  pcredit = 'pcredit',

  /**
   * 花呗分期
   */
  pcreditpayInstallment = 'pcreditpayInstallment',

  /**
   * 信用卡
   */
  creditCard = 'creditCard',

  /**
   * 信用卡快捷
   */
  creditCardExpress = 'creditCardExpress',

  /**
   * 信用卡卡通
   */
  creditCardCartoon = 'creditCardCartoon',

  /**
   * 信用支付类型（包含信用卡卡通、信用卡快捷、花呗、花呗分期）
   */
  credit_group = 'credit_group',

  /**
   * 借记卡快捷
   */
  debitCardExpress = 'debitCardExpress',

  /**
   * 商户预存卡
   */
  mcard = 'mcard',

  /**
   * 个人预存卡
   */
  pcard = 'pcard',

  /**
   * 优惠（包含实时优惠+商户优惠）
   */
  promotion = 'promotion',

  /**
   * 营销券
   */
  voucher = 'voucher',

  /**
   * 积分
   */
  point = 'point',

  /**
   * 商户优惠
   */
  mdiscount = 'mdiscount',

  /**
   * 网银
   */
  bankPay = 'bankPay',
}
