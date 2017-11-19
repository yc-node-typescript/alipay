"use strict";
import { EGoodType, EProductCode, EPayChanel } from '../bizContent/enum';
import {
  IBizContentExtendParams,
  IBizContentPassbackParams,
  IBizContentPromoParams,
} from '../bizContent/interface';
import { Request } from '../../request';

export interface IWapPayContent {
  subject: string; // 商品的标题/交易标题/订单标题/订单关键字等
  out_trade_no: string; // 商户网站唯一订单号
  total_amount: string; // 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]

  body?: string; // 对一笔交易的具体描述信息。如果是多种商品，请将商品描述字符串累加传给body
  time_expire?: string; // --- guosidi 绝对超时时间，格式为yyyy-MM-dd HH:mm。 注：1）以支付宝系统时间为准；2）如果和timeout_express参数同时传入，以time_expire为准。
  timeout_express?: string; // 该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。注：若为空，则默认为15d。
  auth_token?: string; //  ---guosidi，获取用户相关数据时，用于标识用户授权关系。注：若不属于支付宝业务经理提供签约服务的商户，暂不对外提供该功能，该参数使用无效。
  goods_type?: EGoodType; // -guosidi改动
  promo_params?: IBizContentPromoParams; // 优惠参数(仅与支付宝协商后可用)
  extend_params?: IBizContentExtendParams; // 业务扩展参数 https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.3oJPAi&treeId=193&articleId=105465&docType=1#kzcs
  enable_pay_channels?: EPayChanel[]; // 可用渠道，用户只能在指定渠道范围内支付。当有多个渠道时用“,”分隔。注：与disable_pay_channels互斥。
  disable_pay_channels?: EPayChanel[]; // 禁用渠道，用户不可用指定渠道支付。当有多个渠道时用“,”分隔。 注：与enable_pay_channels互斥。
  store_id?: string; // 商户门店编号
  quit_url?: string; // 添加该参数后在h5支付收银台会出现返回按钮，可用于用户付款中途退出并返回到该参数指定的商户网站地址。注：该参数对支付宝钱包标准收银台下的跳转不生效。
}

export class TradeWapPayRequest extends Request {
    constructor() {
      super('alipay.trade.wap.pay');
    }
  
    public setBizContent(bc: IWapPayContent): void {
      this.data.bizContent = JSON.stringify(
        Object.keys(bc)
          .map(x => {
            switch (x) {
              case 'promo_params':
              case 'extend_params':
                return [x, JSON.stringify(bc[x])];
              case 'enable_pay_channels':
              case 'disable_pay_channels':
                return [x, bc[x].join(',')];
              default:
                return [x, (<any>bc)[x]];
            }
          })
          .reduce((a: any, b: [any, any]) => {
            a[b[0]] = b[1];
            return a;
          }, {})
      );
    }
    //  练练手
    // public sum(arr: any[]){
    //     let sumResult = 0;
    //     arr.reduce((pre, curr)=>{
    //         return sumResult = pre+curr;
    //     });
    //     return sumResult;
    // }
}

