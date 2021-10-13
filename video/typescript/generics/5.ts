interface ArticleInteface<B, C> {
  title: string
  isLock: B
  comments: C[]
}

type CommentType = {
  content: string
  author: string
}

const hd: ArticleInteface<boolean, CommentType> = {
  title: '后盾人网站 houdunren.com',
  isLock: true,
  comments: [{ content: '这是一个评论', author: '向军' }],
}
