# vuepress-blog

## 安装

```bash
npm install
```

### 开发

```bash
npm run dev
```

#### 启动页面

<http://localhost:8080/lsy-vuepress-blog/>

### 编译

```bash
npm run build
```

### 部署

GitHub Pages and Travis CI

### 开发设置

1. 全局异步组件 (.vuepress/component/*.vue) 统一使用大驼峰命名

### 目录结构

```sh
lsy-vuepress-blog
├─docs
|  ├─.vuepress                          // 存放全局配置、组件、静态资源等
|  |     ├─config.js                    // 配置文件
|  |     ├─enhanceApp.js                // 客户端应用增强
|  |     ├─styles                       // 样式文件
|  |     |   ├─index.styl               // 全局样式文件，比默认样式优先级更高
|  |     |   └palette.styl              // 重写默认颜色常量，或设置新的 stylus 颜色常量
|  |     ├─public                       // 静态资源目录, 例如img, ico ...
|  |     ├─config                       // 配置文件
|  |     |   ├─head.js
|  |     |   ├─nav.js
|  |     |   ├─plugin.js
|  |     |   └sidebar.js
|  |     ├─components                   // *.vue 全局组件
|  ├─web-summary                        // web总结
|  ├─README.md                          // 主页
├─.travis.yml                           // travis
├─deploy.sh                             // deploy
├─README.md
├─package.json
```

### blog

<https://syli95.github.io/lsy-vuepress-blog/>

### vuepress官网

<https://vuepress.vuejs.org/zh/guide/>
