// 创建标签节点

// 调色板
const colorPalette = [
  { bg: '#5A7A7B', font: '#D2FAEB' },
  { bg: '#2A9392', font: '#FCE2C6' },
  { bg: '#5C376E', font: '#BDEADF' },
  { bg: '#012C50', font: '#B9F1DA' },
  { bg: '#244D57', font: '#FDB78F' },
  { bg: '#04444F', font: '#66E7F5' },
  { bg: '#237847', font: '#DFD988' },
  { bg: '#1D326D', font: '#D0D181' },
  { bg: '#2FB97B', font: '#FDF9F6' },
]

// 导航列表
const navList = {
  "学习": {
    '学习导航': [
      {name: 'chatgpt', href: 'https://chat.openai.com/chat', title: 'chatgpt'},
      {name: 'github', href: 'https://github.com/', title: '全球开源平台'},
      {name: 'gitee', href: 'https://gitee.com/', title: '国内开源平台'},
      {name: '掘金', href: 'https://juejin.cn/', title: '编程学习网站'},
      {name: 'csdn', href: 'https://www.csdn.net/', title: '编程学习网站'},
      {name: '知乎', href: 'https://www.zhihu.com/', title: '多方面信息网站'},
      {name: 'gitter', href: 'https://gitter.im/', title: '聊天平台,可以引入聊天插件到自己的页面中'},
      {name: '中国知网', href: 'https://www.cnki.net/', title: '查阅文献的网站'},
      {name: 'w3school', href: 'https://www.w3school.com.cn/', title: '编程学习网站'},
      {name: '菜鸟教程', href: 'https://www.runoob.com/', title: '编程学习网站'},
      {name: 'stackoverflow', href: 'https://stackoverflow.com/', title: '国外编程问题搜索平台'},
      {name: 'MDN', href: 'https://developer.mozilla.org/zh-CN/', title: '很多相关web开发文档(前端)'},
      {name: 'c语言中文网', href: 'http://c.biancheng.net/', title: '编程学习网站'},
      {name: '印记中文', href: 'https://docschina.org/', title: '编程资源信息网站'},
      {name: '博客园', href: 'https://www.cnblogs.com/', title: '编程学习网站'},
      {name: '力扣', href: 'https://leetcode-cn.com/', title: '算法学习网站'},
      {name: '简书', href: 'https://www.jianshu.com/', title: '编程学习网站'},
      {name: '中文开源社区', href: 'https://www.oschina.net/', title: '编程方面的中文开源社区'},
      {name: '清华大学 TUNA 协会', href: 'https://tuna.moe/', title: '里面有很多开源镜像和技术文章'},
      {name: 'awesome', href: 'https://github.com/sindresorhus/awesome', title: '代码学习资源'},
      {name: 'freeCodeCamp', href: 'https://github.com/freeCodeCamp/freeCodeCamp', title: '代码学习网站'},
    ],
    "学习相关软件工具": [
      {name: '语雀', href: 'https://www.yuque.com/dashboard', title: '阿里开源的笔记软件'},
      {name: '幕布', href: 'https://mubu.com/app', title: ''},
      {name: 'itellyou', href: 'https://next.itellyou.cn/', title: '各种电脑系统可供下载(重装系统专用)'},
      {name: '极简插件', href: 'https://chrome.zzzmh.cn/#/index', title: '里面很多chrome插件方便不会翻墙的用户'},
      {name: 'jetbrains系列激活', href: 'http://vrg123.com/', title: 'jetbrains系列软件的激活码'},
      {name: 'Squoosh在线图片压缩', href: 'https://squoosh.net/', title: '图片在线压缩'},
      {name: 'NCM格式在线转换', href: 'https://ncm.worthsee.com/', title: '音乐格式转换(可以将一些付费音乐的格式转为mp3免费用)'},
      {name: 'fiddler', href: 'https://www.telerik.com/fiddler', title: '网络抓包工具'},
      {name: 'sublime text', href: 'https://www.sublimetext.com/', title: '一款精美的文本编辑器'},
      {name: 'utools', href: 'http://www.u.tools/', title: '一款电脑软件，集成了很多方便使用的插件'},
      {name: 'ngrok内网穿透', href: 'https://ngrok.com/', title: '内网穿透工具'},
      {name: '花生壳', href: 'https://hsk.oray.com/', title: '内网穿透工具'},
      {name: 'PNG3D', href: 'https://png3d.com/', title: '将2D图片转换为3D图片'},
      {name: 'AirPortal空传', href: 'https://airportal.cn/', title: '网络文件传输工具'},
      {name: '视频转gif', href: 'https://www.toolnb.com/tools/videotogif.html', title: '将视频转为gif格式'},
      {name: '在线工具', href: 'https://tool.lu/', title: '一大堆花里胡哨的工具'},
      {name: '多功能图片转换器', href: 'https://renzhezhilu.gitee.io/webp2jpg-online/#', title: '图片在线编辑转换器'},
      {name: 'FastStone', href: 'https://www.faststone.org/', title: '图片查看工具'},
      {name: 'XnSoft', href: 'https://www.xnview.com/en/xnview/', title: '图片查看工具'},

    ],
    "网盘存储": [
      {name: '百度网盘', href: 'https://pan.baidu.com/'},
      {name: '阿里云盘', href: 'https://www.aliyundrive.com/'},
      {name: '腾讯微云', href: 'https://www.weiyun.com/'},
      {name: '华为云盘', href: 'https://cloud.huawei.com/'}
    ],
    "开放平台": [
      {name: '腾讯云', href: 'https://cloud.tencent.com/'},
      {name: '阿里云', href: 'https://www.aliyun.com/'},
      {name: '微信官方文档', href: 'https://developers.weixin.qq.com/doc/'},
      {name: '微信公众平台', href: 'https://mp.weixin.qq.com/'},
      {name: '微信支付', href: 'https://pay.weixin.qq.com/index.php/core/home'},
      {name: '支付宝开放平台', href: 'https://open.alipay.com/'},
      {name: '百度地图开放平台', href: 'https://lbsyun.baidu.com/'},
      {name: '百度AI开放平台', href: 'https://ai.baidu.com/'},
      {name: '谷歌开发者中心', href: 'https://chrome.google.com/webstore/devconsole/', title: '主要可以发布自己开发的插件到chrome插件商店中'},
    ],
    "求职": [
      {name: '牛客网', href: 'https://www.nowcoder.com/', title: '包含很多求职技巧和面试题'},
      {name: 'boss直聘', href: 'https://www.zhipin.com/'},
      {name: '前程无忧', href: 'https://www.51job.com/'},
      {name: '智联招聘', href: 'https://i.zhaopin.com/'},
      {name: '实习僧', href: 'https://www.shixiseng.com/'},
      {name: '天眼查', href: 'https://www.tianyancha.com/'},
      {name: '企查查', href: 'https://www.qcc.com/'},
      {name: '职友集', href: 'https://www.jobui.com/'},
      {name: '看准网', href: 'https://www.kanzhun.com/'}
    ],
    "梯子": [
      {name: '接码平台', href: 'https://sms-activate.org/', title: '虚拟电话号码购买'},
      {name: '斗罗云', href: 'https://www.douluoyun.lol/'},
      {name: '桔子云', href: 'https://juzi90.com/user#'},
      {name: '祢豆子', href: 'https://nezuko.cc/user'},
      {name: '萝莉云', href: 'https://xn--9kq340kxma.com/#/dashboard'},
      {name: '炭炭云', href: 'https://tantanyun.xyz/#/dashboard'},
      {name: '优云', href: 'https://youyun222.com/user'},
      {name: 'JAFI', href: 'https://www.jafiyun.space/user'},
      {name: 'STC-SERVER', href: 'https://pwjmtniso4.stcserver-cloud.com/user'},
    ],
    "外包接单": [
      {name: '码市', href: 'https://codemart.com/'},
      {name: '开源众包', href: 'https://zb.oschina.net/'},
      {name: '程序猿客栈', href: 'https://www.proginn.com/'},
      {name: '猪八戒', href: 'https://honghe.zbj.com/'},
      {name: '英选', href: 'https://www.yingxuan.io/'},
      {name: '开发邦', href: 'https://www.kaifabang.com/'},
      {name: '猿急送', href: 'https://www.yuanjisong.com/'},
      {name: '人人开发', href: 'http://rrkf.com/'},
    ],
    "3d引擎": [
      {name: '白鹭科技', href: 'https://www.egret.com/'},
      {name: '虚幻4引擎', href: 'https://www.unrealengine.com/zh-CN/'}
    ],
    "开源插件项目": [
      {name: '免费markdown编辑器', href: 'https://github.com/marktext/marktext/'},
      {name: '洛雪音乐PC', href: 'https://github.com/lyswhut/lx-music-desktop/'},
      {name: '洛雪音乐', href: 'https://github.com/lyswhut/lx-music-mobile/'},
      {name: '物美智能 - 开源生活物联网平台', href: 'https://wumei.live/'},
      {name: 'flash-waimai', href: 'https://microapp.gitee.io/flash-waimai/'},
      {name: 'Dapp-Learning', href: 'https://github.com/Dapp-Learning-DAO/Dapp-Learning'},
    ],
  },
  "web3": {
    "资料": [
      {name: '以太坊', href: 'https://ethereum.org/zh/'},
      {name: 'hyperledger-fabric', href: 'https://github.com/hyperledger/fabric', title: 'hyperledger-fabric'},
      {name: 'metamask', href: 'https://metamask.io/', title: '以太币钱包工具'},
      {name: 'Remix', href: 'https://remix.ethereum.org/', title: '在线开发智能合约'},
      {name: '大牛博客', href: 'https://www.dappuniversity.com/'},
      {name: '登链社区', href: 'https://learnblockchain.cn/'},
      {name: '区块链技术博客', href: 'https://me.tryblockchain.org/'},
      {name: 'Web3.js文档', href: 'https://learnblockchain.cn/docs/web3.js/getting-started.html'},
      {name: 'truffle文档', href: 'https://learnblockchain.cn/docs/truffle/'},
      {name: 'solidity文档', href: 'https://solidity-cn.readthedocs.io/zh/develop/'},
      {name: 'ganache', href: 'https://trufflesuite.com/ganache/'},
      {name: 'truffle', href: 'https://trufflesuite.com/'},
      {name: 'geth', href: 'https://geth.ethereum.org/'},
    ],
    "应用": [
      {name: '谜恋猫', href: 'https://www.cryptokitties.co/', title: '一款基于以太币的货品'},
      {name: '欧易', href: 'https://www.lybg1688.com/', title: '去中心化交易平台'},
      {name: 'filescan', href: 'https://www.filescan.io/scan', title: '分布式文件存储网站'},
      {name: 'IPFS', href: 'https://ipfs.tech/', title: '星际邮件系统官网'},
      {name: '上海数据交易所', href: 'https://www.chinadep.com/', title: '上海数据交易所'},
      {name: '星火链网', href: 'https://bitfactory.cn/', title: '星火链网'},
    ]
  },
  "AI": {
    "stable diffusion 专栏": [
      {name: 'civitai', href: 'https://civitai.com/', title: 'ai模型'},
      {name: 'openart', href: 'https://openart.ai/', title: 'ai模型'},
      {name: 'arthub', href: 'https://arthub.ai/', title: 'ai模型'},
      {name: 'dawnmark', href: 'https://ai.dawnmark.cn/', title: 'ai词汇'},
      {name: 'atoolbox', href: 'http://www.atoolbox.net/Tool.php?Id=1101', title: 'ai词汇'}
    ],
    "应用": [
      {name: 'openai', href: 'https://openai.com/', title: ''},
      {name: 'chatgpt', href: 'https://chat.openai.com/', title: ''},
      {name: 'phind', href: 'https://www.phind.com/', title: '编程搜索引擎'},
      {name: 'CIVITAI', href: 'https://civitai.com/', title: '人物模型'},
      {name: 'leiapix', href: 'https://convert.leiapix.com/', title: '图片转深度图'},
      {name: 'AIAS-AI', href: 'http://aias.top/', title: '一些算法代码'},
    ],
  },
  "前端开发": {
    "Vue相关": [
      {name: 'vue3', href: 'https://v3.cn.vuejs.org/'},
      {name: 'VueUse', href: 'https://vueuse.org/'},
      {name: 'vue2', href: 'https://cn.vuejs.org/'},
      {name: 'ElementUI', href: 'https://element.eleme.io/#/zh-CN', title: '饿了么开发的组件库，支持vue2'},
      {name: 'Element Plus', href: 'https://element-plus.gitee.io/zh-CN/', title: '饿了么开发的组件库，支持vue3'},
      {name: 'pinia', href: 'https://pinia.vuejs.org/', title: '状态管理工具，比较适用vue3，可以替代vuex使用'},
      {name: 'nuxtjs', href: 'https://nuxtjs.org/', title: '基于vue的ssr框架'},
      {name: 'nuxt中文网', href: 'https://www.nuxtjs.cn/', title: '基于vue的ssr框架'},
      {name: 'vue-element-admin', href: 'https://panjiachen.github.io/vue-element-admin-site/', title: '开源的vue后台管理系统模板,内容比较丰富'},
      {name: 'vue-element-admin', href: 'https://github.com/PanJiaChen/vue-admin-template', title: '开源的vue后台管理系统模板,差不多只有个大概框架，可扩展性强，我vue2项目用的多'},
      {name: 'vue-aplayer', href: 'https://aplayer.netlify.app/docs/options/#audio', title: '开源的音乐播放器'},
      {name: 'vue-video-palyer', href: 'https://github.com/surmon-china/vue-video-player', title: '开源的视频播放器'},
      {name: 'vue-puzzle-vcode', href: 'https://github.com/javaLuo/vue-puzzle-vcode', title: '开源的图片验证功能，包含文字、滑块、拼图等'},
      {name: 'vue-lazyload', href: 'https://github.com/hilongjw/vue-lazyload', title: '开源的懒加载功能'},
      {name: 'vue-virtual-scroller', href: 'https://github.com/Akryum/vue-virtual-scroller', title: '开源的虚拟列表，支持滚动懒加载'},
      {name: 'vue-virtual-scroll-list', href: 'https://github.com/tangbc/vue-virtual-scroll-list', title: '开源的虚拟列表，支持滚动懒加载'},
      {name: 'vue-awesome-swiper', href: 'https://github.com/surmon-china/vue-awesome-swiper', title: '开源的轮播图组件'},
      {name: 'vuex-persistedstate', href: 'https://github.com/robinvdvleuten/vuex-persistedstate', title: '基于vuex的持久化存储插件，可以在页面刷新前缓存vuex的数据'},
      {name: 'vue-countTo', href: 'https://github.com/PanJiaChen/vue-countTo', title: '开源的计数器模块'},
      {name: 'vue-qr', href: 'https://www.npmjs.com/package/vue-qr', title: '开源的二维码图片模块'},
      {name: 'vue-qrcode', href: 'https://github.com/Binaryify/vue-qr', title: '开源的二维码图片模块'},
      {name: 'vue-froala', href: 'https://github.com/froala/vue-froala-wysiwyg', title: '开源的富文本编辑器'},
      {name: 'Vant3', href: 'https://vant-contrib.gitee.io/vant/#/zh-CN', title: '轻量的移动端vue组件库'},
      {name: 'NutUI', href: 'https://nutui.jd.com/#/', title: '京东风格的轻量级移动端 Vue 组件库'},
      {name: 'dcloud', href: 'https://www.dcloud.io/', title: '包含uni-app、Hbuilder等'},
      {name: 'vue-admin-better', href: 'https://github.com/chuzhixin/vue-admin-better', title: 'vue3的开源后台管理系统模板'},
      {name: 'vue-vben-admin', href: 'https://github.com/vbenjs/vue-vben-admin', title: 'vue3的开源后台管理系统模板'},
      {name: 'fantastic-admin', href: 'https://hooray.gitee.io/fantastic-admin/', title: 'vue3的开源后台管理系统模板'},
      {name: 'arco.design', href: 'https://arco.design/', title: '字节开源后台管理系统模板'},
      {name: 'mini-vue', href: 'https://github.com/cuixiaorui/mini-vue', title: 'vue3源码讲解'},
      {name: 'Vue3练手项目', href: 'https://github.com/newbee-ltd/vue3-admin', title: 'github开源的vue3项目'},
      {name: 'mavoneditor富文本编辑器', href: 'http://www.mavoneditor.com/', title: '适用于vue2的富文本编辑器插件'},
      {name: 'md-editor-v3富文本编辑器', href: 'https://imzbf.github.io/md-editor-v3/index', title: '适用于vue3的富文本编辑器插件'},
      {name: 'Vue.Draggable', href: 'https://github.com/SortableJS/Vue.Draggable', title: '基于vue的布局内容拖拽插件'},
      {name: 'vue-draggable-resizable', href: 'https://github.com/mauricius/vue-draggable-resizable', title: '基于vue的布局内容拖拽插件'},
      {name: 'vue-grid-layout', href: 'https://github.com/jbaysolutions/vue-grid-layout', title: '基于vue的布局内容拖拽插件'},
      {name: 'vue-baidu-map', href: 'https://github.com/Dafrok/vue-baidu-map', title: '基于百度地图api的vue地图组件'},
      {name: 'vue-amap', href: 'https://github.com/ElemeFE/vue-amap', title: '基于高德地图api的vue地图组件'},
      {name: 'vue-i18n', href: 'https://vue-i18n.intlify.dev/', title: 'vue国际化插件'},
      {name: 'vue-socketio', href: 'https://github.com/MetinSeylan/Vue-Socket.io', title: 'vue-socketio'},
      {name: 'VuePress中文网', href: 'http://caibaojian.com/vuepress/', title: 'vue驱动的静态站点生成工具'},
      {name: 'Vuetify 3', href: 'https://vuetifyjs.com/en/getting-started/installation/', title: 'Vuetify 3'},
    ],
    "构建打包工具": [
      {name: 'Vite', href: 'https://vitejs.cn/', title: '前端构建工具,比较适合vue3'},
      {name: 'Webpack', href: 'https://webpack.docschina.org/', title: '前端打包构建工具'},
      {name: 'rollup', href: 'https://rollupjs.org/guide/zh/', title: '前端构建工具'},
    ],
    "React相关": [
      {name: 'react', href: 'https://react.docschina.org/'},
      {name: 'Ant Design', href: 'https://ant.design/docs/react/introduce-cn', title: '蚂蚁团队开发的基于react的组件库'},
    ],
    "其他js框架类库": [
      {name: 'typescript', href: 'https://www.tslang.cn/', title: 'js语法增强版'},
      {name: 'lodash', href: 'https://www.lodashjs.com/', title: '提供一些封装好的函数，比如防抖、节流 、深拷贝等'},
      {name: 'bootstrap', href: 'https://v3.bootcss.com/', title: '前端框架，我基本不怎么用的，但是使用人群还是挺多的'},
      {name: 'UmiJS', href: 'https://umijs.org/', title: '多功能的前端框架，详情看官网'},
      {name: 'Day.js', href: 'https://day.js.org/zh-CN/', title: 'js时间日期处理库'},
      {name: 'momentjs', href: 'http://momentjs.cn/', title: 'js时间日期处理库'},
      {name: 'date-fns', href: 'https://date-fns.org/', title: 'js时间日期处理库'},
      {name: 'Velocity', href: 'http://www.5imoban.net/view/Velocity/vuejs.html', title: 'js动画,在vue框架中也适用'},
      {name: 'mitt', href: 'https://github.com/developit/mitt', title: '时间总线库'},
      {name: 'webuploader', href: 'https://github.com/fex-team/webuploader', title: 'webuploader'},
    ],
    "css": [
      {name: 'CSS-TRICKS', href: 'https://css-tricks.com/', title: '国外CSS学习网站'},
      {name: 'iCSS', href: 'https://github.com/chokcoco/iCSS', title: 'CSS大佬的开源文章'},
      {name: 'less', href: 'https://less.bootcss.com/', title: 'css增强语法'},
      {name: 'stylus', href: 'https://www.stylus-lang.cn/', title: 'css增强语法'},
      {name: 'sass', href: 'https://www.sass.hk/', title: 'css增强语法'},
      {name: 'tailwindcss', href: 'https://www.tailwindcss.cn/', title: '精美css语法库,可以通过简化css语句操作html并有更美观的效果'},
      {name: 'Windi CSS', href: 'https://windicss.org/', title: '精美css语法库,可以通过简化css语句操作html并有更美观的效果'},
      {name: 'Animate.css', href: 'https://animate.style/', title: '简单css动画库'},
      {name: 'css-doodle', href: 'https://css-doodle.com/', title: 'css粒子特效组件'},
      {name: 'css练习', href: 'https://github.com/bradtraversy/50projects50days?mode=light', title: 'github开源的50个js操作dom和css的特效联系'},
      {name: 'postcss', href: 'https://postcss.org/', title: '通过js配置css(我只在vue脚手架中见过)'},
      {name: 'greensock', href: 'https://github.com/greensock/GSAP', title: 'js控制的css动画库'},
    ],
    "图表": [
      {name: 'Echarts', href: 'https://echarts.apache.org/zh/index.html', title: '我比较常用的图表库'},
      {name: 'DataV', href: 'http://datav.jiaminghi.com/'},
      {name: 'AntV', href: 'https://antv.vision/zh'},
      {name: 'inMap', href: 'http://inmap.talkingdata.com/#/index'},
      {name: 'd3', href: 'https://github.com/d3/d3', title: '图表库'},
    ],
    "微前端": [
      {name: 'single-spa', href: 'https://zh-hans.single-spa.js.org/', title: '比较传统的微前端解决方案'},
      {name: 'qiankun', href: 'https://qiankun.umijs.org/zh', title: '比较全面的微前端解决方案'},
      {name: 'micro-app', href: 'https://micro-zoe.github.io/micro-app/', title: '微前端解决方案'},
    ],
    "3D": [
      {name: 'webgl中文网', href: 'http://www.hewebgl.com/', title: '用于web3D'},
      {name: 'Three.js', href: 'http://www.webgl3d.cn/', title: '3d框架'},
      {name: 'CesiumGS', href: 'https://github.com/CesiumGS/cesium', title: '3d框架'},
    ],
    "移动端": [
      {name: 'uView UI', href: 'https://www.uviewui.com/', title: '全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水'},
      {name: 'Frozen移动端UI库', href: 'http://frozenui.github.io/', title: '移动端ui组件库'},
    ],
    "一些插件": [
      {name: 'vscode插件', href: 'https://marketplace.visualstudio.com/', title: 'vscode插件'},
      {name: 'nprogress', href: 'https://madewith.cn/23', title: '加载进度条'},
      {name: 'plupload文件上传插件', href: 'https://www.plupload.com/', title: '文件上传插件'},
      {name: 'Aplayer', href: 'https://aplayer.js.org/#/', title: '音乐播放插件'},
      {name: 'MetingJS', href: 'https://github.com/metowolf/MetingJS', title: '音乐播放插件的附件'},
      {name: 'swiper', href: 'https://www.swiper.com.cn/', title: '轮播图插件'},
      {name: 'Aliplayer', href: 'https://player.alicdn.com/aliplayer/index.html', title: '音乐播放插件'},
      {name: '西瓜播放器', href: 'https://v2.h5player.bytedance.com/', title: '视频播放插件'},
      {name: '在线markdown编辑器', href: 'https://pandao.github.io/editor.md/', title: '富文本编辑器插件'},
      {name: 'tinymce富文本编辑器', href: 'http://tinymce.ax-z.cn/', title: '富文本编辑器插件，上传图片可以转base64'},
      {name: 'Quill富文本编辑器', href: 'https://www.kancloud.cn/liuwave/quill/1409423', title: '富文本编辑器插件'},
      {name: 'froala富文本编辑器', href: 'https://froala.com/wysiwyg-editor/', title: '比较美观的一款富文本编辑器插件'},
      {name: 'summernote富文本编辑器', href: 'https://www.summernote.cn/', title: '富文本编辑器插件'},
      {name: 'ckeditor富文本编辑器', href: 'https://ckeditor.com/', title: '富文本编辑器插件'},
      {name: 'tiptap富文本编辑器', href: 'https://tiptap.dev/', title: '富文本编辑器插件'},
      {name: 'qs', href: 'https://github.com/ljharb/qs', title: '可以将url解析成对象，将对象解析成url'},
      {name: 'path-to-regexp', href: 'https://github.com/pillarjs/path-to-regexp', title: '可以将url解析成匹配规则，也可以解析url中的参数，匹配url和规则是否相等'},
      {name: 'crypto-js', href: 'https://github.com/brix/crypto-js', title: '主要用于对称加密和hash运算'},
      {name: 'jsencrypt', href: 'https://github.com/travist/jsencrypt', title: '主要用于RSA非对称加密'},
      {name: 'FileSaver', href: 'https://github.com/eligrey/FileSaver.js', title: '文件保存插件，可以下载文件到本地'},
      {name: 'fabric', href: 'http://fabricjs.com/', title: '基于canvas的库，简化2D操作'},
      {name: 'fontmin', href: 'http://ecomfe.github.io/fontmin/#source', title: '字体集成压缩'},
    ],
    "微信公众号": [
      {name: '微小宝', href: 'https://www.wxb.com/', title: ''},
      {name: '微信公众号平台', href: 'https://mp.weixin.qq.com/', title: ''},
    ],
    "UI设计灵感": [
      {name: 'Behance', href: 'https://www.behance.net/', title: '全球最大的综合性设计网站之一'},
      {name: 'UICN用户体验设计平台', href: 'https://www.ui.cn/', title: '国内最大UI设计交流平台之一'},
      {name: 'dribbble', href: 'https://dribbble.com/pachytel', title: '非常不错的一个UI平台，就是国外的有点慢'},
      {name: '81-web', href: 'https://81-web.com/', title: '一款日本的webUI设计平台'},
      {name: 'muuuuu', href: 'https://muuuuu.org/', title: '一款日本的webUI设计平台'},
      {name: 'webdesignclip', href: 'https://webdesignclip.com/', title: '日本酷站画廊'},
      {name: 'Awwwards', href: 'http://bm.straightline.jp/', title: '最佳网页设计趋势（日本平台）'},
      {name: 'Reeoo', href: 'https://reeoo.com/', title: '网页设计灵感和网站画廊'},
      {name: 'SiteSee ', href: 'https://sitesee.co/', title: '收录漂亮的界面设计网站'},
    ],
    "素材": [
      {name: '阿里巴巴矢量图标库', href: 'https://www.iconfont.cn/', title: '我心中最好的字体图标网站'},
      {name: 'Icônes', href: 'https://icones.js.org/', title: '免费图标、logo'},
      {name: 'Icon Sets • Iconify', href: 'https://icon-sets.iconify.design/', title: '免费图标、logo'},
      {name: 'dafont', href: 'https://www.dafont.com/', title: '免费字体'},
      {name: 'webfont-generator', href: 'https://www.fontsquirrel.com/tools/webfont-generator', title: '将ttf字体转为其他html可用的字体'},
      {name: 'Font Awesome', href: 'http://www.fontawesome.com.cn/', title: 'mavoneditor用的这一款,比较不错'},
      {name: 'heroicons-icon', href: 'https://heroicons.com/', title: '一款字体图标库'},
      {name: 'fontspace字体', href: 'https://www.fontspace.com/', title: '一款字体图标库'},
      {name: 'undraw', href: 'https://undraw.co/illustrations', title: '免费可商用自定义颜色图表图标库'},
      {name: 'heropatterns', href: 'https://heropatterns.com/', title: '一些背景文案'},
      {name: '站酷', href: 'https://www.zcool.com.cn/', title: '素材及UI设计网站'},
      {name: '站长素材', href: 'https://sc.chinaz.com/', title: '各种素材'},
      {name: '花瓣网', href: 'https://huaban.com/', title: '素材及UI设计网站'},
      {name: '平面设计师素材网', href: 'https://www.1001freedownloads.com/'},
      {name: '懒人包PNG素材网', href: 'https://www.stickpng.com/'},
      {name: '免费商用高清图库', href: 'https://unsplash.com/'},
      {name: '免费商用PSD设计图', href: 'https://www.freepik.com/'},
      {name: '免费高清原图', href: 'https://pixabay.com'},
      {name: '日本免费矢量图库网', href: 'https://event-pre.com/'},
      {name: '创意人物插画', href: 'https://undraw.co/illustrations'},
      {name: 'PNG透明素材网', href: 'https://www.cleanpng.com/'},
      {name: '免费素材图片', href: 'https://www.pexels.com/zh-cn/'},
    ],
    "常用工具": [
      {name: '像素大师', href: 'https://www.fancynode.com.cn/', title: '根据psd可以获取一些间距颜色字体大小等'},
      {name: 'iloveimg', href: 'https://www.iloveimg.com/zh-cn', title: '图片格式转换工具'},
      {name: 'CODEPEN', href: 'https://codepen.io/', title: '可以在上面写在线的html代码'},
      {name: '比特虫', href: 'https://www.bitbug.net/', title: '图标ico生成工具'},
      {name: '微图', href: 'https://devtool.tech/tiny-image', title: '可以将png、jpg格式图片压缩成webp格式'},
      {name: '路过图床', href: 'https://imgtu.com/', title: '可以存储图片在线引用'},
      {name: '聚合图床', href: 'https://www.superbed.cn/', title: '可以存储图片在线引用'},
      {name: '开发者武器库', href: 'https://devtool.tech/', title: '包含微图等多种开发工具'},
      {name: 'carbon生成图片', href: 'https://carbon.now.sh/', title: '可以生成代码背景的图片'},
      {name: '在线PS', href: 'https://www.gaituya.com/ps/'},
      {name: '智能抠图', href: 'https://www.isheji.com/cutout/workbench?img_id=60c9b7284a9a3'},
      {name: '智能抠图网站', href: 'https://www.remove.bg/zh'},
      {name: 'tinypng', href: 'https://tinypng.com/', title: '图片压缩网站'},
      {name: 'convert2svg', href: 'https://convert2svg.com/', title: '图片转为svg格式'},
      {name: 'transfonter', href: 'https://transfonter.org/#', title: '字体工具(暂时没研究功能)'},
      {name: '慕客', href: 'https://www.mockplus.cn/', title: '快速制作ui原型图'},
    ],
    "取色": [
      {name: 'ColorSpace', href: 'https://mycolor.space/', title: '调色板'},
      {name: 'gradihunt', href: 'https://gradihunt.com/', title: '渐变色'},
      {name: 'gradients', href: 'https://webgradients.com/?ref=iamxk', title: '渐变色'},
      {name: 'grabient', href: 'https://www.grabient.com/', title: '渐变色'},
      {name: 'html取色器', href: 'https://c.runoob.com/front-end/5449/', title: '菜鸟工具里的取色器'},
      {name: '中国色', href: 'http://zhongguose.com/', title: '中国传统颜色取色'},
      {name: 'Color Hunt', href: 'https://www.colorhunt.co/', title: '一款不错的颜色搭配取色'},
      {name: 'Adobe Color', href: 'https://color.adobe.com/zh/create/color-wheel', title: '权威的色彩网站之一'},
      {name: 'WEBSAFECOLORS', href: 'https://www.bootcss.com/p/websafecolors/', title: 'web安全色 '},
    ],
    "代码生成的一些样式": [
      {name: 'Variant Form', href: 'https://www.vform666.com/', title: '地代码表单生成平台'},
      {name: 'CodeFun', href: 'https://code.fun/', title: '代码生成平台，外包神器'},
      {name: 'creative-backgrounds', href: 'https://wweb.dev/resources/creative-backgrounds/', title: '文案背景'},
      {name: 'getwaves', href: 'https://getwaves.io/', title: '获取波浪效果的svg'},
      {name: 'creative-hover-effects', href: 'https://wweb.dev/resources/creative-hover-effects/', title: '鼠标悬浮效果'},
      {name: 'css-separator-generator', href: 'https://wweb.dev/resources/css-separator-generator/', title: '各种分割效果'},
      {name: 'fancy-border-radius', href: 'https://9elements.github.io/fancy-border-radius/', title: '特殊圆角'},
      {name: 'navnav', href: 'http://navnav.co/', title: '各种特效现成的代码'},
      {name: 'hype4', href: 'https://hype4.academy/tools', title: '包含css卡片生成器等'},
    ],
    "杂项": [
      {name: '猫云', href: 'https://www.bootcdn.cn/', title: '各种文件的cdn'},
      {name: 'npm', href: 'https://www.npmjs.com/', title: 'npm能下载的所有内容的文档'},
      {name: 'fastclick', href: 'https://github.com/ftlabs/fastclick', title: '一个用于优化的东西，不知道干啥的了'},
      {name: 'pyscript', href: 'https://pyscript.net/', title: '可以用html写python代码'},
    ],
  },
  "后端开发": {
    "工具": [
      {name: 'Bitbucket', href: 'https://bitbucket.org/', title: '私有仓库管理工具'},
      {name: 'docker官网', href: 'https://www.docker.com/', title: ''}
    ],
    "接口测试工具": [
      {name: 'apipost', href: 'https://www.apipost.cn/', title: '国人开发的接口测试工具，支持接口在线查看'},
      {name: 'Apifox', href: 'https://www.apifox.cn/', title: '主要用于前端mock数据'},
      {name: 'postman', href: 'https://www.postman.com/', title: '主要用于测试后端接口'},
    ],
    "python": [
      {name: 'flask文档', href: 'https://dormousehole.readthedocs.io/en/latest/', title: 'python的flask框架的文档'},
    ],
    "node": [
      {name: 'nodejs', href: 'http://nodejs.cn/', title: 'nodejs官网'},
      {name: 'CNode', href: 'https://cnodejs.org/', title: 'nodejs中文社区'},
      {name: 'NestJS', href: 'https://nestjs.bootcss.com/', title: '支持ts的node框架'},
      {name: 'helmet', href: 'https://github.com/helmetjs/helmet', title: 'Help secure Express apps with various HTTP headers'},
      {name: 'consola', href: 'https://github.com/unjs/consola', title: 'Elegant Console Logger for Node.js and Browser 🐨'},
      {name: 'IdGenerator', href: 'https://github.com/yitter/IdGenerator', title: '雪花算法生成代码'},
      {name: 'sequelize', href: 'https://github.com/sequelize/sequelize', title: '数据库操作框架'},
      {name: 'cross-env', href: 'https://github.com/kentcdodds/cross-env', title: '🔀 Cross platform setting of environment scripts'},
    ],
    "go": [
      {name: 'go学习资源', href: 'https://github.com/talkgo/read', title: 'github上的go学习资源'},
    ],
    "java": [
      {name: 'springboot文档', href: 'https://spring.io/projects/spring-boot#learn'},
      {name: 'maven文档', href: 'https://maven.apache.org/', title: 'java依赖管理的工具'},
      {name: 'mvnrepository', href: 'https://mvnrepository.com/', title: '里面有各种java开发可用的包'},
      {name: 'mybatis', href: 'https://mybatis.org/mybatis-3/', title: '非常好用的java操作数据库的插件'},
      {name: 'mybatis-plus', href: 'https://baomidou.com/', title: 'mybatis的升级版'},
      {name: 'ruoyi', href: 'http://www.ruoyi.vip/', title: '若依框架，和spring-security一样用于安全过滤'},
    ],
    "数据库": [
      {name: 'redis', href: 'https://redis.io/'},
    ],
    "微服务": [
      {name: 'nacos', href: 'https://github.com/alibaba/nacos'},
    ],
    "插件或库": [
    {name: 'ip2region', href: 'https://github.com/lionsoul2014/ip2region', title: '可以用来根据ip查询所在地'},
    {name: 'ipip', href: 'https://www.ipip.net/ip.html ', title: '可以用来根据ip查询所在地'},
    {name: '中国行政区域数据', href: 'https://github.com/airyland/china-area-data ', title: '中国行政区域数据'},
    {name: '中国行政区域数据', href: 'https://github.com/wecatch/china_regions ', title: '中国行政区域数据'},
    ]
  },
  "素材渠道": {
    "导航站点": [
      {name: '兰客书签', href: 'http://b.lackk.com/'},
      {name: 'ABOUT导航', href: 'https://www.aboutppt.com/'},
      {name: '阿雷资源导航', href: 'http://aleikeji.com/'},
    ],
    "图片": [
      {name: 'wallhaven', href: 'https://wallhaven.cc/'},
      {name: '壁纸深渊', href: 'https://wall.alphacoders.com/'},
      {name: '极简壁纸', href: 'https://bz.zzzmh.cn/index'},
      {name: 'Takagi画廊', href: 'https://view.lixingyong.com/'},
      {name: 'Pexels', href: 'https://www.pexels.com/zh-cn/', title: '摄影图片视频资源'},
      {name: 'pixabay', href: 'https://pixabay.com/zh/', title: '免费正版高清图片'},
      {name: 'wallpaperscraft', href: 'https://wallpaperscraft.com/', title: '图片资源'},
      {name: 'wallpapermaiden', href: 'https://www.wallpapermaiden.com/', title: '图片资源'},
      {name: 'anime-pictures', href: 'https://anime-pictures.net/', title: '图片资源'},
      {name: 'wallroom', href: 'https://wallroom.io/', title: '图片资源'},
      {name: 'vmgirls', href: 'https://www.vmgirls.com/'},
    ],
    "动漫": [
      {name: '蜜柑计划', href: 'https://mikanani.me/'},
      {name: '动漫花园', href: 'https://dmhy.org/'},
      {name: '致美化', href: 'https://zhutix.com/'},
      {name: '潮点视频', href: 'https://shipin520.com/'},
    ],
    "音乐": [
      {name: 'MyFreeMP3', href: 'http://tools.liumingye.cn/music/?page=searchPage'},
    ],
    "ppt": [
      {name: '芒果派ppt模板', href: 'http://www.686ppt.com/'},
    ]
  },
  "娱乐": {
    "购物": [
      {name: '全球付', href: 'https://www.globalcash.hk/v4/'},
      {name: 'PingPong Joy', href: 'https://joy.pingpongx.com/index'},
      {name: '淘宝', href: 'https://www.taobao.com/'},
      {name: '天猫', href: 'https://www.tmall.com/'},
      {name: '京东', href: 'https://www.jd.com/'},
    ],
    "动漫": [
      {name: '兜兜动漫', href: 'http://www.dododm.com/'},
      {name: '酷酷兔', href: 'http://kukutu8.com/'},
      {name: '233动漫网', href: 'https://www.dm233.cc/'},
      {name: '奇米奇米', href: 'http://www.qimiqimi.co/'},
      {name: 'ppxdm', href: 'http://www.ppxdm.com/index.php'},
    ],
    "影视": [
      {name: '豆瓣', href: 'https://movie.douban.com/'},
      {name: 'youtube', href: 'https://www.youtube.com/'},
      {name: '奈非', href: 'https://www.netflix.com/browse'},
      {name: 'cctv片库', href: 'https://tv.cctv.com/yxg/index.shtml#datacid=dsj&datafl=&datadq=&fc=%E7%94%B5%E8%A7%86%E5%89%A7&datanf=&dataszm='},
      {name: '腾讯视频', href: 'https://v.qq.com/'},
      {name: '爱奇艺', href: 'https://www.iqiyi.com/'},
      {name: '4k影视', href: 'https://www.4kvm.com/'},
      {name: '低端影视', href: 'https://ddys.tv/'},
      {name: '片库', href: 'https://www.btnull.re/'},
    ],
    "漫画": [
      {name: '古风漫画网', href: 'https://www.gufengmh9.com/'},
      {name: '百年漫画', href: 'https://bnman.net/'},
      {name: '妖气漫画', href: 'https://www.17man.cc/'},
      {name: '奇漫屋', href: 'http://www.qiman56.com/'},
    ],
    "小说": [
      {name: '读书导航', href: 'http://www.zoudupai.com/'},
      {name: '笔趣阁', href: 'https://www.ivipxs.com/'},
      {name: '乐阅读', href: 'https://www.27k.net/'}
    ],
    "游戏": [
      {name: 'steam', href: 'https://store.steampowered.com/'},
      {name: 'NGA玩家社区', href: 'https://bbs.nga.cn/'},
      {name: '灰机wiki', href: 'https://www.huijiwiki.com/'},
      {name: '开黑啦', href: 'https://www.kaiheila.cn/'},
    ],
    "ff14专题": [
      {name: '官网', href: 'https://ff.web.sdo.com/web8/index.html#/index'},
      {name: '活动中心', href: 'https://actff1.web.sdo.com/Project/20181018ffactive/index.html'},
      {name: '中文wiki', href: 'https://ff14.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5'},
      {name: '素素', href: 'http://www.ffxiv.cn/v2/'},
      {name: '光之收藏家', href: 'https://www.ffxivsc.cn/#/'},
      {name: '飞艇坪', href: 'https://www.ffxiv.co/'},
      {name: '狩猎发车', href: 'https://ffxivhuntcn.com/#/train/index'},
      {name: 'nga', href: 'https://bbs.nga.cn/thread.php?fid=-362960&rand=853'},
      {name: '比价网站', href: 'https://universalis.app/'},
      {name: '竞猜中心', href: 'https://actff1.web.sdo.com/20200908JingCai/index.html#/index'},
      {name: '优雷卡触发', href: 'https://ffxiv-eureka.com/'},
    ],
    "杂项": [
      {name: '冷笑话', href: 'https://icanhazdadjoke.com/'},
      {name: '每日一文', href: 'https://meiriyiwen.com/'},
      {name: 'MBTI测试', href: 'https://mbti.xingyunn.com/pages/assessment/start/start?source=baidu_conv_weizhen02_jz03&bd_vid=11435498655063088087&timestamp=1666777905399#'},
      {name: '996问题', href: 'https://github.com/996icu/996.ICU'},
    ],
  },
  "博客": {
    "开源博客框架": [
      {name: 'hexo', href: 'https://hexo.io/zh-cn/'},
      {name: 'halo', href: 'https://halo.run/'},
    ],
    "大佬博客": [
      {name: '阮一峰的个人网站', href: 'http://www.ruanyifeng.com/home.html'},
      {name: 'CSS-Inspiration', href: 'https://chokcoco.github.io/CSS-Inspiration/#/', title: 'css灵感博客'},
      {name: '程序员成长指北', href: 'http://www.inode.club/'},
      {name: '大场面试每日一题', href: 'https://q.shanyue.tech/'},
      {name: '峰华前端工程师', href: 'https://zxuqian.cn/'},
      {name: '木风可可', href: 'http://www.sorrowfeng.top/'},
      {name: 'aiiyx', href: 'https://aiiyx.cn/'},
      {name: '楠格', href: 'https://www.nange.cn/'},
      {name: 'Amaya丶夜雨', href: 'https://amayaliu.cn/'},
      {name: 'Evan', href: 'https://xugaoyi.com/'}
    ]
  }
}


