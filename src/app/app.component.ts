import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'fizz-buzz';
  public fizzBuzzArr: string[] = [];
  
  constructor() {}
  
  ngOnInit(): void {
    for (let i: number = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        this.fizzBuzzArr.push("FizzBuzz");
      } 
      else if (i % 3 == 0) {
        this.fizzBuzzArr.push("Fizz");
      } 
      else if (i % 5 == 0) {
        this.fizzBuzzArr.push("Buzz");
      } else {
        this.fizzBuzzArr.push(i.toString());
      }
    }
  }
}
