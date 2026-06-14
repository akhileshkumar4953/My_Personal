import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-google-apps-script-services',
  imports: [],
  templateUrl: './google-apps-script-services.html',
  styleUrl: './google-apps-script-services.css',
})
export class GoogleAppsScriptServices implements OnInit {

   ngOnInit(): void {

    console.log('GOOGLE APPS SCRIPT SERVICES');

    // Sample Employee Data
    // const employeeData = {
    //   employeeId: 101,
    //   employeeName: 'Akhil',
    //   department: 'IT',
    //   salary: 50000
    // };
const student = {
  studentId:201,
  etudentName:"Sunil",
  department:"CSE",
  Salary:56000
}
console.log(student);

    // console.log(employeeData);

    console.log('SpreadsheetApp → Google Sheets');
    console.log('GmailApp → Send Emails');
    console.log('DriveApp → Google Drive');
    console.log('Logger → Print Output');

  }
}