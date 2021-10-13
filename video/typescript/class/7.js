{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
        }
        Axios.getSite = function () {
            return Axios.site;
        };
        Axios.site = 'houdunren.com';
        return Axios;
    }());
    var instance = new Axios_1();
    //   console.log(Axios.site)
    console.log(Axios_1.getSite());
}
