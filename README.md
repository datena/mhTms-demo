Vue 模板管理
=
# 功能点
* 自动生成vue路由表  
* vue模板自动加载机制  
* console 开关配置  
-开发模式默认启用,生产模式自动屏蔽-

## 使用
```
yarn && yarn run serve
```

## ⚠️目录说明
- /mhTms  
    > mhTms必须放根目录
- /page 
    > 路由页面必须放page下面,支持多级目录
- /template
    > /template/default 默认模板  
    > /template/diy 模板2  
        > 模板2下面未找到文件,会默认寻找default下面的对应的文件
    > 模板必须放根目录  