let categoryTitleWrapper = document.querySelector('.category-title-wrapper')
let navWrapper = document.querySelector('.nav-wrapper')

// 根据导航列表创建节点
const createNavElement = () => {

  Object.keys(navList).forEach(category => {
    
    // 创建大分类标题
    const categoryEl = document.createElement('div')
    categoryEl.classList.add('category')
    categoryEl.dataset.category = category
    categoryEl.innerText = category
    // 将大文类的元素添加到文档
    categoryTitleWrapper.appendChild(categoryEl)

    // 遍历每个大分类创建每个小分类
    Object.keys(navList[category]).forEach((subCategory, index) => {
      const subCategoryEl = document.createElement('div')
      subCategoryEl.classList.add('sub-category')
      subCategoryEl.dataset.category = category
      subCategoryEl.dataset.subCategory = subCategory
      subCategoryEl.style.backgroundColor = colorPalette[index % colorPalette.length].bg
      subCategoryEl.style.color = colorPalette[index % colorPalette.length].font
      const titleEl = document.createElement('strong')
      titleEl.classList.add('sub-category-title')
      titleEl.innerText = subCategory
      subCategoryEl.appendChild(titleEl)

      const navContainer = document.createElement('ul')
      navContainer.classList.add('nav-list')
      subCategoryEl.appendChild(navContainer)

      // 遍历每一个小分类创建导航链接
      navList[category][subCategory].forEach(nav => {
        const li = document.createElement('li')
        li.className = 'nav-item'
        li.innerHTML = `
          <div class='icon'>
            <img src=""></img> 
          </div>
          <div class='nav' title='${nav.title ? nav.title : ''}'>
            ${nav.name}
          </div>
        `
        navContainer.appendChild(li)
      })

      // 将每一个小分类的元素添加到文档
      navWrapper.appendChild(subCategoryEl)
    })
  })
}
createNavElement()
