# 18_k-mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 1.获取当前文件所在路径
```
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```
### 2.当打包时，项目中public/static中的文件，会原封不动的放在dist文件夹下面
### 3.文件夹名字一般小写，文件名字一般大写
### 4.只有default导出才能省去{}
### 5.函数调用中，压入函数栈，变量全部是临时的，会保存调用过程中所有的变量，
### 调用结束后会弹出函数栈，并释放所有变量，并被内存回收
### 6.this在箭头函数中往上找作用域
### 7.当只有文字不同时没有必要使用插槽
### 8.当import组件时，养成保持顺序一致，按模块划分的习惯，对以后开发很有帮助
### 9.在vue里面想明确拿到一个元素时，绑定ref属性，ref如果绑定在组件中，那么通过
### this.$refs.refname获取到的是一个组件对象；ref如果绑定在普通元素中，那么通过
### this.$refs.refname获取到的是一个元素对象
### 10.组件是不能监听点击事件的，要想监听组件的点击事件，必须要使用原生的监听修饰符@click.native
### 11.scrollerHeight
### 12.如何监听图片已经加载完成：
### 原生监听：img.onload = function() {}
### vue中：@load="loadImage"
### 13.事件总线
### 14.防抖和截流
### 15.局部变量被闭包引用的话不会被销毁
### 16.
