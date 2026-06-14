import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-closures-scope',
  imports: [],
  templateUrl: './closures-scope.html',
  styleUrl: './closures-scope.css',
})
export class ClosuresScope implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT SCOPE & CLOSURE");

    // 1. GLOBAL SCOPE
    const userName: string = "Akhil";
    console.log(userName);

    // 2. FUNCTION SCOPE + CLOSURE
    function counter() {
      let count: number = 0;
      return (): number => {
        return ++count;
      };
    }
    const increment = counter();
    console.log(increment()); // 1
    console.log(increment()); // 2
    console.log(increment()); // 3

    // 3. BLOCK SCOPE
    if (true) {
      const age: number = 20;
      console.log(age);
    }
    // console.log(age); // ERROR


    // EXAMPLE 4 : BANK ACCOUNT
    console.log("\nEXAMPLE 5 : BANK ACCOUNT");
    function bankAccount() {
      let balance: number = 1000;
      return {
        deposit(amount: number): void {
          balance += amount;
          console.log(
            `Balance after deposit: ${balance}`
          );
        },
        withdraw(amount: number): void {
          balance -= amount;
          console.log(`Balance after withdraw: ${balance}`);
        }
      };
    }
    const account = bankAccount();
    account.deposit(500);
    account.withdraw(200);



  }
}