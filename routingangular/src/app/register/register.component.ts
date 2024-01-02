import { UsersService } from './../users.service';
import { ICanDeactivate } from './../deactivate.guard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles:  [`
  input.ng-invalid{
    border-left : 5px solid red;
  }
  input.ng-valid{
    border-left : 5px solid green;
  }`]
})
export class RegisterComponent implements ICanDeactivate{
  username:any='';
  password:any='';
  email:any='';

  constructor(private user:UsersService){}
 canexit():boolean{
  if(confirm('You are about to leave registration page click yes to confirm'))
    return true;

  return false;
 }
 submitForm(){
  var body = {
    uname : this.username,
    pword : this.password,
    mail:this.email
  }
  this.user.addUser(body).subscribe(data=>{
    alert("data posted"
    )
  });

 }
}
