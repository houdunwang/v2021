class Axios {
  private static instance: Axios | null = null
  private constructor() {
    // console.log('构造函数')
  }
  static make(): Axios {
    if (Axios.instance == null) {
      console.log('创建 axios 实例')

      Axios.instance = new Axios()
    }

    return Axios.instance
  }
}

const instance = Axios.make()
const instance2 = Axios.make()
const instance3 = Axios.make()
const instance4 = Axios.make()
