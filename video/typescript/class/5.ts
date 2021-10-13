class Axios {
  protected readonly site: string = 'https://www.houdunren.com/api'
  public constructor(site?: string) {
    this.site = site || this.site
  }
  public get(url: string): any[] {
    console.log(`你请求的是${this.site}/${url}`)

    return []
  }
}

const instance = new Axios()
console.log(instance.site)
