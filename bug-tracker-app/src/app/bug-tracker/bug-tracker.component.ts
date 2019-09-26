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

  onBugNameClick(bugToToggle : Bug){
    let toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugsList = this.bugsList.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  onNewBugAdded(newBug : Bug){
    this.bugsList = [...this.bugsList, newBug];
  }

  onRemoveClosedClick(){
    this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
  }

 
}
