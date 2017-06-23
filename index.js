/**
 * Created by Administrator on 2017/6/23 0023.
 */
let autoVersion = require("auto-version");//返回一个generator函数
let path = require("path");
let co = require('hprose').co;
let file = path.join(__dirname, "./package.json");
co(autoVersion(file))

const jsdatatype=require("./main");
console.log(jsdatatype(1));
console.log(jsdatatype(1.1));
console.log(jsdatatype("1"));
console.log(jsdatatype(true));
console.log(jsdatatype(null));
console.log(jsdatatype(undefined));
console.log(jsdatatype({}));
console.log(jsdatatype([1]));
console.log(jsdatatype(new Set([1,2])));
console.log(jsdatatype(new Map()));
console.log(jsdatatype(Symbol('test')));