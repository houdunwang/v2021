// class User {
//   private _name: string
//   constructor(name: string) {
//     this._name = name
//   }
//   public get name(): string {
//     return this._name
//   }
//   public set name(name: string) {
//     this._name = name
//   }
// }
// const hd = new User('后盾人')
// hd.name = '向军'
// console.log(hd.name)
var Article = /** @class */ (function () {
    function Article() {
        this._lists = [];
    }
    Object.defineProperty(Article.prototype, "articles", {
        get: function () {
            return this._lists.map(function (article) {
                article.title = article.title.substr(0, 2);
                return article;
            });
        },
        set: function (lists) {
            this._lists = lists;
        },
        enumerable: false,
        configurable: true
    });
    return Article;
}());
var hd = new Article();
hd.articles = [{ title: '后盾人' }, { title: 'houdunren.com' }];
console.log(hd.articles);
