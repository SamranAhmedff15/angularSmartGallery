import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientServiceService } from '../client-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private clientService: ClientServiceService) { }

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

    if (this.registerForm.invalid) {
      return;
    } else {
      var formData: any = new FormData();
      formData.append('prenomClient', this.data.firstname.value);
      formData.append('nomClient', this.data.lastname.value);
      formData.append('mailClient', this.data.email.value);
      formData.append('passClient', this.data.password.value);
      formData.append('telClient', this.data.phone.value);
      formData.append('dateNaissanceClient', this.data.birthday.value);
      formData.append('typeClient', this.data.userType.value);

      var object = {};
      formData.forEach((value, key) => object[key] = value);
      var json = JSON.stringify(object);

      this.clientService.save(json).subscribe({
        next: (response) => {
          this._snackBar.open('Register Successfully', 'Success', {
            duration: 2000,
          });
          localStorage.setItem("id",response.id.toString());
          localStorage.setItem("bd",response.dateNaissanceClient);
          localStorage.setItem("email",response.mailClient);
          localStorage.setItem("lname",response.nomClient);
          localStorage.setItem("fname",response.prenomClient);
          localStorage.setItem("type",response.typeClient);
          localStorage.setItem("phone",response.telClient);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this._snackBar.open('Email already registred', 'Fail', {
            duration: 2000,
          });
          console.log(error)
        }
      });
    }
  }
}
