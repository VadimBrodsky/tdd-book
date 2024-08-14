class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: Money): boolean {
    return this.amount == object.amount && this.constructor.name === object.constructor.name;
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}
