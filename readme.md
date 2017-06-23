# javascript基本数据类型判断

能够准确判断JavaScript基本数据类型，避免typeof 的不足

### 使用

##### 1
```angular2html
npm install -S js-data-type
```

##### 2
```angular2html
const jsdatatype=require("./main");//函数返回值为字符串
console.log(jsdatatype(1));//Number
console.log(jsdatatype(1.1));//Float
console.log(jsdatatype("1"));//String
console.log(jsdatatype(true));//Boolean
console.log(jsdatatype(null));//Null
console.log(jsdatatype(undefined));//Undefined
console.log(jsdatatype({}));//Object
console.log(jsdatatype([1]));//Array
console.log(jsdatatype(new Set([1,2])));//Set
console.log(jsdatatype(new Map()));//Map
console.log(jsdatatype(Symbol('test')));//Symbol
```