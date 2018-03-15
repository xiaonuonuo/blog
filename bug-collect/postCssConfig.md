>问题描述

`webpack`配置`scss+postcss`报错：`Error: No PostCSS Config found in...`

webpack代码

```
 exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
```
```
{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader?outputStyle=expanded'],
}
```

>解决方法

在项目根目录新建`postcss.config.js`文件，并对`postcss`进行配置：

```
module.exports = {  
  plugins: {  
    'autoprefixer': {browsers: 'last 5 version'}  
  }  
} 
```



