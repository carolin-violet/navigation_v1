// 创建标签节点

// 调色板
const colorPalette = [
  {
    bg: "#5A7A7B",
    font: "#D2FAEB",
  },
  {
    bg: "#2A9392",
    font: "#FCE2C6",
  },
  {
    bg: "#5C376E",
    font: "#BDEADF",
  },
  {
    bg: "#012C50",
    font: "#B9F1DA",
  },
  {
    bg: "#244D57",
    font: "#FDB78F",
  },
  {
    bg: "#04444F",
    font: "#66E7F5",
  },
  {
    bg: "#237847",
    font: "#DFD988",
  },
  {
    bg: "#1D326D",
    font: "#D0D181",
  },
  {
    bg: "#2FB97B",
    font: "#FDF9F6",
  },
];

// const iconUrlPrefix = './images/favicons/'  // 本地图片
const iconUrlPrefix =
  "https://cdn.jsdelivr.net/gh/carolin-violet/navigation/images/favicons/";
const defaultIconUrl =
  "https://cdn.jsdelivr.net/gh/carolin-violet/navigation/images/browser.svg";
// 导航列表(注意图片路径开头为./而不是../)
const navList = {
  学习: {
    学习导航: [
      {
        name: "github",
        href: "https://github.com/",
        icon: iconUrlPrefix + "github.png",
        title: "全球开源平台",
      },
      {
        name: "gitee",
        href: "https://gitee.com/",
        icon: iconUrlPrefix + "gitee.ico",
        title: "国内开源平台",
      },
      {
        name: "掘金",
        href: "https://juejin.cn/",
        icon: iconUrlPrefix + "掘金.png",
        title: "编程学习网站",
      },
      {
        name: "csdn",
        href: "https://www.csdn.net/",
        icon: iconUrlPrefix + "csdn.ico",
        title: "编程学习网站",
      },
      {
        name: "知乎",
        href: "https://www.zhihu.com/",
        icon: iconUrlPrefix + "知乎.ico",
        title: "多方面信息网站",
      },
      {
        name: "gitter",
        href: "https://gitter.im/",
        icon: iconUrlPrefix + "gitter.ico",
        title: "聊天平台,可以引入聊天插件到自己的页面中",
      },
      {
        name: "中国知网",
        href: "https://www.cnki.net/",
        icon: iconUrlPrefix + "中国知网.ico",
        title: "查阅文献的网站",
      },
      {
        name: "w3school",
        href: "https://www.w3school.com.cn/",
        icon: iconUrlPrefix + "w3school.png",
        title: "编程学习网站",
      },
      {
        name: "菜鸟教程",
        href: "https://www.runoob.com/",
        icon: iconUrlPrefix + "菜鸟教程.ico",
        title: "编程学习网站",
      },
      {
        name: "stackoverflow",
        href: "https://stackoverflow.com/",
        icon: iconUrlPrefix + "stackoverflow.ico",
        title: "国外编程问题搜索平台",
      },
      {
        name: "MDN",
        href: "https://developer.mozilla.org/zh-CN/",
        icon: iconUrlPrefix + "MDN.png",
        title: "很多相关web开发文档(前端)",
      },
      {
        name: "c语言中文网",
        href: "http://c.biancheng.net/",
        icon: iconUrlPrefix + "c语言中文网.ico",
        title: "编程学习网站",
      },
      {
        name: "印记中文",
        href: "https://docschina.org/",
        icon: iconUrlPrefix + "印记中文.ico",
        title: "编程资源信息网站",
      },
      {
        name: "博客园",
        href: "https://www.cnblogs.com/",
        icon: iconUrlPrefix + "博客园.svg",
        title: "编程学习网站",
      },
      {
        name: "力扣",
        href: "https://leetcode-cn.com/",
        icon: iconUrlPrefix + "力扣.ico",
        title: "算法学习网站",
      },
      {
        name: "简书",
        href: "https://www.jianshu.com/",
        icon: iconUrlPrefix + "简书.ico",
        title: "编程学习网站",
      },
      {
        name: "中文开源社区",
        href: "https://www.oschina.net/",
        icon: iconUrlPrefix + "中文开源社区.ico",
        title: "编程方面的中文开源社区",
      },
      {
        name: "awesome",
        href: "https://github.com/sindresorhus/awesome",
        icon: iconUrlPrefix + "github.png",
        title: "代码学习资源",
      },
      {
        name: "freeCodeCamp",
        href: "https://github.com/freeCodeCamp/freeCodeCamp",
        icon: iconUrlPrefix + "github.png",
        title: "代码学习网站",
      },
    ],
    学习相关软件工具: [
      {
        name: "语雀",
        href: "https://www.yuque.com/dashboard",
        icon: iconUrlPrefix + "语雀.png",
        title: "阿里开源的笔记软件",
      },
      {
        name: "幕布",
        href: "https://mubu.com/app",
        icon: iconUrlPrefix + "幕布.ico",
        title: "",
      },
      {
        name: "itellyou",
        href: "https://next.itellyou.cn/",
        icon: iconUrlPrefix + "itellyou.ico",
        title: "各种电脑系统可供下载(重装系统专用)",
      },
      {
        name: "极简插件",
        href: "https://chrome.zzzmh.cn/#/index",
        icon: iconUrlPrefix + "极简插件.ico",
        title: "里面很多chrome插件方便不会翻墙的用户",
      },
      {
        name: "jetbrains系列激活",
        href: "http://vrg123.com/",
        icon: "",
        title: "jetbrains系列软件的激活码",
      },
      {
        name: "NCM格式在线转换",
        href: "https://ncm.worthsee.com/",
        icon: iconUrlPrefix + "NCM格式在线转换.ico",
        title: "音乐格式转换(可以将一些付费音乐的格式转为mp3免费用)",
      },
      {
        name: "fiddler",
        href: "https://www.telerik.com/fiddler",
        icon: iconUrlPrefix + "fiddler.ico",
        title: "网络抓包工具",
      },
      {
        name: "sublime text",
        href: "https://www.sublimetext.com/",
        icon: iconUrlPrefix + "sublime text.ico",
        title: "一款精美的文本编辑器",
      },
      {
        name: "utools",
        href: "http://www.u.tools/",
        icon: iconUrlPrefix + "utools.ico",
        title: "一款电脑软件，集成了很多方便使用的插件",
      },
      {
        name: "ngrok内网穿透",
        href: "https://ngrok.com/",
        icon: iconUrlPrefix + "ngrok内网穿透.svg",
        title: "内网穿透工具",
      },
      {
        name: "花生壳",
        href: "https://hsk.oray.com/",
        icon: iconUrlPrefix + "花生壳.ico",
        title: "内网穿透工具",
      },
      {
        name: "PNG3D",
        href: "https://png3d.com/",
        icon: iconUrlPrefix + "PNG3D.ico",
        title: "将2D图片转换为3D图片",
      },
      {
        name: "AirPortal空传",
        href: "https://airportal.cn/",
        icon: iconUrlPrefix + "AirPortal空传.avif",
        title: "网络文件传输工具",
      },
      {
        name: "视频转gif",
        href: "https://www.toolnb.com/tools/videotogif.html",
        icon: iconUrlPrefix + "视频转gif.ico",
        title: "将视频转为gif格式",
      },
      {
        name: "在线工具",
        href: "https://tool.lu/",
        icon: iconUrlPrefix + "在线工具.ico",
        title: "一大堆花里胡哨的工具",
      },
      {
        name: "多功能图片转换器",
        href: "https://imagestool.com/zh_CN/",
        icon: iconUrlPrefix + "多功能图片转换器.ico",
        title: "图片在线编辑转换器",
      },
      {
        name: "XnSoft",
        href: "https://www.xnview.com/en/xnview/",
        icon: iconUrlPrefix + "XnSoft.ico",
        title: "图片查看工具",
      },
    ],
    网盘存储: [
      {
        name: "百度网盘",
        href: "https://pan.baidu.com/",
        icon: iconUrlPrefix + "百度网盘.ico",
      },
      {
        name: "阿里云盘",
        href: "https://www.aliyundrive.com/",
        icon: iconUrlPrefix + "阿里云盘.ico",
      },
      {
        name: "腾讯微云",
        href: "https://www.weiyun.com/",
        icon: iconUrlPrefix + "腾讯微云.ico",
      },
    ],
    开放平台: [
      {
        name: "腾讯云",
        href: "https://cloud.tencent.com/",
        icon: iconUrlPrefix + "腾讯云.ico",
      },
      {
        name: "阿里云",
        href: "https://www.aliyun.com/",
        icon: iconUrlPrefix + "阿里云.ico",
      },
      {
        name: "微信官方文档",
        href: "https://developers.weixin.qq.com/doc/",
        icon: iconUrlPrefix + "微信.ico",
      },
      {
        name: "微信公众平台",
        href: "https://mp.weixin.qq.com/",
        icon: iconUrlPrefix + "微信.ico",
      },
      {
        name: "微信支付",
        href: "https://pay.weixin.qq.com/index.php/core/home",
        icon: iconUrlPrefix + "微信支付.ico",
      },
      {
        name: "支付宝开放平台",
        href: "https://open.alipay.com/",
        icon: iconUrlPrefix + "支付宝开放平台.ico",
      },
      {
        name: "百度地图开放平台",
        href: "https://lbsyun.baidu.com/",
        icon: iconUrlPrefix + "百度地图开放平台.ico",
      },
      {
        name: "百度AI开放平台",
        href: "https://ai.baidu.com/",
        icon: iconUrlPrefix + "百度AI开放平台.ico",
      },
      {
        name: "谷歌开发者中心",
        href: "https://chrome.google.com/webstore/devconsole/",
        icon: iconUrlPrefix + "谷歌开发者中心.png",
        title: "主要可以发布自己开发的插件到chrome插件商店中",
      },
      {
        name: "algolia",
        href: "https://community.algolia.com/",
        icon: iconUrlPrefix + "algolia.png",
        title: "",
      },
      {
        name: "百度统计",
        href: "https://tongji.baidu.com/web/welcome/login?castk=LTE%3D",
        icon: iconUrlPrefix + "百度统计.ico",
        title: "",
      },
    ],
    求职: [
      {
        name: "牛客网",
        href: "https://www.nowcoder.com/",
        icon: iconUrlPrefix + "牛客网.ico",
        title: "包含很多求职技巧和面试题",
      },
      {
        name: "boss直聘",
        href: "https://www.zhipin.com/",
        icon: iconUrlPrefix + "boss直聘.png",
      },
      {
        name: "天眼查",
        href: "https://www.tianyancha.com/",
        icon: iconUrlPrefix + "天眼查.png",
      },
      {
        name: "企查查",
        href: "https://www.qcc.com/",
        icon: iconUrlPrefix + "企查查.png",
      },
      {
        name: "职友集",
        href: "https://www.jobui.com/",
        icon: iconUrlPrefix + "职友集.ico",
      },
      {
        name: "看准网",
        href: "https://www.kanzhun.com/",
        icon: iconUrlPrefix + "看准网.ico",
      },
    ],
    梯子: [
      {
        name: "接码平台",
        href: "https://sms-activate.org/",
        icon: iconUrlPrefix + "sms-activat.png",
        title: "虚拟电话号码购买",
      },
      {
        name: "斗罗云",
        href: "https://www.douluoyun.lol/",
        icon: iconUrlPrefix + "斗罗云.ico",
      },
      {
        name: "桔子云",
        href: "https://juzi90.com/user#",
        icon: iconUrlPrefix + "斗罗云.ico",
      },
      {
        name: "萝莉云",
        href: "https://xn--9kq340kxma.com/#/dashboard",
        icon: "",
      },
      {
        name: "STC-SERVER",
        href: "https://pwjmtniso4.stcserver-cloud.com/user",
        icon: iconUrlPrefix + "STC-SERVER.ico",
      },
    ],
    外包接单: [
      {
        name: "码市",
        href: "https://codemart.com/",
        icon: iconUrlPrefix + "码市.ico",
      },
      {
        name: "开源众包",
        href: "https://zb.oschina.net/",
        icon: iconUrlPrefix + "开源众包.ico",
      },
      {
        name: "程序猿客栈",
        href: "https://www.proginn.com/",
        icon: iconUrlPrefix + "程序猿客栈.ico",
      },
      {
        name: "猪八戒",
        href: "https://honghe.zbj.com/",
        icon: iconUrlPrefix + "猪八戒.ico",
      },
      {
        name: "英选",
        href: "https://www.yingxuan.io/",
        icon: iconUrlPrefix + "英选.ico",
      },
      {
        name: "开发邦",
        href: "https://www.kaifabang.com/",
        icon: iconUrlPrefix + "开发邦.ico",
      },
      {
        name: "猿急送",
        href: "https://www.yuanjisong.com/",
        icon: iconUrlPrefix + "猿急送.ico",
      },
      {
        name: "人人开发",
        href: "http://rrkf.com/",
        icon: iconUrlPrefix + "人人开发.png",
      },
    ],
    "3d引擎": [
      {
        name: "unity",
        href: "https://unity.com/cn",
        icon: iconUrlPrefix + "unity.ico",
      },
      {
        name: "虚幻4引擎",
        href: "https://www.unrealengine.com/zh-CN/",
        icon: iconUrlPrefix + "虚幻4引擎.png",
      },
    ],
    开源插件项目: [
      {
        name: "免费markdown编辑器",
        href: "https://github.com/marktext/marktext/",
        icon: iconUrlPrefix + "github.png",
      },
      {
        name: "洛雪音乐PC",
        href: "https://github.com/lyswhut/lx-music-desktop/",
        icon: iconUrlPrefix + "github.png",
        title: "开源音乐播放器",
      },
      {
        name: "洛雪音乐",
        href: "https://github.com/lyswhut/lx-music-mobile/",
        icon: iconUrlPrefix + "github.png",
        title: "开源音乐播放器",
      },
      {
        name: "物美智能 - 开源生活物联网平台",
        href: "https://github.com/kerwincui/wumei-smart",
        icon: iconUrlPrefix + "github.png",
        title: "开源物联网平台",
      },
      {
        name: "flash-waimai",
        href: "https://github.com/microapp-store/flash-waimai",
        icon: iconUrlPrefix + "github.png",
        title: "开源外卖系统",
      },
      {
        name: "Dapp-Learning",
        href: "https://github.com/Dapp-Learning-DAO/Dapp-Learning",
        icon: iconUrlPrefix + "github.png",
      },
    ],
  },
  web3: {
    资料: [
      {
        name: "以太坊",
        href: "https://ethereum.org/zh/",
        icon: iconUrlPrefix + "以太坊.png",
      },
      {
        name: "hyperledger-fabric",
        href: "https://github.com/hyperledger/fabric",
        icon: iconUrlPrefix + "github.png",
        title: "hyperledger-fabric",
      },
      {
        name: "metamask",
        href: "https://metamask.io/",
        icon: iconUrlPrefix + "metamask.png",
        title: "以太币钱包工具",
      },
      {
        name: "Remix",
        href: "https://remix.ethereum.org/",
        icon: iconUrlPrefix + "Remix.webp",
        title: "在线开发智能合约",
      },
      {
        name: "dapp university",
        href: "https://www.dappuniversity.com/",
        icon: iconUrlPrefix + "dapp university.png",
      },
      {
        name: "登链社区",
        href: "https://learnblockchain.cn/",
        icon: iconUrlPrefix + "登链社区.png",
      },
      {
        name: "区块链技术博客",
        href: "https://me.tryblockchain.org/",
        icon: "",
      },
      {
        name: "Web3.js文档",
        href: "https://learnblockchain.cn/docs/web3.js/getting-started.html",
        icon: iconUrlPrefix + "登链社区.png",
      },
      {
        name: "truffle文档",
        href: "https://learnblockchain.cn/docs/truffle/",
        icon: iconUrlPrefix + "登链社区.png",
      },
      {
        name: "solidity文档",
        href: "https://solidity-cn.readthedocs.io/zh/develop/",
        icon: iconUrlPrefix + "登链社区.png",
      },
      {
        name: "ganache",
        href: "https://trufflesuite.com/ganache/",
        icon: iconUrlPrefix + "truffle.png",
      },
      {
        name: "truffle",
        href: "https://trufflesuite.com/",
        icon: iconUrlPrefix + "truffle.png",
      },
      {
        name: "geth",
        href: "https://geth.ethereum.org/",
        icon: iconUrlPrefix + "geth.ico",
      },
    ],
    应用: [
      {
        name: "谜恋猫",
        href: "https://www.cryptokitties.co/",
        title: "一款基于以太币的货品",
        icon: iconUrlPrefix + "谜恋猫.ico",
      },
      {
        name: "欧易",
        href: "https://www.lybg1688.com/",
        title: "去中心化交易平台",
        icon: iconUrlPrefix + "欧易.png",
      },
      {
        name: "filescan",
        href: "https://www.filescan.io/scan",
        title: "分布式文件存储网站",
        icon: iconUrlPrefix + "filescan.avif",
      },
      {
        name: "IPFS",
        href: "https://ipfs.tech/",
        title: "星际邮件系统官网",
        icon: iconUrlPrefix + "IPFS.ico",
      },
      {
        name: "上海数据交易所",
        href: "https://www.chinadep.com/",
        title: "上海数据交易所",
        icon: iconUrlPrefix + "上海数据交易所.ico",
      },
      {
        name: "星火链网",
        href: "https://bitfactory.cn/",
        title: "星火链网",
        icon: iconUrlPrefix + "星火链网.ico",
      },
    ],
  },
  AI: {
    "stable diffusion 专栏": [
      {
        name: "civitai",
        href: "https://civitai.com/",
        title: "ai模型",
        icon: iconUrlPrefix + "civitai.ico",
      },
      {
        name: "openart",
        href: "https://openart.ai/",
        title: "ai模型",
        icon: iconUrlPrefix + "openart.ico",
      },
      {
        name: "arthub",
        href: "https://arthub.ai/",
        title: "ai模型",
        icon: iconUrlPrefix + "arthub.ico",
      },
      {
        name: "dawnmark",
        href: "https://ai.dawnmark.cn/",
        title: "ai词汇",
        icon: iconUrlPrefix + "dawnmark.ico",
      },
      {
        name: "atoolbox",
        href: "http://www.atoolbox.net/Tool.php?Id=1101",
        title: "ai词汇",
        icon: iconUrlPrefix + "atoolbox.ico",
      },
    ],
    应用: [
      {
        name: "openai",
        href: "https://openai.com/",
        title: "",
        icon: iconUrlPrefix + "openai.ico",
      },
      {
        name: "chatgpt",
        href: "https://chat.openai.com/",
        title: "",
        icon: iconUrlPrefix + "chatgpt.png",
      },
      {
        name: "phind",
        href: "https://www.phind.com/",
        title: "编程搜索引擎",
        icon: iconUrlPrefix + "phind.png",
      },
      {
        name: "leiapix",
        href: "https://convert.leiapix.com/",
        title: "图片转深度图",
        icon: iconUrlPrefix + "leiapix.ico",
      },
      {
        name: "AIAS-AI",
        href: "http://aias.top/",
        title: "一些算法代码",
        icon: iconUrlPrefix + "AIAS-AI.ico",
      },
    ],
  },
  前端开发: {
    Vue相关: [
      {
        name: "vue3",
        href: "https://v3.cn.vuejs.org/",
        icon: iconUrlPrefix + "vue.svg",
      },
      {
        name: "VueUse",
        href: "https://vueuse.org/",
        icon: iconUrlPrefix + "VueUse.png",
      },
      {
        name: "vue2",
        href: "https://cn.vuejs.org/",
        icon: iconUrlPrefix + "vue.svg",
      },
      {
        name: "ElementUI",
        href: "https://element.eleme.io/#/zh-CN",
        icon: iconUrlPrefix + "ElementUI.ico",
        title: "饿了么开发的组件库，支持vue2",
      },
      {
        name: "Element Plus",
        href: "https://element-plus.gitee.io/zh-CN/",
        icon: iconUrlPrefix + "ElementPlus.svg",
        title: "饿了么开发的组件库，支持vue3",
      },
      {
        name: "pinia",
        href: "https://pinia.vuejs.org/",
        icon: iconUrlPrefix + "pinia.svg",
        title: "状态管理工具，比较适用vue3，可以替代vuex使用",
      },
      {
        name: "nuxt2",
        href: "https://v2.nuxt.com/",
        icon: iconUrlPrefix + "nuxt.svg",
        title: "基于vue的ssr框架",
      },
      {
        name: "nuxt3",
        href: "https://nuxt.com/",
        icon: iconUrlPrefix + "nuxt.svg",
        title: "基于vue的ssr框架",
      },
      {
        name: "vue-element-admin",
        href: "https://panjiachen.github.io/vue-element-admin-site/",
        icon: iconUrlPrefix + "vue-element-admin.ico",
        title: "开源的vue后台管理系统模板,内容比较丰富",
      },
      {
        name: "vue-admin-template",
        href: "https://github.com/PanJiaChen/vue-admin-template",
        icon: iconUrlPrefix + "github.png",
        title:
          "开源的vue后台管理系统模板,差不多只有个大概框架，可扩展性强，我vue2项目用的多",
      },
      {
        name: "vue-aplayer",
        href: "https://aplayer.netlify.app/docs/options/#audio",
        icon: iconUrlPrefix + "vue-aplayer.ico",
        title: "开源的音乐播放器插件",
      },
      {
        name: "vue-video-palyer",
        href: "https://github.com/surmon-china/vue-video-player",
        icon: iconUrlPrefix + "github.png",
        title: "开源的视频播放器",
      },
      {
        name: "vue-puzzle-vcode",
        href: "https://github.com/javaLuo/vue-puzzle-vcode",
        icon: iconUrlPrefix + "github.png",
        title: "开源的图片验证功能，包含文字、滑块、拼图等",
      },
      {
        name: "vue-lazyload",
        href: "https://github.com/hilongjw/vue-lazyload",
        icon: iconUrlPrefix + "github.png",
        title: "开源的懒加载功能",
      },
      {
        name: "vue-virtual-scroller",
        href: "https://github.com/Akryum/vue-virtual-scroller",
        icon: iconUrlPrefix + "github.png",
        title: "开源的虚拟列表，支持滚动懒加载",
      },
      {
        name: "vue-virtual-scroll-list",
        href: "https://github.com/tangbc/vue-virtual-scroll-list",
        icon: iconUrlPrefix + "github.png",
        title: "开源的虚拟列表，支持滚动懒加载",
      },
      {
        name: "vue-awesome-swiper",
        href: "https://github.com/surmon-china/vue-awesome-swiper",
        icon: iconUrlPrefix + "github.png",
        title: "开源的轮播图组件",
      },
      {
        name: "vuex-persistedstate",
        href: "https://github.com/robinvdvleuten/vuex-persistedstate",
        icon: iconUrlPrefix + "github.png",
        title: "基于vuex的持久化存储插件，可以在页面刷新前缓存vuex的数据",
      },
      {
        name: "vue-countTo",
        href: "https://github.com/PanJiaChen/vue-countTo",
        icon: iconUrlPrefix + "github.png",
        title: "开源的计数器模块",
      },
      {
        name: "vue-qr",
        href: "https://www.npmjs.com/package/vue-qr",
        icon: iconUrlPrefix + "npm.png",
        title: "开源的二维码图片模块",
      },
      {
        name: "vue-qrcode",
        href: "https://github.com/Binaryify/vue-qr",
        icon: iconUrlPrefix + "github.png",
        title: "开源的二维码图片模块",
      },
      {
        name: "Vant",
        href: "https://vant-contrib.gitee.io/vant/#/zh-CN",
        icon: iconUrlPrefix + "Vant.png",
        title: "轻量的移动端vue组件库",
      },
      {
        name: "NutUI",
        href: "https://nutui.jd.com/#/",
        icon: iconUrlPrefix + "NutUI.avif",
        title: "京东风格的轻量级移动端 Vue 组件库",
      },
      {
        name: "dcloud",
        href: "https://www.dcloud.io/",
        icon: iconUrlPrefix + "dcloud.png",
        title: "包含uni-app、Hbuilder等",
      },
      {
        name: "vue-admin-better",
        href: "https://github.com/chuzhixin/vue-admin-better",
        icon: iconUrlPrefix + "github.png",
        title: "vue3的开源后台管理系统模板",
      },
      {
        name: "vue-vben-admin",
        href: "https://github.com/vbenjs/vue-vben-admin",
        icon: iconUrlPrefix + "github.png",
        title: "vue3的开源后台管理系统模板",
      },
      {
        name: "fantastic-admin",
        href: "https://fantastic-admin.gitee.io/",
        icon: iconUrlPrefix + "fantastic-admin.ico",
        title: "vue3的开源后台管理系统模板",
      },
      {
        name: "arco design",
        href: "https://arco.design/",
        icon: iconUrlPrefix + "arco design.ico",
        title: "字节开源后台管理系统模板",
      },
      {
        name: "Geeker-Admin",
        href: "https://github.com/hello-lc/Geeker-Admin",
        icon: iconUrlPrefix + "github.png",
        title: "Vue 3.2 + TypeScript + Pinia + Vite2 + Element-Plus 管理系统",
      },
      {
        name: "Vue3练手项目",
        href: "https://github.com/newbee-ltd/vue3-admin",
        icon: iconUrlPrefix + "github.png",
        title: "github开源的vue3项目",
      },
      {
        name: "vue-froala",
        href: "https://github.com/froala/vue-froala-wysiwyg",
        icon: iconUrlPrefix + "github.png",
        title: "开源的富文本编辑器",
      },
      {
        name: "mavoneditor富文本编辑器",
        href: "http://www.mavoneditor.com/",
        icon: "",
        title: "适用于vue2的富文本编辑器插件",
      },
      {
        name: "md-editor-v3富文本编辑器",
        href: "https://imzbf.github.io/md-editor-v3/index",
        icon: "",
        title: "适用于vue3的富文本编辑器插件",
      },
      {
        name: "Vue.Draggable",
        href: "https://github.com/SortableJS/Vue.Draggable",
        icon: iconUrlPrefix + "github.png",
        title: "基于vue的布局内容拖拽插件",
      },
      {
        name: "vue-draggable-resizable",
        href: "https://github.com/mauricius/vue-draggable-resizable",
        icon: iconUrlPrefix + "github.png",
        title: "基于vue的布局内容拖拽插件",
      },
      {
        name: "vue-grid-layout",
        href: "https://github.com/jbaysolutions/vue-grid-layout",
        icon: iconUrlPrefix + "github.png",
        title: "基于vue的布局内容拖拽插件",
      },
      {
        name: "vue-baidu-map",
        href: "https://github.com/Dafrok/vue-baidu-map",
        icon: iconUrlPrefix + "github.png",
        title: "基于百度地图api的vue地图组件",
      },
      {
        name: "vue-amap",
        href: "https://github.com/ElemeFE/vue-amap",
        icon: iconUrlPrefix + "github.png",
        title: "基于高德地图api的vue地图组件",
      },
      {
        name: "vue-i18n",
        href: "https://vue-i18n.intlify.dev/",
        icon: "",
        title: "vue国际化插件",
      },
      {
        name: "vue-socketio",
        href: "https://github.com/MetinSeylan/Vue-Socket.io",
        icon: iconUrlPrefix + "github.png",
        title: "vue-socketio",
      },
      {
        name: "VuePress中文网",
        href: "http://caibaojian.com/vuepress/",
        icon: iconUrlPrefix + "vue.svg",
        title: "vue驱动的静态站点生成工具",
      },
      {
        name: "Vuetify",
        href: "https://vuetifyjs.com/en/getting-started/installation/",
        icon: iconUrlPrefix + "Vuetify.ico",
        title: "Vuetify",
      },
      {
        name: "mini-vue",
        href: "https://github.com/cuixiaorui/mini-vue",
        icon: iconUrlPrefix + "github.png",
        title: "vue3源码讲解",
      },
      {
        name: "element-plus-best-practices",
        href: "https://github.com/sxzz/element-plus-best-practices",
        icon: iconUrlPrefix + "github.png",
        title: "学习elementplus源码",
      },
    ],
    构建打包工具: [
      {
        name: "Vite",
        href: "https://vitejs.cn/",
        icon: iconUrlPrefix + "Vite.svg",
        title: "前端构建工具,比较适合vue3",
      },
      {
        name: "Webpack",
        href: "https://webpack.docschina.org/",
        icon: iconUrlPrefix + "Webpack.ico",
        title: "前端打包构建工具",
      },
      {
        name: "rollup",
        href: "https://rollupjs.org/",
        icon: iconUrlPrefix + "rollup.png",
        title: "前端构建工具",
      },
    ],
    React相关: [
      {
        name: "react",
        href: "https://react.docschina.org/",
        icon: iconUrlPrefix + "react.ico ",
      },
      {
        name: "Ant Design",
        href: "https://ant.design/docs/react/introduce-cn",
        icon: iconUrlPrefix + "AntDesign.avif",
        title: "蚂蚁团队开发的基于react的组件库",
      },
    ],
    其他js框架类库: [
      {
        name: "typescript",
        href: "https://www.tslang.cn/",
        icon: iconUrlPrefix + "typescript.png",
        title: "js语法增强版",
      },
      {
        name: "lodash",
        href: "https://www.lodashjs.com/",
        icon: iconUrlPrefix + "lodash.ico",
        title: "提供一些封装好的函数，比如防抖、节流 、深拷贝等",
      },
      {
        name: "bootstrap",
        href: "https://v3.bootcss.com/",
        icon: iconUrlPrefix + "bootstrap.ico",
        title: "前端框架，我基本不怎么用的，但是使用人群还是挺多的",
      },
      {
        name: "UmiJS",
        href: "https://umijs.org/",
        icon: iconUrlPrefix + "UmiJS.svg",
        title: "多功能的前端框架，详情看官网",
      },
      {
        name: "Day.js",
        href: "https://day.js.org/zh-CN/",
        icon: iconUrlPrefix + "Dayjs.avif",
        title: "js时间日期处理库",
      },
      {
        name: "momentjs",
        href: "http://momentjs.cn/",
        icon: iconUrlPrefix + "momentjs.png",
        title: "js时间日期处理库",
      },
      {
        name: "date-fns",
        href: "https://date-fns.org/",
        icon: iconUrlPrefix + "date-fns.png",
        title: "js时间日期处理库",
      },
      {
        name: "Velocity",
        href: "http://www.5imoban.net/view/Velocity/vuejs.html",
        icon: iconUrlPrefix + "Velocity.ico",
        title: "js动画,在vue框架中也适用",
      },
      {
        name: "mitt",
        href: "https://github.com/developit/mitt",
        icon: iconUrlPrefix + "github.png",
        title: "时间总线库",
      },
      {
        name: "webuploader",
        href: "https://github.com/fex-team/webuploader",
        icon: iconUrlPrefix + "github.png",
        title: "webuploader",
      },
    ],
    css: [
      {
        name: "CSS-TRICKS",
        href: "https://css-tricks.com/",
        icon: iconUrlPrefix + "CSS-TRICKS.ico",
        title: "国外CSS学习网站",
      },
      {
        name: "iCSS",
        href: "https://github.com/chokcoco/iCSS",
        icon: iconUrlPrefix + "github.png",
        title: "CSS大佬的开源文章",
      },
      {
        name: "less",
        href: "https://less.bootcss.com/",
        icon: iconUrlPrefix + "less.ico",
        title: "css增强语法",
      },
      {
        name: "stylus",
        href: "https://www.stylus-lang.cn/",
        icon: iconUrlPrefix + "stylus.ico",
        title: "css增强语法",
      },
      {
        name: "sass",
        href: "https://www.sass.hk/",
        icon: iconUrlPrefix + "sass.ico",
        title: "css增强语法",
      },
      {
        name: "tailwindcss",
        href: "https://www.tailwindcss.cn/",
        icon: iconUrlPrefix + "tailwindcss.png",
        title: "精美css语法库,可以通过简化css语句操作html并有更美观的效果",
      },
      {
        name: "Windi CSS",
        href: "https://windicss.org/",
        icon: iconUrlPrefix + "WindiCSS.svg",
        title: "精美css语法库,可以通过简化css语句操作html并有更美观的效果",
      },
      {
        name: "AnimateCss",
        href: "https://animate.style/",
        icon: iconUrlPrefix + "AnimateCss.ico",
        title: "简单css动画库",
      },
      {
        name: "css-doodle",
        href: "https://css-doodle.com/",
        icon: iconUrlPrefix + "css-doodle.png",
        title: "css粒子特效组件",
      },
      {
        name: "css练习",
        href: "https://github.com/bradtraversy/50projects50days?mode=light",
        icon: iconUrlPrefix + "github.png",
        title: "github开源的50个js操作dom和css的特效联系",
      },
      {
        name: "postcss",
        href: "https://postcss.org/",
        icon: iconUrlPrefix + "postcss.ico",
        title: "通过js配置css(我只在vue脚手架中见过)",
      },
      {
        name: "greensock",
        href: "https://github.com/greensock/GSAP",
        icon: iconUrlPrefix + "github.png",
        title: "js控制的css动画库",
      },
    ],
    图表: [
      {
        name: "Echarts",
        href: "https://echarts.apache.org/zh/index.html",
        icon: iconUrlPrefix + "Echarts.png",
        title: "我比较常用的图表库",
      },
      {
        name: "DataV",
        href: "http://datav.jiaminghi.com/",
        icon: iconUrlPrefix + "DataV.ico",
      },
      {
        name: "AntV",
        href: "https://antv.vision/zh",
        icon: iconUrlPrefix + "AntV.avif",
      },
      {
        name: "inMap",
        href: "http://inmap.talkingdata.com/#/index",
        icon: iconUrlPrefix + "inMap.ico",
      },
      {
        name: "d3",
        href: "https://github.com/d3/d3",
        icon: iconUrlPrefix + "github.png",
        title: "图表库",
      },
    ],
    微前端: [
      {
        name: "single-spa",
        href: "https://zh-hans.single-spa.js.org/",
        icon: iconUrlPrefix + "single-spa.ico",
        title: "比较传统的微前端解决方案",
      },
      {
        name: "qiankun",
        href: "https://qiankun.umijs.org/zh",
        icon: iconUrlPrefix + "qiankun.png",
        title: "比较全面的微前端解决方案",
      },
      {
        name: "micro-app",
        href: "https://micro-zoe.github.io/micro-app/",
        icon: iconUrlPrefix + "micro-app.ico",
        title: "微前端解决方案",
      },
    ],
    "3D": [
      {
        name: "webgl中文网",
        href: "http://www.hewebgl.com/",
        icon: iconUrlPrefix + "webgl中文网.ico",
        title: "用于web3D",
      },
      {
        name: "Three.js",
        href: "http://www.webgl3d.cn/",
        icon: iconUrlPrefix + "Three.js.ico",
        title: "3d框架",
      },
      {
        name: "CesiumGS",
        href: "https://github.com/CesiumGS/cesium",
        icon: iconUrlPrefix + "github.png",
        title: "3d框架",
      },
    ],
    移动端: [
      {
        name: "uView UI",
        href: "https://www.uviewui.com/",
        icon: iconUrlPrefix + "uView UI.avif",
        title:
          "全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水",
      },
      {
        name: "Frozen",
        href: "http://frozenui.github.io/",
        icon: iconUrlPrefix + "Frozen.ico",
        title: "移动端ui组件库",
      },
    ],
    一些插件: [
      {
        name: "vscode插件",
        href: "https://marketplace.visualstudio.com/",
        icon: iconUrlPrefix + "vscode插件.ico",
        title: "vscode插件",
      },
      {
        name: "nprogress",
        href: "https://madewith.cn/23",
        icon: iconUrlPrefix + "nprogress.avif",
        title: "加载进度条",
      },
      {
        name: "plupload文件上传插件",
        href: "https://www.plupload.com/",
        icon: iconUrlPrefix + "plupload文件上传插件.ico",
        title: "文件上传插件",
      },
      {
        name: "Aplayer",
        href: "https://aplayer.js.org/#/",
        icon: "",
        title: "音乐播放插件",
      },
      {
        name: "MetingJS",
        href: "https://github.com/metowolf/MetingJS",
        icon: iconUrlPrefix + "github.png",
        title: "音乐播放插件的附件",
      },
      {
        name: "swiper",
        href: "https://www.swiper.com.cn/",
        icon: iconUrlPrefix + "swiper.ico",
        title: "轮播图插件",
      },
      {
        name: "Aliplayer",
        href: "https://player.alicdn.com/aliplayer/index.html",
        icon: iconUrlPrefix + "Aliplayer.ico",
        title: "视频播放插件",
      },
      {
        name: "西瓜播放器",
        href: "https://v2.h5player.bytedance.com/",
        icon: iconUrlPrefix + "西瓜播放器.ico",
        title: "视频播放插件",
      },
      {
        name: "editormd",
        href: "https://pandao.github.io/editor.md/",
        icon: iconUrlPrefix + "editormd.ico",
        title: "富文本编辑器插件",
      },
      {
        name: "tinymce富文本编辑器",
        href: "http://tinymce.ax-z.cn/",
        icon: "",
        title: "富文本编辑器插件，上传图片可以转base64",
      },
      {
        name: "Quill富文本编辑器",
        href: "https://www.kancloud.cn/liuwave/quill/1409423",
        icon: iconUrlPrefix + "Quill富文本编辑器.ico",
        title: "富文本编辑器插件",
      },
      {
        name: "froala富文本编辑器",
        href: "https://froala.com/wysiwyg-editor/",
        icon: iconUrlPrefix + "froala富文本编辑器.png",
        title: "比较美观的一款富文本编辑器插件",
      },
      {
        name: "ckeditor富文本编辑器",
        href: "https://ckeditor.com/",
        icon: iconUrlPrefix + "ckeditor富文本编辑器.png",
        title: "富文本编辑器插件",
      },
      {
        name: "tiptap富文本编辑器",
        href: "https://tiptap.dev/",
        icon: iconUrlPrefix + "tiptap富文本编辑器.svg",
        title: "富文本编辑器插件",
      },
      {
        name: "qs",
        href: "https://github.com/ljharb/qs",
        icon: iconUrlPrefix + "github.png",
        title: "可以将url解析成对象，将对象解析成url",
      },
      {
        name: "path-to-regexp",
        href: "https://github.com/pillarjs/path-to-regexp",
        icon: iconUrlPrefix + "github.png",
        title:
          "可以将url解析成匹配规则，也可以解析url中的参数，匹配url和规则是否相等",
      },
      {
        name: "crypto-js",
        href: "https://github.com/brix/crypto-js",
        icon: iconUrlPrefix + "github.png",
        title: "主要用于对称加密和hash运算",
      },
      {
        name: "jsencrypt",
        href: "https://github.com/travist/jsencrypt",
        icon: iconUrlPrefix + "github.png",
        title: "主要用于RSA非对称加密",
      },
      {
        name: "FileSaver",
        href: "https://github.com/eligrey/FileSaver.js",
        icon: iconUrlPrefix + "github.png",
        title: "文件保存插件，可以下载文件到本地",
      },
      {
        name: "fabric",
        href: "http://fabricjs.com/",
        icon: iconUrlPrefix + "fabric.ico",
        title: "基于canvas的库，简化2D操作",
      },
      {
        name: "wowjs",
        href: "https://wowjs.uk/",
        icon: iconUrlPrefix + "wowjs.ico",
        title: "滚动加载特效插件",
      },
      {
        name: "particles",
        href: "https://github.com/marcbruederlin/particles.js",
        icon: iconUrlPrefix + "github.png",
        title: "粒子背景插件",
      },
    ],
    微信公众号: [
      {
        name: "微小宝",
        href: "https://www.wxb.com/",
        icon: iconUrlPrefix + "微小宝.ico",
        title: "",
      },
      {
        name: "微信公众号平台",
        href: "https://mp.weixin.qq.com/",
        icon: iconUrlPrefix + "微信.ico",
        title: "",
      },
    ],
    UI设计灵感: [
      {
        name: "Behance",
        href: "https://www.behance.net/",
        icon: iconUrlPrefix + "Behance.ico",
        title: "全球最大的综合性设计网站之一",
      },
      {
        name: "UICN用户体验设计平台",
        href: "https://www.ui.cn/",
        icon: iconUrlPrefix + "UICN用户体验设计平台.ico",
        title: "国内最大UI设计交流平台之一",
      },
      {
        name: "dribbble",
        href: "https://dribbble.com/pachytel",
        icon: iconUrlPrefix + "dribbble.ico",
        title: "非常不错的一个UI平台，就是国外的有点慢",
      },
      {
        name: "81-web",
        href: "https://81-web.com/",
        icon: iconUrlPrefix + "81-web.ico",
        title: "一款日本的webUI设计平台",
      },
      {
        name: "muuuuu",
        href: "https://muuuuu.org/",
        icon: iconUrlPrefix + "muuuuu.ico",
        title: "一款日本的webUI设计平台",
      },
      {
        name: "webdesignclip",
        href: "https://webdesignclip.com/",
        icon: iconUrlPrefix + "webdesignclip.ico",
        title: "日本酷站画廊",
      },
      {
        name: "Awwwards",
        href: "http://bm.straightline.jp/",
        icon: iconUrlPrefix + "Awwwards.ico",
        title: "最佳网页设计趋势（日本平台）",
      },
      {
        name: "Reeoo",
        href: "https://reeoo.com/",
        icon: iconUrlPrefix + "Reeoo.ico",
        title: "网页设计灵感和网站画廊",
      },
      {
        name: "SiteSee ",
        href: "https://sitesee.co/",
        icon: iconUrlPrefix + "SiteSee.ico",
        title: "收录漂亮的界面设计网站",
      },
    ],
    素材: [
      {
        name: "阿里巴巴矢量图标库",
        href: "https://www.iconfont.cn/",
        icon: iconUrlPrefix + "阿里巴巴矢量图标库.svg",
        title: "我心中最好的字体图标网站",
      },
      {
        name: "Icônes",
        href: "https://icones.js.org/",
        icon: iconUrlPrefix + "Icônes.svg",
        title: "免费图标、logo",
      },
      {
        name: "Icon Sets • Iconify",
        href: "https://icon-sets.iconify.design/",
        icon: iconUrlPrefix + "Iconify.png",
        title: "免费图标、logo",
      },
      {
        name: "dafont",
        href: "https://www.dafont.com/",
        icon: iconUrlPrefix + "dafont.ico",
        title: "免费字体",
      },
      {
        name: "webfont-generator",
        href: "https://www.fontsquirrel.com/tools/webfont-generator",
        icon: iconUrlPrefix + "webfont-generator.png",
        title: "将ttf字体转为其他html可用的字体",
      },
      {
        name: "Font Awesome",
        href: "http://www.fontawesome.com.cn/",
        icon: iconUrlPrefix + "Font Awesome.ico",
        title: "mavoneditor用的这一款,比较不错",
      },
      {
        name: "heroicons",
        href: "https://heroicons.com/",
        icon: iconUrlPrefix + "heroicons.png",
        title: "一款字体图标库",
      },
      {
        name: "fontspace",
        href: "https://www.fontspace.com/",
        icon: iconUrlPrefix + "fontspace字体.webp",
        title: "一款字体图标库",
      },
      {
        name: "undraw",
        href: "https://undraw.co/illustrations",
        icon: iconUrlPrefix + "undraw.ico",
        title: "免费可商用自定义颜色图表图标库",
      },
      {
        name: "heropatterns",
        href: "https://heropatterns.com/",
        icon: "",
        title: "一些背景文案",
      },
      {
        name: "站酷",
        href: "https://www.zcool.com.cn/",
        icon: iconUrlPrefix + "站酷.ico",
        title: "素材及UI设计网站",
      },
      {
        name: "站长素材",
        href: "https://sc.chinaz.com/",
        icon: iconUrlPrefix + "站长素材.ico",
        title: "各种素材",
      },
      {
        name: "花瓣网",
        href: "https://huaban.com/",
        icon: iconUrlPrefix + "花瓣网.png",
        title: "素材及UI设计网站",
      },
      {
        name: "平面设计师素材网",
        href: "https://www.1001freedownloads.com/",
        icon: iconUrlPrefix + "平面设计师素材网.ico",
      },
      {
        name: "懒人包PNG素材网",
        href: "https://www.stickpng.com/",
        icon: iconUrlPrefix + "懒人包PNG素材网.ico",
      },
      {
        name: "免费商用高清图库",
        href: "https://unsplash.com/",
        icon: iconUrlPrefix + "免费商用高清图库.png",
      },
      {
        name: "免费商用PSD设计图",
        href: "https://www.freepik.com/",
        icon: iconUrlPrefix + "免费商用PSD设计图.ico",
      },
      {
        name: "日本免费矢量图库网",
        href: "https://event-pre.com/",
        icon: iconUrlPrefix + "日本免费矢量图库网.ico",
      },
      {
        name: "PNG透明素材网",
        href: "https://www.cleanpng.com/",
        icon: iconUrlPrefix + "PNG透明素材网.ico",
      },
    ],
    图片处理: [
      {
        name: "像素大厨",
        href: "https://www.fancynode.com.cn/",
        icon: iconUrlPrefix + "像素大厨.png",
        title: "根据psd可以获取一些间距颜色字体大小等",
      },
      {
        name: "iloveimg",
        href: "https://www.iloveimg.com/zh-cn",
        icon: iconUrlPrefix + "iloveimg.png",
        title: "图片格式转换工具",
      },
      {
        name: "CODEPEN",
        href: "https://codepen.io/",
        icon: iconUrlPrefix + "CODEPEN.ico",
        title: "可以在上面写在线的html代码",
      },
      {
        name: "比特虫",
        href: "https://www.bitbug.net/",
        icon: iconUrlPrefix + "比特虫.ico",
        title: "图标ico生成工具",
      },
      {
        name: "微图",
        href: "https://devtool.tech/tiny-image",
        icon: iconUrlPrefix + "开发者武器库.svg",
        title: "可以将png、jpg格式图片压缩成webp格式",
      },
      {
        name: "路过图床",
        href: "https://imgtu.com/",
        icon: iconUrlPrefix + "路过图床.png",
        title: "可以存储图片在线引用",
      },
      {
        name: "聚合图床",
        href: "https://www.superbed.cn/",
        icon: iconUrlPrefix + "聚合图床.ico",
        title: "可以存储图片在线引用",
      },
      {
        name: "开发者武器库",
        href: "https://devtool.tech/",
        icon: iconUrlPrefix + "开发者武器库.svg",
        title: "包含微图等多种开发工具",
      },
      {
        name: "carbon生成图片",
        href: "https://carbon.now.sh/",
        icon: iconUrlPrefix + "carbon生成图片.ico",
        title: "可以生成代码背景的图片",
      },
      {
        name: "在线PS",
        href: "https://www.gaituya.com/ps/",
        icon: iconUrlPrefix + "在线PS.ico",
      },
      {
        name: "智能抠图",
        href: "https://www.isheji.com/cutout/workbench?img_id=60c9b7284a9a3",
        icon: iconUrlPrefix + "智能抠图.ico",
      },
      {
        name: "智能抠图网站",
        href: "https://www.remove.bg/zh",
        icon: iconUrlPrefix + "智能抠图网站.png",
      },
      {
        name: "tinypng",
        href: "https://tinypng.com/",
        title: "图片压缩网站",
        icon: iconUrlPrefix + "tinypng.ico",
      },
      {
        name: "convert2svg",
        href: "https://convert2svg.com/",
        title: "图片转为svg格式",
        icon: iconUrlPrefix + "convert2svg.ico",
      },
      {
        name: "慕客",
        href: "https://www.mockplus.cn/",
        title: "快速制作ui原型图",
        icon: iconUrlPrefix + "慕客.ico",
      },
    ],
    字体: [
      {
        name: "100font",
        href: "https://www.100font.com/",
        icon: iconUrlPrefix + "100font.ico",
        title: "免费商用字体",
      },
      {
        name: "站长字体",
        href: "https://font.chinaz.com/",
        icon: iconUrlPrefix + "站长字体.ico",
        title: "免费字体",
      },
      {
        name: "fontmin",
        href: "http://ecomfe.github.io/fontmin/#source",
        icon: iconUrlPrefix + "fontmin.ico",
        title: "字体集成压缩",
      },
      {
        name: "transfonter",
        href: "https://transfonter.org/#",
        icon: iconUrlPrefix + "transfonter.ico",
        title: "字体工具(暂时没研究功能)",
      },
    ],
    取色: [
      {
        name: "ColorSpace",
        href: "https://mycolor.space/",
        icon: iconUrlPrefix + "ColorSpace.png",
        title: "调色板",
      },
      {
        name: "gradihunt",
        href: "https://gradihunt.com/",
        icon: iconUrlPrefix + "gradihunt.avif",
        title: "渐变色",
      },
      {
        name: "gradients",
        href: "https://webgradients.com/?ref=iamxk",
        icon: iconUrlPrefix + "gradients.avif",
        title: "渐变色",
      },
      {
        name: "grabient",
        href: "https://www.grabient.com/",
        icon: iconUrlPrefix + "grabient.ico",
        title: "渐变色",
      },
      {
        name: "html取色器",
        href: "https://c.runoob.com/front-end/5449/",
        icon: iconUrlPrefix + "html取色器.ico",
        title: "菜鸟工具里的取色器",
      },
      {
        name: "中国色",
        href: "http://zhongguose.com/",
        icon: iconUrlPrefix + "中国色.ico",
        title: "中国传统颜色取色",
      },
      {
        name: "Color Hunt",
        href: "https://www.colorhunt.co/",
        icon: iconUrlPrefix + "Color Hunt.svg",
        title: "一款不错的颜色搭配取色",
      },
      {
        name: "Adobe Color",
        href: "https://color.adobe.com/zh/create/color-wheel",
        icon: iconUrlPrefix + "Adobe Color.ico",
        title: "权威的色彩网站之一",
      },
      {
        name: "WEBSAFECOLORS",
        href: "https://www.bootcss.com/p/websafecolors/",
        icon: "",
        title: "web安全色 ",
      },
    ],
    代码生成的一些样式: [
      {
        name: "Variant Form",
        href: "https://www.vform666.com/",
        icon: iconUrlPrefix + "VariantForm.ico",
        title: "地代码表单生成平台",
      },
      {
        name: "CodeFun",
        href: "https://code.fun/",
        icon: iconUrlPrefix + "CodeFun.ico",
        title: "代码生成平台，外包神器",
      },
      {
        name: "creative-backgrounds",
        href: "https://wweb.dev/resources/creative-backgrounds/",
        icon: iconUrlPrefix + "wweb.ico",
        title: "文案背景",
      },
      {
        name: "getwaves",
        href: "https://getwaves.io/",
        icon: iconUrlPrefix + "getwaves.png",
        title: "获取波浪效果的svg",
      },
      {
        name: "creative-hover-effects",
        href: "https://wweb.dev/resources/creative-hover-effects/",
        icon: iconUrlPrefix + "wweb.ico",
        title: "鼠标悬浮效果",
      },
      {
        name: "css-separator-generator",
        href: "https://wweb.dev/resources/css-separator-generator/",
        icon: iconUrlPrefix + "wweb.ico",
        title: "各种分割效果",
      },
      {
        name: "fancy-border-radius",
        href: "https://9elements.github.io/fancy-border-radius/",
        icon: iconUrlPrefix + "fancy-border-radius.png",
        title: "特殊圆角",
      },
      {
        name: "navnav",
        href: "http://navnav.co/",
        icon: iconUrlPrefix + "navnav.png",
        title: "各种特效现成的代码",
      },
      {
        name: "hype4",
        href: "https://hype4.academy/tools",
        icon: iconUrlPrefix + "hype4.png",
        title: "包含css卡片生成器等",
      },
    ],
    杂项: [
      {
        name: "猫云",
        href: "https://www.bootcdn.cn/",
        icon: iconUrlPrefix + "猫云.ico",
        title: "各种文件的cdn",
      },
      {
        name: "npm",
        href: "https://www.npmjs.com/",
        icon: iconUrlPrefix + "npm.png",
        title: "npm能下载的所有内容的文档",
      },
      {
        name: "fastclick",
        href: "https://github.com/ftlabs/fastclick",
        icon: iconUrlPrefix + "github.png",
        title: "一个用于优化的东西，不知道干啥的了",
      },
      {
        name: "pyscript",
        href: "https://pyscript.net/",
        icon: iconUrlPrefix + "pyscript.ico",
        title: "可以用html写python代码",
      },
    ],
  },
  后端开发: {
    工具: [
      {
        name: "Bitbucket",
        href: "https://bitbucket.org/",
        icon: iconUrlPrefix + "Bitbucket.avif",
        title: "私有仓库管理工具",
      },
      {
        name: "docker",
        href: "https://www.docker.com/",
        icon: iconUrlPrefix + "docker.webp",
        title: "",
      },
      {
        name: "docker版本",
        href: "https://docs.docker.com/desktop/release-notes/#442",
        icon: iconUrlPrefix + "docker版本.ico",
        title: "下载不同版本docker",
      },
      {
        name: "jsonplaceholder",
        href: "http://jsonplaceholder.typicode.com/",
        icon: iconUrlPrefix + "jsonplaceholder.ico",
        title: "JSON解析",
      },
    ],
    接口测试工具: [
      {
        name: "apipost",
        href: "https://www.apipost.cn/",
        icon: iconUrlPrefix + "apipost.ico",
        title: "国人开发的接口测试工具，支持接口在线查看",
      },
      {
        name: "Apifox",
        href: "https://www.apifox.cn/",
        icon: iconUrlPrefix + "Apifox.avif",
        title: "主要用于前端mock数据",
      },
      {
        name: "postman",
        href: "https://www.postman.com/",
        icon: iconUrlPrefix + "postman.png",
        title: "主要用于测试后端接口",
      },
    ],
    python: [
      {
        name: "flask",
        href: "https://dormousehole.readthedocs.io/en/latest/",
        icon: iconUrlPrefix + "flask.webp",
        title: "python的flask框架的文档",
      },
    ],
    node: [
      {
        name: "nodejs",
        href: "http://nodejs.cn/",
        icon: iconUrlPrefix + "nodejs.png",
        title: "nodejs官网",
      },
      {
        name: "CNode",
        href: "https://cnodejs.org/",
        icon: iconUrlPrefix + "CNode.png",
        title: "nodejs中文社区",
      },
      {
        name: "NestJS",
        href: "https://nestjs.bootcss.com/",
        icon: iconUrlPrefix + "NestJS.ico",
        title: "支持ts的node框架",
      },
      {
        name: "helmet",
        href: "https://github.com/helmetjs/helmet",
        icon: iconUrlPrefix + "github.png",
        title: "Help secure Express apps with various HTTP headers",
      },
      {
        name: "consola",
        href: "https://github.com/unjs/consola",
        icon: iconUrlPrefix + "github.png",
        title: "Elegant Console Logger for Node.js and Browser 🐨",
      },
      {
        name: "IdGenerator",
        href: "https://github.com/yitter/IdGenerator",
        icon: iconUrlPrefix + "github.png",
        title: "雪花算法生成代码",
      },
      {
        name: "sequelize",
        href: "https://github.com/sequelize/sequelize",
        icon: iconUrlPrefix + "github.png",
        title: "数据库操作框架",
      },
      {
        name: "cross-env",
        href: "https://github.com/kentcdodds/cross-env",
        icon: iconUrlPrefix + "github.png",
        title: "🔀 Cross platform setting of environment scripts",
      },
    ],
    go: [
      {
        name: "go学习资源",
        href: "https://github.com/talkgo/read",
        icon: iconUrlPrefix + "github.png",
        title: "github上的go学习资源",
      },
    ],
    java: [
      {
        name: "springboot",
        href: "https://spring.io/projects/spring-boot#learn",
        icon: iconUrlPrefix + "springboot.png",
      },
      {
        name: "maven",
        href: "https://maven.apache.org/",
        icon: iconUrlPrefix + "maven.ico",
        title: "java依赖管理的工具",
      },
      {
        name: "mvnrepository",
        href: "https://mvnrepository.com/",
        icon: iconUrlPrefix + "mvnrepository.ico",
        title: "里面有各种java开发可用的包",
      },
      {
        name: "mybatis",
        href: "https://mybatis.org/mybatis-3/",
        icon: "",
        title: "非常好用的java操作数据库的插件",
      },
      {
        name: "mybatis-plus",
        href: "https://baomidou.com/",
        icon: iconUrlPrefix + "mybatis-plus.ico",
        title: "mybatis的升级版",
      },
      {
        name: "ruoyi",
        href: "http://www.ruoyi.vip/",
        icon: iconUrlPrefix + "ruoyi.ico",
        title: "若依框架，和spring-security一样用于安全过滤",
      },
      {
        name: "aurora-blog",
        href: "https://github.com/blog-aurora/aurora-blog",
        icon: iconUrlPrefix + "github.png",
        title: "于Spring Cloud Alibaba的多人微服务博客项目",
      },
    ],
    数据库: [
      {
        name: "redis",
        href: "https://redis.io/",
        icon: iconUrlPrefix + "redis.png",
      },
    ],
    微服务: [
      {
        name: "nacos",
        href: "https://github.com/alibaba/nacos",
        icon: iconUrlPrefix + "github.png",
      },
    ],
    "CI/CD": [
      {
        name: "awesome-actions",
        href: "https://github.com/sdras/awesome-actions",
        icon: iconUrlPrefix + "github.png",
        title: "actions库，可以选择使用不同功能的action",
      },
      {
        name: "marketplace",
        href: "https://github.com/marketplace?type=actions",
        icon: iconUrlPrefix + "github.png",
        title: "actions库，可以选择使用不同功能的action",
      },
    ],
    插件或库: [
      {
        name: "ip2region",
        href: "https://github.com/lionsoul2014/ip2region",
        icon: iconUrlPrefix + "github.png",
        title: "可以用来根据ip查询所在地",
      },
      {
        name: "ipip",
        href: "https://www.ipip.net/ip.html",
        icon: iconUrlPrefix + "ipip.ico",
        title: "可以用来根据ip查询所在地",
      },
      {
        name: "中国行政区域数据",
        href: "https://github.com/airyland/china-area-data ",
        icon: iconUrlPrefix + "github.png",
        title: "中国行政区域数据",
      },
      {
        name: "中国行政区域数据",
        href: "https://github.com/wecatch/china_regions ",
        icon: iconUrlPrefix + "github.png",
        title: "中国行政区域数据",
      },
    ],
  },
  素材渠道: {
    导航站点: [
      {
        name: "兰客书签",
        href: "http://b.lackk.com/",
        icon: iconUrlPrefix + "兰客书签.png",
      },
      {
        name: "ABOUT导航",
        href: "https://www.aboutppt.com/",
        icon: iconUrlPrefix + "ABOUT导航.ico",
      },
      {
        name: "阿雷资源导航",
        href: "http://aleikeji.com/",
        icon: iconUrlPrefix + "阿雷资源导航.ico",
      },
    ],
    图片: [
      {
        name: "pixiv",
        href: "https://www.pixiv.net/",
        icon: iconUrlPrefix + "pixiv.ico",
      },
      {
        name: "wallhaven",
        href: "https://wallhaven.cc/",
        icon: iconUrlPrefix + "wallhaven.ico",
      },
      {
        name: "壁纸深渊",
        href: "https://wall.alphacoders.com/",
        icon: iconUrlPrefix + "壁纸深渊.png",
      },
      {
        name: "极简壁纸",
        href: "https://bz.zzzmh.cn/index",
        icon: iconUrlPrefix + "极简壁纸.png",
      },
      {
        name: "Takagi画廊",
        href: "https://view.lixingyong.com/",
        icon: "",
      },
      {
        name: "Pexels",
        href: "https://www.pexels.com/zh-cn/",
        icon: iconUrlPrefix + "Pexels.ico",
        title: "摄影图片视频资源",
      },
      {
        name: "pixabay",
        href: "https://pixabay.com/zh/",
        icon: iconUrlPrefix + "pixabay.png",
        title: "免费正版高清图片",
      },
      {
        name: "wallpaperscraft",
        href: "https://wallpaperscraft.com/",
        icon: iconUrlPrefix + "wallpaperscraft.ico",
        title: "图片资源",
      },
      {
        name: "wallpapermaiden",
        href: "https://www.wallpapermaiden.com/",
        icon: iconUrlPrefix + "wallpapermaiden.png",
        title: "图片资源",
      },
      {
        name: "anime-pictures",
        href: "https://anime-pictures.net/",
        icon: iconUrlPrefix + "anime-pictures.ico",
        title: "图片资源",
      },
      {
        name: "wallroom",
        href: "https://wallroom.io/",
        icon: iconUrlPrefix + "wallroom.ico",
        title: "图片资源",
      },
      {
        name: "iLikeWallpaper",
        href: "https://www.ilikewallpaper.net/",
        icon: iconUrlPrefix + "iLikeWallpaper.png",
        title: "图片资源",
      },
    ],
    动漫视频: [
      {
        name: "蜜柑计划",
        href: "https://mikanani.me/",
        icon: iconUrlPrefix + "蜜柑计划.ico",
      },
      {
        name: "动漫花园",
        href: "https://dmhy.org/",
        icon: iconUrlPrefix + "动漫花园.ico",
      },
      {
        name: "致美化",
        href: "https://zhutix.com/",
        icon: iconUrlPrefix + "致美化.avif",
      },
      {
        name: "潮点视频",
        href: "https://shipin520.com/",
        icon: iconUrlPrefix + "潮点视频.ico",
      },
    ],
    音乐: [
      {
        name: "MyFreeMP3",
        href: "http://tools.liumingye.cn/music/?page=searchPage",
        icon: iconUrlPrefix + "MyFreeMP3.ico",
      },
    ],
  },
  娱乐: {
    购物: [
      {
        name: "全球付",
        href: "https://www.globalcash.hk/v4/",
        icon: iconUrlPrefix + "全球付.ico",
      },
      {
        name: "PingPong Joy",
        href: "https://joy.pingpongx.com/index",
        icon: iconUrlPrefix + "PingPongJoy.ico",
      },
      {
        name: "淘宝",
        href: "https://www.taobao.com/",
        icon: iconUrlPrefix + "淘宝.png",
      },
      {
        name: "天猫",
        href: "https://www.tmall.com/",
        icon: iconUrlPrefix + "天猫.png",
      },
      {
        name: "京东",
        href: "https://www.jd.com/",
        icon: iconUrlPrefix + "京东.ico",
      },
    ],
    动漫: [
      {
        name: "兜兜动漫",
        href: "http://www.dododm.com/",
        icon: iconUrlPrefix + "兜兜动漫.png",
      },
      {
        name: "酷酷兔",
        href: "http://kukutu8.com/",
        icon: iconUrlPrefix + "酷酷兔.ico",
      },
      {
        name: "ppxdm",
        href: "http://www.ppxdm.com/index.php",
        icon: iconUrlPrefix + "ppxdm.ico",
      },
    ],
    影视: [
      {
        name: "豆瓣",
        href: "https://movie.douban.com/",
        icon: iconUrlPrefix + "豆瓣.ico",
      },
      {
        name: "youtube",
        href: "https://www.youtube.com/",
        icon: iconUrlPrefix + "youtube.ico",
      },
      {
        name: "奈非",
        href: "https://www.netflix.com/browse",
        icon: iconUrlPrefix + "奈非.ico",
      },
      {
        name: "cctv片库",
        href: "https://tv.cctv.com/yxg/index.shtml#datacid=dsj&datafl=&datadq=&fc=%E7%94%B5%E8%A7%86%E5%89%A7&datanf=&dataszm=",
        icon: iconUrlPrefix + "cctv片库.ico",
      },
      {
        name: "腾讯视频",
        href: "https://v.qq.com/",
        icon: iconUrlPrefix + "腾讯视频.ico",
      },
      {
        name: "爱奇艺",
        href: "https://www.iqiyi.com/",
        icon: iconUrlPrefix + "爱奇艺.avif",
      },
      {
        name: "低端影视",
        href: "https://ddys.tv/",
        icon: iconUrlPrefix + "低端影视.png",
      },
    ],
    漫画: [
      {
        name: "古风漫画网",
        href: "https://www.gufengmh9.com/",
        icon: iconUrlPrefix + "古风漫画网.ico",
      },
      {
        name: "动漫屋",
        href: "https://www.dm5.com/",
        icon: iconUrlPrefix + "动漫屋.ico",
      },
      {
        name: "漫客栈",
        href: "https://www.mkzhan.com/",
        icon: iconUrlPrefix + "漫客栈.ico",
      },
    ],
    小说: [
      {
        name: "读书导航",
        href: "http://www.zoudupai.com/",
        icon: "",
      },
      {
        name: "笔趣阁",
        href: "https://www.ivipxs.com/",
        icon: iconUrlPrefix + "笔趣阁.ico",
      },
      {
        name: "笔下文学",
        href: "https://www.94bxwx.com/",
        icon: iconUrlPrefix + "笔下文学.ico",
      },
      {
        name: "乐阅读",
        href: "https://www.27k.net/",
        icon: iconUrlPrefix + "乐阅读.ico",
      },
    ],
    游戏: [
      {
        name: "steam",
        href: "https://store.steampowered.com/",
        icon: iconUrlPrefix + "steam.ico",
      },
      {
        name: "NGA玩家社区",
        href: "https://bbs.nga.cn/",
        icon: iconUrlPrefix + "NGA玩家社区.ico",
      },
      {
        name: "灰机wiki",
        href: "https://www.huijiwiki.com/",
        icon: iconUrlPrefix + "灰机wiki.png",
      },
      {
        name: "心悦俱乐部",
        href: "https://xinyue.qq.com/beta/#/",
        icon: iconUrlPrefix + "心悦俱乐部.ico",
      },
      {
        name: "开黑啦",
        href: "https://www.kaiheila.cn/",
        icon: iconUrlPrefix + "开黑啦.ico",
      },
    ],
    ff14专题: [
      {
        name: "官网",
        href: "https://ff.web.sdo.com/web8/index.html#/index",
        icon: iconUrlPrefix + "ff14.ico",
      },
      {
        name: "活动中心",
        href: "https://actff1.web.sdo.com/Project/20181018ffactive/index.html",
        icon: iconUrlPrefix + "ff14.ico",
      },
      {
        name: "中文wiki",
        href: "https://ff14.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5",
        icon: iconUrlPrefix + "中文wiki.avif",
      },
      {
        name: "素素",
        href: "http://www.ffxiv.cn/v2/",
        icon: iconUrlPrefix + "素素.ico",
      },
      {
        name: "光之收藏家",
        href: "https://www.ffxivsc.cn/#/",
        icon: iconUrlPrefix + "光之收藏家.png",
      },
      {
        name: "飞艇坪",
        href: "https://www.ffxiv.co/",
        icon: iconUrlPrefix + "飞艇坪.ico",
      },
      {
        name: "狩猎发车",
        href: "https://ffxivhuntcn.com/#/train/index",
        icon: iconUrlPrefix + "狩猎发车.ico",
      },
      {
        name: "nga",
        href: "https://bbs.nga.cn/thread.php?fid=-362960&rand=853",
        icon: iconUrlPrefix + "NGA玩家社区.ico",
      },
      {
        name: "比价网站",
        href: "https://universalis.app/",
        icon: iconUrlPrefix + "比价网站.png",
      },
      {
        name: "竞猜中心",
        href: "https://actff1.web.sdo.com/20200908JingCai/index.html#/index",
        icon: iconUrlPrefix + "ff14.ico",
      },
      {
        name: "优雷卡触发",
        href: "https://ffxiv-eureka.com/",
        icon: iconUrlPrefix + "优雷卡触发.png",
      },
    ],
    杂项: [
      {
        name: "冷笑话",
        href: "https://icanhazdadjoke.com/",
        icon: iconUrlPrefix + "冷笑话.png",
      },
      {
        name: "每日一文",
        href: "https://meiriyiwen.com/",
        icon: iconUrlPrefix + "每日一文.ico",
      },
      {
        name: "MBTI测试",
        href: "https://mbti.xingyunn.com/pages/assessment/start/start?source=baidu_conv_weizhen02_jz03&bd_vid=11435498655063088087&timestamp=1666777905399#",
        icon: iconUrlPrefix + "MBTI测试.ico",
      },
      {
        name: "996ICU",
        href: "https://github.com/996icu/996.ICU",
        icon: iconUrlPrefix + "github.png",
      },
    ],
  },
  博客: {
    开源博客框架: [
      {
        name: "hexo",
        href: "https://hexo.io/zh-cn/",
        icon: iconUrlPrefix + "hexo.png",
      },
      {
        name: "halo",
        href: "https://halo.run/",
        icon: iconUrlPrefix + "halo.webp",
      },
    ],
    大佬博客: [
      {
        name: "阮一峰的个人网站",
        href: "http://www.ruanyifeng.com/home.html",
        icon: iconUrlPrefix + "阮一峰的个人网站.ico",
      },
      {
        name: "CSS-Inspiration",
        href: "https://chokcoco.github.io/CSS-Inspiration/#/",
        icon: iconUrlPrefix + "CSS-Inspiration.avif",
        title: "css灵感博客",
      },
      {
        name: "程序员成长指北",
        href: "http://www.inode.club/",
        icon: iconUrlPrefix + "程序员成长指北.ico",
      },
      {
        name: "大场面试每日一题",
        href: "https://q.shanyue.tech/",
        icon: iconUrlPrefix + "大场面试每日一题.ico",
      },
      {
        name: "峰华前端工程师",
        href: "https://zxuqian.cn/",
        icon: iconUrlPrefix + "峰华前端工程师.ico",
      },
      {
        name: "aiiyx",
        href: "https://aiiyx.cn/",
        icon: "",
      },
      {
        name: "楠格",
        href: "https://www.nange.cn/",
        icon: iconUrlPrefix + "楠格.png",
      },
      {
        name: "Amaya丶夜雨",
        href: "https://amayaliu.cn/",
        icon: iconUrlPrefix + "Amaya丶夜雨.avif",
      },
      {
        name: "Evan",
        href: "https://xugaoyi.com/",
        icon: "",
      },
      {
        name: "冴羽",
        href: "https://github.com/mqyqingfeng/Blog",
        icon: iconUrlPrefix + "github.png",
      },
    ],
  },
};

