import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserserviceService
  ) {}

  message: string = 'hello angular';
  number: number = 10;
  testImg: string =
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  isUsed: boolean = true;
  btnName: String = 'hide';
  showMe: boolean = true;
  author: any;
  _id: any;
  currentMessage = 'This is Mansi';

  messages = ['message1', 'message2', 'sdfvc', 'svd'];

  addItem(newItem: string) {
    this.messages.push(newItem);
  }

  arr = [
    {
      id: 89,
      firstname: 'Mansi',
      lastname: 'dhingra',
      email: 'm@gmail.com',
      password: 'jd98eb',
    },
    {
      id: 8,
      firstname: 'Shruti',
      lastname: 'kumra',
      email: 's@gmail.com',
      password: 'jd9wudhb',
    },
    {
      id: 9,
      firstname: 'Nargisdeep',
      lastname: 'kaur',
      email: 'n@gmail.com',
      password: 'juqyn',
    },
    {
      id: 19,
      firstname: 'Ritika',
      lastname: 'Thakur',
      email: 'r@gmail.com',
      password: 'wrwe',
    },
  ];

  newarr = [];

  ngOnInit(): void {
    this.new();
    this.getData();
  }

  new() {
    console.log('hi');
  }

  btn() {
    this.showMe = !this.showMe;
    this.showMe ? (this.btnName = 'hide') : (this.btnName = 'show');
  }

  xyz() {
    this.router.navigate(['about']);
  }
  saveData(e: any) {
    console.log(this.isUsed ? this.message : this.number);
    console.log('this is called', e);
    if (this.isUsed) {
      console.log('It is used');
    }
  }

  getData() {
    this.userService.getFunc().subscribe((response) => {
      console.log(response);
      this.author = response;
    });
  }

  deletebtn(_id: any) {
    console.log(_id);
    this.userService.deleteFunc(_id).subscribe((response: any) => {
      console.log(response);
      this.author = response;
    });
    this.getData();
  }

  editbtn(_id: any, body: any) {
    this.userService.putFunc(_id, body).subscribe((response: any) => {
      console.log(response);
      this.author = response;
      this.router.navigate(['register/${id}']);
    });
  }
}
