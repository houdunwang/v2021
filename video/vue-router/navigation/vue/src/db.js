const Mock = require('mockjs')
//Mock.Random 是一个工具类，用于生成各种随机数据
const Random = Mock.Random

module.exports = () => {
  //定义json-server数据结构
  let data = { article: [], user: [] }

  for (let i = 1; i <= 10; i++) {
    data.article.push({
      id: i,
      title: Random.cword(10, 20),
      content: Random.cparagraph(100),
    })
    data.user.push({
      name: Random.word(3),
      avatar: Random.image('200x200', '#f39c12', Random.word(1)),
    })
  }
  return data
}
