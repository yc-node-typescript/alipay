# 支付宝接口请求
> 示例
```ts
import { Client, Request } from '@ycnt/alipay';

const client = new Client(...);

const req = new Request('alipay.user.info.share');
req.data.auth_token = 'xxx';

const res = await client.execute(req);
console.log(res);

```
## properties
```ts
// 接口名称。例：'alipay.user.info.share'
method: string;

// 公共请求参数
// 已下字段均省略，Client类会自动生成。
// app_id, method, format, charset,sign_type, sign, version
data: {
  [x: string]: any;
} = {};
```

## methods
```ts
// 构造方法
constructor(method: string);
```