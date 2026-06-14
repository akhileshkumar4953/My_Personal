import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-commands',
  imports: [],
  templateUrl: './git-commands.html',
  styleUrl: './git-commands.css',
})
export class GitCommands implements OnInit {

  ngOnInit(): void {

    console.log("GIT & GITHUB COMMANDS");
    // 1. git init
    console.log("git init");
    console.log("Start Git in Project");
    console.log("======================================");

    // 2. git status
    console.log("git status");
    console.log("Check File Status");
    console.log("======================================");

    // 3. git add
    console.log("git add .");
    console.log("Add Files for Commit");
    console.log("======================================");

    // 4. git commit
    console.log('git commit -m "First Commit"');
    console.log("Save Changes");
    console.log("======================================");

    // 5. git push
    console.log("git push");
    console.log("Upload Code to GitHub");
    console.log("======================================");

    // 6. git pull
    console.log("git pull");
    console.log("Download Latest Code");
    console.log("======================================");

    // 7. git clone
    console.log("git clone URL");
    console.log("Copy Project from GitHub");
    console.log("======================================");

  }

}