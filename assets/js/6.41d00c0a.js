(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{258:function(_,v,t){_.exports=t.p+"assets/img/3330693399418318251.6f870588.jpg"},259:function(_,v,t){_.exports=t.p+"assets/img/3330693399418318252.388c9585.jpg"},260:function(_,v,t){_.exports=t.p+"assets/img/1544442824830.09792b93.png"},261:function(_,v,t){_.exports=t.p+"assets/img/1544445209014.04905e31.png"},262:function(_,v,t){_.exports=t.p+"assets/img/1544447768537.034215bc.png"},263:function(_,v,t){_.exports=t.p+"assets/img/1544447834694.f7062df9.png"},326:function(_,v,t){"use strict";t.r(v);var a=[function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"运输层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运输层"}},[_._v("#")]),_._v(" 运输层")]),_._v(" "),a("p",[_._v("IP协议把数据报文送到目的主机，但是并没有交付给主机的具体应用进程；而端到端的通信是应用进程之间的通信。")]),_._v(" "),a("p",[_._v("UDP，在传送数据前不需要先建立连接，远地的主机在收到UDP报文后也不需要给出任何确认。虽然UDP不提供可靠交付，但是正是因为这样，省去和很多的开销，使得它的速度比较快，比如一些对实时性要求较高的服务，就常常使用的是UDP。对应的应用层的协议主要有 DNS,TFTP,DHCP,SNMP,NFS 等。")]),_._v(" "),a("p",[_._v("TCP，提供面向连接的服务，在传送数据之前必须先建立连接，数据传送完成后要释放连接。因此TCP是一种可靠的的运输服务，但是正因为这样，不可避免的增加了许多的开销，比如确认，流量控制等。对应的应用层的协议主要有 SMTP,TELNET,HTTP,FTP 等。")]),_._v(" "),a("p",[a("strong",[_._v("常见应用层默认端口号及其传输层协议")])]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("应用程序")]),_._v(" "),a("th",[_._v("FTP")]),_._v(" "),a("th",[_._v("HTTP")]),_._v(" "),a("th",[_._v("DNS")]),_._v(" "),a("th",[_._v("SMTP")]),_._v(" "),a("th",[_._v("TFTP")]),_._v(" "),a("th",[_._v("TELNET")]),_._v(" "),a("th",[_._v("SSH")]),_._v(" "),a("th",[_._v("MYSQL")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[_._v("默认端口号")]),_._v(" "),a("td",[_._v("21, 20")]),_._v(" "),a("td",[_._v("80")]),_._v(" "),a("td",[_._v("53")]),_._v(" "),a("td",[_._v("25")]),_._v(" "),a("td",[_._v("69")]),_._v(" "),a("td",[_._v("23")]),_._v(" "),a("td",[_._v("22")]),_._v(" "),a("td",[_._v("3306")])]),_._v(" "),a("tr",[a("td",[_._v("传输层协议")]),_._v(" "),a("td",[_._v("TCP")]),_._v(" "),a("td",[_._v("TCP")]),_._v(" "),a("td",[_._v("UDP")]),_._v(" "),a("td",[_._v("TCP")]),_._v(" "),a("td",[_._v("UDP")]),_._v(" "),a("td",[_._v("TCP")]),_._v(" "),a("td"),_._v(" "),a("td")])])]),_._v(" "),a("h2",{attrs:{id:"tcp概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp概述"}},[_._v("#")]),_._v(" TCP概述")]),_._v(" "),a("h3",{attrs:{id:"tcp的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp的特点"}},[_._v("#")]),_._v(" TCP的特点")]),_._v(" "),a("ol",[a("li",[_._v("每一条TCP连接都有2个端点，这个端点叫作套接字（socket），它的定义是"),a("code",[_._v("IP地址:端口号")]),_._v("，假如IP地址为192.3.4.16，端口号为80，那么套接字为192.3.4.16:80。")]),_._v(" "),a("li",[_._v("在一个TCP连接中，仅有两方进行彼此通信。广播和多播不能用于TCP。")]),_._v(" "),a("li",[_._v("TCP协议采用自适应的超时及重传策略。")]),_._v(" "),a("li",[_._v("TCP对字节流的内容不作任何解释。对字节流的解释由TCP连接双方的应用层解释。")]),_._v(" "),a("li",[_._v("TCP将应用数据被分割其成认为最适合发送的数据块，称为报文段或段。TCP的接收端丢弃重复数据，对收到的数据进行重新排序，将收到的数据以正确的顺序交给应用层。")])]),_._v(" "),a("h3",{attrs:{id:"tcp的发送流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp的发送流程"}},[_._v("#")]),_._v(" TCP的发送流程")]),_._v(" "),a("p",[a("img",{attrs:{src:t(258),alt:"3330693399418318251"}})]),_._v(" "),a("h3",{attrs:{id:"tcp的报文段格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp的报文段格式"}},[_._v("#")]),_._v(" TCP的报文段格式")]),_._v(" "),a("p",[a("img",{attrs:{src:t(259),alt:"TCP报文段格式"}})]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("字段")]),_._v(" "),a("th",[_._v("大小")]),_._v(" "),a("th",[_._v("解释")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[_._v("源端口和目的端口")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("分别写入源端口和目的端口。")])]),_._v(" "),a("tr",[a("td",[_._v("序号seq")]),_._v(" "),a("td",[_._v("4字节")]),_._v(" "),a("td",[_._v("TCP连接中传送的数据流中的每一个字节都被编上一个序号。序号字段的值则指的是本报文段所发送的数据的第一个字节的序号。")])]),_._v(" "),a("tr",[a("td",[_._v("确认号ack")]),_._v(" "),a("td",[_._v("4字节")]),_._v(" "),a("td",[_._v("是期望收到对方下一个报文的第一个数据字节的序号。"),a("br"),_._v("例如，B收到了A发送过来的报文，其序列号字段是501，而数据长度是200字节，这表明B正确的收到了A发送的到序号700为止的数据。因此，B期望收到A的下一个数据序号是701，于是B在发送给A的确认报文段中把确认号置为701。")])]),_._v(" "),a("tr",[a("td",[_._v("数据偏移")]),_._v(" "),a("td",[_._v("4bit")]),_._v(" "),a("td",[_._v("指出TCP报文的数据距离TCP报文段的起始处有多远。")])]),_._v(" "),a("tr",[a("td",[_._v("保留")]),_._v(" "),a("td",[_._v("6bit")]),_._v(" "),a("td",[_._v("保留今后使用，但目前应都位0。")])]),_._v(" "),a("tr",[a("td",[_._v("URG")]),_._v(" "),a("td",[_._v("1bit")]),_._v(" "),a("td",[_._v("紧急。告诉系统此报文段中有紧急数据。")])]),_._v(" "),a("tr",[a("td",[_._v("ACK")]),_._v(" "),a("td",[_._v("1bit")]),_._v(" "),a("td",[_._v("确认。只有ACK=1时，确认号才有效。")])]),_._v(" "),a("tr",[a("td",[_._v("PSH")]),_._v(" "),a("td",[_._v("1bit")]),_._v(" "),a("td",[_._v("推送。当两个应用进程进行交互式通信时，有时在一端的应用进程希望在键入一个命令后立即就能收到对方的响应，这时候就将PSH=1。")])]),_._v(" "),a("tr",[a("td",[_._v("RST")]),_._v(" "),a("td",[_._v("1bit")]),_._v(" "),a("td",[_._v("复位。当RST＝1时，表明TCP连接中出现严重差错（如由于主机崩溃或其他原因），必须释放连接，然后再重新建立运输连接。")])]),_._v(" "),a("tr",[a("td",[_._v("SYN")]),_._v(" "),a("td",[_._v("1bit")]),_._v(" "),a("td",[_._v("同步。在连接建立时用来同步序号。同步比特SYN置为1，就表示这是一个连接请求或连接接受报文。")])]),_._v(" "),a("tr",[a("td",[_._v("FIN")]),_._v(" "),a("td",[_._v("1bit")]),_._v(" "),a("td",[_._v("终止。用来释放连接。当FIN=1，表明此报文的发送方的数据已经发送完毕，并且要求释放。")])]),_._v(" "),a("tr",[a("td",[_._v("窗口")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("控制对方发送的数据量。TCP连接的一端根据设置的缓存空间大小确定自己的接收窗口大小，然后通知对方以确定对方的发送窗口的上限。")])]),_._v(" "),a("tr",[a("td",[_._v("检验和")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("校验首部和数据。")])]),_._v(" "),a("tr",[a("td",[_._v("紧急指针")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("指出在本报文段中的紧急数据的最后一个字节的序号。")])]),_._v(" "),a("tr",[a("td",[_._v("选项")]),_._v(" "),a("td",[_._v("长度可变")]),_._v(" "),a("td",[_._v("TCP首部可以有多达40字节的可选信息，用于把附加信息传递给终点，或用来对齐其它选项。")])]),_._v(" "),a("tr",[a("td",[_._v("填充")]),_._v(" "),a("td",[_._v("长度可变")]),_._v(" "),a("td",[_._v("为了使整个首部长度是4字节的整数倍。")])])])]),_._v(" "),a("h2",{attrs:{id:"tcp3次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp3次握手"}},[_._v("#")]),_._v(" TCP3次握手")]),_._v(" "),a("p",[a("img",{attrs:{src:t(260),alt:"1544442824830"}})]),_._v(" "),a("ol",[a("li",[_._v("服务端先创建TCB（传输控制块），时刻准备接受客户端的连接请求，此时服务端进入了LISTEN（监听）状态")]),_._v(" "),a("li",[_._v("客户端创建TCB，然后发送连接请求报文，首部中 SYN标志位为1，初始通讯序列号seq=x，进入SYN_SEND（同步已发送状态）状态。"),a("br"),_._v("SYN报文段（SYN=1的报文段）不携带数据，但需要消耗掉一个序号。")]),_._v(" "),a("li",[_._v("服务端收到请求报文后，如果同意连接，则发出确认报文。其中 ACK=1，SYN=1，确认号是ack=x+1，同时为自己初始化一个序列号 seq=y，服务端进入了SYN-RCVD（同步收到）状态。"),a("br"),_._v("这个报文不携带数据，但是同样要消耗一个序号。")]),_._v(" "),a("li",[_._v("客户端回传一个带ACK标志的确认报文。确认报文的ACK=1，ack=y+1，自己的序列号seq=x+1，此时客户端进入ESTABLISHED（已建立连接）状态。"),a("br"),_._v("因为ACK报文段的SYN不为1，可以携带数据，但是如果不携带数据则不消耗序号。")]),_._v(" "),a("li",[_._v("双方都进入ESTABLISHED状态，就可以开始通信了。")])]),_._v(" "),a("p",[_._v("三次握手的特点：")]),_._v(" "),a("ol",[a("li",[_._v("前两次握手有同步信号SYN，后两次握手有确认信号ACK")]),_._v(" "),a("li",[_._v("自己发送的序列号是seq，希望对方发送的序列号是ack")]),_._v(" "),a("li",[_._v("握手时不携带数据但是要消耗1个序号")])]),_._v(" "),a("h3",{attrs:{id:"tcp为什么要3次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp为什么要3次握手"}},[_._v("#")]),_._v(" TCP为什么要3次握手")]),_._v(" "),a("p",[_._v("假设AB通信，AB都要确认双方通信的通道畅通")]),_._v(" "),a("p",[_._v("第一次握手：A → B，B接收成功，B确认A → B是通的")]),_._v(" "),a("p",[_._v("第二次握手：B → A，A接收成功，同时A知道B第一次握手成功了，A确认A → B和B → A都是通的")]),_._v(" "),a("p",[_._v("第三次握手：A → B，A告诉B第二次握手成功了，B接收成功，B确认B → A是通的")]),_._v(" "),a("p",[_._v("问：为什么还要第3次握手呢？似乎二次握手之后A向B正常发送通信的内容，B接收到这个内容同样可以确定B → A是通的。")]),_._v(" "),a("p",[_._v("答："),a("strong",[_._v("防止失效连接请求报文段被服务端接受。")])]),_._v(" "),a("p",[_._v("假设有这样一种场景，客户端发送了第一个请求连接并且没有丢失，只是因为在网络结点中滞留的时间太长了，由于TCP的客户端迟迟没有收到确认报文，以为服务器没有收到，此时重新向服务器发送这条报文，此后客户端和服务器经过两次握手完成连接，传输数据，然后关闭连接。此时此前滞留的那一次请求连接，网络通畅了到达了服务器，这个报文本该是失效的，但是，两次握手的机制将会让客户端和服务器再次建立连接，这将导致不必要的错误和资源的浪费。")]),_._v(" "),a("h2",{attrs:{id:"tcp4次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp4次挥手"}},[_._v("#")]),_._v(" TCP4次挥手")]),_._v(" "),a("p",[a("img",{attrs:{src:t(261),alt:"1544445209014"}})]),_._v(" "),a("ol",[a("li",[_._v("客户端发送连接释放报文。客户端向接收端发送FIN=1，seq=u的报文段。客户端进入FIN-WAIT-1（终止等待1）状态。\nFIN报文段即使不携带数据，也要消耗一个序号。")]),_._v(" "),a("li",[_._v("服务器收到FIN，发出ACK=1，ack=u+1的确认报文，并且带上自己的序列号seq=v，服务端就进入CLOSE-WAIT（关闭等待）状态。")]),_._v(" "),a("li",[_._v("客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文。")]),_._v(" "),a("li",[_._v("服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。")]),_._v(" "),a("li",[_._v("客户端收到服务器的连接释放报文后，必须发出确认，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。")]),_._v(" "),a("li",[_._v("服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。")])]),_._v(" "),a("h3",{attrs:{id:"为什么客户端最后还要等待2msl？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么客户端最后还要等待2msl？"}},[_._v("#")]),_._v(" 为什么客户端最后还要等待2MSL？")]),_._v(" "),a("p",[_._v("MSL（Maximum Segment Lifetime），TCP允许不同的实现可以设置不同的MSL值。")]),_._v(" "),a("p",[_._v("假如不等的2MSL直接CLOSED：")]),_._v(" "),a("ol",[a("li",[_._v("最后一个ACK报文丢失。这样服务端就一直接收不到ACK报文，就会一直重发FIN+ACK报文，永远不会停下来。等待2MSL能让客户端可以接收服务端重传的报文，给出回应，然后重启2MSL计时器")]),_._v(" "),a("li",[_._v("最后一个ACK报文没有丢失，只是延迟。假如这时又建立新的连接，这个失效的ACK报文被接收以后会给服务端带来错误。等待2MSL就可以使本连接持续的时间内所产生的所有报文段都从网络中消失。这样新的连接中不会出现旧连接的请求报文。")])]),_._v(" "),a("h3",{attrs:{id:"如果已经建立了连接，但是客户端突然出现故障了怎么办？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果已经建立了连接，但是客户端突然出现故障了怎么办？"}},[_._v("#")]),_._v(" 如果已经建立了连接，但是客户端突然出现故障了怎么办？")]),_._v(" "),a("p",[_._v("TCP有一个保活计时器，每接收一次请求就重新计时，通常计时2小时，如果2小时之内仍为收到对方请求，服务端就每隔75分钟发一个探测报文，连发10个还没反应就关闭连接")]),_._v(" "),a("h2",{attrs:{id:"tcp连接：一个凄美的爱情故事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接：一个凄美的爱情故事"}},[_._v("#")]),_._v(" TCP连接：一个凄美的爱情故事")]),_._v(" "),a("p",[_._v("嗯，开脑洞玩")]),_._v(" "),a("p",[a("strong",[_._v("第一章：三次握手")])]),_._v(" "),a("p",[_._v("​\t——每一段感情的开始总是愉快的")]),_._v(" "),a("p",[_._v("客户端女神遇见了与服务端小哥，觉得小哥不错，伸出橄榄枝")]),_._v(" "),a("ol",[a("li",[_._v("客户端：我们交往吧！（SYN = 1）")]),_._v(" "),a("li",[_._v("服务端：好呀好呀！（ACK = 1）我们交往吧！（SYN = 1）")]),_._v(" "),a("li",[_._v("客户端：好呀好呀！（ACK = 1）")])]),_._v(" "),a("p",[_._v("于是他们愉快的聊了起来......")]),_._v(" "),a("p",[a("strong",[_._v("第二章：四次挥手")])]),_._v(" "),a("p",[_._v("​\t——舔狗多情，分手快乐")]),_._v(" "),a("p",[_._v("天下没有不散的宴席，终于有一天女神要分手了")]),_._v(" "),a("ol",[a("li",[_._v("客户端：我们分手吧！（FIN = 1）")]),_._v(" "),a("li",[_._v("服务端：我同意分手（ACK = 1），但是我还有些话想跟你说"),a("br"),_._v("blablabla...")]),_._v(" "),a("li",[_._v("服务端：我说完了，分手吧（FIN = 1，ACK = 1）")]),_._v(" "),a("li",[_._v("客户端：好的（ACK = 1）"),a("br"),_._v("客户端等待了会儿，关闭了连接，服务端收到这条消息以后，立马关闭了连接")])]),_._v(" "),a("h2",{attrs:{id:"udp概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp概述"}},[_._v("#")]),_._v(" UDP概述")]),_._v(" "),a("h3",{attrs:{id:"udp的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp的特点"}},[_._v("#")]),_._v(" UDP的特点")]),_._v(" "),a("ol",[a("li",[_._v("无连接，不需要套接字")]),_._v(" "),a("li",[_._v("不保证可靠交付")]),_._v(" "),a("li",[_._v("面向报文：UDP一次交付一个完整报文")]),_._v(" "),a("li",[_._v("无拥塞控制：网络拥塞时会丢数据，但不允许数据有太大时延。适合直播、语音通信等服务。")]),_._v(" "),a("li",[_._v("支持一对一、一对多、多对多通信")]),_._v(" "),a("li",[_._v("首部开销小：仅8字节，比TCP至少20个字节的首部短")])]),_._v(" "),a("p",[a("img",{attrs:{src:t(262),alt:"1544447768537"}})]),_._v(" "),a("h3",{attrs:{id:"udp的首部格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udp的首部格式"}},[_._v("#")]),_._v(" UDP的首部格式")]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("字段")]),_._v(" "),a("th",[_._v("长度")]),_._v(" "),a("th",[_._v("解释")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[_._v("源端口")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("源端口号。在需要对方回信时选用。不需要时可用全0")])]),_._v(" "),a("tr",[a("td",[_._v("目的端口")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("目的端口号。")])]),_._v(" "),a("tr",[a("td",[_._v("长度")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("UDP用户数据报的长度，最小值是8字节（仅有首部）")])]),_._v(" "),a("tr",[a("td",[_._v("检验和")]),_._v(" "),a("td",[_._v("2字节")]),_._v(" "),a("td",[_._v("检验UDP数据表是否有误，有误就丢弃")])])])]),_._v(" "),a("p",[a("img",{attrs:{src:t(263),alt:"1544447834694"}})])])}],s=t(0),r=Object(s.a)({},(function(){var _=this.$createElement;this._self._c;return this._m(0)}),a,!1,null,null,null);v.default=r.exports}}]);