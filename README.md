# webpack-build

## 关于安装
ts项目下安装react相关内容
需要再安装
yarn add @types/xxx --dev

比如 ts项目下引用react/react-dom 报错
需要手动再安装
yarn add @types/react --dev
yarn add @types/raect-dom --dev

## 关于tree-shaking技术
前端中的tree-shaking可以理解为通过工具"摇"我们的JS文件，将其中用不到的代码"摇"掉，是一个性能优化的范畴。

tree-shaking的基础是使用静态引入（如：import {A} from './a'）
而当使用非静态引入时（如：importicons.js中的importAll方法）则无法再用tree-shaking技术。

