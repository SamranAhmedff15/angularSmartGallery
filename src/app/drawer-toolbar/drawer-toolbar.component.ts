import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer-toolbar',
  templateUrl: './drawer-toolbar.component.html',
  styleUrls: ['./drawer-toolbar.component.scss']
})
export class DrawerToolbarComponent implements OnInit {

  opened: boolean;
  mode: string;
  menubutton = true;
  @ViewChild('matDrawer', { static: false }) matDrawer: MatDrawer;
  constructor(private router: Router, private _snackBar: MatSnackBar) { 
    
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
