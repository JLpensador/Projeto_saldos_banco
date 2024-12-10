import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "João Luiz", 40);

console.log(peopleAccount);
console.log(peopleAccount.getName());
peopleAccount.setName("João Luiz B. Morais");
console.log(peopleAccount.getName());
peopleAccount.withdraw(20);
peopleAccount.deposit(30);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount("MA Soluções", 20);

console.log(companyAccount);
console.log(companyAccount.getName());
companyAccount.setName("Melisa");
console.log(companyAccount.getName());
companyAccount.withdraw(20);
companyAccount.deposit(30);
companyAccount.getBalance();
companyAccount.getLoan(50);

const premiumAccount: CompanyAccount = new CompanyAccount("Ariadne", 50);

console.log(premiumAccount);
console.log(premiumAccount.getName());
premiumAccount.setName("Luiz Borges");
console.log(premiumAccount.getName());
premiumAccount.withdraw(20);
premiumAccount.deposit(30);
premiumAccount.getBalance();
