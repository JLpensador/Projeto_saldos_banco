export abstract class maAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso para " + this.name);
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): void => {
    this.balance = balance;
    if (this.validateStatus()) {
      console.log(
        `Você depositou ${this.balance}. Saldo atual: ${
          this.accountNumber + this.balance
        }`
      );
    }
  };

  withdraw = (balance: number): void => {
    this.balance = balance;
    console.log(
      `Você sacou ${this.balance}. Saldo atual: ${
        this.accountNumber - this.balance
      }`
    );
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
