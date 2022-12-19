import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];

  constructor() {

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

  }

  getUsers(): User[] {
    return this.users;
  }
}
