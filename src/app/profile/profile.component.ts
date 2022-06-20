import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  opened: boolean;
  mode: string;
  menubutton = true;
  registerForm: FormGroup;
  submitted = false;
  @ViewChild('matDrawer', { static: false }) matDrawer: MatDrawer;
  constructor(private router: Router, private _snackBar: MatSnackBar, private formBuilder: FormBuilder,private clientService: ClientServiceService) { 
    
    
  }
  products : number[];
  user : Client = new Client();
  ngOnInit() {
    this.user.prenomClient = localStorage.getItem("fname");
    this.user.nomClient = localStorage.getItem("lname");
    this.user.dateNaissanceClient = localStorage.getItem("bd");
    this.user.telClient = localStorage.getItem("phone");
    this.products = [1,2,3,4,5]
    if(localStorage.getItem("id") == null){
      this.logout();
      return;
    }
    this.registerForm = this.formBuilder.group({
      firstname: [this.user.prenomClient, Validators.required],
      lastname: [this.user.nomClient, Validators.required],
      birthday: [this.user.dateNaissanceClient, Validators.required],
      phone: [this.user.telClient, Validators.required],
    });
    console.log(this.registerForm.status)
    
  }

  get data() { return this.registerForm.controls; }


  onSubmit() {

    if (this.registerForm.invalid) {
      return;
    } else {
      var formData: any = new FormData();
      formData.append('id', localStorage.getItem("id").toString());
      formData.append('prenomClient', this.data.firstname.value);
      formData.append('nomClient', this.data.lastname.value);
      formData.append('mailClient', localStorage.getItem("email"));
      formData.append('passClient', localStorage.getItem("password"));
      formData.append('telClient', this.data.phone.value);
      formData.append('dateNaissanceClient', this.data.birthday.value);
      formData.append('typeClient', localStorage.getItem("type"));

      var object = {};
      formData.forEach((value, key) => object[key] = value);
      var json = JSON.stringify(object);

      this.clientService.update(json).subscribe({
        next: (response) => {
          this._snackBar.open('Updated Successfully', 'Success', {
            duration: 2000,
          });
          localStorage.setItem("id",response.id.toString());
          localStorage.setItem("bd",response.dateNaissanceClient);
          localStorage.setItem("email",response.mailClient);
          localStorage.setItem("lname",response.nomClient);
          localStorage.setItem("fname",response.prenomClient);
          localStorage.setItem("type",response.typeClient);
          localStorage.setItem("phone",response.telClient);
          localStorage.setItem("password",response.passClient);
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          this._snackBar.open('Error while updating, try again later', 'Fail', {
            duration: 2000,
          });
          console.log(error)
        }
      });
    }
  }



  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
