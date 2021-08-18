import { Component } from '@angular/core';
import {FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularlecture1';
   /* Reactive form */

   loginForm :FormGroup
   
   constructor( private formBuilder: FormBuilder)
   {
     this.loginForm = this.formBuilder.group({ email:new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')]),
     password:new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z0-9]{8}$')])
   })

  }
  

   onSubmit()
   {
     console.log(this.loginForm.value);
     
   }

    control(email:string)
    {
      return this.loginForm.get(email)
    }

    check(password:string)
    {
      return this.loginForm.get(password)
    }

    /* template driven form */

    onSub(data:any)
    {
      console.log(data);
    }




}
