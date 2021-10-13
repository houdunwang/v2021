{
  class Axios {
    static site: string = 'houdunren.com'
    public static getSite(): string {
      return Axios.site
    }
  }
  const instance = new Axios()
  //   console.log(Axios.site)
  console.log(Axios.getSite())
}
