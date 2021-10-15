"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ErrorDecortator = function (title, titleFontSize) {
    if (title === void 0) { title = 'choudunren.com 后盾人人人做后盾'; }
    if (titleFontSize === void 0) { titleFontSize = 20; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            try {
                method();
            }
            catch (error) {
                console.log("%c" + title, "color:green;font-size:" + titleFontSize + "px;");
                console.log("%c" + error.message, 'color:red;font-size:16px;');
            }
        };
    };
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.find = function () {
        throw new Error('您查找的用户不存在');
    };
    User.prototype.create = function () {
        throw new Error('创建用户失败');
    };
    __decorate([
        ErrorDecortator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "find", null);
    __decorate([
        ErrorDecortator('后盾人 https://www.houdunren.com', 12),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "create", null);
    return User;
}());
new User().create();
