var Axios = /** @class */ (function () {
    function Axios(site) {
        this.site = 'https://www.houdunren.com/api';
        this.site = site || this.site;
    }
    Axios.prototype.get = function (url) {
        console.log("\u4F60\u8BF7\u6C42\u7684\u662F" + this.site + "/" + url);
        return [];
    };
    return Axios;
}());
var instance = new Axios();
console.log(instance.site);
