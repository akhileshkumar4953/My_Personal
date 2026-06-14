// <h2>Event Handling Practice</h2>

// <button id="btn">
//     Click Me
// </button>

// <br><br>

// <input id="name" type="text" placeholder="Enter Name" />

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT EVENTS");
    // 1. SELECT ELEMENT
    const btn = document.getElementById("btn");
    console.log(btn);

    // 2. CLICK EVENT
    btn?.addEventListener("click", () => {
      console.log("Button Clicked");
    });

    // 3. INPUT EVENT
    const inputElement =
      document.getElementById("name");
    inputElement?.addEventListener(
      "input",
      (event: Event) => {
        const value =
          (event.target as HTMLInputElement).value;
        console.log(value);
      }
    );
  }
}