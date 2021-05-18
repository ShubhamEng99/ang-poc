import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
register=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  address:new FormControl(''),
  id:new FormControl(''),
  password:new FormControl(''),
  Cpassword:new FormControl(''),

 })
incorrect=false;
public pathlen=1;
public obj:any;
  constructor(private router:Router,
    private service:AuthService) { }

ngOnInit(): void {}
img=null;
file(event){
  this.img=<File>event.target.files[0].name;
  console.log(this.img);
}

addformdata(){
  this.register.value.src="assets/"+`${this.img}`;
  this.register.value.block=false;
  this.register.value.friends=[];
  this.register.value.requests=[];
  this.service.send.next(this.register.value);
  if(this.register.value.password==this.register.value.Cpassword){ 
  this.service.authuser(this.register.value).subscribe(data=>{
    this.incorrect=false;
    this.router.navigateByUrl('userlogin');
  })
 }
else
{
  this.incorrect=true;
}
}
userlogin(){
this.router.navigateByUrl('userlogin');
}
adminlogin(){
  this.router.navigateByUrl('adminlogin');
}
}
