import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/class/registration';
import { User } from 'src/class/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
reg=new Registration();
  regDetails: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Register(){
    const details={
      user:this.reg.Name,
      email:this.reg.Email,
      mob:this.reg.Mobile
    }
   
localStorage.setItem('userDetails',JSON.stringify(details) )
this.router.navigate(['../'])
  }
}
