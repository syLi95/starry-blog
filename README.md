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

```bash
npm run d
```

### 开发设置

网站内部的链接，将会被转换成 < router-link > 用于 SPA 导航

1. 每个文件夹下 README.md 或 index.md 文件会被自动编译为 index.html 对应的链接将被视为 /
2. .vuepress/components 下 *.vue 文件 会被自动注册为 全局异步组件 (组件名称需包含连接符或是大驼峰)

### 目录结构

docs/.vuepress/ 根目录用于存放全局的配置、组件、静态资源等

components: 该目录中的 Vue 组件将会被自动注册为全局组件

theme: 用于存放本地主题

styles: 用于存放样式相关的文件
styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级
styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量

public: 静态资源目录

config.js: 配置文件的入口文件，也可以是 YML 或 toml

enhanceApp.js: 客户端应用的增强。

### vuepress官网参考

<http://localhost:8080/lsy-vuepress-blog/>
