{
    // let aLink = document.querySelector('#hd') as HTMLLinkElement
    // aLink.href
    var Hd = /** @class */ (function () {
        function Hd(el) {
            this.el = el;
        }
        Hd.prototype.html = function () {
            return this.el.innerHTML;
        };
        return Hd;
    }());
    var el = document.querySelector('.xj');
    var obj = new Hd(el);
    console.log(obj.html());
}
