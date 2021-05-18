import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
userurl="http://localhost:3000/users";
adminurl="http://localhost:3000/admin"
constructor(private http:HttpClient) { }
public send=new BehaviorSubject({})
public collect=<any>this.send.asObservable();

authuser(data){
  return this.http.post(this.userurl,data);
}
getuser(){
  return this.http.get(this.userurl);
}
getadmindata(){
return this.http.get(this.adminurl);
}
updateuser(id,data){
  return this.http.put(`${this.userurl}`+`/${id}`,data);
}
}
