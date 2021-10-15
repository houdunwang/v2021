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
const RandomColorDecorator = (target, propertyKey) => {
    const colors = ['red', 'blue', 'yellow', 'green', '#383838'];
    Object.defineProperty(target, propertyKey, {
        get() {
            return colors[Math.floor(Math.random() * colors.length)];
        },
    });
};
class Hd {
    draw() {
        document.body.insertAdjacentHTML('beforeend', `<div style="height:200px;width:200px;background-color:${this.color}">houdunren.com@向军老师</div>`);
    }
}
__decorate([
    RandomColorDecorator,
    __metadata("design:type", Object)
], Hd.prototype, "color", void 0);
new Hd().draw();
