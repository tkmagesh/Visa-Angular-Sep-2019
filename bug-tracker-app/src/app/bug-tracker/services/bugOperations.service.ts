import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService{
    constructor(private bugStorage : BugStorageService){

    }
    createNew(newBugName : string) : Bug{
        let newBug : Bug = { 
            id : 0, 
            name : newBugName, 
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugStorage.save(newBug);
    }

    toggle(bugToToggle : Bug) : Bug {
        let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugStorage.save(toggledBug);
    }

    getAll(){
        return this.bugStorage.getAll();
    }

    remove(bugData : Bug){
        return this.bugStorage.remove(bugData);
    }

}