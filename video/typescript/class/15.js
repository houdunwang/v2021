{
    var User = /** @class */ (function () {
        function User(user) {
            this._info = user;
        }
        Object.defineProperty(User.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var hd = new User({ name: '后盾人', age: 18 });
    console.log(hd.info);
}
