import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=new User();
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  LoginCheck(){
    const log = JSON.parse(localStorage.getItem('userDetails'));
    if(localStorage.getItem('userDetails')){
      console.log(log);
      
      if(log.user===this.user.UserName && log.mob===this.user.Password){
        this.router.navigate(["user-home"]);
      }
      else{
        alert("user not exist");
      }
      
    }
    else{
      alert("Invalid User")
    }
    
  }


}
