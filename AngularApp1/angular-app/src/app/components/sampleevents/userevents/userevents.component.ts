import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';

@Component({
  selector: 'app-userevents',
  templateUrl: './userevents.component.html',
  styleUrls: ['./userevents.component.scss']
})
export class UsereventsComponent implements OnInit {

  users: User[];
  showExtended: boolean;

  constructor() {

    this.users = [
        {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        address: {
          street: '1 Street',
          city: 'Boston',
          state: 'LA'
        }
      },
      {
        firstName: "Kevin",
        lastName: "Peter",
        age: 31,
        address: {
          street: '2 Street',
          city: 'Miami',
          state: 'NY'
        }
      },
      {
        firstName: "Tenz",
        lastName: "Tyson",
        age: 32,
        address: {
          street: '3 Street',
          city: 'Chicago',
          state: 'CH'
        }
      }
    ];
    this.showExtended = true;
    this.addUser(      {
      firstName: "Cryo",
      lastName: "100T",
      age: 32
    });
    
  }

  ngOnInit(): void {
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
