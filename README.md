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

GitHub Pages and Travis CI: 无需 build 直接将代码提交至 master 分支

### 开发设置

1. 全局异步组件 (.vuepress/component/*.vue) 统一使用大驼峰命名

### 根目录结构 docs/.vuepress/

存放全局配置/组件/静态资源等

components: *.vue 全局组件

theme: 本地主题

styles: 样式文件
styles/index.styl: 全局样式文件，比默认样式优先级更高
styles/palette.styl: 重写默认颜色常量，或设置新的 stylus 颜色常量

public: 静态资源目录

config.js: 配置文件

enhanceApp.js: 客户端应用增强

### vuepress官网参考

<http://localhost:8080/lsy-vuepress-blog/>
