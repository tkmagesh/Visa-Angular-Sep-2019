import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugsList : Bug[] = [
    {name : 'Server communication failure', isClosed : false},
    {name : 'User actions not recognized', isClosed : true}
  ];

  /*
  bugOperations : BugOperationsService ;

  constructor(_bugOperations : BugOperationsService) {
    this.bugOperations = _bugOperations;
   }
  */

  constructor(private bugOperations : BugOperationsService){
    
  }
  ngOnInit() {
  }

  onAddNewClick(newBugName : string){
    const newBug : Bug = this.bugOperations.createNew(newBugName);
    this.bugsList.push(newBug);
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle);
  }

  onRemoveClosedClick(){
    this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
  }

  getClosedCount(){
    return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0)
  }
}
