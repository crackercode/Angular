import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //firstName; without type at assign time can act as any type
  firstName: string = "John";
  lastName: string = "Doe"
  age: number = 30;
  address = {
    street: '2 Street',
    city: 'Boston',
    state: 'LA'
  }
  foo: any;
  hasKids: boolean;
  numberArray: number[];
  mixedArray: any[];
  myTuple: [String, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  //Runs automatically when component initilized
  constructor() {
    console.log("Hello User Initialized.");
    this.sayHello();
    // this.firstName = 4;
    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1, 2, 3];
    this.mixedArray = [1, "ASD", true, undefined];
    this.myTuple = ["ASD", 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
  }

  ngOnInit(): void {
    console.log("Hello User ngOnInit.");
  }

  addNumber(num1: number, num2: number): number {
    return num1 + num2;
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`); //'Hello + this.firstName' ES6 new way
  }

  showAge() {
    return `Age : ${this.age}`;
  }

}
