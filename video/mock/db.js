const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {
  let data = { news: [] }

  for (let i = 0; i < 20; i++) {
    data.news.push({
      id: i,
      content: Random.cparagraph(10),
    })
  }
  return data
}
