{
    var User = /** @class */ (function () {
        function User(n, a) {
            this.name = n;
            this.age = a;
        }
        User.prototype.info = function () {
            return this.name + " \u7684\u5E74\u9F84\u662F" + this.age;
        };
        return User;
    }());
    var hd = new User('后盾人', 18);
    var xj = new User('向军', 16);
    for (var key in xj) {
        if (hd.hasOwnProperty(key)) {
            console.log(xj[key]);
        }
    }
}
