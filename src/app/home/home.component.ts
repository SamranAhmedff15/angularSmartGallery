import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean;
  mode: string;
  menubutton = true;
  @ViewChild('matDrawer', { static: false }) matDrawer: MatDrawer;
  constructor(private router: Router, private _snackBar: MatSnackBar) { 
    
  }
  products : number[]
  ngOnInit() {
    if(localStorage.getItem("id") == null){
      this.logout();
    }
     this.products = [1,2,3,4,5]
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
