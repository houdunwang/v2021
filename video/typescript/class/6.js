var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = this.initName(name);
    }
    User.prototype.initName = function (name) {
        return name + "-houdunren.com";
    };
    return User;
}());
var hd = new User('后盾人');
console.log(hd.name);
