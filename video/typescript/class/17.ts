interface PayInterface {
  handle(price: number): void
}

class AliPay implements PayInterface {
  public handle(price: number): void {
    console.log(`支付宝付款${price}元`)
  }
}

class WePay implements PayInterface {
  public handle(price: number): void {
    console.log(`微信付款${price}元`)
  }
}

function pay(type: string, price: number) {
  let pay: PayInterface
  switch (type) {
    case 'alipay':
      pay = new AliPay()
      break
    case 'wepay':
      pay = new WePay()
  }
  pay.handle(price)
}
