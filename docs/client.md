# 客户端配置
> 示例
```ts
import { Client, EClientSignType } from '@ycnt/alipay';

const client = new Client({
  appId: '你的支付宝 APP ID',
  rsaPrivate: '私钥PATH',
  rsaPublic: '公钥PATH',
  signType: EClientSignType.RSA2, // 签名类型
  sandbox: true; // 是否使用沙箱环境
});
```
## enums
```ts
export enum EClientSignType {
  RSA = 'RSA',
  RSA2 = 'RSA2'
}
```

## interfaces
```ts
export interface IClientOptions {
  appId: string; // 支付宝的appId
  rsaPrivate: string; // 商户私钥pem文件路径
  rsaPublic: string; // 支付宝公钥pem文件路径
  signType?: EClientSignType; // 签名方式, 'RSA' or 'RSA2'
  sandbox?: boolean; // 是否是沙盒环境
}
```

## properties
```ts
appId: string;
rsaPrivate: string;
rsaPublic: string;
signType: EClientSignType = EClientSignType.RSA2;
sandbox: boolean = false;
```

## methods
```ts
// 构造方法
constructor(opts: IClientOptions);

// 运行HTTP请求
execute(req: Request): Promise<any> ;
```