/**
 * Created by Administrator on 2017/6/23 0023.
 */
var _toString = Object.prototype.toString
module.exports = function (value) {
    var type = _toString.call(value).replace(/[\[\]\s]|object/g, '')
    if (type == "Number") {
        if (parseInt(value) !== value) {
            type = "Float";
        }
    }
    return type;
}