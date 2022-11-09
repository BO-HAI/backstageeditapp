# backstageeditapp
> 管理后台可视化编辑系统
## 环境

`node v18.12.1` 

`npm  v8.19.2`

## 运行

1.服务器运行

```
node app
```

## 目录结构

1、public目录： 项目公共目录，存放静态资源(img、js、css)和公共资源，404错误提示页面；

2、routor目录： 路由控制器目录，存放路由文件，将所有的业务逻辑都都写在这里；

3、views目录：  视图/模版目录，存放HTML模板文件；

4、module目录： 自己写的一些模块；

5、node_modules：存放所有的项目依赖库，配置package.json之后执行npm install后自动创建的文件夹；

6、app.js： 项目入口文件，程序初始运行文件；

7、package.json ：项目配置信息，依赖模块的定义