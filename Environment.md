### 环境搭建过程
##### 1. 安装vue/cli
npm install @vue/cli -g
##### 2. 创建应用并进入应用目录
vue create my-app
cd my-app
##### 3. 添加electron-builder
vue add electron-builder  会让你选择electron版本，默认即可
>如果安装超时,设置electron的源地址，修改为淘宝镜像
>npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
>然后再一次 `vue add electron-builder`
##### 4. 添加vuetify
vue add vuetify
##### 5. 运行
npm run electron:serve
##### 6. 局部引入vuetify组件查看文件
vuetify-electron > src > main.js
