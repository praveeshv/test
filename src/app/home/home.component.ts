import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:any='';
  userDetails: any;
  constructor(private user:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  findUser(){
    console.log(this.name);
    
    this.user.getUser(this.name).subscribe(res=>{
      console.log(res);
      console.log(res.length);
      
      if(res){
        this.userDetails=res;
        
      }
      else{
        this.userDetails=[];
        alert("No Data")
      }
     
    })
       
  }
  logOut(){
    this.router.navigate(["./login"]);
  }

}
