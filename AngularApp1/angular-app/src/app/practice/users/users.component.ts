import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/User'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  selectedUser: User = {
    firstName: '',
    lastName: '',
    age: undefined
  }

  users: User[];
  // showExtended: boolean = false;
  showAddUser: boolean = false;
  loaded: boolean = false;
  classBinding = {};
  ngSytleBind = {};
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) {
    this.users = [];
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.loaded = true;
      // this.showExtended = true;
    }, 1000);
    this.bindToClass();
    this.bindNgStyle();

    this.users = this.dataService.getUsers();
    // this.users = [
    //   {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 30,
    //     address: {
    //       street: '111',
    //       city: 'Kandy',
    //       state: 'WP'
    //     },
    //     image: 'https://picsum.photos/id/237/200/300',
    //     isActive: true,
    //     balance: 100,
    //     registered: new Date('01/02/2018 08:30:00'),
    //     hide: true
    //   },
    //   {
    //     firstName: 'Kevin',
    //     lastName: 'John',
    //     age: 31,
    //     address: {
    //       street: '222',
    //       city: 'Col',
    //       state: 'WP'
    //     },
    //     image: 'https://picsum.photos/seed/picsum/200/300',
    //     isActive: false,
    //     balance: 200,
    //     registered: new Date('01/02/2020 01:30:00'),
    //     hide: true
    //   },
    //   {
    //     firstName: 'Peter',
    //     lastName: 'Kent',
    //     age: 32,
    //     address: {
    //       street: '333',
    //       city: 'Kandy',
    //       state: 'WP'
    //     }, image: 'https://picsum.photos/200/300?grayscale',
    //     isActive: true
    //   },
    //   {
    //     firstName: 'Tenz',
    //     lastName: 'K',
    //     age: 33,
    //     isActive: true,
    //     hide: true
    //   }
    // ]
  };

  //Noramal Button Click Function
  // addUser() {
  //   console.log("addUser");
  //   this.selectedUser.isActive = true;
  //   this.selectedUser.registered = new Date();
  //   // this.users.unshift(this.user);
  //   this.selectedUser = {
  //     firstName: '',
  //     lastName: '',
  //     age: undefined
  //   }
  //   this.dataService.addUsers(this.selectedUser);
  // }

  showAddUserForm(e: Event) {
    console.log(e);
    this.showAddUser = !this.showAddUser;
    this.bindToClass();
  }

  //Form Submission
  // onSubmit({ value, valid }: { value: User, valid: boolean }) {
  onSubmit({ value }: { value: User }) {
    if (!this.form.valid) {
      console.log("Form is not valid");
    } else {
      
      value.isActive = true;
      value.registered = new Date();
      value.hide = false;
      // this.users.unshift(value);
      this.dataService.addUsers(value);
      this.form.resetForm();

      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.controls[key];
        control.markAsPristine();
        control.markAsUntouched();
        control.setErrors(null);
    });
      // this.form.markAsUntouched();
      // this.form.markAsPristine();
      // this.form.setErrors(null);
      // this.form.resetValidation();
      debugger;
      console.log(this.dataService.getUsers())
    }
  }

  // onSubmit(e: any) {
  //   e.preventDefault();
  //   console.log(this.selectedUser.firstName);
  // }

  bindToClass() {
    this.classBinding = {
      'btn-success': !this.showAddUser
    }
  }

  bindNgStyle() {
    this.ngSytleBind = {
      'padding-top': '50px',
      'font-size': '40px'
    }
  }

}
