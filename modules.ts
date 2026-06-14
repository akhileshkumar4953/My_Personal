// app.ts
// export const name: string = "Sunil";

// export function greet(): void {
//   console.log("Hello Good Morning");
// }


// employee.ts
// export class Employee {

//   constructor(
//     public id: number,
//     public name: string
//   ) {}

// }



import { Component, OnInit } from '@angular/core';
import { name, greet } from './app';
import { Employee } from './employee';
@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [],
  templateUrl: './modules.html',
  styleUrls: ['./modules.css']
})
export class Modules implements OnInit {

  ngOnInit(): void {
    console.log('Modules Topic Loaded');
    console.log(name);
    greet();


    const emp = new Employee(
      101,
      "Akhil"
    );

    console.log(emp);

  }
}