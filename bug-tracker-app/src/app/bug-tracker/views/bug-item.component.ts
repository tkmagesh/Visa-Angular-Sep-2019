import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
    selector : 'app-bug-item',
    template : `
        <li>
            <span 
                class="bugname"
                (click)="onBugNameClick(bug)"
                [ngClass]="{closed : bug.isClosed}"
            >
                {{bug.name | trimText:40}}
            </span>
            <div class="datetime">{{bug.createdAt}}</div>
        </li>
    `,
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugItemComponent{
    @Input('data')
    bug : Bug;

    @Output()
    bugEdited : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService){

    }

    onBugNameClick(bugToToggle : Bug){
        let toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugEdited.emit(toggledBug);    
    }

}