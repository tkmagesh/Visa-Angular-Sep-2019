import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { forkJoin } from 'rxjs';

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
    //this.bugsList = this.bugOperations.getAll();
    this.loadBugs();
  }

  

  onBugEdited(toggledBug : Bug){
    this.bugsList = this.bugsList.map(bug => bug.name === toggledBug.name ? toggledBug : bug);
  }

  onNewBugAdded(newBug : Bug){
    this.bugsList = [...this.bugsList, newBug];
  }

  onRemoveClosedClick(){
    /*
    this.bugsList
      .filter(bug => bug.isClosed)
      .forEach(closedBug => {
        this.bugOperations
          .remove(closedBug)
          .subscribe(() => this.bugsList.splice(this.bugsList.indexOf(closedBug), 1))
        ;
      });
    */
    const removeBugObservables = this.bugsList
      .filter(bug => bug.isClosed)
      .map(closedBug => this.bugOperations.remove(closedBug));

    forkJoin(removeBugObservables)
      .subscribe(() => this.loadBugs())
  }
  
  private loadBugs(): void {
    this.bugOperations
        .getAll()
        .subscribe(bugs => this.bugsList = bugs);
  }

 
}
