"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let hd = {
    name: '后盾人',
};
Reflect.defineMetadata('xj', { url: 'houdunren.com' }, hd, 'name');
console.log(Reflect.getMetadata('xj', hd, 'name'));
