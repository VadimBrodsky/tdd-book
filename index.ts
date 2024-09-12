export abstract class Money {
  protected amount: number;
  protected currencySymbol: string;

  constructor(amount: number, currencySymbol: string) {
    this.amount = amount;
    this.currencySymbol = currencySymbol;
  }

  public equals(object: Money): boolean {
    return this.amount == object.amount && this.constructor.name === object.constructor.name;
  }

  public currency(): string {
    return this.currencySymbol;
  }

  abstract times(multiplier: number): Money;

  public static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  public static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }
}

export class Dollar extends Money {
  constructor(amount: number, currencySymbol: string) {
    super(amount, currencySymbol);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currencySymbol: string) {
    super(amount, currencySymbol);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
