class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: Money): boolean {
    return this.amount == object.amount;
  }

}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Money) {
    return this.amount === (object as Dollar).amount;
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Money) {
    return this.amount === (object as Franc).amount;
  }
}
