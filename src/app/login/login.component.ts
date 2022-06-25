import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientServiceService } from '../client-service.service';
import { Client } from '../client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private clientService: ClientServiceService) {
   }

  
  ngOnInit() {
    var dataLogin : Client = new Client();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    if(localStorage.length > 0) {
      if(localStorage.getItem("id") != null && localStorage.getItem("email") != null && localStorage.getItem("password") != null) {
        dataLogin.mailClient = localStorage.getItem("email");
        dataLogin.passClient = localStorage.getItem("password");
        this.clientService.login(dataLogin).subscribe({
          next: (response) => { 
            this.router.navigate(['/home']);
          },
          error: (error) => {
            console.log(error)
          }
      });
      }
    }
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm.invalid)
    if (this.loginForm.invalid) {
      this._snackBar.open('Please fill all the fields', 'Fail', {
        duration: 2000,
      });
      return;
    } else {
      var formData: any = new FormData();
      formData.append('mailClient', this.data.email.value);
      formData.append('passClient', this.data.password.value);
      var object = {};
      formData.forEach((value, key) => object[key] = value);
      var json = JSON.stringify(object);
    }
    this.clientService.login(json).subscribe({
      next: (response) => {
        console.log(response);
        if(response.id == null){
          this._snackBar.open('Wrong email or password', 'Fail', {
            duration: 2000,
          });
        }
        else {
          this._snackBar.open('Welcome ' + response.nomClient + " " + response.prenomClient, '', {
            duration: 2000,
          });
          localStorage.setItem("id",response.id.toString());
          localStorage.setItem("bd",response.dateNaissanceClient.toString());
          localStorage.setItem("email",response.mailClient.toString());
          localStorage.setItem("lname",response.nomClient.toString());
          localStorage.setItem("fname",response.prenomClient.toString());
          localStorage.setItem("type",response.typeClient.toString());
          localStorage.setItem("phone",response.telClient.toString());
          localStorage.setItem("password",response.passClient.toString());
          localStorage.setItem("cart","0");
          this.router.navigate(['/home']);
        }
        
      },
      error: (error) => {
        this._snackBar.open('Wrong email or password', 'Fail', {
          duration: 2000,
        });
        console.log(error)
      }
    });
  }
}
