import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
public userdata:any;
public userlen=false;
public isblocked=false;
  constructor(private service:AuthService,
    ) { }
 
  ngOnInit(): void {
    this.getusers();
  }
getusers(){
  this.service.getuser().subscribe(data=>{
    this.userdata=data;
    if(this.userdata.length!=0){ 
    this.userlen=true;
    }
  })
}
block(index){
 
this.userdata[index].block=true;
this.service.updateuser(this.userdata[index].id,this.userdata[index]).subscribe(data=>{
  console.log(data);
  
});

}
Unblock(index){
this.userdata[index].block=false;
this.service.updateuser(this.userdata[index].id,this.userdata[index]).subscribe(data=>{
  console.log(data);
});
}

}
