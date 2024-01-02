import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regimdf',
  templateUrl: './regimdf.component.html',
  styles:  [`
  input.ng-invalid{
    border-left : 5px solid red;
  }
  input.ng-valid{
    border-left : 5px solid green;
  }`]
})
export class RegimdfComponent {
  registry=new FormGroup({//form group class is option 1 to build MDF forms(use formgroup and formcontrol classes together )
    username: new FormControl("Enter Username",[Validators.required,Validators.minLength(3)]),
    password: new FormControl("",[Validators.required]),
    cpassword: new FormControl("",[Validators.required])
  });
  constructor(private fb : FormBuilder){}//form builder is another class that allows us to do the same thing as form grp but shorter

  nreg = this.fb.group({
    username1:["enter the username",[Validators.required,Validators.minLength(3)]],
    password1:["",[Validators.required,Validators.minLength(5)]],
    cpassword1:["",[Validators.required,Validators.minLength(5)]]
  });
}
