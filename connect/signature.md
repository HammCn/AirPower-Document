# 签名与验签

为了避免数据被篡改、中间人攻击、数据抓包、重放等安全问题，我们将使用下面的方式对数据进行签名:


## 序列化业务对象到JSON

将业务对象序列化成JSON字符串，示例代码如下

```java
String json = JsonUtil.toJson(businessObject);
```

## 对业务对象字符串加密

```java
// 使用应用配置的加密方式进行数据加密， 如 AES/RSA 等，如配置不加密，则直接返回原字符串
String encrypt = EncryptUtil.encrypt(json, "your_key");
```

## 拼接签名原始数据

先按顺序拼接字符串：

```java
int version = 10000; // 固定值
int timestamps = System.currentTimeMillis();
String nonce = RandomUtil.randomString(32); // 随机字符串
String source = appSecret + appKey + version + timestamps + nonce + encrypt;
```

使用 `sha1` 计算 `source` 的摘要签名数据：

```java
String signature = DigestUtil.sha1(source);
```

## 得到签名字符串

上述的步骤已经成功获得了最终的签名字符串 `signature`，接下来需要将 `signature` 作为公共参数传入即可。

