import { HttpClient } from '@angular/common/http';
import { collectExternalReferences } from '@angular/compiler';
import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private service:AuthService,private http:HttpClient) { }
public currentuser:any;
public alluser:any;
public searched:any;
public searcheduser:any;
public issearched=false;
public friendlist:any;
public reqlist:any;
public sendreq=[];
reqsent=false;
  ngOnInit(): void {
    this.datafromlogin();
    this.getallusers();
  }
  
datafromlogin(){
this.service.collect.subscribe(data=>{
    this.currentuser=data;
    this.friendlist=this.currentuser.friends;
    this.reqlist=this.currentuser.requests;
  });
}
getallusers(){
  this.service.getuser().subscribe(data=>{
    this.alluser=data;
  
  })
}

getsearched(){
  for(let i=0;i<this.alluser.length;i++){
    if(this.searched==this.alluser[i].name || this.searched==this.alluser[i].email){
      this.searcheduser=this.alluser[i];
      console.log(this.searcheduser);
      this.issearched=true;
    }
  }
}
close(){
  this.issearched=false;
  this.reqsent=false;
}
Acceptreq(index){
let acc=this.reqlist[index];
this.reqlist.splice(index,1);
this.friendlist.push(acc);
this.currentuser.requests=this.reqlist;
this.service.updateuser(this.currentuser.id,this.currentuser).subscribe(data=>{
})
for(let i=0;i<this.alluser.length;i++){
  if(this.alluser[i].name==acc){
    this.alluser[i].friends.push(this.currentuser.name);
    this.service.updateuser(this.alluser[i].id,this.alluser[i]).subscribe(data=>{
    })
  }
}
}
reject(index){
  this.reqlist.splice(index,1);
}

add(){
  this.sendreq.push(this.currentuser.name);
  this.searcheduser.requests=this.sendreq;
  this.reqsent=true;
  this.service.updateuser(this.searcheduser.id,this.searcheduser).subscribe(data=>{
});
}
}
