import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.scss']
})
export class DatatypesComponent implements OnInit {

  //primitive number, string and boolean types and the non-primitive Number, String, Boolean, Object

  firtname: string;
  age: number;
  address: any;
  isMarried: boolean;

  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean]
  unusable: void;
  u: undefined;
  n: null;

  constructor() {
    this.firtname = "Chamara";
    this.age = 30;
    this.isMarried = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['Hello', 'World'];
    this.mixedArray = [true, undefined, 'hello'];
    this.myTuple = ['hello', 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

  }

  ngOnInit(): void {
  }

  addNumber(num1: number,num2: number): number {
    return num1 + num2;
  }

}
