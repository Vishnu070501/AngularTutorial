import { Component } from '@angular/core';
import { LoginserService } from '../loginser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any=" ";
  password:any=" ";
  returnUrl:any=""
  constructor(private loginner :LoginserService,private router:Router,private url:ActivatedRoute){//activated route gives url,router helps navigate
    url.queryParams.subscribe(data=>{
      this.returnUrl=data['retUrl'];
    })

  }//activated route provides the current url ,router allows us to navigate
loginUser() {
  this.loginner.logginginUser(" "," ");
  console.log(this.returnUrl);
  if(this.returnUrl!=null){
    //if there is a return url just go to that page
    this.router.navigate(["/"+this.returnUrl]);
  }
}

}
