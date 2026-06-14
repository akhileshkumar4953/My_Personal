import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugging-console',
  imports: [],
  templateUrl: './debugging-console.html',
  styleUrl: './debugging-console.css',
})
export class DebuggingConsole implements OnInit {

  ngOnInit(): void {

    // console.log("TYPESCRIPT DEBUGGING & CONSOLE");

    // // 1. CONSOLE LOG
    // console.log("Hello");

    // // 2. CONSOLE WARN
    // console.warn("Warning");

    // // 3. CONSOLE ERROR
    // console.error("Error");

    // // 4. DEBUGGER
    // const age: number = 20;
    // debugger;
    // console.log(age);

    // // 5. REAL PROJECT EXAMPLE
    // const employee = {
    //   id: 101,
    //   name: "Akhil"
    // };
    // console.log(employee);

  }

}