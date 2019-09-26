import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
    (item1 : any, item2 : any) : number;
}

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    private getComparer(attrName : string ) : Comparer{
        return function(p1 : any, p2 : any) : number {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] > p2[attrName]) return 1;
            return 0;
        }
    }
    transform(list : any[], attrName : string, isDesc : boolean = false) : any[] {
        //console.log('sort transform invoked');
        if (!list || !list.length || !attrName) return list;
        let comparer = this.getComparer(attrName);
        if (isDesc)
            comparer = this.getDescendingComparer(comparer);
        return list.sort(comparer);
    }
    getDescendingComparer(comparer: Comparer): Comparer {
        return function(p1 : any, p2 : any) : number {
            return comparer(p1, p2) * -1;
        }
    }
}