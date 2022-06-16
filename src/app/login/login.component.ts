import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {    
    console.log(this.loginForm.invalid)
    if (this.loginForm.invalid) {
      return;
    } else if (this.data.email.value == localStorage.getItem("email") && this.data.password.value == localStorage.getItem("password")) {
      this.router.navigate(['/home']);
    } else {
      this.submitted = true;      
    }
  }
}
