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

class Article {
  private _lists: any[] = []

  public get articles(): any[] {
    return this._lists.map(article => {
      article.title = article.title.substr(0, 2)
      return article
    })
  }
  public set articles(lists: any[]) {
    this._lists = lists
  }
}
const hd = new Article()
hd.articles = [{ title: '后盾人' }, { title: 'houdunren.com' }]

console.log(hd.articles)
