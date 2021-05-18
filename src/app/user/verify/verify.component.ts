import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
public otp:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
}
Validate(){
  if(this.otp==JSON.parse(localStorage.getItem("otp"))){
    localStorage.setItem("user","pass");
    this.router.navigateByUrl('userdashboard');
  }else{
    this.router.navigateByUrl('userlogin');
  }
}
}