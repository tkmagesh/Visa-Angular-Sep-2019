import { Component, OnInit } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  model : CalculatorModel = new CalculatorModel();

  constructor() { }

  ngOnInit() {
  }

}
