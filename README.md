# 一.在线预览

[github 在线地址](https://carolin-violet.github.io/navigation/)，[gitee 在线地址](https://carolin-violet.gitee.io/navigation/), [云服务器地址](https://carolin-violet.cloud/violet-nav/)

# 二.导航站点介绍

使用 html+scss+js 编写，用于保存收纳个人使用的一些站点

# 三.代码目录结构

使用 treer 包生成代码目录，命令如下：

```
npm install treer -g
# 忽略git文件，favicons目录，map文件，css文件，min文件
treer -e ./dir.txt -i "/(\.git|favicons|\.map|\.css|\.min)/"
```

代码目录如下:

```
├─index.html
├─README.md
├─js
| ├─createNav.js
| ├─scroll.js
| └waterfall.js
├─images
|   ├─browser.svg
|   ├─favicon.avif
|   ├─bg
|   | ├─1080p-2.webp
|   | ├─1080p.webp
|   | ├─2k.webp
|   | ├─ipad2020.webp
|   | ├─mobile-2.webp
|   | └mobile.webp
├─font
|  └米开软笔行楷.ttf
├─css
|  ├─category-title.scss
|  ├─index.scss
|  ├─mixin.scss
|  ├─nav.scss
|  └reset.scss
```

# 四.性能优化

1. 体积压缩

   - 图片压缩: jpg、png 格式图片统一压缩成 webp 或 avif 格式,[在线压缩地址](https://devtool.tech/tiny-image)
   - css、js 文件压缩: vscode 使用 minify 插件进行体积压缩
   - 字体文件压缩: 使用 fontmin 对使用到的字体文件进行压缩,[官网地址](https://ecomfe.github.io/fontmin/)

2. 网络资源

   - cdn: 图片、css、js、字体文件等静态资源使用 cdn 缓存

   - 字体预加载:

     ```
     # head中添加
     <link rel="preload"href="https://cdn.jsdelivr.net/gh/carolinviolet/navigation/font/米开软笔行楷.ttf" as="font"
         type="font/ttf" crossorigin>

     # 引入的字体
     @font-face {
       font-family: 米开软笔行楷;
       src: url(https://cdn.jsdelivr.net/gh/carolin-violet/navigation/font/米开软笔行楷.ttf);
       font-display: swap; // 字体没加载前先用默认的，加载了就用这个,即使字体没有加载，使用当前字体的网页内容也可以渲染
     }
     ```

3. 使用性能

   - 页面滚动使用节流
   - 图片懒加载: IntersectionObserver API 进行图片懒加载

4. 安全

   - nginx 配置 https

   - 在 html 头部添加 CSP 配置允许加载同源资源和 cdn 资源

     ```
       <meta http-equiv="Content-Security-Policy" content="script-src https://cdn.jsdelivr.net/ 'self';
         style-src https://cdn.jsdelivr.net/ 'self';
         font-src https://cdn.jsdelivr.net/ 'self' data:;
         img-src https://cdn.jsdelivr.net/ 'self'">
     ```

5. SEO 优化

   - img 标签添加 alt 属性
   - head 添加   <meta name="description" content="xxx">

lighthouse 前后评分对比:

![优化前](https://cdn.jsdelivr.net/gh/carolin-violet/navigation_v1/images/lighthouse1.png)

![优化后](https://cdn.jsdelivr.net/gh/carolin-violet/navigation_v1/images/lighthouse2.png)
