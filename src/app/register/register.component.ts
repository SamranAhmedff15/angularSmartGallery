import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
    console.log(this.registerForm.status)
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.data)
    console.log(this.registerForm.status)
    if (this.registerForm.invalid) {
      return;
    } else {
      
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("email", this.data.email.value);
      localStorage.setItem("password", this.data.password.value);
      localStorage.setItem("phone", this.data.phone.value);
      localStorage.setItem("birthday", this.data.birthday.value);
      localStorage.setItem("userType", this.data.userType.value);
      this._snackBar.open('Register Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }
}
