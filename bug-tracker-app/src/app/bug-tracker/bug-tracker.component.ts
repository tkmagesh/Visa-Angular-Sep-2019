import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugsList = [
    {name : 'Server communication failure', isClosed : false},
    {name : 'User actions not recognized', isClosed : true}
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddNewClick(newBugName : string){
    const newBug = { name : newBugName, isClosed : false};
    this.bugsList.push(newBug);
  }

  onBugNameClick(bugToToggle){
    bugToToggle.isClosed = !bugToToggle.isClosed;
  }

  onRemoveClosedClick(){
    this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
  }

  getClosedCount(){
    return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0)
  }
}
