import { Bug } from '../models/Bug';

export class BugStorageService{
    private storage = window.localStorage;
    private currentBugId = 0;

    public getAll(){
        const result = [];
        for (let index = 0; index < this.storage.length; index++) {
            const key = this.storage.key(index),
                rawData = this.storage.getItem(key),
                bug = JSON.parse(rawData);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
            result.push(bug);
        }
        return result;
    }

    public save(bugData : Bug) : Bug {
        if (bugData.id === 0){
            bugData.id = ++this.currentBugId;
        }
        this.storage.setItem(bugData.id.toString(), JSON.stringify(bugData));
        return bugData;
    }

    public remove(bugData : Bug){
        this.storage.removeItem(bugData.id.toString());
    }
}