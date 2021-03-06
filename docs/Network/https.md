## 加密手段

### 通信加密

客户端与服务端通过SSL或TLS加密后的线路通信

### 内容加密

加密HTTP报文内容

## 风险

1. 伪装服务器
2. 伪装客户端
3. 无法鉴权
4. DDOS

SSL提供了证书

## 一

1. 信息遭窃听  ---> 通信加密
2. 伪装的服务端或客户端   ---> 证书
3. 报文被篡改   ---> 完整性保护

HTTP + 通信加密 + 证书 + 完整性保护 = HTTPS

## 二

HTTPS 并非是应用层的一种新协议。只是 HTTP 通信接口部分用
SSL（Secure Socket Layer）和 TLS（Transport Layer Security）协议代替。

## 三

非对称加密：

1. 服务方持有一把公钥和一把私钥，公钥是公开的，私钥是保密的。
2. 使用公钥加密后的文件只有私钥能解开，使用私钥加密的文件只有公钥能解开。加密方拿到解密方发送的公钥，使用公钥加密文件后传输，然后解密方使用自己的私钥解密。

一般交换密钥的环节使用非对称加密，通信时使用对称加密。

如何证明公钥本身是真实的呢？

CA及公钥证书可以证明

服务方向CA申请签名公钥，CA判别服务方身份后签名公钥，将公钥放入公钥证书。服务器将公钥证书发给客户端，客户端拿到公钥证书，使用CA本身的公钥对签名进行验证，即可确定公钥真实性。

浏览器内部通常会植入常用CA的公钥

