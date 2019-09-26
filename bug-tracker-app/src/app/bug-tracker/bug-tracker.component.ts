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

  

  bugsList : Bug[] = [];

  constructor(private bugOperations : BugOperationsService){

  }
  ngOnInit() {
    this.bugsList = this.bugOperations.getAll();
  }

  

  onBugEdited(toggledBug : Bug){
    this.bugsList = this.bugsList.map(bug => bug.name === toggledBug.name ? toggledBug : bug);
  }

  onNewBugAdded(newBug : Bug){
    this.bugsList = [...this.bugsList, newBug];
  }

  onRemoveClosedClick(){
    this.bugsList
      .filter(bug => bug.isClosed)
      .forEach(closedBug => {
        this.bugOperations.remove(closedBug);
        this.bugsList.splice(this.bugsList.indexOf(closedBug), 1);
      });

  }

 
}
