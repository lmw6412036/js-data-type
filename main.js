/**
 * Created by Administrator on 2017/6/23 0023.
 */
const _toString = Object.prototype.toString
module.exports = function (value) {
    let type = _toString.call(value).replace(/[\[\]\s]|object/g, '')
    if (type == "Number") {
        if (parseInt(value) !== value) {
            type = "Float";
        }
    }
    return type;
}