// 搜索框下面的图标列表
const topList = {};

let categoryTitleWrapper = document.querySelector(".category-title-wrapper");
let navWrapper = document.querySelector(".nav-wrapper");

// 根据导航列表创建节点
const createNavElement = () => {
  Object.keys(navList).forEach((category) => {
    // 创建大分类标题
    const categoryEl = document.createElement("div");
    categoryEl.classList.add("category");
    categoryEl.dataset.category = category;
    categoryEl.innerText = category;
    // 将大文类的元素添加到文档
    categoryTitleWrapper.appendChild(categoryEl);

    // 遍历每个大分类创建每个小分类
    Object.keys(navList[category]).forEach((subCategory, index) => {
      const subCategoryEl = document.createElement("div");
      subCategoryEl.classList.add("sub-category");
      subCategoryEl.dataset.category = category;
      subCategoryEl.dataset.subCategory = subCategory;
      subCategoryEl.style.backgroundColor = `${
        colorPalette[index % colorPalette.length].bg
      }c9`; // 颜色+透明度
      subCategoryEl.style.color =
        colorPalette[index % colorPalette.length].font;
      const titleEl = document.createElement("strong");
      titleEl.classList.add("sub-category-title");
      titleEl.innerText = subCategory;
      subCategoryEl.appendChild(titleEl);

      const navContainer = document.createElement("ul");
      navContainer.classList.add("nav-list");
      subCategoryEl.appendChild(navContainer);

      // 遍历每一个小分类创建导航链接
      navList[category][subCategory].forEach((nav) => {
        const li = document.createElement("li");
        li.className = "nav-item";
        li.innerHTML = `
        <a class='nav-link' target='_blank' href=${nav.href}>
          <div class='icon'>
            <img class='nav-icon' src=${defaultIconUrl} data-src=${
          nav.icon ? nav.icon : defaultIconUrl
        }></img> 
          </div>
          <div class='nav' title='${nav.title ? nav.title : "暂无备注"}'>
            ${nav.name}
          </div>
        </a>
        `;
        navContainer.appendChild(li);
      });

      // 将每一个小分类的元素添加到文档
      navWrapper.appendChild(subCategoryEl);
    });
  });
};
createNavElement();

// 图标懒加载
const lazyloadIcons = () => {
  const imgs = document.querySelectorAll(".nav-icon");

  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // 通过该属性判断元素是否出现在视口内
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        // 图片加载完成后解除监听
        imageObserver.unobserve(img);
      }
    });
  }, options);

  imgs.forEach((img) => {
    imageObserver.observe(img);
  });
};

document.addEventListener("DOMContentLoaded", lazyloadIcons);
