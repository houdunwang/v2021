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

class Collection<HD> {
  data: HD[] = []
  public push(...items: HD[]) {
    this.data.push(...items)
  }

  public shift(): HD {
    return this.data.shift()
  }
}
type User = { name: string; age: number }
const user: User = { name: '后盾人', age: 23 }
const xj: User = { name: ' 向军', age: 18 }

const collections = new Collection<User>()
collections.push(user, xj)
console.log(collections.shift())
