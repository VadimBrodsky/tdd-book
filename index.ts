export abstract class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: Money): boolean {
    return this.amount == object.amount && this.constructor.name === object.constructor.name;
  }

  abstract times(multiplier: number): Money;
  abstract currency(): String;

  public static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  public static franc(amount: number): Franc {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  private currencySymbol: string;

  constructor(amount: number) {
    super(amount);
    this.currencySymbol = "USD";
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }

  currency() {
    return this.currencySymbol;
  }
}

export class Franc extends Money {
  private currencySymbol: string;

  constructor(amount: number) {
    super(amount);
    this.currencySymbol = "CHF";
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }

  currency() {
    return this.currencySymbol;
  }
}
