import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  env: string = environment.url;
  constructor(private http: HttpClient) {}

  getFunc() {
    return this.http.get(this.env + `/newusers`);
  }

  postFunc(name: any, email: any, password: any, age: any, role: any) {
    return this.http.post(this.env + `/addNewUser`, {
      name,
      email,
      password,
      age,
      role,
    });
  }

  deleteFunc(_id: any) {
    return this.http.delete(`http://localhost:8081/deleteUser/${_id}`);
  }

  putFunc(_id: any, body: any) {
    return this.http.put(`http://localhost:8081/updateUser/${_id}`, body);
  }

  getIDFunc(_id: any) {
    return this.http.get(`http://localhost:8081/newusersID/${_id}`);
  }
}
