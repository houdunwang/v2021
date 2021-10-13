// class CollectionNumber {
//   data: number[] = []
//   public push(...items: number[]) {
//     this.data.push(...items)
//   }
//   public shift(): number {
//     return this.data.shift()
//   }
// }
// const numberCollection = new CollectionNumber()
// numberCollection.push(1, 2, 3, 4, 5)
// console.log(numberCollection.shift())
// class CollectionString {
//   data: string[] = []
//   public push(...items: string[]) {
//     this.data.push(...items)
//   }
//   public shift(): string {
//     return this.data.shift()
//   }
// }
// const stringCollection = new CollectionString()
// stringCollection.push('houdunren.com', '后盾人')
// console.log(stringCollection.shift())
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    Collection.prototype.shift = function () {
        return this.data.shift();
    };
    return Collection;
}());
var user = { name: '后盾人', age: 23 };
var xj = { name: ' 向军', age: 18 };
var collections = new Collection();
collections.push(user, xj);
console.log(collections.shift());
