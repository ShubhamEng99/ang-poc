import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
public email:any;
public password:any;
public credentials:any;
  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
adminverification(){
  this.service.getadmindata().subscribe(data=>{
    this.credentials=data;
    if(this.email==this.credentials.email && this.password==this.credentials.password){
      localStorage.setItem("admin","pass");
      this.router.navigateByUrl('admindashboard');
    }else{
      console.log("incorrect");
    }
  })
}
}
