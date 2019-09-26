import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from '../models/Bug';

@Pipe({
    name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform{
    transform(bugsList : Bug[]) : number {
        return bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}