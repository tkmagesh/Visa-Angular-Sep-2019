import { Component, Input } from '@angular/core';
import { Bug } from '../models/Bug';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector : 'app-bug-stats',
    template : `
        <h3>{{getCurrentTime()}}</h3>
        <section class="stats">
            <span class="closed">{{bugsList | closedCount}}</span>
            <span> / </span>
            <span>{{bugsList.length}}</span>
        </section>
    `,
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

    @Input('bugs')
    bugsList : Bug[] = [];

    getCurrentTime(){
        return new Date();
    }

}