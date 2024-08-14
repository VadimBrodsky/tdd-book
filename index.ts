export abstract class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: Money): boolean {
    return this.amount == object.amount && this.constructor.name === object.constructor.name;
  }

  abstract times(multiplier: number): Money

  public static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  public static franc(amount: number): Dollar {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
