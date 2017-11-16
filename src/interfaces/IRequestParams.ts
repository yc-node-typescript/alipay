export interface IRequestParams {
  app_id: string; //	是	32	支付宝分配给开发者的应用ID	2014072300007148
  method: string; //	是	128	接口名称	alipay.trade.fastpay.refund.query
  format?: string; //	否	40	仅支持JSON	JSON
  charset: string; //	是	10	请求使用的编码格式，如utf-8,gbk,gb2312等	utf-8
  sign_type: 'RSA2' | 'RSA'; //	是	10	商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2	RSA2
  sign: string; //	是	256	商户请求参数的签名串，详见签名	详见示例
  timestamp: string; //	是	19	发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"	2014-07-24 03:07:50
  version: '1.0'; //	是	3	调用的接口版本，固定为：1.0	1.0
  app_auth_token?: string; //	否	40	详见应用授权概述	
  biz_content: string; //	是		请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递，具体参照各产品快速接入文档	
}