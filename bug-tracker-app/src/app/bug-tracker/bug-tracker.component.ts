import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugSortBy : string = 'name';
  bugSortDesc : boolean = false;

  newBugName : string = '';

  bugsList : Bug[] = [
    {name : 'Server communication failure', isClosed : false},
    {name : 'User actions not recognized', isClosed : true},
    {name : 'Application not responding', isClosed : true},
    {name : 'Data integrity checks failed', isClosed : false},
  ];

  constructor(private bugOperations : BugOperationsService){

  }
  ngOnInit() {
  }

  onAddNewClick(){
    const newBug : Bug = this.bugOperations.createNew(this.newBugName);
    this.bugsList = [...this.bugsList, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
    let toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugsList = this.bugsList.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  onRemoveClosedClick(){
    this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
  }

 
}
