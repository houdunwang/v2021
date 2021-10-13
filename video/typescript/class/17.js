var AliPay = /** @class */ (function () {
    function AliPay() {
    }
    AliPay.prototype.handle = function (price) {
        console.log("\u652F\u4ED8\u5B9D\u4ED8\u6B3E" + price + "\u5143");
    };
    return AliPay;
}());
var WePay = /** @class */ (function () {
    function WePay() {
    }
    WePay.prototype.handle = function (price) {
        console.log("\u5FAE\u4FE1\u4ED8\u6B3E" + price + "\u5143");
    };
    return WePay;
}());
function pay(type, price) {
    var pay;
    switch (type) {
        case 'alipay':
            pay = new AliPay();
            break;
        case 'wepay':
            pay = new WePay();
    }
    pay.handle(price);
}
