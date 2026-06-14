import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-oop',
  imports: [],
  templateUrl: './classes-oop.html',
  styleUrl: './classes-oop.css',
})
export class ClassesOop implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT CLASSES & OOP");

    // 1. CLASS
    class User {
      constructor(
        public name: string
      ) { }
      greet(): void {
        console.log(`Hello ${this.name}`);
      }
    }

    // 2. OBJECT
    const user = new User("Akhil");
    user.greet();

    // 3. MULTIPLE OBJECTS
    const user1 = new User("Akhil");
    const user2 = new User("Rahul");
    user1.greet();
    user2.greet();

    // 4. REAL PROJECT EXAMPLE
    class Employee {
      constructor(
        public employeeId: number,
        public employeeName: string
      ) { }
      display(): void {
        console.log(
          this.employeeId,
          this.employeeName
        );
      }
    }
    const emp = new Employee(
      101,
      "Akhil"
    );
    emp.display();

  }
}