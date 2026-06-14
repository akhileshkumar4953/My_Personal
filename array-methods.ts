import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-methods',
  imports: [],
  templateUrl: './array-methods.html',
  styleUrl: './array-methods.css',
})
export class ArrayMethods implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT ARRAY METHODS");

    const nums: number[] = [1, 2, 3, 4];

    // 1. map() - Transform Data
    const doubledNumbers = nums.map(
      (num: number) => num * 2
    );
    console.log(doubledNumbers);

    // 2. filter() - Filter Data
    const evenNumbers = nums.filter(
      (num: number) => num % 2 === 0
    );
    console.log(evenNumbers);

    // 3. find() - Find First Match
    const foundNumber = nums.find(
      (num: number) => num === 3
    );
    console.log(foundNumber);

    // 4. reduce()- Calculate Total
    const total = nums.reduce(
      (sum: number, num: number) => sum + num,
      0
    );
    console.log(total);

  }
}