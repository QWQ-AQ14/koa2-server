# 技术选型
## 为什么选择koa2而不是express？
- express基于JS回调，特别是异步编程时用起来繁琐
- koa支持aysnc await

## 为什么选择MySql而不是mongodb?
- mysql在公司中使用最广，成本最低

## 登录技术session而不是jwt？
- session适用较广，适用于

# 创建项目
1. 安装koa脚手架


```js
npm install -g koa-generator
```
2. 创建项目
-e表示使用ejs作为模板语言

```js
koa2 -e koa2-server-code
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4646d92f704b4d5da7d257b517ef51fb~tplv-k3u1fbpfcp-watermark.image?)
3. 安装依赖


```js
npm install
```
4. 运行服务器

```js
nodemon bin/www
```
- node运行出错，需要7以下版本才能运行成功


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e73b8a9c0e33404eb502ba50321c55d1~tplv-k3u1fbpfcp-watermark.image?)
5. 连接远程仓库


```js
git init
git remote add origin 远程仓库地址
git status
git log
git pull origin master
git add .
git commit -m "init project"
git push origin master
```
6. 安装环境变量
```js
npm i cross-env -D
```