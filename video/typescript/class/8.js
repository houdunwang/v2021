var Axios = /** @class */ (function () {
    function Axios() {
        // console.log('构造函数')
    }
    Axios.make = function () {
        if (Axios.instance == null) {
            console.log('创建 axios 实例');
            Axios.instance = new Axios();
        }
        return Axios.instance;
    };
    Axios.instance = null;
    return Axios;
}());
var instance = Axios.make();
var instance2 = Axios.make();
var instance3 = Axios.make();
var instance4 = Axios.make();
