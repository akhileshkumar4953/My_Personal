import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-json-api',
  imports: [],
  templateUrl: './json-api.html',
  styleUrl: './json-api.css',
})
export class JsonApi implements OnInit {

  async ngOnInit(): Promise<void> {

    console.log("TYPESCRIPT JSON & API");
    // 1. OBJECT TO JSON
    // const user = {
    //   name: "Akhil",
    //   age: 25
    // };
    // const json: string = JSON.stringify(user);
    // console.log(json);

    const user = {
      name:"Akhilesh...",
      age:25
    };
    const json:string = JSON.stringify(user);
    console.log(json);

    // 2. JSON TO OBJECT
    // const data: {
    //   name: string;
    //   age: number;
    // } = JSON.parse(json);
    // console.log(data);

    // // 3. API CALL
    // await this.getUsers();


  }
  // API FUNCTION
  async getUsers(): Promise<void> {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      console.log(users);
    } catch (error) {
      console.log("API Error:", error);
    }
  }

}