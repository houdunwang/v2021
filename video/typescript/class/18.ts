{
  //   interface Pay {
  //     (price: number): boolean
  //   }
  //   const WePay: Pay = (price: number) => true

  interface AnimationInterface {
    name: string
    move(): void
  }

  interface AnimationInterface {
    end(): void
  }

  class Player implements AnimationInterface {
    name: string
    move(): void {
      throw new Error('Method not implemented.')
    }
    end(): void {
      throw new Error('Method not implemented.')
    }
  }
}
