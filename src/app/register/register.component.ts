import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  postFunc: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserserviceService,
    private formBuilder: FormBuilder
  ) {}

  @Input() message: string = 'hi there';
  @Output() newItemEvent = new EventEmitter<string>();
  userId: any;
  author: any = [];
  registerform!: FormGroup;
  submitted: boolean = false;

  get f() {
    return this.registerform.controls;
  }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      age: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });

    // this.userId = this.router.snapshot.paramMap.get('_id');
    console.log(this.userId);
    if (this.userId) {
      this.postFunc.getIDFunc(this.userId).subscribe((res: any) => {
        if (res) {
          this.userId = res;
          this.registerform.patchValue({
            name: this.author.name,
            email: this.author.email,
            password: this.author.password,
            age: this.author.age,
            role: this.author.role,
          });
        }
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerform.valid) {
      this.author = this.registerform.value;
      this.userService
        .postFunc(
          this.author.name,
          this.author.email,
          this.author.password,
          this.author.age,
          this.author.role
        )
        .subscribe((res: any) => {
          console.log(res);
        });
      this.author = this.registerform.value;
      this.router.navigate(['home']);
    } else {
      console.log('error');
    }
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
