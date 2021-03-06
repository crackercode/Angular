import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    age: undefined
  }

  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;

  constructor() {
    this.users = [];
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.loaded = true;
      this.showExtended = true;
    }, 1000);

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '111',
          city: 'Kandy',
          state: 'WP'
        },
        image: 'https://picsum.photos/id/237/200/300'
      },
      {
        firstName: 'Kevin',
        lastName: 'John',
        age: 31,
        address: {
          street: '222',
          city: 'Col',
          state: 'WP'
        },
        image: 'https://picsum.photos/seed/picsum/200/300'
      },
      {
        firstName: 'Peter',
        lastName: 'Kent',
        age: 32,
        address: {
          street: '333',
          city: 'Kandy',
          state: 'WP'
        }, image: 'https://picsum.photos/200/300?grayscale'
      },
      {
        firstName: 'Tenz',
        lastName: 'K',
        age: 33,
      }
    ]
  };

  addUser() {
    console.log("addUser");
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: undefined
    }
  }

  onSubmit(e: any) {
    e.preventDefault();
    console.log(this.user.firstName);
  }

}
