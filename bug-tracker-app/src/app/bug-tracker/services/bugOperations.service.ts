import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';
import { BugApiService } from './bugApi.service';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{
    /*
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
    */

    constructor(private bugApi : BugApiService){
    
    }

    createNew(newBugName : string) : Observable<Bug>{
        let newBugData : Bug = { 
            id : 0, 
            name : newBugName, 
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugApi.save(toggledBug);
    }


    getAll() : Observable<Bug[]>{
        return this.bugApi.getAll();
    }

    remove(bugData : Bug) : Observable<any>{
        return this.bugApi.remove(bugData);
    }


}