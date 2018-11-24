import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  form;
  has: boolean = false;
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
    user['role'] = 'student';
    form.reset();

    this.registerService.registerUser(user).
      subscribe(response => {
        let res = response.json();
        if(res.success){
          localStorage.setItem('token', res.token);
          this.router.navigate(['student']);
        }else{
          if(res.has){
            this.has = true;
          }else{
            this.regErr = true;
          }
        }
      });    
  }  

  googleReg(){
    this.registerService.googleRegister('student').
      subscribe(response=>{
        let res = response.json();
      });
  }

  facebookRegister(){
    this.registerService.facebokRegister('tutor')
      .subscribe(res => {
        console.log(res.json());
      })
    console.log("facebook log");
  }

}
