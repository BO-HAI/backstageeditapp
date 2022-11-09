express + vue3

一、先安装vue3

```
npm create vue@3

// 提示错误
Error: Cannot find module 'vue-loader-v16/package.json'

sudo cnpm i --save-dev vue-loader-v16
```

二、再安装express

```
npm install express --save
```

三、修改静态目录

```app.js
app.use(express.static(__dirname + '/dist'));
```