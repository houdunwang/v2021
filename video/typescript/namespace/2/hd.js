"use strict";
var User;
(function (User) {
    User.hd = 'houdunren.com';
    var Member;
    (function (Member) {
        Member.name = '向军老师';
    })(Member = User.Member || (User.Member = {}));
})(User || (User = {}));
console.log(User.Member.name);
