import { Component } from "@angular/core";
import { GreeterService } from './greeter.service';

@Component({
    selector : 'app-greeter',
    template : `
        <h1>Greeter</h1>
        <hr>
        <label for="">User Name :</label>
        <input type="text" (keyup)="userName=$event.target.value">
        <input type="button" value="Greet" (click)="onGreetClick()">
        <div>{{message}}</div>
    `
})
export class GreeterComponent{
    userName : string = '';
    message : string = '';

    constructor(private greeterService : GreeterService){

    }
    onGreetClick(){
        this.message = this.greeterService.greet(this.userName);
    }

}