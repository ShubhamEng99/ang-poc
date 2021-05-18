import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_k7B7C8jEXM3Yd0QDhEuBE");

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
public email:any;
public password:any;
public credentials:any;
verify=false;
public mail:any;
public otp:any;
public name:any;
  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
getuserdata(){
  this.service.getuser().subscribe(data=>{
    this.credentials=data;
    let n=Math.random();
    for(let i=0;i<this.credentials.length;i++){
      if(this.credentials[i].email==this.email && this.credentials[i].password==this.password && this.credentials[i].block==false){
        this.service.send.next(this.credentials[i]);
        this.mail=this.credentials[i].email;
        this.name=this.credentials[i].name;
        this.otp=Math.floor((Math.random() * 100) + 1);;
        localStorage.setItem("otp",JSON.stringify(this.otp));
        this.verify=true
       }
    }
 
  })
}
public sendEmail(e: Event) {
  e.preventDefault();
  emailjs.sendForm('service_fsnvyzn', 'template_fv8bsz4', e.target as HTMLFormElement, 'user_k7B7C8jEXM3Yd0QDhEuBE')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    this.router.navigateByUrl('verify');
}

}
