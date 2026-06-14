import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT BASICS11");

    // 1. VARIABLES
    // let name: string = "Akhil";
    // let age: number = 20;
    // let isAdmin: boolean = true;

    // console.log(name);
    // console.log(age);
    // console.log(isAdmin);


    let name:string = "Akhilesh";
    let age: number=50;
    let isAdmin:boolean= false;

    console.log(name);
    console.log(age);
    console.log(isAdmin);

    // 2. ARRAY
    const nums: number[] = [1, 2, 3];
    console.log(nums);

    // 3. FUNCTION
    function add(
      a: number,
      b: number
    ): number {
      return a + b;
    }
    console.log(add(10, 20));

    // 4. OBJECT
    const user: {
      name: string;
      age: number;
    } = {
      name: "Akhil",
      age: 20
    };
    console.log(user);

    // 5. UNION TYPE
    let data: string | number = "Hello";
    console.log(data);
    data = 100;
    console.log(data);
  }
}
