"use strict";
var user = { name: '后盾人', age: 18, open: true, lesson: [{ title: 'linux' }, { title: 'TS' }] };
user.open = false;
user.lesson.push({ title: 'CSS' });
console.log(user.lesson[0].title);
