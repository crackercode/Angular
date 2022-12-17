import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        street: '2 Street',
        city: 'Boston',
        state: 'LA'
      }
    }
  }

  ngOnInit(): void {
  }

}
