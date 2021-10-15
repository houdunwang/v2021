const MessageDecorator: ClassDecorator = (target: Function) => {
  target.prototype.message = (content: string) => {
    console.log(content)
  }
}

@MessageDecorator
class LoginController {
  public login() {
    console.log('登录业务处理')
    this.message('恭喜你，登录成功了')
  }
}

new LoginController().login()

@MessageDecorator
class ArticleController {
  public store() {
    this.message('文章添加成功')
  }
}

new ArticleController().store()
