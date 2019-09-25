import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
    selector : 'app-calculator-2',
    templateUrl : 'calculator2.component.html'
})
export class Calculator2Component{

    model : CalculatorModel = new CalculatorModel();

    operator : string = 'add';

    onCalculateClick(){
        switch (this.operator) {
            case 'add':
                this.model.add();
                break;
            case 'subtract':
                this.model.subtract();
                break;
            case 'multiply':
                this.model.multiply();
                break;
            case 'divide':
                this.model.divide();
                break;
            default:
                break;
        }
    }

}