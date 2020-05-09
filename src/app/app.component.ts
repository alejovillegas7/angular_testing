import { Component } from '@angular/core';
import { RomanNumeralsService } from './roman-numerals.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: 'this is a title';
  numberRomain =new FormControl('');

  number: number;

  constructor(private service: RomanNumeralsService){
  }

  convert(number){
    this.numberRomain.setValue(this.service.convert(number));
  }
}
