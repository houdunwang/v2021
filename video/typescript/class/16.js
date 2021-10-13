var SexType;
(function (SexType) {
    SexType[SexType["BOY"] = 0] = "BOY";
    SexType[SexType["GIRL"] = 1] = "GIRL";
})(SexType || (SexType = {}));
var hd = {
    name: '后盾人',
    age: 18,
    sex: SexType.GIRL
};
var xj = { name: '向军', age: 11, sex: SexType.BOY };
var users = [hd, xj];
console.log(users);
