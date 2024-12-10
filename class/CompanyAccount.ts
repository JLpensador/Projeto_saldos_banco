import { maAccount } from "./maAccount";

export class CompanyAccount extends maAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (accountNumber: number): void => {
    if (this.validateStatus()) {
      console.log(
        `Você pegou um empréstimo de ${accountNumber}. Saldo atual: ${
          this.balance + accountNumber
        }`
      );
    }
  };
}
