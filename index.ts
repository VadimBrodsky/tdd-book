export class Money {
  protected amount: number;
  protected currencySymbol: string;

  constructor(amount: number, currencySymbol: string) {
    this.amount = amount;
    this.currencySymbol = currencySymbol;
  }

  public equals(object: Money): boolean {
    return this.amount == object.amount && this.currency() === object.currency();
  }

  public currency(): string {
    return this.currencySymbol;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currencySymbol);
  }

  public static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  public static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }

  public toString(): string {
    return this.amount + " " + this.currencySymbol;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currencySymbol: string) {
    super(amount, currencySymbol);
  }
}

export class Franc extends Money {
  constructor(amount: number, currencySymbol: string) {
    super(amount, currencySymbol);
  }
}
