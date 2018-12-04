import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-register-tutor',
  templateUrl: './register-tutor.component.html',
  styleUrls: ['./register-tutor.component.scss']
})
export class RegisterTutorComponent implements OnInit {

  
  form;
  has: boolean;
  regErr: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.form = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      cpassword: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  get fname(){
    return this.form.get('fname');
  }

  get lname(){
    return this.form.get('lname');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get cpassword(){
    return this.form.get('cpassword');
  }

  onSubmit(form){
    let user = form.value;
    user['role'] = 'tutor';
    form.reset();

    this.registerService.registerUser(user).
      subscribe(response => {
        let res = response.json();
        if(res.success){
          localStorage.setItem('token', res.token);
          this.router.navigate(['tutor']);
        }else{
          if(res.has){
            this.has = true;
          }else{
            this.regErr = true;
            alert("Register error")
          }
        }
      }, err=>{
        alert("Register error");
      });    
    
  }  

}
