{
    var User = /** @class */ (function () {
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var obj = new User({ name: '后盾人', age: 12 });
    console.log(obj.get().age);
}
